import Button from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, subtitle, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-content mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-content/70 mb-8">
            {subtitle}
          </p>
          <Button href={buttonLink} size="lg" className="btn-accent">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
