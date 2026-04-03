import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Plasma from "@/Components/PlasmaBackground";
import BodyLayout from "@/Layouts/LandingHome";
import { Card, CardHeader } from "@/Components/ui/card";
import { RollingText } from "@/Components/RollingText";
import { Button } from "@/Components/ui/button";

export default function Home() {
  return (
  <BodyLayout>
      <div style={{ backgroundColor: "#060010" }}>
        <Plasma color="#ffffff" speed={1} direction="forward" scale={1} opacity={1} mouseInteractive>
          <div className="w-full min-h-screen flex items-center justify-center">
            <Card className="w-full lg:w-1/2 border-none rounded-lg shadow-lg z-10 bg-fuchsia-100/15 backdrop-blur-md px-4">
              <div className="text-center flex flex-col items-center justify-center gap-4 ">

                <span className="inline-flex items-center gap-[6px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] text-[0.65rem] tracking-[0.2em] uppercase px-4 py-[6px] rounded-full">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#4ade80] inline-block shadow-[0_0_6px_#4ade80]" />
                    Available for work
                </span>

                <h2 className="text-2xl font-semibold text-white">Hi, I'm <span className="text-[rgba(255,255,255,0.45)]">Julius</span> </h2>

                <h1 className="text-4xl font-bold text-white">Experience with<RollingText words={["Developer", "Designer", "Freelancer", "Creator"]}
        className="text-[#4ade80] font-bold drop-shadow-[0_0_12px_#4ade80]"
        interval={2500} /></h1>
              <div className="w-3/4 h-1 bg-[rgba(255,255,255,0.15)] m-0"/>

               <p className="text-[rgba(255,255,255,0.4)] text-[clamp(0.85rem, 1.5vw, 1rem)] w-1/2" style={{
                lineHeight: "1.75",
              }}>
                A passionate frontend developer crafting beautiful, responsive,
                and user-friendly web experiences.
              </p>

                            <div className="w-3/4 h-1 bg-[rgba(255,255,255,0.15)] m-0"/>


            <div className="inline-flex gap-4">
                <Button variant="outline" className="text-white border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.1)]">
                <Link to="/about">About me <span></span></Link>
              </Button>
                <Button variant="outline" className="text-white border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.1)]">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>



              </div>
            </Card>
          </div>
        </Plasma>
      </div>
    </BodyLayout>
  );
}