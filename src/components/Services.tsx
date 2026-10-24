import { Clock3, HandHeart, House, MessageCircle, Sparkles, Utensils } from 'lucide-react';

const SERVICES = [
  { icon: House, number: '01', title: 'Visita em casa', description: 'Vou até o espaço onde seu gato se sente seguro para cuidar dele sem alterar a rotina.' },
  { icon: Utensils, number: '02', title: 'Alimentação e água', description: 'Sigo os horários, quantidades e preferências que você deixar combinados.' },
  { icon: Sparkles, number: '03', title: 'Caixinha em dia', description: 'Mantenho o ambiente limpo e confortável para ele e para a casa.' },
  { icon: HandHeart, number: '04', title: 'Carinho no ritmo dele', description: 'Brincadeira, companhia ou espaço: cada gato recebe exatamente o que precisa.' },
  { icon: Clock3, number: '05', title: 'Rotina personalizada', description: 'Você me conta as manias e cuidados especiais. Eu observo cada detalhe.' },
  { icon: MessageCircle, number: '06', title: 'Notícias para você', description: 'Durante as visitas, envio fotos e atualizações para você acompanhar de perto.' },
];

interface ServicesProps { whatsappUrl: string; }

export function Services({ whatsappUrl }: ServicesProps) {
  return <section id="servicos" className="bg-[#f8e8e4]" data-reveal><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow text-[#b85f57]">O que eu faço</p><h2 className="mt-5 max-w-md font-display text-4xl leading-tight text-[#3b2017] sm:text-5xl">Um cuidado simples, feito com atenção.</h2><p className="mt-6 max-w-md leading-7 text-[#80665b]">Nada de fórmulas prontas. A visita é pensada para o temperamento, os hábitos e as necessidades do seu gato.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#b85f57] hover:text-[#934943]">Montar um cuidado <span aria-hidden="true">↗</span></a></div><div className="grid gap-px overflow-hidden rounded-2xl border border-[#3b2017]/10 bg-[#3b2017]/10 sm:grid-cols-2">{SERVICES.map(({ icon: Icon, number, title, description }) => <article key={number} className="group bg-[#fffaf3] p-6 transition hover:bg-[#fffdf9] sm:p-7"><div className="flex items-start justify-between"><Icon className="h-6 w-6 text-[#b85f57] transition group-hover:scale-110" /><span className="font-mono text-xs text-[#9ba49f]">{number}</span></div><h3 className="mt-10 font-display text-2xl text-[#3b2017]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#80665b]">{description}</p></article>)}</div></div></div></section>;
}
