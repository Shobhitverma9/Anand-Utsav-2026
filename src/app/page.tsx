"use client";

import { useEffect } from "react";
import * as THREE from "three";
import Link from "next/link";

/* ─── Static data ────────────────────────────────────────────── */
const EVENTS = [
  { icon: "fas fa-om",             label: "Inspirational Seminar" },
  { icon: "fas fa-microphone-alt", label: "Exciting Debate & Quiz" },
  { icon: "fas fa-drum",           label: "Foot-taping Rock Kirtan" },
  { icon: "fas fa-theater-masks",  label: "Drama & Dance Performance" },
  { icon: "fas fa-utensils",       label: "Delicious Dinner at the End" },
];

const CONTACTS = [
  { icon: "fab fa-whatsapp", iconColor: "#4ade80", name: "Sakha Vishnu Das",            phone: "9999369330" },
  { icon: "fas fa-phone-alt", iconColor: "#f59e0b", name: "Arjun Sakha Das",             phone: "9999033827" },
  { icon: "fas fa-phone-alt", iconColor: "#f59e0b", name: "Anandita Radhika Devi Dasi",  phone: "7291028784" },
];

const PAYMENT_PAGE_URL = "https://rzp.io/rzp/yh6f15yq";

/* ─── Three.js background hook ──────────────────────────────── */
function useThreeBackground() {
  useEffect(() => {
    const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    const scene  = new THREE.Scene();
    scene.background = new THREE.Color("#0b1930");
    scene.fog        = new THREE.FogExp2("#0b1930", 0.0012);

    const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    /* Soft circular sprite */
    const sprite = (() => {
      const c   = document.createElement("canvas");
      c.width   = 32; c.height = 32;
      const ctx = c.getContext("2d")!;
      const g   = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0,   "rgba(255,255,255,1)");
      g.addColorStop(0.3, "rgba(255,255,255,0.7)");
      g.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 32, 32);
      const t = new THREE.Texture(c);
      t.needsUpdate = true;
      return t;
    })();

    const count   = innerWidth < 768 ? 400 : 900;
    const geo     = new THREE.BufferGeometry();
    const pos     = new Float32Array(count * 3);
    const colors  = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#f59e0b"),
      new THREE.Color("#fde68a"),
      new THREE.Color("#ea580c"),
      new THREE.Color("#ffffff"),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3]     = (Math.random() - 0.5) * 110;
      pos[i3 + 1] = (Math.random() - 0.5) * 110;
      pos[i3 + 2] = (Math.random() - 0.5) * 60;
      const col   = palette[Math.floor(Math.random() * palette.length)];
      colors[i3]  = col.r; colors[i3 + 1] = col.g; colors[i3 + 2] = col.b;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos,    3));
    geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size:         innerWidth < 768 ? 0.55 : 0.75,
      vertexColors: true,
      map:          sprite,
      transparent:  true,
      blending:     THREE.AdditiveBlending,
      depthWrite:   false,
    });

    const mesh = new THREE.Points(geo, mat);
    scene.add(mesh);

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX - innerWidth  / 2) * 0.0004;
      my = (e.clientY - innerHeight / 2) * 0.0004;
    };
    addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    let raf: number;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      mesh.rotation.y = t * 0.04;
      mesh.rotation.x = t * 0.018;

      const p = geo.attributes.position.array as Float32Array;
      for (let i = 1; i < count * 3; i += 3) {
        p[i] += Math.sin(t * 0.4 + p[i - 1]) * 0.018;
        if (p[i] > 55) p[i] = -55;
      }
      geo.attributes.position.needsUpdate = true;

      camera.position.x += (mx * 0.5 - camera.position.x) * 0.025;
      camera.position.y += (-my * 0.5 - camera.position.y) * 0.025;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };
    addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("resize",    onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      sprite.dispose();
    };
  }, []);
}

/* ─── Main page component ────────────────────────────────────── */
export default function Home() {
  useThreeBackground();

  return (
    <>
      <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
        {/* WebGL canvas */}
        <canvas id="bg-canvas" />

        {/* Top arch decoration */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none", zIndex: 1, opacity: 0.35 }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: 90 }}>
            <path d="M0,0 C360,90 1080,90 1440,0 L1440,0 L0,0Z" fill="#f59e0b" />
          </svg>
          <div style={{ position: "absolute", top: 10, left: 16,  fontSize: 32 }} className="lantern">🪔</div>
          <div style={{ position: "absolute", top: 10, left: 52,  fontSize: 28 }} className="lantern lantern-delay">🪔</div>
          <div style={{ position: "absolute", top: 10, right: 16, fontSize: 32 }} className="lantern lantern-delay">🪔</div>
          <div style={{ position: "absolute", top: 10, right: 52, fontSize: 28 }} className="lantern">🪔</div>
        </div>

        <main style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", padding: "80px 16px 48px" }}>

          {/* ══ HERO ══ */}
          <header className="anim-1" style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block", padding: "4px 18px", borderRadius: 999, border: "1.5px solid #f59e0b", color: "#fde68a", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>
              ✦ Join the Celebration ✦
            </div>
            <h1 className="font-cinzel gold-gradient" style={{ fontSize: "clamp(3rem,10vw,5.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 8 }}>
              Ananda Utsav
            </h1>
            <p style={{ fontSize: "clamp(0.8rem,3.5vw,1rem)", color: "rgba(255,255,255,0.65)", marginBottom: 4 }}>Theme</p>
            <h2 className="font-cinzel" style={{ fontSize: "clamp(0.95rem,4vw,1.35rem)", color: "#fde68a", fontWeight: 700, letterSpacing: "0.05em", marginBottom: 32 }}>
              FORMULA FOR THE HAPPY FAMILY
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
              {[
                { icon: "far fa-calendar-alt", label: "Date", value: "25 DEC 2026" },
                { icon: "far fa-clock",         label: "Time", value: "4 PM – 9 PM"  },
              ].map(chip => (
                <div key={chip.label} className="card-glass gold-glow" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 22px", borderRadius: 12 }}>
                  <i className={chip.icon} style={{ color: "#f59e0b", fontSize: 22 }} />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: 10, color: "#fde68a", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.8 }}>{chip.label}</p>
                    <p style={{ fontWeight: 700, fontSize: "1rem" }}>{chip.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <a
                href={PAYMENT_PAGE_URL}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 34px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #ea580c 0%, #b91c1c 100%)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  boxShadow: "0 6px 24px rgba(234, 88, 12, 0.4)",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(234, 88, 12, 0.55)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(234, 88, 12, 0.4)";
                }}
              >
                <i className="fas fa-ticket-alt" />
                <span>Register Now &bull; ₹200</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </header>

          {/* ══ DIVINE PRESENCE ══ */}
          <section className="anim-2" style={{ marginTop: 52 }}>
            <div style={{ background: "linear-gradient(135deg,rgba(245,158,11,0.08),rgba(234,88,12,0.08))", border: "2px solid rgba(245,158,11,0.4)", borderRadius: 20, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontSize: "clamp(0.7rem,3vw,0.85rem)", color: "#fde68a", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 10 }}>
                ✦ &nbsp;In the Divine Presence of&nbsp; ✦
              </p>
              <h3 className="font-cinzel" style={{ fontSize: "clamp(1.2rem,5vw,2.1rem)", fontWeight: 700 }}>
                HH Radhey Shyamanand Swami Maharaj
              </h3>
            </div>
          </section>

          {/* ══ EVENTS ══ */}
          <section className="anim-3" style={{ marginTop: 56 }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <h2 className="font-cinzel gold-gradient" style={{ fontSize: "clamp(1.4rem,5vw,2.1rem)", fontWeight: 700, display: "inline-block" }}>
                Events Highlight
              </h2>
              <div className="gold-divider" style={{ maxWidth: 260, margin: "10px auto 0" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,255px),1fr))", gap: 18 }}>
              {EVENTS.map((ev, i) => (
                <div key={i} className="card-glass" style={{ borderRadius: 16, padding: "20px", display: "flex", alignItems: "center", gap: 16, transition: "transform 0.25s,box-shadow 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(245,158,11,0.15)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 50, background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(245,158,11,0.3)" }}>
                    <i className={ev.icon} style={{ color: "#f59e0b", fontSize: 20 }} />
                  </div>
                  <p style={{ fontWeight: 600, color: "#fde68a", fontSize: "clamp(0.88rem,3vw,0.97rem)" }}>{ev.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══ VENUE ══ */}
          <section className="anim-3" style={{ marginTop: 48 }}>
            <div style={{ background: "white", borderRadius: 20, padding: "22px 26px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}>
              <div className="pulse-badge" style={{ background: "linear-gradient(135deg,#ea580c,#b91c1c)", borderRadius: 50, width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-map-marker-alt" style={{ color: "white", fontSize: 24 }} />
              </div>
              <div style={{ color: "#0b1930", flex: 1, minWidth: 200 }}>
                <h3 className="font-cinzel" style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>Venue Location</h3>
                <p style={{ fontWeight: 600, color: "#1e3a5f", fontSize: "0.95rem" }}>Golden Rivaah Banquet Hall, Cs-19</p>
                <p style={{ color: "#475569", fontSize: "0.85rem" }}>Opposite Shipra Riviera, Gyan Khand II, Indirapuram</p>
              </div>
            </div>
          </section>

          {/* ══ REGISTRATION / PAYMENT ══ */}
          <section id="register" className="anim-4" style={{ marginTop: 56 }}>
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.45)" }}>

              {/* Price banner */}
              <div style={{ background: "linear-gradient(135deg,#ea580c 0%,#b91c1c 100%)", padding: "30px 24px", textAlign: "center" }}>
                <i className="fas fa-ticket-alt" style={{ fontSize: 42, opacity: 0.85, marginBottom: 10, display: "block" }} />
                <h3 className="font-cinzel" style={{ fontSize: "clamp(1.1rem,4vw,1.5rem)", fontWeight: 700, marginBottom: 6 }}>Secure Your Spot</h3>
                <p style={{ fontSize: "0.875rem", opacity: 0.85, marginBottom: 10 }}>Registration Charges</p>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 6 }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>₹</span>
                  <span style={{ fontSize: "3.2rem", fontWeight: 900, lineHeight: 1 }}>200</span>
                </div>
                <p style={{ fontSize: "0.75rem", opacity: 0.75 }}>Includes entry to all events and delicious dinner prasadam</p>
              </div>

              {/* Action body */}
              <div style={{ background: "white", padding: "clamp(24px,5vw,40px)", textAlign: "center" }}>
                <h3 className="font-cinzel" style={{ fontSize: "clamp(1.05rem,4vw,1.4rem)", fontWeight: 700, color: "#0b1930", marginBottom: 20 }}>
                  Join Ananda Utsav 2026
                </h3>

                {/* What's included */}
                <div style={{ background: "#fff7ed", borderRadius: 14, padding: "18px 20px", border: "1px solid #fed7aa", marginBottom: 26, textAlign: "left" }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#9a3412", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                    <i className="fas fa-star" style={{ color: "#ea580c" }} />
                    Your registration includes:
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
                    {EVENTS.map((ev, i) => (
                      <div key={i} style={{ fontSize: "0.825rem", color: "#c2410c", display: "flex", alignItems: "center", gap: 8 }}>
                        <i className="fas fa-check-circle" style={{ color: "#ea580c", flexShrink: 0 }} />
                        <span>{ev.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redirect Register Button */}
                <div style={{ maxWidth: 440, margin: "0 auto" }}>
                  <a
                    href={PAYMENT_PAGE_URL}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      width: "100%",
                      padding: "16px 24px",
                      borderRadius: 14,
                      background: "linear-gradient(135deg, #ea580c 0%, #b91c1c 100%)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      boxShadow: "0 6px 24px rgba(234, 88, 12, 0.35)",
                      textDecoration: "none",
                      transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(234, 88, 12, 0.45)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "none";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(234, 88, 12, 0.35)";
                    }}
                  >
                    <i className="fas fa-ticket-alt" />
                    <span>Register Now &bull; ₹200</span>
                    <i className="fas fa-arrow-right" />
                  </a>

                  <p style={{ marginTop: 14, fontSize: "0.75rem", color: "#6b7280", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <i className="fas fa-shield-alt" style={{ color: "#16a34a" }} />
                    Secured by Razorpay · 256-bit SSL encryption
                  </p>

                  <p style={{ marginTop: 8, fontSize: "0.72rem", color: "#9ca3af" }}>
                    Clicking Register will redirect you to the official Razorpay payment page to complete your booking.
                  </p>

                  <p style={{ marginTop: 8, fontSize: "0.72rem", color: "#6b7280" }}>
                    By continuing, you agree to our{" "}
                    <Link href="/terms-and-conditions" style={{ color: "#ea580c", textDecoration: "underline" }}>
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" style={{ color: "#ea580c", textDecoration: "underline" }}>
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ══ FOOTER / CONTACTS ══ */}
          <footer className="anim-5" style={{ marginTop: 64, paddingTop: 36, borderTop: "1px solid rgba(245,158,11,0.3)", textAlign: "center" }}>
            <h4 className="font-cinzel" style={{ color: "#fde68a", fontSize: "clamp(1rem,4vw,1.2rem)", marginBottom: 28 }}>
              For More Details Kindly Contact
            </h4>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 18 }}>
              {CONTACTS.map((c, i) => (
                <div key={i} className="card-glass" style={{ borderRadius: 16, padding: "15px 22px", display: "flex", alignItems: "center", gap: 14, minWidth: 210, flex: "1 1 210px", maxWidth: 300 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 50, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={c.icon} style={{ color: c.iconColor, fontSize: 20 }} />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontWeight: 600, color: "white", fontSize: "0.875rem", marginBottom: 2 }}>{c.name}</p>
                    <a href={`tel:${c.phone}`} style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem" }}>{c.phone}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Policy & Legal Links ── */}
            <div style={{ marginTop: 32, display: "flex", justifyContent: "center", alignItems: "center", gap: 18, flexWrap: "wrap", fontSize: "0.85rem" }}>
              <Link
                href="/privacy-policy"
                style={{
                  color: "#fde68a",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  transition: "opacity 0.2s",
                }}
              >
                <i className="fas fa-shield-alt" style={{ fontSize: 13, color: "#f59e0b" }} />
                <span>Privacy Policy</span>
              </Link>

              <span style={{ color: "rgba(245,158,11,0.4)" }}>•</span>

              <Link
                href="/terms-and-conditions"
                style={{
                  color: "#fde68a",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  transition: "opacity 0.2s",
                }}
              >
                <i className="fas fa-file-contract" style={{ fontSize: 13, color: "#f59e0b" }} />
                <span>Terms and Conditions</span>
              </Link>
            </div>

            <p style={{ marginTop: 22, fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
              © 2026 Ananda Utsav · ISKCON · All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
