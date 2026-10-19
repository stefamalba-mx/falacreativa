import { 
  ShieldCheck, 
  Mic, 
  HeartHandshake, 
  ArrowRight, 
  Check, 
  TrendingUp, 
  Users2, 
  Layers
} from 'lucide-react';
import { BOOKING_CALENDAR_URL } from '../config';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      number: '01',
      title: 'Posicionamiento y RRPP Estratégicas',
      tagline: 'Construcción de reputación y blindaje de marca',
      description:
        'Construcción de reputación y blindaje de marca en entornos de alta exigencia. Diseñamos planes integrales de relaciones públicas, relaciones con medios clave y mapas de influencia que posicionan a tu organización como referente indiscutible del sector.',
      highlights: [
        'Gestión proactiva y protocolos de crisis mediática',
        'Relacionamiento con medios Tier 1 y editores de negocios',
        'Storytelling corporativo con impacto institucional',
      ],
      accentColor: 'amber',
    },
    {
      icon: Mic,
      number: '02',
      title: 'Entrenamiento de Vocería Ejecutiva',
      tagline: 'Liderazgo con autoridad y claridad',
      description:
        'Capacitación integral para líderes corporativos ante medios, inversores y paneles de industria. Convertimos a directores, CEOs y gerentes generales en portavoces persuasivos, elocuentes y preparados para situaciones de alta tensión.',
      highlights: [
        'Simulaciones de entrevistas televisivas y de prensa',
        'Dominio del mensaje clave y control de preguntas difíciles',
        'Comunicación no verbal y proyección de liderazgo',
      ],
      accentColor: 'slate',
    },
    {
      icon: HeartHandshake,
      number: '03',
      title: 'Valor Compartido y Engagement',
      tagline: 'Sostenibilidad (CSR) con rentabilidad y propósito',
      description:
        'Estrategias de sostenibilidad (CSR) y cultura interna que fidelizan al talento y generan impacto real. Integramos la Creación de Valor Compartido (CSV) en el corazón del negocio para convertir a los colaboradores en tus mejores embajadores de marca.',
      highlights: [
        'Programas de Creación de Valor Compartido (CSV)',
        'Estrategia de Employee Advocacy y orgullo de pertenencia',
        'Medición de impacto social y reputación ESG',
      ],
      accentColor: 'amber',
    },
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Pilares de Impacto Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Soluciones diseñadas para maximizar el capital reputacional de tu empresa
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Combinamos rigor consultivo internacional con ejecución creativa para alinear la comunicación, el liderazgo y el impacto social con los objetivos comerciales.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.number}
                className="relative flex flex-col justify-between p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-amber-300/80 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Top bar with icon and number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-mono font-bold text-slate-300 group-hover:text-amber-600/60 transition-colors">
                      {b.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mt-1 mb-4">
                    {b.tagline}
                  </p>

                  {/* Main Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {b.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/70">
                    {b.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Action link inside card */}
                <div className="pt-8 mt-6 border-t border-slate-200/50">
                  <a
                    href={BOOKING_CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>Consultar plan para este pilar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA button below benefits */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-3 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-slate-700 px-3">
              ¿Listo para estructurar la estrategia de tu corporación?
            </span>
            <a
              href={BOOKING_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md shadow-amber-600/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Impulsa tu comunicación corporativa</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
