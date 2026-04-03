import { motion } from "motion/react";
import { Plus, Star, Zap } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Velvet",
    flavor: "The Original 23",
    color: "bg-burgundy-800",
    price: "$2.49",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Midnight Cherry",
    flavor: "Dark & Intense",
    color: "bg-red-950",
    price: "$2.99",
    tag: "Limited",
  },
  {
    id: 3,
    name: "Creamy Vanilla",
    flavor: "Smooth Finish",
    color: "bg-orange-900",
    price: "$2.99",
    tag: "New",
  },
  {
    id: 4,
    name: "Zero Mystery",
    flavor: "Sugar Free",
    color: "bg-zinc-900",
    price: "$2.49",
    tag: "Zero Sugar",
  },
];

export default function ProductShowcase({ onAddToCart }: { onAddToCart: (product: any) => void }) {
  return (
    <section id="flavors" className="py-24 bg-burgundy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-4">
              Pick Your <span className="text-burgundy-600">Poison.</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              From the original blend to our boldest experiments. Find the flavor that speaks to your soul.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 glass rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              All Flavors
            </button>
            <button className="px-6 py-2 bg-white text-burgundy-950 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Bundles
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-[2rem] p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:shadow-burgundy-900/40">
                {/* Product Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 rounded-full bg-burgundy-700 text-[10px] font-bold uppercase tracking-widest">
                    {product.tag}
                  </span>
                </div>

                {/* Placeholder Can */}
                <div className="relative aspect-[4/5] mb-8 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className={`w-32 h-56 ${product.color} rounded-[2rem] shadow-xl border-2 border-white/10 flex flex-col items-center justify-center p-4 overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <span className="text-xs font-black italic tracking-tighter opacity-50">VELVET</span>
                    <span className="text-2xl font-black italic tracking-tighter">FIZZ</span>
                    <div className="mt-auto w-full h-1 bg-white/20 rounded-full" />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${product.color} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500`} />
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.flavor}</p>
                    </div>
                    <span className="text-xl font-black text-burgundy-500">{product.price}</span>
                  </div>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-burgundy-600 text-burgundy-600" />
                    ))}
                    <span className="text-[10px] text-gray-500 ml-2">(1.2k Reviews)</span>
                  </div>

                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full py-4 bg-white/5 hover:bg-burgundy-700 text-white rounded-xl font-bold uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <Plus size={16} className="group-hover/btn:rotate-90 transition-transform" /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
