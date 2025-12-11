import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  secondaryCTA?: {
    text: string;
    link: string;
  };
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink = '/kontakt',
  secondaryCTA,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      
      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
            <Button href={ctaLink} size="lg">
              {ctaText}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.link} variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>

        {/* Optional Hero Image Placeholder */}
        {backgroundImage && (
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl h-64 md:h-96 flex items-center justify-center">
              <span className="text-secondary-400">Hero Image Placeholder</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
