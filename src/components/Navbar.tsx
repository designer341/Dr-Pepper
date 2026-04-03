import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Flavors", href: "#flavors" },
    { name: "Our Story", href: "#story" },
    { name: "Merch", href: "#merch" },
    { name: "Find Us", href: "#find-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-burgundy-700 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white font-black text-xl">V</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase">
            Velvet<span className="text-burgundy-600">Fizz</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-burgundy-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button
            onClick={onOpenCart}
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-burgundy-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-burgundy-950"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <button className="flex-1 py-3 bg-burgundy-700 rounded-lg font-bold uppercase text-sm">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
