import { Cat, Heart, MessageCircle } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { CatPaws } from '@/components/CatPaws';
import { Services } from '@/components/Services';
import { AboutAline } from '@/components/AboutAline';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const WHATSAPP_NUMBER = '554797023121';
const WHATSAPP_MESSAGE = encodeURIComponent('Oi Aline! Vi seu site e queria conversar sobre cuidar do meu gato.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function App() {
  return (
    <div className="min-h-screen bg-[#f7f1e7] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200/60 bg-[#f7f1e7]/90 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-amber-400">
              <Cat className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Aline Cat Care</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#1ebe57] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <Hero whatsappUrl={WHATSAPP_URL} />
      <Services whatsappUrl={WHATSAPP_URL} />
      <AboutAline />

      <section className="relative overflow-hidden bg-[#eee5d7] border-y border-stone-200/70">
        <CatPaws className="opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-stone-900">É tudo bem simples</h2>
            <p className="mt-4 text-lg text-stone-600">Cuidado personalizado, do começo ao fim</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Me conta sobre ele', desc: 'Quero saber os horários, as manias e tudo que faz parte da rotina.' },
              { num: '02', title: 'A gente se conhece', desc: 'Você pode enviar fotos e me explicar os cuidados que ele precisa.' },
              { num: '03', title: 'Combinamos a visita', desc: 'Marcamos um horário bom para você e tranquilo para o seu gato.' },
            ].map((item) => (
              <div key={item.num} className="relative">
                <span className="text-5xl font-bold text-amber-100">{item.num}</span>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24">
        <CatPaws className="opacity-40" />
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-8 py-16 text-center">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white">Vai viajar ou passar o dia fora?</h2>
            <p className="mt-3 text-stone-300">Me chama no WhatsApp. A gente combina os cuidados e você fica mais tranquilo.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#1ebe57] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar com a Aline
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-[#e9dfd0]">
        <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <Cat className="h-4 w-4 text-amber-600" />
            <span className="font-semibold text-stone-700">Aline Cat Care</span>
            <span>— cuidados felinos feitos pela Aline</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-stone-400">
            Feito com <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" /> para gatos
          </div>
        </div>
      </footer>
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

export default App;
