import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ShieldCheck } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50 text-center relative overflow-hidden">
          
          {/* Header ATENÇÃO */}
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-black text-red-600 mb-6 tracking-tighter uppercase"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 4px 20px rgba(220, 38, 38, 0.25)' }}
          >
            ATENÇÃO
          </motion.h2>

          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Todo esse conteúdo, se comprado separadamente em plataformas digitais, custaria facilmente mais de <strong className="text-white">R$ 150,00</strong>, pela grande qualidade do conteúdo.
          </p>

          <p className="text-slate-400 text-lg mb-2">
            Mas você não vai investir nada perto disso.
          </p>

          {/* Old Price */}
          <div className="relative inline-block mb-8">
             <span className="text-red-400/70 text-2xl font-bold decoration-2 line-through decoration-red-500">
               Você pagaria R$ 97,90
             </span>
          </div>

          {/* Urgency */}
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
          >
            <h3 className="text-emerald-500 font-black text-4xl md:text-5xl mb-6 tracking-tight">
              Mas somente hoje...
            </h3>

            {/* Price Box */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-inner relative">
              <p className="text-slate-300 text-lg mb-2 font-medium">Garante tudo por</p>
              <div className="text-6xl md:text-7xl font-black text-emerald-400 tracking-tighter">
                R$ 67,90
              </div>
            </div>
          </motion.div>

          <Button fullWidth className="max-w-md mx-auto mb-8 text-xl">
            Sim! Quero Vender Mais
          </Button>

          {/* Footer of card */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-500 text-sm">
             <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" /> 7 dias de garantia incondicional
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" /> Pagamento 100% Seguro
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;