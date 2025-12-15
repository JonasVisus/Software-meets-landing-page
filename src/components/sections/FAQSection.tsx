'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CaseFAQ } from '@/types';

interface FAQSectionProps {
  faq: CaseFAQ[];
}

export default function FAQSection({ faq }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faq.length === 0) return null;

  return (
    <section id="faq" className="section-padding bg-base-100">
      <div className="container-custom">
        <SectionHeader 
          title="Häufig gestellte Fragen" 
          subtitle="Finden Sie Antworten auf die wichtigsten Fragen"
        />
        
        <div className="max-w-3xl mx-auto join join-vertical w-full">
          {faq.map((item, index) => (
            <div 
              key={index} 
              className={`collapse collapse-arrow join-item border border-base-300 ${openIndex === index ? 'collapse-open' : 'collapse-close'}`}
            >
              <input 
                type="radio" 
                name="faq-accordion" 
                checked={openIndex === index}
                onChange={() => setOpenIndex(openIndex === index ? null : index)}
              />
              <div className="collapse-title text-lg font-semibold">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
