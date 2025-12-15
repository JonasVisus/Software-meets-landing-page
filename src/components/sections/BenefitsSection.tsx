import SectionHeader from '@/components/ui/SectionHeader';
import { CaseBenefit } from '@/types';

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: CaseBenefit[];
}

export default function BenefitsSection({ title, subtitle, benefits }: BenefitsSectionProps) {
  return (
    <section id="benefits" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={title} 
          subtitle={subtitle}
          className="[&_h2]:text-primary-content [&_p]:text-primary-content/80"
        />
        
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-primary-content/10 backdrop-blur-sm">
          {benefits.map((benefit, index) => (
            <div key={index} className="stat place-items-center">
              {benefit.metric && (
                <div className="stat-value text-primary-content">
                  {benefit.metric}
                </div>
              )}
              <div className="stat-title text-primary-content/90 font-semibold">
                {benefit.title}
              </div>
              <div className="stat-desc text-primary-content/70">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
