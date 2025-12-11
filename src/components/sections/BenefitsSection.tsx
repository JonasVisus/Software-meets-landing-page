import SectionHeader from '@/components/ui/SectionHeader';
import { CaseBenefit } from '@/types';

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: CaseBenefit[];
}

export default function BenefitsSection({ title, subtitle, benefits }: BenefitsSectionProps) {
  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <SectionHeader 
          title={title} 
          subtitle={subtitle}
          className="text-white [&_h2]:text-white [&_p]:text-primary-100"
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors"
            >
              {benefit.metric && (
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {benefit.metric}
                </div>
              )}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-100 text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
