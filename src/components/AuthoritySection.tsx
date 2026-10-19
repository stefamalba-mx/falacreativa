import React from 'react';
import { 
  Building2, 
  Globe2, 
  Award, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp,
  Landmark,
  Zap,
  Briefcase,
  HeartPulse,
  Smartphone
} from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  const metrics = [
    {
      value: '+12',
      label: 'Años de Experiencia',
      sub: 'En consultoría de alta dirección y RRPP',
      icon: Award,
    },
    {
      value: '+45',
      label: 'Corporaciones Asesoradas',
      sub: 'En sectores regulados y mercados competitivos',
      icon: Building2,
    },
    {
      value: '98%',
      label: 'Índice de Satisfacción',
      sub: 'Directores y portavoces ejecutivos formados',
      icon: ShieldCheck,
    },
    {
      value: '8',
      label: 'Países de Alcance',
      sub: 'Red de medios y alianzas en Iberoamérica',
      icon: Globe2,
    },
  ];

  const trustedSectors = [
    { name: 'Banca & Servicios Financieros', icon: Landmark, tag: 'Finanzas' },
    { name: 'Energía & Sostenibilidad', icon: Zap, tag: 'ESG / Transición' },
    { name: 'Tecnología & Telecom B2B', icon: Smartphone, tag: 'Innovación' },
    { name: 'Consumo Masivo & Retail', icon: Briefcase, tag: 'Multinacional' },
    { name: 'Salud & Ciencias Médicas', icon: HeartPulse, tag: 'Farmacéutica' },
  ];

  return (
    <section id="autoridad" className="bg-[#0F172A] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background grid line */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Authority Quote & Positioning Banner */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>Credenciales & Liderazgo de Opinión</span>
          </div>
          
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-100 leading-snug">
            &ldquo;La reputación corporativa no se construye con promesas vacías, sino con la <span className="text-amber-400 font-semibold">coherencia estratégica</span> entre la narrativa institucional, la preparación de sus portavoces y el impacto social tangible.&rdquo;
          </blockquote>

          <div className="pt-2 text-xs text-slate-400 font-medium">
            Estefanía Martínez Alba · Fundadora & Consultora Principal de Fala Creativa
          </div>
        </div>

        {/* Solid Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16 border-b border-slate-800">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 text-center space-y-2 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-slate-200">
                  {m.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {m.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trusted Sectors & Authority Elements */}
        <div className="pt-12">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Sectores estratégicos con experiencia comprobada
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustedSectors.map((sector, i) => {
              const SIcon = sector.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/70 transition-all text-center group"
                >
                  <SIcon className="w-6 h-6 text-amber-400/80 group-hover:text-amber-400 transition-colors mb-2" />
                  <span className="text-xs font-semibold text-slate-200">
                    {sector.name}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    {sector.tag}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Acuerdos de confidencialidad estrictos (NDA)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Protocolos alineados a estándares ESG & Global Reporting
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Monitoreo y respuesta 24/7 en crisis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
