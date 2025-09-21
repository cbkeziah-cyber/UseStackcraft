import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Products</h1>
      <p className="mt-2 text-muted-foreground">
        Curated picks for laptops, monitors, webcams, microphones, and external SSDs. Some links are affiliate links; we may earn a commission at no extra cost to you.
      </p>

      {/* Product referrals: Laptops */}
      <section id="laptop-referrals" className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Product referrals: Laptops</h2>
          <span className="text-xs text-muted-foreground">Affiliate links • Amazon</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Curated picks for common business and creator workflows. Links below go to Amazon and may be affiliate links; we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* MacBook Air */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">MacBook Air (M2/M3)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Lightweight, long battery, great for writers, marketers, and travel.</p>
            <div className="mt-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground/90">Reviews</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Outstanding battery life and silent, fanless design; top-tier trackpad and keyboard.</li>
                <li>Limited ports and not ideal for sustained GPU-heavy work (long video renders).</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">What sets it apart</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Best-in-class portability + battery for everyday productivity.</li>
                <li>Quiet, cool performance with seamless macOS ecosystem.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">Target use cases</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Writing, email, docs/spreadsheets, meetings.</li>
                <li>Travel-friendly creator workflows (light photo/video edits).</li>
                <li>Students and solo marketers who value battery life.</li>
              </ul>
            </div>
            <a
              href="https://amzn.to/3K5Eda2"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
            >
              View on Amazon
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Dell XPS 13 */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Dell XPS 13</h3>
            <p className="mt-2 text-sm text-muted-foreground">Premium Windows ultrabook with solid build and vivid display.</p>
            <div className="mt-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground/90">Reviews</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Excellent build quality and bright, color-accurate panels (OLED options on some trims).</li>
                <li>Thin design limits ports; battery is good, though shorter under heavier loads than Air.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">What sets it apart</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Iconic edge-to-edge design; Windows ultrabook benchmark.</li>
                <li>Beautiful screen options for creators who prefer Windows.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">Target use cases</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Business productivity on Windows with premium hardware.</li>
                <li>Light photo editing, web design, and presentations.</li>
                <li>Developers/designers who want a compact, high-quality display.</li>
              </ul>
            </div>
            <a
              href="https://amzn.to/46gHUCp"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
            >
              View on Amazon
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* ThinkPad X1 Carbon */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">ThinkPad X1 Carbon</h3>
            <p className="mt-2 text-sm text-muted-foreground">Business-class keyboard, ports, and durability for daily work.</p>
            <div className="mt-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground/90">Reviews</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Legendary keyboard, lightweight carbon-fiber chassis, and generous port selection.</li>
                <li>Displays are good; pricing can be higher than consumer ultrabooks.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">What sets it apart</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Enterprise reliability and serviceability with MIL-STD durability.</li>
                <li>Ergonomics and typing feel favored by heavy writers and coders.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">Target use cases</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Heavy writing/coding, terminal work, and spreadsheets.</li>
                <li>Frequent travelers who need ports and durability.</li>
                <li>Enterprise/IT environments with docking and manageability.</li>
              </ul>
            </div>
            <a
              href="https://amzn.to/47Oq8Yg"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
            >
              View on Amazon
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* ASUS ROG Zephyrus G14 */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">ASUS ROG Zephyrus G14</h3>
            <p className="mt-2 text-sm text-muted-foreground">Compact performance for creators who edit video or game.</p>
            <div className="mt-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground/90">Reviews</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Strong CPU/GPU performance in a portable 14" chassis; good color screens available.</li>
                <li>Fans can be audible under load; battery is solid for the class but below ultrabook tiers.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">What sets it apart</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Creator-friendly dGPU power without a bulky 15–17" body.</li>
                <li>Great balance of portability and render/export speed.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground/90">Target use cases</p>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>4K/1080p video editing, motion graphics, and 3D previews.</li>
                <li>Developers needing GPU acceleration (CUDA/AI) on the go.</li>
                <li>Gaming after hours with creator-first portability.</li>
              </ul>
            </div>
            <a
              href="https://amzn.to/3Kd9TKD"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
            >
              View on Amazon
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Product referrals: Monitors */}
      <section id="monitor-referrals" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Product referrals: Monitors</h2>
          <span className="text-xs text-muted-foreground">Affiliate links • Amazon</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Creator and office-friendly displays with sharp text and color accuracy. Links may be affiliate; we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dell UltraSharp U2723QE */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Dell UltraSharp U2723QE (27" 4K)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Excellent text clarity, USB‑C hub, great for Mac/Windows desks.</p>
            <a href="https://amzn.to/42wn0g8" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* LG 27UK850-W */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">LG 27UK850‑W (27" 4K)</h3>
            <p className="mt-2 text-sm text-muted-foreground">USB‑C power delivery, IPS panel, solid color for creative work.</p>
            <a href="https://amzn.to/4ptVR7D" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* ASUS ProArt PA278QV */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">ASUS ProArt PA278QV (27" QHD)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Factory‑calibrated color at a good price for designers.</p>
            <a href="https://amzn.to/4px2DcF" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Samsung Odyssey G7 */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Samsung Odyssey G7 (32" QHD)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Curved high‑refresh display for smooth scrolling and gaming.</p>
            <a href="https://amzn.to/4ptVR7D" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Product referrals: Webcams */}
      <section id="webcam-referrals" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Product referrals: Webcams</h2>
          <span className="text-xs text-muted-foreground">Affiliate links • Amazon</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Clear video for calls, webinars, and recording. Links may be affiliate; we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logitech C920x */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Logitech C920x</h3>
            <p className="mt-2 text-sm text-muted-foreground">Proven 1080p quality and great value for most setups.</p>
            <a href="https://amzn.to/46wIjiT" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Logitech StreamCam */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Logitech StreamCam</h3>
            <p className="mt-2 text-sm text-muted-foreground">USB‑C, 1080p60, great for streaming and smooth motion.</p>
            <a href="https://amzn.to/3Khd9EB" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Elgato Facecam */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Elgato Facecam</h3>
            <p className="mt-2 text-sm text-muted-foreground">Clean picture, manual controls; great for creators.</p>
            <a href="https://amzn.to/46zZcJv" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Razer Kiyo Pro */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Razer Kiyo Pro</h3>
            <p className="mt-2 text-sm text-muted-foreground">Wide sensor and good low‑light performance.</p>
            <a href="https://amzn.to/46zZcJv" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Product referrals: Microphones */}
      <section id="microphone-referrals" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Product referrals: Microphones</h2>
          <span className="text-xs text-muted-foreground">Affiliate links • Amazon</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          From calls to podcasts, these USB mics sound great with minimal setup. Links may be affiliate; we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Shure MV7 */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Shure MV7 (USB/XLR)</h3>
            <p className="mt-2 text-sm text-muted-foreground">Broadcast‑style sound, USB or XLR for future growth.</p>
            <a href="https://amzn.to/46wS8xc" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* AT2020USB+ */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Audio‑Technica AT2020USB+</h3>
            <p className="mt-2 text-sm text-muted-foreground">Natural tone and simple plug‑and‑play.</p>
            <a href="https://amzn.to/46q7weJ" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Blue Yeti */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Blue Yeti USB</h3>
            <p className="mt-2 text-sm text-muted-foreground">Popular, versatile, multiple patterns for any room.</p>
            <a href="https://amzn.to/46q7weJ" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Rode NT-USB Mini */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">RØDE NT‑USB Mini</h3>
            <p className="mt-2 text-sm text-muted-foreground">Compact, clean sound for desks with limited space.</p>
            <a href="https://amzn.to/46q7weJ" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Product referrals: External SSDs */}
      <section id="storage-referrals" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Product referrals: External SSDs</h2>
          <span className="text-xs text-muted-foreground">Affiliate links • Amazon</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Fast portable storage for video, photos, and backups. Links may be affiliate; we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Samsung T7 */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Samsung T7 Portable SSD</h3>
            <p className="mt-2 text-sm text-muted-foreground">Reliable, fast USB‑C storage for everyday work.</p>
            <a href="https://amzn.to/46wrvZc" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* SanDisk Extreme */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">SanDisk Extreme Portable SSD</h3>
            <p className="mt-2 text-sm text-muted-foreground">Rugged option with water/dust resistance.</p>
            <a href="https://amzn.to/4nd5iXg" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Crucial X9 Pro */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Crucial X9 Pro</h3>
            <p className="mt-2 text-sm text-muted-foreground">Great price‑performance for creators.</p>
            <a href="https://amzn.to/4nEKuI3" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* WD My Passport SSD */}
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">WD My Passport SSD</h3>
            <p className="mt-2 text-sm text-muted-foreground">Compact and dependable portable drive.</p>
            <a href="https://amzn.to/4np6XZO" target="_blank" rel="nofollow sponsored noopener" className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
              View on Amazon<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}