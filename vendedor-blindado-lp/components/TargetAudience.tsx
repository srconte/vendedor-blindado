import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Target, Ban } from 'lucide-react';

const FOR_WHO = [
  "Vendedores que desejam aumentar drasticamente suas taxas de fechamento.",
  "Empreendedores que precisam negociar diariamente com clientes e fornecedores.",
  "Profissionais que lidam com clientes difíceis, estressados ou mal-educados.",
  "Quem deseja dominar a arte da persuasão ética e criar relacionamentos duradouros.",
  "Pessoas tímidas que travam na hora de falar o preço ou cobrar."
];

const NOT_FOR_WHO = [
  "Pessoas que procuram uma 'fórmula mágica' para ganhar dinheiro sem trabalho.",
  "Quem acredita que vender é enganar ou manipular as pessoas a qualquer custo.",
  "Preguiçosos que não estão dispostos a estudar e aplicar as técnicas no dia a dia.",
  "Quem acha que já sabe de tudo e não tem humildade para aprender novas estratégias.",
  "Vendedores que preferem empurrar produtos em vez de resolver problemas reais."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Elementos de fundo decorativos */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Este treinamento é <span className="text-primary-500">para você?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não queremos qualquer um no nosso time. O Vendedor Blindado é um método sério para profissionais comprometidos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card Verde - Para quem é */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-950/50 border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/60 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400" />
            <div className="absolute -right-10 -top-10 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors duration-500">
                <Target size={200} strokeWidth={1} />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Para quem <span className="text-emerald-400">É</span> o curso</h3>
            </div>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {FOR_WHO.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle2 size={20} className="text-emerald-500 mt-1 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Card Vermelho - Para quem NÃO é */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-950/50 border border-red-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-red-500/60 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />
            <div className="absolute -right-10 -top-10 text-red-500/5 group-hover:text-red-500/10 transition-colors duration-500">
                <Ban size={200} strokeWidth={1} />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-500/10 rounded-xl text-red-400 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <XCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Para quem <span className="text-red-500">NÃO É</span> o curso</h3>
            </div>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {NOT_FOR_WHO.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <XCircle size={20} className="text-red-500 mt-1 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;