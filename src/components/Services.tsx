import { Cat, Clock3, HandHeart, House, Utensils, Sparkles, Moon, MessageCircle } from 'lucide-react';
import { CatPaws } from '@/components/CatPaws';

const SERVICES = [
  { icon: House, title: 'Uma visitinha', description: 'Passo na sua casa para ver se está tudo bem, repor comida e água e deixar seu gato tranquilo.', duration: 'A combinar' },
  { icon: Moon, title: 'Você viaja, eu fico de olho', description: 'Cuido dele nos dias em que você estiver fora e mando notícias para você viajar sem preocupação.', duration: 'Por diária' },
  { icon: HandHeart, title: 'Carinho e brincadeira', description: 'Tem gato que quer colo, tem gato que quer correr pela casa. Eu respeito o tempo de cada um.', duration: 'A combinar' },
  { icon: Utensils, title: 'Comida e água fresquinhas', description: 'Sigo os horários e as quantidades que você deixar combinados.', duration: 'Na visita' },
  { icon: Sparkles, title: 'Caixinha limpa', description: 'Faço a limpeza da caixa de areia para ele ficar confortável e a casa continuar em ordem.', duration: 'Na visita' },
  { icon: Clock3, title: 'Do jeito que ele gosta', description: 'Você me conta a rotina, as manias e os cuidados especiais. Eu sigo tudo direitinho.', duration: 'Personalizado' },
];

interface ServicesProps { whatsappUrl: string; }

export function Services({ whatsappUrl }: ServicesProps) {
  return (
    <section className="relative overflow-hidden">
      <CatPaws className="opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-sm font-medium text-stone-600"><Cat className="h-4 w-4 text-amber-700" />O que eu faço</div>
        <h2 className="text-4xl font-bold tracking-tight text-stone-900">Cada gato tem um jeito. Eu acompanho o dele.</h2>
        <p className="mt-4 text-lg leading-relaxed text-stone-600">Nada de tirar seu gato do lugar onde ele se sente seguro. Eu vou até ele e cuido da rotina como você combinou comigo.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="group rounded-2xl border border-amber-200/70 bg-[#fffaf2] p-6 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 transition-transform group-hover:scale-110"><Icon className="h-7 w-7" /></div>
              <h3 className="mt-5 text-xl font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{service.description}</p>
              <div className="mt-4 flex items-center justify-between"><span className="text-xs font-medium text-stone-400">{service.duration}</span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-800">Conversar <MessageCircle className="h-3.5 w-3.5" /></a></div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
