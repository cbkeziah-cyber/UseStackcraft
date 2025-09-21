import { NextResponse } from "next/server";
// Ensure Node.js runtime (required for file access)
export const runtime = "nodejs";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Allowed sizes (px)
const ALLOWED_SIZES = new Set([64, 128, 256, 512]);

type Variant = "light" | "dark" | "mono";

function getColor(variant: Variant): string {
  switch (variant) {
    case "dark":
      return "#FFFFFF"; // white stroke for dark backgrounds
    case "mono":
    case "light":
    default:
      return "#0B0B0B"; // near-black stroke for light backgrounds
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sizeParam = searchParams.get("size");
  const variantParam = (searchParams.get("variant") || "light").toLowerCase() as Variant;

  const size = (() => {
    const n = Number(sizeParam);
    return Number.isFinite(n) && ALLOWED_SIZES.has(n as any) ? n : 256;
  })();

  const variant: Variant = ["light", "dark", "mono"].includes(variantParam)
    ? variantParam
    : "light";

  try {
    const svgPath = path.join(process.cwd(), "public", "logo.svg");
    let svg = await readFile(svgPath, "utf8");

    // Inject color via inline style since the SVG uses stroke="currentColor"
    svg = svg.replace(/<svg\s+/, `<svg style="color: ${getColor(variant)};" `);

    // Convert SVG -> PNG using sharp (no WASM/native addon bundling issues)
    const pngBuffer = await sharp(Buffer.from(svg), { density: 300 })
      .resize({ width: size })
      .png()
      .toBuffer();

    return new NextResponse(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        // Cache for 7 days, allow stale while revalidate
        "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
      },
    });
  } catch (e: any) {
    console.error("/api/logo generation error:", e);
    return NextResponse.json(
      { error: "Failed to generate logo image", detail: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}