'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { UploadCloud, Wand2, PlayCircle, Sparkles, ArrowRight, Video, Zap, Globe, Shield } from "lucide-react";
import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import dashboardImage from '@/public/dashboardImage.png';
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/home');
    }
  }, [isLoaded, userId, router]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <NavbarComponent />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        {/* Background Gradients & Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 w-full max-w-4xl -translate-x-1/2 h-[400px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full max-w-2xl h-[300px] bg-purple-500/10 dark:bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />
         
        <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-8 border border-blue-100 dark:border-blue-800/40 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Next-Gen SaaS Video Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            Create, Host, and Share <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Like Never Before
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            SaaS Youtubr gives you the ultimate creator suite. Upload videos in blazing fast HD, automatically generate engaging AI scripts, and build your audience on a truly dynamic platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/sign-up" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/home" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 hover:bg-slate-50 dark:hover:bg-neutral-800 shadow-sm">
              <PlayCircle className="w-5 h-5 text-slate-500" /> Watch Demo
            </Link>
          </motion.div>
        </div>

        {/* Floating Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          className="container mx-auto px-4 mt-20 relative z-20 max-w-6xl"
        >
          <div className="relative rounded-2xl md:rounded-[2.5rem] p-2 md:p-4 bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-[#050505] z-10 rounded-2xl md:rounded-[2.5rem] pointer-events-none" />
            <Image 
              src={dashboardImage}
              alt="Dashboard Preview"
              className="w-full h-auto rounded-xl md:rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-inner"
              width={1200}
              height={800}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* CORE FEATURES SECTION (Bento Grid) */}
      <section className="py-24 relative bg-white dark:bg-[#0a0a0a] border-y border-slate-200 dark:border-neutral-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">We've built all the tools required for modern video creators and educators in one seamless application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 relative z-10">
                <UploadCloud className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast Uploads</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Drag and drop your massive video files. We optimize and host them globally for zero-buffering playback across all devices.</p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 relative z-10">
                <Wand2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Script Generation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Stuck on ideas? Give our AI a topic and receive a fully formatted, engaging video script in seconds. Never face writer's block again.</p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6 relative z-10">
                <MonitorPlay className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Immersive Viewing</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Give your audience a YouTube-like watching experience. Beautiful player, comment sections, likes, and seamless sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS / TRUST SECTION */}
      <section className="py-24 bg-[#fafafa] dark:bg-[#050505]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decal Background */}
            <Globe className="absolute -top-20 -right-20 w-96 h-96 text-white/10" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to revolutionize your content?</h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join thousands of creators who are already uploading, generating, and scaling their audience with our platform.
              </p>
              <Link href="/sign-up" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-600 font-bold hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
                Create Free Account <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Icon helper
function MonitorPlay(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 15V9l5 3-5 3Z" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  )
}
