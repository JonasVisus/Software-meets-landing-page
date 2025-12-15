import Link from 'next/link';
import { hubProducts } from '@/data/cases';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[80vh] relative pt-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        
        <div className="hero-content text-center relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6 animate-fade-in">
              Software, die Ihr{' '}
              <span className="text-primary">Business transformiert</span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl mx-auto animate-fade-in">
              Lösungen Quantifizierbar machen - Entdecken Sie unsere maßgeschneiderten Software-Lösungen für Industrie, E-Commerce und mehr. 
              Von der Prozessoptimierung bis zur digitalen Transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button href="#cases" size="lg">
                Unsere Lösungen
              </Button>
              <Button href="/kontakt" variant="outline" size="lg">
                Kontakt aufnehmen
              </Button>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical sm:stats-horizontal shadow mt-16 bg-base-100">
              {[
                { value: '7+', label: 'Jahre Erfahrung' },
                { value: '30+', label: 'Projekte' },
                { value: '98%', label: 'Kundenzufriedenheit' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="stat place-items-center">
                  <div className="stat-value text-primary">{stat.value}</div>
                  <div className="stat-desc">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="py-16 md:py-24 lg:py-32 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Unsere Kernkompetenzen" 
            subtitle="Wir entwickeln Software-Lösungen, die echte Probleme lösen"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Prozessoptimierung',
                description: 'KI-gestützte Lösungen zur Optimierung Ihrer Geschäftsprozesse und Steigerung der Effizienz.',
              },
              {
                icon: '🛒',
                title: 'E-Commerce',
                description: 'Moderne Commerce-Plattformen mit Personalisierung, Analytics und Omnichannel-Integration.',
              },
              {
                icon: '📊',
                title: 'Data & Analytics',
                description: 'Datengetriebene Entscheidungen durch intelligente Analysen und Echtzeit-Dashboards.',
              },
            ].map((item, index) => (
              <Card key={index} hover>
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-4">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases / Products */}
      <section id="cases" className="py-16 md:py-24 lg:py-32 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Unsere Software-Lösungen" 
            subtitle="Entdecken Sie unsere erfolgreichen Entwicklungen für führende Unternehmen"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hubProducts.map((product) => (
              <Link 
                key={product.slug}
                href={`/cases/${product.slug}`}
                className="group"
              >
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image Placeholder */}
                  <figure className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-6xl">{product.icon}</span>
                  </figure>
                  
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge badge-primary badge-sm">
                        {product.category}
                      </span>
                      <span className="badge badge-ghost badge-sm">
                        {product.industry}
                      </span>
                    </div>
                    
                    <h3 className="card-title group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-base-content/60 text-sm">
                      für {product.company}
                    </p>
                    
                    <p className="text-base-content/70">
                      {product.description}
                    </p>
                    
                    <div className="card-actions justify-end mt-4">
                      <span className="text-primary font-medium flex items-center gap-2">
                        Mehr erfahren
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Vertraut von führenden Unternehmen" 
            subtitle="Wir arbeiten mit innovativen Unternehmen zusammen"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['Linde', 'Walbusch', 'Partner 3', 'Partner 4'].map((partner, index) => (
              <div 
                key={index}
                className="h-20 bg-base-200 rounded-xl flex items-center justify-center text-base-content/50 font-semibold text-lg"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-content mb-6">
              Bereit für Ihre digitale Transformation?
            </h2>
            <p className="text-lg md:text-xl text-neutral-content/70 mb-8">
              Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit maßgeschneiderter Software voranbringen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" size="lg" className="btn-accent">
                Kostenlose Beratung
              </Button>
              <Button href="#cases" variant="ghost" size="lg" className="text-neutral-content hover:bg-neutral-content/10">
                Referenzen ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
