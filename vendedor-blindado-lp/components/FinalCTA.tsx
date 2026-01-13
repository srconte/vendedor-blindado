import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-slate-950 to-slate-950 z-0" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative glow effect on hover */}
          <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ainda está em dúvida?
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lembre-se: o risco é todo meu. Entre, assista às aulas e se não gostar, eu devolvo seu dinheiro. Você não tem nada a perder e uma carreira inteira a ganhar.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button onClick={scrollToPricing} className="text-lg px-12 py-5 shadow-xl shadow-primary-900/40">
              <span className="flex items-center gap-3">
                GARANTIR MINHA VAGA AGORA
                <ArrowRight size={20} />
              </span>
            </Button>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <ShieldCheck size={18} className="text-green-500" />
              <span>Garantia Blindada de 7 Dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;