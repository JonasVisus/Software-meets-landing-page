'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CaseFAQ } from '@/types';

interface FAQSectionProps {
  faq: CaseFAQ[];
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-secondary-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary-600 transition-colors"
      >
        <span className="font-semibold text-lg text-secondary-900 pr-4">
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-secondary-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection({ faq }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faq.length === 0) return null;

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader 
          title="Häufig gestellte Fragen" 
          subtitle="Finden Sie Antworten auf die wichtigsten Fragen"
        />
        
        <div className="max-w-3xl mx-auto">
          {faq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
