import { ArrowDownRight, Heart, MapPin, MessageCircle } from 'lucide-react';

interface HeroProps { whatsappUrl: string; }

export function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section id="inicio" className="hero-grid relative border-b border-[#3b2017]/10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div className="reveal max-w-xl">
          <p className="eyebrow text-[#b85f57]">Cuidado felino, com presença</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#3b2017] sm:text-6xl lg:text-[5.5rem]">A rotina deles, <em className="text-[#b85f57]">bem cuidada.</em></h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#80665b]">Visitas na sua casa para alimentar, brincar, limpar e acompanhar seu gato com calma, carinho e atenção aos detalhes.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#b85f57] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#a96546]/20 transition hover:-translate-y-0.5 hover:bg-[#934943]"><MessageCircle className="h-5 w-5" /> Quero conversar</a>
            <a href="#servicos" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#3b2017] transition hover:text-[#b85f57]">Conhecer o cuidado <ArrowDownRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 border-t border-[#3b2017]/10 pt-5 text-sm text-[#80665b]"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#b85f57]" /> Na casa dele</span><span className="flex items-center gap-2"><Heart className="h-4 w-4 text-[#b85f57]" /> Sem estresse</span></div>
        </div>
        <div className="reveal reveal-delay relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#f2b8ae]/35 blur-2xl" />
          <div className="relative grid grid-cols-[1.15fr_0.85fr] items-end gap-3 sm:gap-5">
            <div className="relative"><img src="/images/2.jpeg" alt="Gato branco sendo cuidado" className="hero-photo h-[420px] w-full rounded-[1.5rem] object-cover shadow-2xl sm:h-[560px]" loading="eager" /><img src="/images/Gatinho_Branco_em_Emblema_de_Amor.png" alt="Emblema de amor aos gatos" className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border-4 border-[#fffaf3] object-cover shadow-xl sm:-left-7 sm:h-32 sm:w-32" /></div>
            <div className="space-y-3 pb-8 sm:pb-14"><img src="/images/4.jpeg" alt="Gato cinza em um momento tranquilo" className="h-44 w-full rounded-[1.5rem] object-cover shadow-xl sm:h-64" loading="eager" /><div className="rounded-[1.5rem] bg-[#3b2017] p-5 text-white sm:p-6"><p className="font-display text-3xl text-[#e59b88]">01</p><p className="mt-2 text-sm leading-5 text-[#ead6cd]">Uma pessoa só acompanhando tudo.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
