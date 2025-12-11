import Button from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, subtitle, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-secondary-900 to-secondary-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-secondary-300 mb-8">
            {subtitle}
          </p>
          <Button href={buttonLink} size="lg" className="bg-white text-secondary-900 hover:bg-secondary-100">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
