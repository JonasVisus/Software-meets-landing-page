import SectionHeader from '@/components/ui/SectionHeader';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { CaseFeature } from '@/types';

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: CaseFeature[];
}

export default function FeaturesSection({ title, subtitle, features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
