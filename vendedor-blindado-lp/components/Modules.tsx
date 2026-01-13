import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_MODULES, ICONS_MAP } from '../constants';
import { CheckCircle2, PlayCircle, Award, Smartphone, MessageSquare, Infinity, Plus } from 'lucide-react';
import Button from './Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const EXTRAS = [
  {
    icon: Award,
    title: "Certificado Oficial",
    desc: "Reconhecimento profissional ao concluir"
  },
  {
    icon: Infinity,
    title: "Acesso Vitalício",
    desc: "Reveja as aulas sempre que precisar"
  },
  {
    icon: MessageSquare,
    title: "Suporte Tira-Dúvidas",
    desc: "Direto na plataforma de alunos"
  },
  {
    icon: Smartphone,
    title: "Assista onde quiser",
    desc: "Compatível com Celular, Tablet e TV"
  }
];

const Modules: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Um pouco sobre o <span className="text-primary-500">curso</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Um arsenal completo de técnicas testadas no campo de batalha.
          </motion.p>
        </div>

        {COURSE_MODULES.map((module) => (
          <div key={module.id} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-primary-600/20 text-primary-400 px-3 py-1 rounded text-sm font-bold uppercase tracking-wider border border-primary-600/30">
                {module.title}
              </span>
              <h3 className="text-2xl font-semibold text-white">{module.subtitle}</h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {module.lessons.map((lesson) => {
                const IconComponent = ICONS_MAP[lesson.id as keyof typeof ICONS_MAP];
                
                return (
                  <motion.div 
                    key={lesson.id}
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-900/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white text-primary-400 transition-colors duration-300">
                      {IconComponent ? <IconComponent size={24} /> : <PlayCircle size={24} />}
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                      {lesson.title.split(':')[0]}
                    </h4>
                    <p className="text-sm font-medium text-primary-300 mb-3 block">
                      {lesson.title.split(':')[1]}
                    </p>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {lesson.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 size={14} className="text-green-500" />
                      <span>Conteúdo prático</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}

        {/* Seção "E muito mais..." para dar profundidade ao curso */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-slate-800/50 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-full mb-6 border border-slate-800 shadow-xl">
             <Plus className="text-primary-500" size={32} />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            E não para por aí...
          </h3>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Ao se tornar um Vendedor Blindado, você recebe acesso a um ecossistema completo de aprendizado.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {EXTRAS.map((extra, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors"
              >
                <extra.icon size={32} className="text-primary-400 mb-3" />
                <h4 className="font-bold text-white mb-1">{extra.title}</h4>
                <p className="text-xs text-slate-500">{extra.desc}</p>
              </motion.div>
            ))}
          </div>

          <Button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-12"
          >
            Quero acessar todo o conteúdo
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Modules;