import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseBySlug, allCases } from '@/data/cases';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

interface CasePageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all cases
export async function generateStaticParams() {
  return allCases.map((caseData) => ({
    slug: caseData.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const caseData = getCaseBySlug(params.slug);
  
  if (!caseData) {
    return {
      title: 'Case nicht gefunden',
    };
  }

  return {
    title: caseData.seoTitle,
    description: caseData.seoDescription,
    keywords: caseData.keywords,
    openGraph: {
      title: caseData.seoTitle,
      description: caseData.seoDescription,
      type: 'website',
    },
  };
}

export default function CasePage({ params }: CasePageProps) {
  const caseData = getCaseBySlug(params.slug);

  if (!caseData) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={caseData.heroTitle}
        subtitle={caseData.heroSubtitle}
        ctaText={caseData.heroCTA}
        ctaLink={caseData.ctaLink}
        secondaryCTA={{
          text: 'Mehr erfahren',
          link: '#features',
        }}
        backgroundImage={caseData.heroImage}
      />

      {/* Company Badge */}
      <section className="py-8 bg-white border-b border-secondary-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Entwickelt für {caseData.company}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>{caseData.industry}</span>
            <span className="hidden sm:inline">•</span>
            <span>{caseData.category}</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection
        title={caseData.featuresTitle}
        subtitle={caseData.featuresSubtitle}
        features={caseData.features}
      />

      {/* Benefits Section */}
      <BenefitsSection
        title={caseData.benefitsTitle}
        subtitle={caseData.benefitsSubtitle}
        benefits={caseData.benefits}
      />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={caseData.testimonials} />

      {/* FAQ Section */}
      <FAQSection faq={caseData.faq} />

      {/* CTA Section */}
      <CTASection
        title={caseData.ctaTitle}
        subtitle={caseData.ctaSubtitle}
        buttonText={caseData.ctaButton}
        buttonLink={caseData.ctaLink}
      />
    </>
  );
}
