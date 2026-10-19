import React from 'react';
import { Quote, Star, CheckCircle, TrendingUp, Building } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      id: 'testimonial-carla',
      name: 'Carla Valenzuela M.',
      role: 'Directora de Asuntos Corporativos & Reputación',
      company: 'Grupo Financiero Andino',
      avatarGradient: 'from-amber-600 to-amber-800',
      initials: 'CV',
      review:
        'Fala Creativa redefinió por completo nuestra estrategia de vocería en un momento de reestructuración corporativa crucial. El entrenamiento a nuestros directores fue de nivel mundial: aprendieron a transmitir solidez, anticipar crisis y proyectar tranquilidad a los inversores. Logramos una cobertura mediática 100% positiva y un blindaje de marca sin fisuras.',
      metricHighlight: '+65% Cobertura favorable en prensa económica',
      secondaryMetric: '0 incidentes reputacionales en 18 meses',
      sector: 'Finanzas & Inversión',
    },
    {
      id: 'testimonial-marcelo',
      name: 'Marcelo Sotomayor E.',
      role: 'VP de Sostenibilidad & Creación de Valor Compartido',
      company: 'NovaTech Iberoamérica',
      avatarGradient: 'from-slate-700 to-slate-900',
      initials: 'MS',
      review:
        'Articular iniciativas de sostenibilidad que trasciendan el discurso y conecten con la rentabilidad y con los colaboradores parecía una utopía hasta que colaboramos con Fala Creativa. Su metodología de Creación de Valor Compartido (CSV) y Employee Engagement transformó a nuestros 2,500 empleados en los mayores embajadores de la marca.',
      metricHighlight: '+42% en Engagement Index interno',
      secondaryMetric: '12 Alianzas estratégicas de alto impacto',
      sector: 'Tecnología & ESG',
    },
  ];

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Prueba Social & Resultados Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Lo que dicen los líderes corporativos que confían en Fala Creativa
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Testimonios directos de ejecutivos que han transformado sus relaciones públicas, su vocería y su impacto social junto a nuestro equipo.
          </p>
        </div>

        {/* Two Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Mark & Sector */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t.sector}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 italic">
                &ldquo;{t.review}&rdquo;
              </blockquote>

              {/* Quantified Impact Badge */}
              <div className="p-3.5 mb-6 rounded-xl bg-amber-50/70 border border-amber-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="text-xs font-bold text-amber-900">
                    {t.metricHighlight}
                  </span>
                </div>
                <span className="text-[11px] text-amber-800/80 font-medium">
                  {t.secondaryMetric}
                </span>
              </div>

              {/* Author Info with Circular Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {/* Circular Avatar */}
                <div className="relative shrink-0">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-tr ${t.avatarGradient} flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-white`}
                    aria-label={`Foto de perfil de ${t.name}`}
                  >
                    <span>{t.initials}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center ring-2 ring-white">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {t.name}
                  </h3>
                  <p className="text-xs font-medium text-amber-700">
                    {t.role}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3 text-slate-400" />
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
