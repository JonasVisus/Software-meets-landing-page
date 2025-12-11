import Link from 'next/link';
import { hubProducts } from '@/data/cases';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        
        <div className="relative container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              🚀 Innovative Software-Lösungen
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 animate-fade-in">
              Software, die Ihr{' '}
              <span className="gradient-text">Business transformiert</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Entdecken Sie unsere maßgeschneiderten Software-Lösungen für Industrie, E-Commerce und mehr. 
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
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10+', label: 'Jahre Erfahrung' },
              { value: '50+', label: 'Projekte' },
              { value: '98%', label: 'Kundenzufriedenheit' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-secondary-500 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions" className="section-padding bg-white">
        <div className="container-custom">
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
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-3xl mb-4">
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
      <section id="cases" className="section-padding bg-secondary-50">
        <div className="container-custom">
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
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-6xl">{product.icon}</span>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full">
                        {product.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-secondary-500 text-sm mb-3">
                      für {product.company}
                    </p>
                    
                    <p className="text-secondary-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center text-primary-600 font-medium">
                      <span>Mehr erfahren</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Vertraut von führenden Unternehmen" 
            subtitle="Wir arbeiten mit innovativen Unternehmen zusammen"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['Linde', 'Walbusch', 'Partner 3', 'Partner 4'].map((partner, index) => (
              <div 
                key={index}
                className="h-20 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-400 font-semibold text-lg"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-secondary-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für Ihre digitale Transformation?
            </h2>
            <p className="text-lg md:text-xl text-secondary-300 mb-8">
              Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit maßgeschneiderter Software voranbringen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" size="lg" className="bg-white text-secondary-900 hover:bg-secondary-100">
                Kostenlose Beratung
              </Button>
              <Button href="#cases" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Referenzen ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
