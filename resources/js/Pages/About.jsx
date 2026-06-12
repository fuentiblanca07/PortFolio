import GlassIcons from "@/Components/glassIcon";
import SidebarNavigation from "@/Components/SidebarNavigation";
import SplashCursor from "@/Components/SplashCursor";
import BodyLayout from "@/Layouts/LandingHome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <BodyLayout>
      
        <SidebarNavigation/>
       <SplashCursor/>
        <div className="flex-1 p-6">
            <div className="w-full h-full flex justify-evenly items-center">
            
                <div className="w-1/4 h-full flex border border-[#2A2A2F] rounded-lg">
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-4">
                        <div className="flex flex-col items-center gap-4">
                           <img src="img/me.jpg" className="inset-shadow-xl inset-shadow-[#2A2A2F] rounded-lg p-3" alt="ME" />
                        <div className="backdrop-blur-md bg-[#AAFF5E] border border-white/45 rounded-xl p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                          <h2 className="font-bold text-[#0A2200]">Julius D. Fuentiblanca</h2>
                        </div>
                        <div className="backdrop-blur-md bg-[#2A2A2F] border border-white/45 rounded-xl p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                          <h2 className="font-bold text-[#EEEEF2]">Full stack web developer</h2>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <GlassIcons color="#AAFF5E" size={24}    className="!grid-cols-2 !gap-6 !p-4"

                        items={[
                            { icon: <FontAwesomeIcon icon={faFacebook} />, label: "Facebook", color: "blue" },
                            { icon: <FontAwesomeIcon icon={faGithub} />, label: "GitHub", color: "gray" }
                        ]}/>
                        </div>

                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-4 border border-[#2A2A2F] rounded-lg p-6">
                    <p className="text-[#EEEEF2] text-[clamp(0.85rem, 1.5vw, 1rem)]" style={{
                    lineHeight: "1.75",
                  }}>
                    Hi! I'm a passionate Full Stack Web Developer with an interest in technology and web development. I'm dedicated to growing my skills in web development. I have hands-on experience building responsive, user-friendly web applications using modern technologies such as HTML, CSS, JavaScript, Laravel, Inertia, React, Livewire, and MySQL, which provides me with a strong foundation to understand the core of building a web application. I thrive on solving complex problems and turning ideas into functional, scalable solutions.
  
                  </p>
                    <p className="text-[#EEEEF2] text-[clamp(0.85rem, 1.5vw, 1rem)]" style={{
                    lineHeight: "1.75",
                  }}>
                    My goal is to enhance my technical expertise and broaden my capabilities as a full stack developer by working on challenging, real-world projects that push the boundaries of my knowledge. I am committed to writing clean, maintainable code and continuously adopting best practices in software development. I aspire to contribute to innovative teams where I can grow professionally, collaborate with experienced developers, and deliver web solutions that create meaningful impact. landscape. Whether it's optimizing performance, implementing responsive designs, or creating intuitive user interfaces, I'm dedicated to delivering high-quality work that exceeds expectations.
                  </p>

                  <hr className="border-[#2A2A2F]" />

                  <div className="text-center text-[#EEEEF2] text-[clamp(0.85rem, 1.5vw, 1rem)]" style={{
                    lineHeight: "1.75",
                  }}>
                    <h2 >Interests in</h2>
                    
                  </div>

                </div>
            </div>
        </div>
        
    </BodyLayout>
  );
}