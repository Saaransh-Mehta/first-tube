import { HeroSectionOne } from "@/components/Hero";
import { NavbarComponent } from "@/components/Navbar";
import { Card,CardDescription } from "@/components/ui/card";
import { IconUser,IconBrandMastercard } from "@tabler/icons-react";
import dribbleImg from '@/public/dribbleImg.png'
import Image from "next/image";
import FeaturesCard from "@/components/Card";

export default function Home() {
  return (
   <main className="landing-page">
   <div className="navbar">
    <NavbarComponent/>
   </div>
   <div className="hero-section">
    <HeroSectionOne/>
   </div>
   <div className="features flex text-center items-center justify-center flex-col gap-4 p-4">
    <h1 className="text-xl md:text-2xl lg:text-4xl p-2 font-semibold ">Features enhance your customers <br /> experience</h1>
    <p className="text-sm">Each our feature has the deapth required to achieve a fully customized userflow</p>
<div className="cards">
  <FeaturesCard/>
</div>
   </div>

   <div className="experience h-[100vh] flex justify-center gap-20 items-center  mt-10">
      <div className="left">
        <Image src={dribbleImg} alt="Dribble Image" className="w-[500px] h-[500px] object-cover rounded-lg " />
      </div>
      <div className="right flex justify-center flex-col ">
        <div className="right-top">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">Experience Education <br />Like never before</h1>
        </div>
        <div className="right-middle">
          <p className="text-sm font-light mt-4">Revolutionizing education through cutting-edge technology and <br /> creating a space for creators as well as students</p>
        </div>
        <div className="right-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-4">
          <div className="card-1">
             <Card className="border-none shadow-none h-[230px] w-[300px]">
            <CardDescription>
               <div className="icon">
                <IconBrandMastercard className="w-10 h-10 text-blue-500" />
              </div>
              <div className="small-text mt-4 pl-3">
                <h1 className="text-lg font-semibold text-black/80">Ultimate Content </h1>
              </div>
              <div className="para mt-3 p-4">
                <p>Providing free and open source education to the students around the globe</p>
              </div>
            </CardDescription>
          </Card>
          </div>
         <div className="card-2">
             <Card className="border-none border-0 shadow-none h-[230px] w-[300px]">
            <CardDescription>
              <div className="icon">
                <IconUser className="w-10 h-10 text-blue-500" />
              </div>
              <div className="small-text mt-4 pl-3">
                <h1 className="text-lg font-semibold text-black/80">Ultimate Content </h1>
              </div>
              <div className="para mt-3 p-4">
                <p>Providing free and open source education to the students around the globe</p>
              </div>
            </CardDescription>
          </Card>
         </div>
         
        </div>
      </div>
   </div>
   </main>
  );
}
