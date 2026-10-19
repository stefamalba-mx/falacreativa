import { 
  Building2, 
  Newspaper, 
  Mic2, 
  HeartHandshake, 
  Users, 
  AlertTriangle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BOOKING_CALENDAR_URL } from '../config';

export const ServicesSection: React.FC = () => {
  const serviceOfferings = [
    {
      icon: Newspaper,
      title: 'Comunicación Corporativa & Relaciones Públicas',
      description:
        'Diseño y ejecución de planes integrales de comunicación externa, posicionamiento institucional y relación fluida con líderes de opinión, medios económicos y especializados.',
      deliverables: [
        'Estrategia de posicionamiento de marca corporativa',
        'Relaciones públicas institucionales y con medios Tier 1',
        'Creación y difusión de notas de prensa de alto impacto',
      ],
    },
    {
      icon: Mic2,
      title: 'Entrenamiento de Vocería (Media Training)',
      description:
        'Preparación intensiva para presidentes, directores y portavoces. Entrenamos habilidades discursivas, control emocional y agilidad ante preguntas incisivas.',
      deliverables: [
        'Simulacros de entrevistas con cámaras y micrófonos',
        'Estructura de mensajes clave y puentes de conversación',
        'Manual de vocería y directrices de expresión pública',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Creación de Valor Compartido (CSV) & RSC',
      description:
        'Superamos la filantropía tradicional para estructurar proyectos de valor compartido que generan beneficio económico para la empresa y progreso social para la comunidad.',
      deliverables: [
        'Diagnóstico y alineación de programas de sostenibilidad',
        'Estrategia de comunicación de impacto ESG y CSV',
        'Medición de retorno social y reputacional',
      ],
    },
    {
      icon: Users,
      title: 'Employee Engagement & Cultura Interna',
      description:
        'Alineación del equipo humano con el propósito corporativo. Creamos canales y narrativas que fomentan el orgullo de pertenencia y transforman al talento en promotores de marca.',
      deliverables: [
        'Campañas internas de cambio y cultura corporativa',
        'Estrategia de embajadores de marca internos (Advocacy)',
        'Eventos ejecutivos y town halls motivacionales',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Gestión de Crisis & Blindaje Reputacional',
      description:
        'Monitoreo preventivo y respuesta veloz en situaciones críticas para proteger el valor de la compañía, la confianza de inversionistas y la reputación pública.',
      deliverables: [
        'Manual de crisis y protocolos de actuación por niveles',
        'Gabinete de crisis y asesoría en tiempo real 24/7',
        'Planes de contención digital y recuperación de marca',
      ],
    },
    {
      icon: Building2,
      title: 'Relaciones Institucionales & Asuntos Públicos',
      description:
        'Mapeo de actores clave y articulación de sinergias estratégicas con organismos gremiales, entidades públicas y foros sectoriales.',
      deliverables: [
        'Mapas de poder y análisis de stakeholders prioritarios',
        'Posicionamiento del liderazgo en mesas de diálogo y paneles',
        'Monitoreo regulatorio y de tendencias sectoriales',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Servicios Especializados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Alcance integral para cada dimensión estratégica de tu empresa
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Metodologías modulares adaptadas al tamaño, industria y ciclo de madurez de cada organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceOfferings.map((s, idx) => {
            const SIcon = s.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                    <SIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {s.description}
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {s.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={BOOKING_CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Solicitar propuesta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
