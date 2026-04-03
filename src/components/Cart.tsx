import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  color: string;
}

export default function Cart({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}) {
  const subtotal = items.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-burgundy-950 border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-burgundy-500" />
                <h2 className="text-xl font-display font-bold uppercase tracking-tight">Your Stash</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-gray-600" />
                  </div>
                  <p className="text-gray-400">Your cart is as empty as a flat soda.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-burgundy-700 rounded-full font-bold uppercase text-xs tracking-widest"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className={`w-20 h-24 ${item.color} rounded-xl shrink-0 flex items-center justify-center shadow-lg`}>
                      <span className="text-[10px] font-black italic opacity-30">FIZZ</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-bold uppercase text-sm">{item.name}</h3>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-burgundy-500 font-bold text-sm mb-4">{item.price}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:bg-white/5 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-3 py-1 hover:bg-white/5 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4 bg-black/20">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Calculated at checkout</span>
                </div>
                <div className="pt-4 flex justify-between items-end">
                  <span className="text-lg font-display font-bold uppercase">Total</span>
                  <span className="text-2xl font-black text-burgundy-500">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-burgundy-700 hover:bg-burgundy-600 text-white rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-burgundy-900/40">
                  Checkout Now <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
