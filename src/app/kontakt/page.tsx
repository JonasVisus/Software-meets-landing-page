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
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                      <label className="label" htmlFor="firstName">
                        <span className="label-text font-medium">Vorname *</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="input input-bordered w-full"
                        placeholder="Max"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label" htmlFor="lastName">
                        <span className="label-text font-medium">Nachname *</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="input input-bordered w-full"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <label className="label" htmlFor="email">
                      <span className="label-text font-medium">E-Mail *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input input-bordered w-full"
                      placeholder="max@unternehmen.de"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label" htmlFor="company">
                      <span className="label-text font-medium">Unternehmen</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="input input-bordered w-full"
                      placeholder="Musterfirma GmbH"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label" htmlFor="interest">
                      <span className="label-text font-medium">Interesse</span>
                    </label>
                    <select id="interest" name="interest" className="select select-bordered w-full">
                      <option value="">Bitte wählen</option>
                      <option value="prozessoptimierung">Prozessoptimierung</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="analytics">Data & Analytics</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div className="form-control w-full">
                    <label className="label" htmlFor="message">
                      <span className="label-text font-medium">Nachricht *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="textarea textarea-bordered w-full resize-none"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Nachricht senden
                  </Button>

                  <p className="text-sm text-base-content/60 text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="/datenschutz" className="link link-primary">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-4 mt-2">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">📧</span>
                      </div>
                      <div>
                        <div className="font-medium">E-Mail</div>
                        <a href="mailto:info@software-solutions.de" className="text-base-content/70 hover:text-primary">
                          info@software-solutions.de
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">📞</span>
                      </div>
                      <div>
                        <div className="font-medium">Telefon</div>
                        <a href="tel:+4912345678900" className="text-base-content/70 hover:text-primary">
                          +49 123 456 789 00
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">📍</span>
                      </div>
                      <div>
                        <div className="font-medium">Adresse</div>
                        <div className="text-base-content/70">
                          Musterstraße 123<br />
                          12345 Musterstadt<br />
                          Deutschland
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-primary to-primary/90 text-primary-content">
                <div className="card-body">
                  <h3 className="card-title text-xl">
                    Kostenlose Erstberatung
                  </h3>
                  <p className="opacity-90 mb-4">
                    Vereinbaren Sie ein unverbindliches Gespräch, um Ihre Anforderungen zu besprechen.
                  </p>
                  <ul className="space-y-2 opacity-90">
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
        </div>
      </section>
    </>
  );
}
