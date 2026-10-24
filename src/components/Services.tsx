import { Clock3, HandHeart, House, Sparkles, Stethoscope, Syringe, Utensils, Camera, Brush, Trash2 } from 'lucide-react';

const SERVICES = [
  { icon: House, title: 'Visita em casa', description: 'Vou até o espaço onde seu gato se sente seguro para cuidar dele sem alterar a rotina.' },
  { icon: Utensils, title: 'Alimentação e água', description: 'Sigo os horários, quantidades e preferências que você deixar combinados.' },
  { icon: Sparkles, title: 'Caixinha em dia', description: 'Mantenho o ambiente limpo e confortável para ele e para a casa.' },
  { icon: HandHeart, title: 'Carinho no ritmo dele', description: 'Brincadeira, companhia ou espaço: cada gato recebe exatamente o que precisa.' },
  { icon: Clock3, title: 'Rotina personalizada', description: 'Você me conta as manias e cuidados especiais. Eu observo cada detalhe.' },
  { icon: Camera, title: 'Fotos e vídeos em tempo real', description: 'Durante toda a hospedagem ou visita, envio fotos e vídeos do seu gato para você acompanhar cada momento de perto.' },
  { icon: Stethoscope, title: 'Assistência veterinária 24h', description: 'Contato direto com suporte veterinário disponível 24 horas por dia, caso qualquer situação exija atenção imediata.' },
  { icon: HandHeart, title: 'Veterinária parceira', description: 'O serviço conta com uma veterinária parceira de confiança, pronta para atender qualquer necessidade que surja com o seu gato.' },
  { icon: Brush, title: 'Escovação dos pelos', description: 'Cuido da pelagem do seu gato com escovação cuidadosa, ajudando a manter os pelos saudáveis e a casa limpa.' },
  { icon: Trash2, title: 'Higienização das caixas de areia', description: 'As caixas de areia são limpas e higienizadas com regularidade para garantir um ambiente sempre agradável e saudável.' },
  { icon: Syringe, title: 'Administração de medicamentos', description: 'Administro medicamentos conforme a prescrição, com atenção aos horários e doses que o seu gato precisar.' },
];

interface ServicesProps { whatsappUrl: string; }

export function Services({ whatsappUrl }: ServicesProps) {
  return (
    <section id="servicos" className="bg-[#f8e8e4]" data-reveal>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-[#b85f57]">O que eu faço</p>
            <h2 className="mt-5 max-w-md font-display text-4xl leading-tight text-[#3b2017] sm:text-5xl">Um cuidado simples, feito com atenção.</h2>
            <p className="mt-6 max-w-md leading-7 text-[#80665b]">Nada de fórmulas prontas. A visita é pensada para o temperamento, os hábitos e as necessidades do seu gato.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full bg-[#b85f57] px-6 py-3.5 text-[17px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#934943]">
              Montar um cuidado
            </a>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description }, i) => (
              <li
                key={title}
                className="group relative flex flex-col gap-4 rounded-2xl bg-[#fffaf3] p-6 ring-1 ring-[#3b2017]/10 transition hover:-translate-y-1 hover:ring-[#b85f57]/40 hover:shadow-xl hover:shadow-[#b85f57]/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8e8e4] ring-1 ring-[#3b2017]/10 transition group-hover:ring-[#b85f57]/40">
                  <Icon className="h-5 w-5 text-[#b85f57] transition group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#b85f57]/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-display text-lg leading-tight text-[#3b2017] sm:text-xl">{title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-[#80665b]">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
