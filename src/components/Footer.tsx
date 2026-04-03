import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-burgundy-700 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">
                Velvet<span className="text-burgundy-600">Fizz</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              The original mystery since 1885. Crafting unique experiences through a complex blend of 23 signature flavors.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-burgundy-700 transition-colors group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] mb-8 text-burgundy-500">Explore</h4>
            <ul className="space-y-4">
              {["All Flavors", "Limited Drops", "Merch Store", "Gift Cards", "Subscriptions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] mb-8 text-burgundy-500">Company</h4>
            <ul className="space-y-4">
              {["Our Story", "Careers", "Sustainability", "Press Room", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.3em] mb-8 text-burgundy-500">Support</h4>
            <ul className="space-y-4">
              {["Track Order", "Shipping Policy", "Returns", "FAQ", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © 2026 Velvet Fizz Beverage Co. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
