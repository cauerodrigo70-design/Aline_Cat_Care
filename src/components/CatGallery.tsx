import { ArrowUpRight } from 'lucide-react';

const CAT_PHOTOS = [
  { src: '/images/4.jpeg', alt: 'Gato branco descansando na luz do sol', label: 'Tempo para relaxar', className: 'md:col-span-2 md:row-span-2' },
  { src: '/images/5.jpeg', alt: 'Gato cinza olhando para a câmera', label: 'Olhar atento', className: 'md:col-span-1 md:row-span-2' },
  { src: '/images/1.jpeg', alt: 'Gato sendo escovado', label: 'Cuidado nos detalhes', className: 'md:col-span-1' },
  { src: '/images/2.jpeg', alt: 'Gato branco recebendo carinho', label: 'Carinho no ritmo dele', className: 'md:col-span-1' }
];

export function CatGallery() {
  return <section id="momentos" className="bg-[#3b2017] text-[#fffaf3]" data-reveal><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-[#e59b88]">Momentos reais</p><h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">Cuidar também é saber observar.</h2></div><p className="max-w-xs text-sm leading-6 text-[#ead6cd]">Cada foto conta um pouco da confiança que se constrói quando o gato pode continuar sendo ele mesmo.</p></div><div className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[150px] md:grid-cols-4">{CAT_PHOTOS.map((photo) => <figure key={photo.src} className={`group relative overflow-hidden rounded-2xl bg-[#3b2017] ${photo.className}`}><img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: photo.src === '/images/4.jpeg' ? 'center 24%' : 'center' }} /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 pt-16"><figcaption className="text-sm font-semibold text-white">{photo.label}</figcaption><ArrowUpRight className="h-5 w-5 text-[#e59b88] opacity-0 transition group-hover:opacity-100" /></div></figure>)}</div></div></section>;
}
