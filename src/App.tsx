import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Code, 
  Layers 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Type Imports
import { ServiceItem } from './types';

// Component Imports
import AtmosphericBg from './components/AtmosphericBg';
import ServiceCard from './components/ServiceCard';
import TalkModal from './components/TalkModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: ServiceItem[] = [
    {
      title: "Desarrollo Frontend",
      description: "Arquitectura escalable y componentes de alto rendimiento para experiencias fluidas.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Diseño UX/UI",
      description: "Interfaces premium con estética moderna, funcional y orientada a la conversión.",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-surface text-white selection:bg-primary selection:text-surface-lowest font-sans antialiased">
      <AtmosphericBg />
      
      {/* HEADER Y NAVEGACIÓN */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <span className="font-display font-extrabold tracking-tighter text-xl cursor-default">
            STUDIO 24.
          </span>

          {/* MENÚ ESCRITORIO */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">
              Servicios
            </a>
            
            <Link to="/portfolio" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">
              Portafolio
            </Link>
            
            <a href="#contact" className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-primary text-surface-lowest px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Hablemos <ArrowRight className="w-4 h-4" />
          </button>

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface-dim/95 backdrop-blur-xl pt-24">
          <div className="flex flex-col gap-6 p-6">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-on-surface-variant hover:text-white">
              Servicios
            </a>
            
            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-on-surface-variant hover:text-white">
              Portafolio
            </Link>
            
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-on-surface-variant hover:text-white">
              Contacto
            </a>
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-4 bg-primary text-surface-lowest px-6 py-3 rounded-full font-bold flex justify-center items-center gap-2"
            >
              Hablemos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        
        {/* SECCIÓN HERO */}
        <section className="min-h-[60vh] flex flex-col justify-center mb-32">
          <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-6">
            DISEÑO <br/> Y DESARROLLO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PREMIUM.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-10">
            Construimos experiencias digitales de alto rendimiento. Arquitectura sólida, diseño estético y velocidad insuperable.
          </p>
        </section>

        {/* SECCIÓN SERVICIOS */}
        <section id="services" className="mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Servicios.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>
        
      </main>

      {/* MODAL DE CONTACTO */}
      {isModalOpen && <TalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      
    </div>
  );
}
