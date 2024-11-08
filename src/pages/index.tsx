import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import imgMukhid from "../img/4x6 m (1).jpg";
import Image from "next/image";
import { FloatingDockComponent } from "@/components/ui/floadingDockComponent";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import { Porto } from "@/components/Portofolio";
import { Skills } from "@/components/Skills";
import { useStore } from "@/zustan";

export default function Home() {
  const useSelector = useStore((state) => state);

  
  return (
    <div className="w-screen h-screen">
      <BackgroundBeamsWithCollision> 
        <div className="w-fit md:flex md:flex-col md:justify-center md:align-middle pl-10 pt-5">
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Image
              src={imgMukhid}
              alt="My Image"
              className="w-56 h-72 rounded-xl bg-neutral-300 bg-cover"
            />
            <div className="text-lg mt-2">MUKHAMMAD ABDUL MUKHID</div>
            <div className="text-sm mb-2 decoration-wavy italic">Fullstack WEB Developer</div>
            <div>
              <FloatingDockComponent />
            </div>
          </div>
        </div>

        <div className="w-full pl-20 md:flex md:flex-col md:justify-center md:align-middle">
          {
            useSelector?.tab == 'About me' && <Profile/>
          }
          {
            useSelector?.tab == 'Experience' && <Experience/>
          }
          {
            useSelector?.tab == 'Portofolio' && <Porto/>
          }
          {
            useSelector?.tab == 'Tech Stack' && <Skills/>
          }
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}
