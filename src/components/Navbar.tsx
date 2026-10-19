import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BOOKING_CALENDAR_URL } from '../config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-24 sm:min-h-28 py-2 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark as a single element */}
        <a
          href="#"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group py-1"
          aria-label="Fala Creativa - Inicio"
        >
          <img
            src="./logo-fala-creativa.png"
            alt="Fala Creativa - Socio Corporativo"
            className="h-16 sm:h-20 md:h-22 w-auto object-contain transition-transform group-hover:scale-[1.03]"
          />
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#beneficios"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Beneficios
          </a>
          <a
            href="#servicios"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#autoridad"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Autoridad & Métricas
          </a>
          <a
            href="#testimonios"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            Testimonios
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={BOOKING_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Agendar sesión</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={BOOKING_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-semibold text-white bg-amber-600 rounded-lg inline-flex items-center gap-1"
          >
            <span>Agendar</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-700"
          >
            Beneficios clave
          </a>
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-700"
          >
            Servicios estratégicos
          </a>
          <a
            href="#autoridad"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-700"
          >
            Autoridad & Métricas
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-amber-700"
          >
            Casos de éxito
          </a>
          <div className="pt-2">
            <a
              href={BOOKING_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              Agendar sesión estratégica
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
