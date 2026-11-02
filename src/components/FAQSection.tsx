import React, { useState } from 'react';
import { SARD_FAQS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, MessageSquare, Mail } from 'lucide-react';

interface FAQSectionProps {
  onOpenSizeGuide: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenSizeGuide }) => {
  const { language, isRtl, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="sard-faq" className="py-24 bg-[#0b0c0e] border-b border-[#212328]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#c7a76c] mb-2">
            {t('CLIENT CONCIERGE & CARE', 'خدمة وتجربة العملاء')}
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
            {t('Frequently Inquired Questions', 'الأسئلة الشائعة')}
          </h2>
          <p className="text-lg text-[#828694] mt-2">
            {t(
              'Everything you need to know about sizing, shipping, and exchanges',
              'كل ما ترغب في معرفته عن المقاسات، الشحن، والاستبدال'
            )}
          </p>
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-4">
          {SARD_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = language === 'ar' ? faq.questionAr : faq.question;
            const answer = language === 'ar' ? faq.answerAr : faq.answer;

            return (
              <div
                key={idx}
                className="bg-[#101217] border border-[#1f2229] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-white group cursor-pointer focus:outline-none"
                >
                  <span className={`font-serif text-lg text-white font-medium group-hover:text-[#c7a76c] transition-colors ${isRtl ? 'pl-4 text-right' : 'pr-4 text-left'}`}>
                    {question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#828694] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className={`px-6 pb-6 pt-1 text-sm text-[#9da0aa] leading-relaxed border-t border-[#181a20] ${isRtl ? 'text-right' : 'text-left'}`}>
                    <p>{answer}</p>
                    {idx === 1 && (
                      <div className="mt-4 pt-3 border-t border-[#212328]">
                        <button
                          onClick={onOpenSizeGuide}
                          className="text-xs uppercase tracking-widest text-[#c7a76c] hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          {t(
                            'Open Interactive Size Guide & Garment Dimensions (M, L, XL, XXL) →',
                            '← فتح دليل المقاسات والأبعاد الدقيقة (M – L – XL – XXL)'
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-16 p-8 bg-[#12141a] border border-[#212328] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl text-white font-medium">
              {t('Have a tailored question for SARD?', 'هل لديك استفسار خاص لفريق سَــــرد؟')}
            </h3>
            <p className="text-xs text-[#828694] mt-1">
              {t(
                'Our Cairo concierge is available Saturday to Thursday, 10 AM to 8 PM.',
                'فريق خدمة عملاء القاهرة متاح من السبت إلى الخميس، من ١٠ صباحاً حتى ٨ مساءً.'
              )}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201039442061"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#1a1d25] hover:bg-[#232733] border border-[#2c2f3a] text-xs uppercase tracking-wider text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#c7a76c]" />
              <span>{t('WhatsApp Concierge (+20 103 944 2061)', 'واتساب سَرد (2061 944 103 20+)')}</span>
            </a>
            <a
              href="mailto:care@sard-eg.com"
              className="px-4 py-2.5 bg-[#1a1d25] hover:bg-[#232733] border border-[#2c2f3a] text-xs uppercase tracking-wider text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#c7a76c]" />
              <span>care@sard-eg.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
