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
            {title}
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">
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
      </div>

      {/* Optional Hero Image Placeholder */}
      {backgroundImage && (
        <div className="mt-16 relative max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-base-200 to-base-300 rounded-2xl h-64 md:h-96 flex items-center justify-center">
            <span className="text-base-content/50">Hero Image Placeholder</span>
          </div>
        </div>
      )}
    </section>
  );
}
