'use client'
import { HeroSectionOne } from "@/components/Hero";
import { NavbarComponent } from "@/components/Navbar";
import { Card, CardDescription } from "@/components/ui/card";
import { IconUser, IconBrandMastercard, IconRocket, IconShield } from "@tabler/icons-react";
import dribbleImg from '@/public/dribbleImg.png'
import Image from "next/image";
import FeaturesCard from "@/components/Card";
import { motion, useScroll, useTransform } from "motion/react";
import Footer from "../components/Footer";


export default function Home() {
  const {scrollYProgress} = useScroll()

  
  const scaleConrol = useTransform(scrollYProgress,[0,0.8,1],[0.8,1,0.8])
  return (
   <main className="landing-page bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
   <div className="navbar">
    <NavbarComponent/>
   </div>
   <div className="hero-section">
    <HeroSectionOne/>
   </div>
   <motion.div 
   initial={{  y: 20 , scale: 0.8 }}
    animate={{ y: 0  }}
    style={{ scale: scaleConrol }}
    transition={{ duration: 0.3,ease:"linear" }}
   className="features flex text-center items-center justify-center flex-col gap-6 px-4 py-16">
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-100">Features that enhance your <br className="hidden md:block" /> learning experience</h1>
    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">Each feature is crafted with depth and precision to deliver a fully customized, seamless user experience</p>
<div className="cards w-full">
  <FeaturesCard/>
</div>
   </motion.div>

   <div className="experience min-h-[100vh] flex flex-col lg:flex-row justify-center gap-12 lg:gap-20 items-center px-4 md:px-8 lg:px-16 py-16 bg-neutral-50 dark:bg-neutral-900/50">
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="left max-w-lg lg:max-w-xl">
        <Image src={dribbleImg} alt="Education Platform" className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-neutral-700" />
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="right flex justify-center flex-col max-w-2xl">
        <div className="right-top">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">Experience Education <br />Like Never Before</h1>
        </div>
        <div className="right-middle">
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mt-6 leading-relaxed">Revolutionizing education through cutting-edge technology and creating a dynamic space for both creators and students to thrive together.</p>
        </div>
        <div className="right-end grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div 
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="card-1">
             <Card className="border-2 border-blue-100 dark:border-blue-900/30 shadow-lg hover:shadow-xl transition-all bg-white dark:bg-neutral-800 h-full p-6">
            <CardDescription className="space-y-4">
               <div className="icon w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <IconRocket className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="small-text">
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Premium Content</h1>
              </div>
              <div className="para">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Access high-quality, curated educational content designed by experts for learners worldwide.</p>
              </div>
            </CardDescription>
          </Card>
          </motion.div>
         <motion.div 
         whileHover={{ y: -8, transition: { duration: 0.2 } }}
         className="card-2">
             <Card className="border-2 border-purple-100 dark:border-purple-900/30 shadow-lg hover:shadow-xl transition-all bg-white dark:bg-neutral-800 h-full p-6">
            <CardDescription className="space-y-4">
              <div className="icon w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                <IconShield className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="small-text">
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">Secure Platform</h1>
              </div>
              <div className="para">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Built with security and privacy at its core, ensuring your data and content remain protected.</p>
              </div>
            </CardDescription>
          </Card>
         </motion.div>
         
        </div>
      </motion.div>
   </div>
   <div className="footer">
   <Footer/>
   </div>
   </main>
  );
}
