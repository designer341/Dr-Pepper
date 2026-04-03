import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-burgundy-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Join the Cult</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6">
              Unlock the <br />
              <span className="text-gradient">Secret Flavors.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
              Be the first to know about limited drops, secret stash releases, and exclusive Velvet Fizz events.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-burgundy-600 transition-colors text-sm"
                required
              />
              <button className="px-8 py-4 bg-white text-burgundy-950 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Join Now <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest">
              By joining, you agree to our mystery terms & conditions.
            </p>
          </motion.div>

          {/* Decorative Bubbles */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-burgundy-600/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-burgundy-800/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
