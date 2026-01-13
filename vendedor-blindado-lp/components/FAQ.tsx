import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Quem avaliou O Vendedor Blindado?",
    answer: "Todas as avaliações mostradas aqui foram feitas por pessoas reais que compraram e deram sua opinião sobre o curso. A nota é o resultado da média das avaliações verificadas."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você tem 7 dias para testar o curso. Se não gostar, basta clicar em um botão na plataforma ou nos enviar um e-mail que devolvemos 100% do seu dinheiro. Sem letras miúdas."
  },
  {
    question: "O curso tem certificado?",
    answer: "Sim! Ao concluir todas as aulas, você recebe automaticamente um Certificado de Conclusão digital que pode ser compartilhado no LinkedIn e adicionado ao seu currículo."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu ritmo, e terá acesso a todas as futuras atualizações do curso sem pagar nada a mais."
  },
  {
    question: "Como acesso o material após a compra?",
    answer: "Assim que o pagamento for aprovado, você receberá um e-mail da plataforma de venda com seus dados de login. Você pode assistir pelo computador, tablet ou celular."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Você pode pagar via Cartão de Crédito (em até 12x), PIX (aprovação imediata), Boleto Bancário, PayPal, Cartão Virtual Caixa, entre outros."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start md:items-center justify-between gap-4 text-left group transition-all"
      >
        <span className={`text-base md:text-lg transition-colors font-light ${isOpen ? 'text-primary-400 font-medium' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 transition-transform duration-300 mt-1 md:mt-0 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus size={22} strokeWidth={1.5} className="text-primary-500" />
          ) : (
            <Plus size={22} strokeWidth={1.5} className="text-slate-600 group-hover:text-primary-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 text-slate-400 leading-relaxed pr-8 text-sm md:text-base font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-4">
            <HelpCircle size={32} strokeWidth={1.5} className="text-slate-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400 font-light">
            Tire suas dúvidas sobre o treinamento.
          </p>
        </div>

        <div className="space-y-2">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;