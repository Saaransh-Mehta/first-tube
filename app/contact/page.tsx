"use client"
import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-900 dark:text-slate-50 transition-colors duration-300 flex flex-col">
      <NavbarComponent />
      
      <main className="flex-grow pt-32 pb-24 max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's talk</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">Have a question or want to report an issue? We'd love to hear from you.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-neutral-200/50 dark:shadow-none">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0f0f0f] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0f0f0f] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Snow" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0f0f0f] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="you@company.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0f0f0f] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none" placeholder="Tell us how we can help..."></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/30">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
