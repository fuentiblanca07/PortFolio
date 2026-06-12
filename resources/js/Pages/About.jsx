import GlassIcons from "@/Components/glassIcon";
import SidebarNavigation from "@/Components/SidebarNavigation";
import SplashCursor from "@/Components/SplashCursor";
import BodyLayout from "@/Layouts/LandingHome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <BodyLayout>
      <SidebarNavigation />
      <SplashCursor />

      <div className="flex-1 p-4 md:p-6">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4">

          {/* Profile Card */}
          <div className="w-full lg:w-1/4 border border-[#2A2A2F] rounded-lg">
            <div className="w-full flex flex-col items-center justify-center gap-4 p-4">
              <div className="flex flex-col items-center gap-4 w-full">
                <img
                  src="img/me.jpg"
                  className="rounded-lg p-3 w-32 h-32 md:w-40 md:h-40 lg:w-full lg:h-auto object-cover"
                  alt="ME"
                />
                <div className="backdrop-blur-md bg-[#AAFF5E] border border-white/45 rounded-xl p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] w-full text-center">
                  <h2 className="font-bold text-[#0A2200] text-sm md:text-base">
                    Julius D. Fuentiblanca
                  </h2>
                </div>
                <div className="backdrop-blur-md bg-[#2A2A2F] border border-white/45 rounded-xl p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] w-full text-center">
                  <h2 className="font-bold text-[#EEEEF2] text-sm md:text-base">
                    Full stack web developer
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 w-full">
                <GlassIcons
                  color="#AAFF5E"
                  size={24}
                  className="!grid-cols-2 !gap-6 !p-4"
                  items={[
                    { icon: <FontAwesomeIcon icon={faFacebook} />, label: "Facebook", color: "blue" },
                    { icon: <FontAwesomeIcon icon={faGithub} />, label: "GitHub", color: "gray" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Bio Card */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 border border-[#2A2A2F] rounded-lg p-4 md:p-6">
            <p
              className="text-[#EEEEF2] text-sm md:text-base"
              style={{ lineHeight: "1.75" }}
            >
              Hi! I'm a passionate Full Stack Web Developer with an interest in
              technology and web development. I'm dedicated to growing my skills
              in web development. I have hands-on experience building responsive,
              user-friendly web applications using modern technologies such as
              HTML, CSS, JavaScript, Laravel, Inertia, React, Livewire, and
              MySQL, which provides me with a strong foundation to understand the
              core of building a web application. I thrive on solving complex
              problems and turning ideas into functional, scalable solutions.
            </p>

            <p
              className="text-[#EEEEF2] text-sm md:text-base"
              style={{ lineHeight: "1.75" }}
            >
              My goal is to enhance my technical expertise and broaden my
              capabilities as a full stack developer by working on challenging,
              real-world projects that push the boundaries of my knowledge. I am
              committed to writing clean, maintainable code and continuously
              adopting best practices in software development. I aspire to
              contribute to innovative teams where I can grow professionally,
              collaborate with experienced developers, and deliver web solutions
              that create meaningful impact. Whether it's optimizing performance,
              implementing responsive designs, or creating intuitive user
              interfaces, I'm dedicated to delivering high-quality work that
              exceeds expectations.
            </p>

            <hr className="border-[#2A2A2F]" />

            <div
              className="text-center text-[#EEEEF2] text-sm md:text-base"
              style={{ lineHeight: "1.75" }}
            >
              <h2>Interests in</h2>
            </div>
          </div>

        </div>
      </div>
    </BodyLayout>
  );
}