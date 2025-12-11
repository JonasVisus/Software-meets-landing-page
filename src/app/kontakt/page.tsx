import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Kontakt | Beratung anfordern',
  description: 'Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem Software-Projekt. Wir entwickeln maßgeschneiderte Lösungen für Ihr Unternehmen.',
};

export default function KontaktPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Lassen Sie uns sprechen
            </h1>
            <p className="text-lg text-secondary-600">
              Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="max@unternehmen.de"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Musterfirma GmbH"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-2">
                    Interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="prozessoptimierung">Prozessoptimierung</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="analytics">Data & Analytics</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Nachricht senden
                </Button>

                <p className="text-sm text-secondary-500 text-center">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <a href="/datenschutz" className="text-primary-600 hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  Kontaktinformationen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-secondary-900">E-Mail</div>
                      <a href="mailto:info@software-solutions.de" className="text-secondary-600 hover:text-primary-600">
                        info@software-solutions.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-secondary-900">Telefon</div>
                      <a href="tel:+4912345678900" className="text-secondary-600 hover:text-primary-600">
                        +49 123 456 789 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600">📍</span>
                    </div>
                    <div>
                      <div className="font-medium text-secondary-900">Adresse</div>
                      <div className="text-secondary-600">
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Kostenlose Erstberatung
                </h3>
                <p className="text-primary-100 mb-6">
                  Vereinbaren Sie ein unverbindliches Gespräch, um Ihre Anforderungen zu besprechen.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li className="flex items-center gap-2">
                    <span>✓</span> 30 Minuten kostenlos
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Unverbindlich
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Experten-Feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
