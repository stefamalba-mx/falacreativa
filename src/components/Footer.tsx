import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BOOKING_CALENDAR_URL, LINKEDIN_PROFILE_URL } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="inline-block bg-white p-2.5 rounded-xl shadow-md border border-slate-800">
              <img
                src="./logo-fala-creativa.png"
                alt="Fala Creativa - Socio Corporativo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Socio corporativo estratégico en comunicación, relaciones públicas, vocería ejecutiva y Creación de Valor Compartido (CSV). Llevamos la reputación e impacto de tu negocio al siguiente nivel.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
              >
                <Linkedin className="w-4 h-4 text-amber-500" />
                <span>LinkedIn Estefanía Martínez Alba</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="hover:text-amber-400 transition-colors">
                  Beneficios clave
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  Servicios corporativos
                </a>
              </li>
              <li>
                <a href="#autoridad" className="hover:text-amber-400 transition-colors">
                  Autoridad y métricas
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-amber-400 transition-colors">
                  Testimonios ejecutivos
                </a>
              </li>
              <li>
                <a
                  href={BOOKING_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Agendar sesión estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Comunicación Corporativa 360°</li>
              <li>Relaciones Públicas & Media Relations</li>
              <li>Entrenamiento de Vocería (Media Training)</li>
              <li>Creación de Valor Compartido (CSV)</li>
              <li>Employee Engagement & Cultura</li>
              <li>Gestión de Crisis & Reputación</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Fala Creativa. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Consultoría Internacional</span>
            <span>·</span>
            <span>Políticas de Confidencialidad NDA</span>
            <span>·</span>
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Contacto Directo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
