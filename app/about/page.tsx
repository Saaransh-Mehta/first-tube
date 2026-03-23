import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-900 dark:text-slate-50 transition-colors duration-300 flex flex-col">
      <NavbarComponent />
      
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-8 border border-blue-100 dark:border-blue-800/40">
          Our Mission
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Empowering Creators</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
          SaaS Youtubr was built to bridge the gap between heavy video-hosting requirements and modern content creation. By combining blazing fast global CDNs with state-of-the-art AI script generation tools, we provide everything a creator needs in a single workspace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
            <p className="text-neutral-600 dark:text-neutral-400">We constantly push the boundaries of what a video platform can do, bringing AI directly to your fingertips so you never face writer's block again.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Creator Centric</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Our platform scales with your audience. We handle the intense backend processing so you can focus exclusively on making amazing content.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
