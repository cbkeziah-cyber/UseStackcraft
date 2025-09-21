import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { db } from "@/db";
import { files } from "@/db/schema";

// Small helper to generate PNGs from the public/logo.svg used elsewhere
async function generateLogoPng(size: number, variant: "light" | "dark" | "mono") {
  const svgPath = path.join(process.cwd(), "public", "logo.svg");
  let svg = await readFile(svgPath, "utf8");
  const color = variant === "dark" ? "#FFFFFF" : "#0B0B0B";
  svg = svg.replace(/<svg\s+/, `<svg style="color: ${color};" `);
  const pngBuffer = await sharp(Buffer.from(svg), { density: 300 })
    .resize({ width: size })
    .png()
    .toBuffer();
  return pngBuffer;
}

function getToken(): string | undefined {
  return process.env.NEXT_PUBLIC_UPLOAD_BEARER_TOKEN || process.env.FILE_UPLOAD_TOKEN;
}

export async function POST(req: NextRequest) {
  try {
    const token = getToken();
    if (!token) {
      return NextResponse.json({ error: "Seeding disabled", code: "UPLOAD_DISABLED" }, { status: 403 });
    }

    // Allow either Authorization: Bearer <token> or ?token=<token> for convenience
    const authHeader = req.headers.get("Authorization");
    const urlToken = new URL(req.url).searchParams.get("token");
    const provided = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : urlToken || "";
    if (provided !== token) {
      return NextResponse.json({ error: "Invalid token", code: "INVALID_TOKEN" }, { status: 401 });
    }

    // Define a tiny seed set
    const variants: Array<{ size: number; variant: "light" | "dark" | "mono"; name: string }> = [
      { size: 256, variant: "light", name: "logo-256-light.png" },
      { size: 256, variant: "dark", name: "logo-256-dark.png" },
      { size: 512, variant: "light", name: "logo-512-light.png" },
      { size: 512, variant: "mono", name: "logo-512-mono.png" },
    ];

    const createdAt = new Date().toISOString();

    const inserted: any[] = [];
    for (const v of variants) {
      const data = await generateLogoPng(v.size, v.variant);
      const res = await db
        .insert(files)
        .values({
          name: v.name,
          mimeType: "image/png",
          sizeBytes: data.length,
          data,
          createdAt,
        })
        .returning({ id: files.id, name: files.name, mimeType: files.mimeType, sizeBytes: files.sizeBytes, createdAt: files.createdAt });
      inserted.push(res[0]);
    }

    return NextResponse.json({ inserted, count: inserted.length });
  } catch (e: any) {
    console.error("/api/files/seed error:", e);
    return NextResponse.json({ error: "Internal server error", detail: e?.message }, { status: 500 });
  }
}