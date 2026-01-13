import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TargetAudience from './components/TargetAudience';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
        document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-primary-500 selection:text-white">
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>
        
        {/* Pain/Agitation Section - Added ID 'pain' */}
        <section id="pain" className="py-16 bg-slate-900 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              A maioria dos cursos ensina a vender no <span className="text-red-500">"Mundo Perfeito"</span>
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Mas você sabe que a realidade é diferente. O cliente está estressado, o orçamento está apertado e a concorrência é desleal. 
              O <strong>Vendedor Blindado</strong> foi criado para o mundo real. Para quando você precisa usar o WhatsApp para não perder o negócio e contornar objeções quando tudo parece perdido.
            </p>
          </div>
        </section>

        <section id="modules">
          <Modules />
        </section>

        <section id="target">
          <TargetAudience />
        </section>

        {/* Pricing já possui ID interno, mas para consistência do scroll com a navbar, mantemos o ID interno do componente ou ajustamos aqui. 
            Como o Navbar usa querySelector('#pricing'), e o componente Pricing tem <section id="pricing">, 
            não precisamos envelopar aqui, basta renderizar.
        */}
        <Pricing />
        
        <section id="faq">
          <FAQ />
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;