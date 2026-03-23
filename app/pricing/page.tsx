import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-900 dark:text-slate-50 transition-colors duration-300 flex flex-col">
      <NavbarComponent />
      
      <main className="flex-grow pt-32 pb-24 max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, transparent pricing</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">Choose the plan that best fits your content creation needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Hobby</h3>
            <div className="mb-6"><span className="text-4xl font-extrabold">$0</span> <span className="text-neutral-500">/ forever</span></div>
            <ul className="space-y-4 mb-8 flex-grow text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Up to 5 Video Uploads</li>
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Basic AI Script Generation</li>
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Standard 720p HD Streaming</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">Get Started</button>
          </div>

          {/* Pro Tier */}
          <div className="p-8 rounded-3xl bg-blue-600/5 dark:bg-blue-900/10 border-2 border-blue-500 relative flex flex-col shadow-xl shadow-blue-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">Most Popular</div>
            <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Creator Pro</h3>
            <div className="mb-6"><span className="text-4xl font-extrabold">$19</span> <span className="text-neutral-500">/ month</span></div>
            <ul className="space-y-4 mb-8 flex-grow text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-3"><Check className="text-blue-500 w-5 h-5 flex-shrink-0" /> Unlimited Video Uploads</li>
              <li className="flex gap-3"><Check className="text-blue-500 w-5 h-5 flex-shrink-0" /> Advanced AI Script Editor</li>
              <li className="flex gap-3"><Check className="text-blue-500 w-5 h-5 flex-shrink-0" /> 4K Ultra HD Streaming</li>
              <li className="flex gap-3"><Check className="text-blue-500 w-5 h-5 flex-shrink-0" /> Priority Global CDN</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition">Start 14-Day Free Trial</button>
          </div>

          {/* Enterprise Tier */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Agency</h3>
            <div className="mb-6"><span className="text-4xl font-extrabold">$99</span> <span className="text-neutral-500">/ month</span></div>
            <ul className="space-y-4 mb-8 flex-grow text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Everything in Pro</li>
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Multiple Team Members</li>
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Custom Branding & Player</li>
              <li className="flex gap-3"><Check className="text-green-500 w-5 h-5 flex-shrink-0" /> Dedicated Account Manager</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">Contact Sales</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
