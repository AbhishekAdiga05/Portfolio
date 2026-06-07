import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative" style={{ background: "#050505" }}>

      {/* ── Global background canvas (fixed, behind everything) ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>

        {/* Primary grid — horizontal lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.038) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Primary grid — vertical lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(34,197,94,0.038) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Intersection dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(34,197,94,0.11) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Large grid overlay — every 4th cell */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "240px 240px",
          }}
        />

        {/* Top-left green glow */}
        <div
          className="absolute"
          style={{
            top: "-10%",
            left: "-5%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Top-right cool tint */}
        <div
          className="absolute"
          style={{
            top: "-5%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        {/* Bottom-center green fade */}
        <div
          className="absolute"
          style={{
            bottom: "-5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Vignette — softer, just darkens corners */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 50%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
