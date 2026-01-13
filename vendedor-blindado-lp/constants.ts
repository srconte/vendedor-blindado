import { Module } from './types';
import { Shield, Users, DollarSign, MessageCircle, AlertTriangle, Flame, Handshake, RotateCcw } from 'lucide-react';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: "Módulo 1",
    subtitle: "Fundamentos da Persuasão",
    lessons: [
      {
        id: 1,
        title: "Aula 01: A Primeira Impressão",
        description: "Como gerar confiança imediata (Rapport) e desarmar o cliente nos primeiros segundos.",
      },
      {
        id: 2,
        title: "Aula 02: Investigação Profunda",
        description: "Perguntas inteligentes para descobrir o que o cliente realmente precisa, não o que ele diz que quer.",
      },
      {
        id: 3,
        title: "Aula 03: Matando Objeções Clássicas",
        description: "Scripts prontos para contornar o 'Está caro', 'Vou pensar' e 'Vou falar com meu sócio'.",
      },
      {
        id: 4,
        title: "Aula 04: Técnicas de Fechamento",
        description: "Como conduzir o cliente para o 'Sim' naturalmente, sem ser o vendedor chato e insistente.",
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2",
    subtitle: "Gestão de Conflitos e Clientes Difíceis",
    lessons: [
      {
        id: 5,
        title: "Aula 05: Psicologia do Cliente Estressado",
        description: "Por que ele grita e como não absorver essa energia (Técnicas de Blindagem Emocional).",
      },
      {
        id: 6,
        title: "Aula 06: A Técnica do 'Bombeiro'",
        description: "O passo a passo para acalmar um cliente furioso em 3 minutos usando escuta ativa.",
      },
      {
        id: 7,
        title: "Aula 07: Negociando a Solução",
        description: "Como dizer 'não' para um pedido absurdo sem perder o cliente ou a venda.",
      },
      {
        id: 8,
        title: "Aula 08: Revertendo o Cancelamento",
        description: "Estratégias para recuperar a confiança e fidelizar quando a empresa comete um erro.",
      }
    ]
  }
];

export const ICONS_MAP = {
  1: Users,
  2: MessageCircle,
  3: DollarSign,
  4: Handshake,
  5: Shield,
  6: Flame,
  7: AlertTriangle,
  8: RotateCcw
};