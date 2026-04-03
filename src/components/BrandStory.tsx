import { motion } from "motion/react";
import { History, Globe, Droplets, ShieldCheck } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square">
              <img
                src="https://picsum.photos/seed/beverage-history/800/800"
                alt="Heritage"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-burgundy-900/40 mix-blend-multiply" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl z-20 hidden md:block"
            >
              <p className="text-4xl font-black text-burgundy-500 mb-1">138+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Years of Mystery</p>
            </motion.div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-burgundy-700/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-burgundy-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-8">
              Born in a <br />
              <span className="text-gradient">Small Pharmacy.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              In 1885, a young pharmacist in Waco, Texas, experimented with a unique blend of 23 flavors. He wasn't looking for a soda; he was looking for a feeling. That feeling became Velvet Fizz—the original mystery that has captivated generations.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-burgundy-900/50 flex items-center justify-center shrink-0">
                  <History className="text-burgundy-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Timeless Recipe</h4>
                  <p className="text-xs text-gray-500">The same 23 flavors since day one. Never changed, never matched.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-burgundy-900/50 flex items-center justify-center shrink-0">
                  <Globe className="text-burgundy-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Global Icon</h4>
                  <p className="text-xs text-gray-500">From Texas to Tokyo, the mystery travels across every border.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-burgundy-900/50 flex items-center justify-center shrink-0">
                  <Droplets className="text-burgundy-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Perfect Fizz</h4>
                  <p className="text-xs text-gray-500">Precision carbonation for that signature sharp, refreshing bite.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-burgundy-900/50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-burgundy-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Quality First</h4>
                  <p className="text-xs text-gray-500">Premium ingredients sourced with integrity and passion.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
