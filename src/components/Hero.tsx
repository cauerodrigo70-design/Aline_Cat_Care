import { Cat, Heart, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { CatPaws } from '@/components/CatPaws';

interface HeroProps {
  whatsappUrl: string;
}

export function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/40 to-orange-50/30">
      <CatPaws />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #78350f 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800">
              <Sparkles className="h-4 w-4" />
              Oi, eu sou a Aline
            </div>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-stone-900">
              Eu cuido do seu gato<br />
              <span className="text-amber-700">quando você não pode</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-stone-600">
              Faço visitas na sua casa para alimentar, brincar, limpar a caixinha e dar aquele carinho que seu gato já conhece, ou vai conhecer.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#1ebe57] hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>

            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-stone-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-700" />Na casa dele</div>
              <div className="flex items-center gap-2"><Heart className="h-4 w-4 fill-rose-400 text-rose-500" />Sem pressa, sem estresse</div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-200/40 to-orange-200/30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/20">
              <img src="/images/foto_da_dona_do_site.png" alt="Aline, cuidadora de gatos" className="h-full w-full object-cover" loading="eager" />
            </div>
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-stone-100 bg-white p-4 shadow-xl shadow-stone-900/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100"><Cat className="h-6 w-6 text-amber-700" /></div>
              <div><p className="text-sm font-semibold text-stone-900">Uma pessoa só</p><p className="text-xs text-stone-500">a Aline, sempre presente</p></div>
            </div>
            <div className="absolute -right-5 -top-5 flex h-20 w-20 rotate-6 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
              <img src="/images/gato1.png" alt="Gato branco bem cuidado" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
