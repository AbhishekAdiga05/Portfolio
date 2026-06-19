import { Outlet, useLocation } from "react-router";
import { Suspense, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen relative" style={{ background: "var(--background)" }}>
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" style={{ background: "var(--background)" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
            maskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-5 h-5 rounded-full" style={{ background: "var(--primary)" }} /></div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}
