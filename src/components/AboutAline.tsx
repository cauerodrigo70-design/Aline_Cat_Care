import { Camera, Heart, MapPin, ShieldCheck } from 'lucide-react';
import { CatPaws } from '@/components/CatPaws';

export function AboutAline() {
  return (
    <section className="relative overflow-hidden border-y border-stone-200/70 bg-[#fff8ee]">
      <CatPaws className="opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-amber-100/70 rotate-3" />
          <img src="/images/foto_da_dona_do_site.png" alt="Aline em meio às flores" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
          <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl border border-stone-100 bg-white px-4 py-3 shadow-lg">
            <Heart className="h-5 w-5 fill-rose-400 text-rose-500" />
            <span className="text-sm font-semibold text-stone-800">Cuidado com afeto</span>
          </div>
        </div>

        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800"><Camera className="h-4 w-4" />Um pouco sobre mim</div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-stone-900">Eu gosto de cuidar de gatos respeitando o espaço de cada um.</h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">Eu sou a Aline. Criei a Aline Cat Care porque sei como é difícil viajar ou passar o dia fora pensando se o gato está bem. Minha ideia é simples: ir até a casa dele e cuidar do que for preciso, sem mudar a rotina e sem causar aquele estresse de levar para outro lugar.</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">Antes de começar, a gente conversa sobre a alimentação, a caixinha, os horários e as manias dele. Durante a visita, também posso mandar fotos e notícias, porque eu sei que dá saudade.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-[#f3e9da] p-4"><ShieldCheck className="h-5 w-5 text-emerald-600" /><p className="mt-2 text-sm font-semibold text-stone-800">Atenta</p><p className="mt-1 text-xs leading-relaxed text-stone-500">Observo e aviso você</p></div>
            <div className="rounded-xl bg-[#f3e9da] p-4"><MapPin className="h-5 w-5 text-amber-600" /><p className="mt-2 text-sm font-semibold text-stone-800">Na sua casa</p><p className="mt-1 text-xs leading-relaxed text-stone-500">Ele fica no cantinho dele</p></div>
            <div className="rounded-xl bg-[#f3e9da] p-4"><Heart className="h-5 w-5 text-rose-500" /><p className="mt-2 text-sm font-semibold text-stone-800">Sem pressa</p><p className="mt-1 text-xs leading-relaxed text-stone-500">Cada gato tem seu tempo</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
