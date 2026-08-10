import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { usePrefersReducedMotion } from "./ScrollReveal";

export function ParticleBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.45]"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 45,
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
            },
          },
          particles: {
            color: {
              value: ["#7c6cf4", "#a78bfa", "#ffffff"],
            },
            links: {
              color: "#7c6cf4",
              distance: 160,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.4,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
