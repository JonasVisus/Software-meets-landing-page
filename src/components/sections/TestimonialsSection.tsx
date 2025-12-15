import SectionHeader from '@/components/ui/SectionHeader';
import { CaseTestimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: CaseTestimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Das sagen unsere Kunden" 
          subtitle="Erfahren Sie, wie unsere Lösungen echte Ergebnisse liefern"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                {/* Quote Icon */}
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote */}
                <blockquote className="text-base-content/80 text-lg mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar placeholder">
                    <div className="bg-gradient-to-br from-primary to-accent text-primary-content rounded-full w-12">
                      <span className="text-lg font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-base-content">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-base-content/60">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
