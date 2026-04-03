import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Plasma from "@/Components/PlasmaBackground";
import BodyLayout from "@/Layouts/LandingHome";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BodyLayout>
      <div style={{ backgroundColor: "#060010" }}>
        <Plasma color="#ffffff" speed={1} direction="forward" scale={1} opacity={1} mouseInteractive>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
            padding: "40px 16px",
          }}>
            <div style={{
              width: isMobile ? "100%" : "50%",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: isMobile ? "2rem 1.5rem" : "4rem",
            }}>

              {/* Badge */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.65rem", letterSpacing: "0.2em",
                  textTransform: "uppercase", padding: "6px 16px", borderRadius: "999px",
                }}>
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    backgroundColor: "#4ade80", display: "inline-block",
                    boxShadow: "0 0 6px #4ade80",
                  }} />
                  Available for work
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: isMobile ? "2rem" : "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: "800", color: "#ffffff",
                lineHeight: "1.2", marginBottom: "1.25rem", letterSpacing: "-0.02em",
              }}>
                Hi, I'm{" "}
                <span style={{ color: "rgba(255,255,255,0.45)" }}>Your Name</span>
                <br />
                I Build Digital{" "}
                <span style={{
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.35) 100%)",
                  backgroundClip: "text",
                }}>Experiences</span>
              </h1>

              {/* Description */}
              <p style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                lineHeight: "1.75", maxWidth: "420px", margin: "0 auto 2rem",
              }}>
                A passionate frontend developer crafting beautiful, responsive,
                and user-friendly web experiences.
              </p>

              {/* Divider */}
              <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.15)", margin: "0 auto 2rem" }} />

              {/* Buttons */}
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                gap: "12px",
              }}>
                <Link to="/about">
                  <button style={{
                    width: "100%", padding: "13px 32px", borderRadius: "12px",
                    backgroundColor: "#ffffff", color: "#060010",
                    fontWeight: "600", fontSize: "0.875rem",
                    border: "none", cursor: "pointer",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    About Me →
                  </button>
                </Link>
                <Link to="/projects">
                  <button style={{
                    width: "100%", padding: "13px 32px", borderRadius: "12px",
                    backgroundColor: "transparent", color: "#ffffff",
                    fontWeight: "600", fontSize: "0.875rem",
                    border: "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer", transition: "background-color 0.2s, transform 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    View Projects
                  </button>
                </Link>
              </div>

              {/* Divider */}
              <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.07)", margin: "2rem 0" }} />

              {/* Stats */}
              <div style={{ display: "flex", justifyContent: "center", gap: isMobile ? "1.5rem" : "3rem" }}>
                {[
                  { number: "10+", label: "Projects" },
                  { number: "2+", label: "Years Exp." },
                  { number: "100%", label: "Passion" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ color: "#ffffff", fontWeight: "700", fontSize: isMobile ? "1.1rem" : "1.4rem", letterSpacing: "-0.02em" }}>
                      {stat.number}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "4px" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Plasma>
      </div>
    </BodyLayout>
  );
}