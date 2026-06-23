import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0 pointer-events-auto opacity-[0.35]"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 150,
                links: {
                  opacity: 0.4,
                },
              },
              push: {
                quantity: 2,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#7c6cf4"],
            },
            links: {
              color: "#ffffff",
              distance: 160,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800,
              },
              value: 65,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              }
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
