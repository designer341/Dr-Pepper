import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-burgundy-800/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-burgundy-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", x: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{
              y: "-10%",
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-burgundy-800/50 border border-burgundy-700 text-burgundy-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Est. 1885 • The Original Mystery
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6 uppercase italic tracking-tighter">
            One of a <br />
            <span className="text-gradient">Kind Taste.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
            Experience the complex blend of 23 signature flavors. Bold, energetic, and perfectly carbonated for those who dare to be different.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-burgundy-700 hover:bg-burgundy-600 text-white rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-burgundy-900/50">
              Shop Now <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
              <Play size={18} fill="currentColor" /> Watch Film
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-4 border-burgundy-950"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold">Join 2M+ Fans</p>
              <p className="text-xs text-gray-500">#VelvetFizzExperience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Floating Can Placeholder */}
          <div className="relative w-64 md:w-80 aspect-[1/2] bg-gradient-to-b from-burgundy-700 to-burgundy-900 rounded-[3rem] shadow-2xl shadow-black/50 border-4 border-burgundy-800 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="text-4xl font-black italic tracking-tighter mb-2">VELVET</span>
              <div className="w-full h-px bg-white/20 my-4" />
              <span className="text-6xl font-black italic tracking-tighter text-burgundy-600">FIZZ</span>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] opacity-50">Original Blend</p>
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            
            {/* Condensation Effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute bg-white/40 rounded-full blur-[1px]"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                    />
                ))}
            </div>
          </div>

          {/* Splash Effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#a81d1d" d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,78.2,-43.6C86.3,-29.8,90.7,-14.9,89.3,-0.8C87.9,13.3,80.7,26.6,72,39.1C63.3,51.6,53,63.3,40.3,71.1C27.6,78.9,13.8,82.8,-0.5,83.7C-14.8,84.6,-29.6,82.5,-42.6,75.1C-55.6,67.7,-66.8,55,-74.6,41C-82.4,27,-86.8,11.7,-85.7,-3.1C-84.6,-17.9,-78,-32.2,-68.8,-44.4C-59.6,-56.6,-47.8,-66.7,-34.7,-74.2C-21.6,-81.7,-10.8,-86.6,2.7,-91.3C16.2,-96,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
