import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import imgMukhid from "../img/4x6 m (1).jpg";
import Image from "next/image";
import { FloatingDockComponent } from "@/components/ui/floadingDockComponent";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import { Porto } from "@/components/Portofolio";
import { Skills } from "@/components/Skills";
import { useStore } from "@/zustan";
import Link from "next/link";
import {
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandLinkedin
} from "@tabler/icons-react";

export default function Home() {
  const useSelector = useStore((state) => state);
  return (
    <div className="w-screen h-screen">
      <BackgroundBeamsWithCollision> 
        <div className="w-full h-full">
          <div className="w-full h-full md:flex md:justify-center md:align-middle">
            <div className="sm:w-full md:w-96 md:flex md:flex-col md:justify-center md:align-middle md:pl-10 pt-5">
              <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Image
                  src={imgMukhid}
                  alt="My Image"
                  className="w-56 h-72 rounded-xl bg-neutral-300 bg-cover"
                />
                <div className="text-lg mt-2">MUKHAMMAD ABDUL MUKHID</div>
                <div className="text-sm mb-2 decoration-wavy italic">Fullstack WEB Developer</div>
                <div className='flex justify-center align-middle gap-10'>
                  <Link href='https://api.whatsapp.com/send?phone=6285174085674&text=Asslamualaikum WR WB.'>
                    <IconBrandWhatsapp color='#25d366' size={'30px'}/>
                  </Link>
                    <Link href='https://www.linkedin.com/in/mukhid/'>
                      <IconBrandLinkedin color='#0a66c2' size={'30px'}/>
                    </Link>
                    <Link href='https://github.com/mukhid10'>
                      <IconBrandGithub color='#FFF' size={'30px'} />
                    </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:pl-20 md:flex md:flex-col md:justify-center md:align-middle">
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
          </div>
          <div className="md:sticky md:bottom-5 animate-bounce">
              <FloatingDockComponent />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}
