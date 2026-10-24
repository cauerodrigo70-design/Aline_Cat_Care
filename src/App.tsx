import { Cat, Heart, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutAline } from '@/components/AboutAline';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CatGallery } from '@/components/CatGallery';

const WHATSAPP_NUMBER = '554797023121';
const WHATSAPP_MESSAGE = encodeURIComponent('Oi Aline! Vi seu site e queria conversar sobre cuidar do meu gato.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf3] text-[#3b2017]">
      <header className="sticky top-0 z-40 border-b border-[#3b2017]/10 bg-[#fffaf3]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#3b2017] ring-2 ring-[#e8bd70]/40"><img src="/images/Gatinho_Branco_em_Emblema_de_Amor.png" alt="Emblema Aline Cat Care" className="h-full w-full object-cover" /></span>
            <span className="font-display text-xl font-semibold tracking-tight text-[#3b2017]">Aline Cat Care</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#80665b] md:flex">
            <a className="nav-link" href="#servicos">Serviços</a>
            <a className="nav-link" href="#sobre">Sobre mim</a>
            <a className="nav-link" href="#momentos">Momentos</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-[#3b2017] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3d4d47] md:inline-flex">
            <MessageCircle className="h-4 w-4 text-[#e59b88]" /> Agendar conversa
          </a>
          <button type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 text-[#26312e] md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#3b2017]/10 bg-[#fffaf3] px-6 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-semibold"><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre mim</a><a href="#momentos" onClick={() => setMenuOpen(false)}>Momentos</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#b85f57]">Falar no WhatsApp</a></div></nav>}
      </header>

      <main>
        <Hero whatsappUrl={WHATSAPP_URL} />
        <Services whatsappUrl={WHATSAPP_URL} />
        <CatGallery />
        <AboutAline />

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#3b2017] px-7 py-14 text-center text-white sm:px-12 lg:py-20">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#e8bd70]/20" />
            <div className="absolute -bottom-44 -left-20 h-80 w-80 rounded-full border border-[#e8bd70]/10" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow text-[#e59b88]">Vamos conversar</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Seu gato fica em casa. Você fica tranquilo.</h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#ead6cd]">Me conte um pouco sobre a rotina dele e eu preparo um cuidado do jeitinho que vocês precisam.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e59b88] px-7 py-4 text-sm font-bold text-[#26312e] transition hover:bg-[#f1cc8a] hover:-translate-y-0.5"><MessageCircle className="h-5 w-5" /> Falar com a Aline</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#3b2017]/10 bg-[#f8e8e4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#80665b] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="flex items-center gap-2"><Cat className="h-4 w-4 text-[#b85f57]" /><span className="font-semibold text-[#26312e]">Aline Cat Care</span><span>· cuidado felino em casa</span></div>
          <div className="flex items-center gap-1.5">Feito com <Heart className="h-3.5 w-3.5 fill-[#a96546] text-[#b85f57]" /> para eles</div>
        </div>
      </footer>
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

export default App;
