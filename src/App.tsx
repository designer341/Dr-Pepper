import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import BrandStory from "./components/BrandStory";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { motion, useScroll, useSpring } from "motion/react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  color: string;
}

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative selection:bg-burgundy-600 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-burgundy-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <div className="bg-burgundy-700 py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-4">
                One of a Kind Taste <span className="w-2 h-2 bg-white rounded-full" />
                23 Signature Flavors <span className="w-2 h-2 bg-white rounded-full" />
                Original Mystery <span className="w-2 h-2 bg-white rounded-full" />
              </span>
            ))}
          </motion.div>
        </div>

        <ProductShowcase onAddToCart={addToCart} />
        
        {/* Featured Banner */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-2">Limited Edition Drop</h3>
              <p className="text-gray-400">Get the Midnight Cherry bundle before it's gone forever.</p>
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="text-center">
                <p className="text-2xl font-black text-burgundy-500">12:45:08</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Time Remaining</p>
              </div>
              <button className="px-8 py-4 bg-white text-burgundy-950 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-all">
                Grab Bundle
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </section>

        <BrandStory />
        
        {/* Flavor Experience Interactive Section */}
        <section className="py-24 bg-black/40">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-16">
                Discover the <span className="text-burgundy-600">23.</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {["Cherry", "Vanilla", "Caramel", "Licorice", "Amaretto", "Almond", "Blackberry", "Apricot", "Ginger", "Lemon", "Orange", "Plum"].map((flavor, i) => (
                  <motion.div
                    key={flavor}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(114, 14, 14, 0.3)" }}
                    className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-default group"
                  >
                    <div className="w-8 h-8 rounded-full bg-burgundy-900/50 flex items-center justify-center group-hover:bg-burgundy-700 transition-colors">
                      <span className="text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">{flavor}</span>
                  </motion.div>
                ))}
                <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 bg-burgundy-800/20 border-burgundy-700/50">
                   <span className="text-xs font-bold uppercase tracking-widest text-burgundy-400">And 11 More...</span>
                </div>
              </div>
           </div>
        </section>

        <Newsletter />
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}
