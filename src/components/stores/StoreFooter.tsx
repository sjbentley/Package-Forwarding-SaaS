import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const StoreFooter: React.FC = () => {
  return (
    <footer className="bg-[#0D0F12] py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Plane className="h-5 w-5 md:h-6 md:w-6 text-deutscher-purple-light" />
              <span className="font-medium">PakSend</span>
            </div>
            <p className="text-sm md:text-base text-gray-400">
              Logistik für internationale Einkäufe.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Produkt</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#features"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Funktionen
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing-section"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Dokumentation
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Karriere
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Datenschutzrichtlinie
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Richtlinie
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} PakSend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;
