import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-500 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-4">&copy; {new Date().getFullYear()} Vendedor Blindado. Todos os direitos reservados.</p>
        <p>Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma.</p>
      </div>
    </footer>
  );
};

export default Footer;