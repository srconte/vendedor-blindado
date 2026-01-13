import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Check, Star, User } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPain = () => {
    document.getElementById('pain')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary-900/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
              <Star size={14} fill="currentColor" />
              Método Comprovado
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Venda para quem <br />
            diz <span className="text-red-500">"NÃO"</span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
            O manual completo para <strong>Vender, Resolver e Fidelizar</strong>. Aprenda a lidar com clientes estressados, objeções difíceis e feche negócios na vida real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button onClick={scrollToPain} className="text-lg px-10 shadow-primary-500/25">
              Quero ser um Vendedor Blindado
            </Button>
            <p className="text-slate-400 text-sm flex items-center gap-2 sm:hidden mt-2 justify-center">
              <Check size={16} className="text-green-500" /> Satisfação garantida
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <div className="bg-primary-900/50 p-1 rounded-full"><Check size={14} className="text-primary-400" /></div>
              Negociação
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary-900/50 p-1 rounded-full"><Check size={14} className="text-primary-400" /></div>
              Resolução de Conflitos
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary-900/50 p-1 rounded-full"><Check size={14} className="text-primary-400" /></div>
              Persuasão
            </div>
          </div>
        </motion.div>

        {/* Hero Image / Composition */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative block mt-8 lg:mt-0 h-full min-h-[400px] lg:min-h-[500px]"
        >
            <div className="relative z-10 h-full flex items-end justify-center pb-8">
                {/* Image Wrapper without overflow-hidden on parent to allow badge overlap */}
                <div className="relative w-full max-w-md lg:max-w-none">
                    
                    {/* Inner container for image with rounding and overflow hidden */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-primary-900/50 bg-slate-800">
                         <img 
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                            alt="Eduardo Conte - O Vendedor Blindado" 
                            className="w-full h-[450px] lg:w-[500px] lg:h-[600px] object-cover object-top opacity-90 hover:scale-105 transition-transform duration-700"
                         />
                         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>
                    </div>
                     
                     {/* Floating Badge - Author Presentation - Centered and Overlapping Bottom */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-primary-500/30 p-4 rounded-xl flex items-center gap-4 w-[85%] md:w-auto md:min-w-[300px] shadow-2xl z-20"
                     >
                        <div className="bg-primary-500/20 p-3 rounded-full shrink-0">
                            <User className="text-primary-400" size={24} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Quem sou eu</p>
                            <p className="font-bold text-white text-lg leading-tight whitespace-nowrap">Eduardo Conte</p>
                        </div>
                     </motion.div>
                </div>
            </div>
            
            {/* Decorative Grid Behind */}
            <div className="hidden lg:block absolute top-10 right-10 w-full h-full border-2 border-primary-500/20 rounded-2xl z-0 translate-x-4 translate-y-4"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;