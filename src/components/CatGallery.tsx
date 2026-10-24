const CAT_PHOTOS = [
  { src: '/images/4.jpeg', alt: 'Gato branco descansando na luz do sol', label: 'Tempo para relaxar', className: 'md:col-span-2 md:row-span-2' },
  { src: '/images/5.jpeg', alt: 'Gato cinza olhando para a câmera', label: 'Olhar atento', className: 'md:col-span-1 md:row-span-2' },
  { src: '/images/1.jpeg', alt: 'Gato sendo escovado', label: 'Cuidado nos detalhes', className: 'md:col-span-1' },
  { src: '/images/2.jpeg', alt: 'Gato branco recebendo carinho', label: 'Carinho no ritmo dele', className: 'md:col-span-1' }
];

export function CatGallery() {
  return (
    <section id="momentos" className="bg-[#3b2017] text-[#fffaf3]" data-reveal>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow text-[#e59b88]">Momentos reais</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">Cuidar também é saber observar.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#ead6cd]">Cada foto conta um pouco da confiança que se constrói quando o gato pode continuar sendo ele mesmo.</p>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[160px] md:grid-cols-4">
          {CAT_PHOTOS.map((photo) => (
            <figure key={photo.src} className={`group relative overflow-hidden rounded-2xl bg-[#3b2017] ${photo.className}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: photo.src === '/images/4.jpeg' ? 'center 24%' : 'center' }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                <figcaption className="text-sm font-semibold text-white transition group-hover:translate-x-1">{photo.label}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
