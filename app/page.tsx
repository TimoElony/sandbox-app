'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showJourneyModal, setShowJourneyModal] = useState(false);
  const [showHausanschlussModal, setShowHausanschlussModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-green-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold text-gray-900">Stadtname</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="hover:text-green-600 transition text-gray-600">Home</a>
            <a href="#services" className="hover:text-green-600 transition text-gray-600">Services</a>
            <a href="#about" className="hover:text-green-600 transition text-gray-600">Über uns</a>
            <a href="#contact" className="hover:text-green-600 transition text-gray-600">Kontakt</a>
            <a
              href="https://loomia.ecp.epilot.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition ml-2"
            >
              Mein Portal
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Willkommen in <span className="text-green-600">Stadtname</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Eine lebendige Gemeinschaft mit Charme, Geschichte und einem warmen Herz für alle Bewohner und Besucher.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#services"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Unsere Services
            </a>
            <a
              href="#contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
          <p className="text-gray-500 text-lg">📍 Unser schönes Stadtbild</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Unsere Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🏛️"
              title="Bürgerservice"
              description="Schnelle und unkomplizierte Bearbeitung Ihrer Anliegen im Rathaus und online."
            />
            <ServiceCard
              icon="🌳"
              title="Parks & Erholung"
              description="Gepflegte Parks, Spielplätze und Naherholungsgebiete für die ganze Familie."
            />
            <ServiceCard
              icon="🔌"
              title="Hausanschluss prüfen"
              description="Haben Sie schon einen Hausanschluss? Nur für Eigentümer verfügbar."
              onClick={() => setShowHausanschlussModal(true)}
            />
            <ServiceCard
              icon="📚"
              title="Bildung"
              description="Moderne Schulen, Bibliotheken und Weiterbildungsangebote."
            />
            <ServiceCard
              icon="🏥"
              title="Gesundheit"
              description="Ärzte, Apotheken und medizinische Versorgung direkt vor Ort."
            />
            <ServiceCard
              icon="🌐"
              title="Glasfaser"
              description="Prüfen Sie die Verfügbarkeit von Glasfaseranschlüssen und bestellen Sie Ihr Internet-Paket."
              onClick={() => setShowJourneyModal(true)}
            />
            <ServiceCard
              icon="👤"
              title="Mein persönliches Portal"
              description="Zugang zu Ihren persönlichen Daten und dem Status Ihrer laufenden Prozesse."
              href="https://loomia.ecp.epilot.io/"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Über unsere Stadt
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Stadtname ist eine charmante Gemeinde mit über 500 Jahren Geschichte. 
                Unsere Stadt verbindet Tradition mit Moderne und bietet eine hohe Lebensqualität 
                für unsere rund 15.000 Einwohner.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Wir sind stolz auf unsere aktive Gemeinschaft, lokale Geschäfte, 
                familienfreundliche Atmosphäre und die wunderschöne Lage im Grünen.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <StatCard number="15.000+" label="Einwohner" />
                <StatCard number="500+" label="Jahre Geschichte" />
                <StatCard number="50+" label="Vereine" />
                <StatCard number="5" label="Grundschulen" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-500">🏘️ Stadtansicht</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Kontakt
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Rathaus Stadtname</h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <span>
                    Hauptstraße 1<br />
                    12345 Stadtname
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span>+49 (0) 123 456-0</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <span>info@stadtname.de</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <span>
                    Mo-Fr: 8:00 - 16:00 Uhr<br />
                    Do: 8:00 - 18:00 Uhr
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Nachricht senden</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <textarea
                  placeholder="Ihre Nachricht"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Stadt Stadtname</h4>
              <p className="text-gray-400">
                Gemeinsam für eine lebenswerte Zukunft.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Schnelllinks</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition">Barrierefreiheit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Social Media</h4>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:text-green-400 transition">📘</a>
                <a href="#" className="hover:text-green-400 transition">📷</a>
                <a href="#" className="hover:text-green-400 transition">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Stadt Stadtname. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Hidden link to funktionstest - accessible via direct URL */}
      <Link href="/funktionstest" className="hidden">
        Funktionstest
      </Link>

      {/* Journey Modal - Glasfaser */}
      {showJourneyModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowJourneyModal(false)}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Glasfaser Verfügbarkeit prüfen</h2>
              <button
                onClick={() => setShowJourneyModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/funktionstest"
                className="w-full h-full border-0"
                title="Glasfaser Journey"
              />
            </div>
          </div>
        </div>
      )}

      {/* Journey Modal - Hausanschluss */}
      {showHausanschlussModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowHausanschlussModal(false)}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Hausanschluss beantragen</h2>
              <button
                onClick={() => setShowHausanschlussModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/hausanschluss"
                className="w-full h-full border-0"
                title="Hausanschluss Journey"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ icon, title, description, onClick, href }: { icon: string; title: string; description: string; onClick?: () => void; href?: string }) {
  const content = (
    <>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {(onClick || href) && (
        <div className="mt-4">
          <span className="text-green-600 font-semibold hover:text-green-700">
            {href ? 'Zum Portal →' : 'Jetzt prüfen →'}
          </span>
        </div>
      )}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition">
        {content}
      </a>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition">
      {content}
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-green-600 text-white rounded-lg p-4 text-center">
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}
