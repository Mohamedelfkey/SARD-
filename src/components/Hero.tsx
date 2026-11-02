import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExplore: () => void;
  onReadStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onReadStory }) => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#212328]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background cinematic imagery with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/editorial/hero-campaign.jpg"
          alt="SARD Chapter 01 Campaign Editorial"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/50 to-[#0b0c0e]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0c0e]/40 to-[#0b0c0e]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        {/* Subtle kicker */}
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#c7a76c] mb-6">
          <span>{t('CHAPTER 01', 'الفصل الأول')}</span>
          <span className="text-[#555866]">·</span>
          <span>{t('AUTUMN / WINTER 2026', 'خريف / شتاء ٢٠٢٦')}</span>
          <span className="text-[#555866]">·</span>
          <span>{t('UNISEX HOODIES', 'هوديز للجنسين')}</span>
        </div>

        {/* Brand Lockup: English + Arabic */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-[0.18em] text-white">
            SARD
          </h1>
          <span className="hidden sm:inline text-3xl font-light text-[#4a4e5c]">|</span>
          <span className="font-arabic text-4xl sm:text-6xl text-[#dedfe3] tracking-wide font-normal">
            سَــــرد
          </span>
        </div>

        {/* Main Headline & Tagline directly underneath */}
        <div className="space-y-3 max-w-3xl mb-10">
          <p className="font-serif text-2xl sm:text-4xl text-[#f5f5f7] tracking-[0.08em] font-light uppercase leading-snug">
            {language === 'ar' ? 'كل لون وراه حكاية.' : 'A STORY IN EVERY THREAD.'}
          </p>
          <p className="font-arabic text-xl sm:text-2xl text-[#c7a76c] tracking-normal leading-relaxed">
            {language === 'ar' ? 'A STORY IN EVERY THREAD.' : 'كل لون وراه حكاية.'}
          </p>
          <p className="text-sm sm:text-base text-[#a2a6b4] max-w-xl mx-auto font-light leading-relaxed pt-2">
            {t(
              'Every hoodie represents an emotion, a quiet memory, or something that cannot always be spoken. Four colors. Four lived chapters.',
              'كل سويت شيرت هودي يمثل شعوراً، أو ذكرى هادئة، أو شيئاً لا تسعه الكلمات دائماً. أربعة ألوان لأربعة فصول نعيشها.'
            )}
          </p>
        </div>

        {/* Minimal CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0b0c0e] hover:bg-[#e4e5e8] font-medium text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>{t('EXPLORE CHAPTER 01', 'استكشف الفصل الأول')}</span>
            <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
          <button
            onClick={onReadStory}
            className="w-full sm:w-auto px-8 py-4 bg-[#14161d]/80 hover:bg-[#1b1e27] border border-[#2d303b] text-white font-medium text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
          >
            {t('THE PHILOSOPHY', 'فلسفة البراند')}
          </button>
        </div>

        {/* Bottom trust specs */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left max-w-3xl w-full" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Garment Cut', 'القصّة والتصميم')}
            </p>
            <p className="font-serif text-sm text-white mt-0.5">
              {t('Oversized Drop-Shoulder', 'فضفاضة بأكتاف ساقطة (Oversized)')}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Cotton Weight', 'وزن القطن')}
            </p>
            <p className="font-serif text-sm text-white mt-0.5">
              {t('480 GSM Egyptian Terry', '٤٨٠ جرام قطن مصري فاخر')}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Embroidery', 'التطريز')}
            </p>
            <p className="font-serif text-sm text-white mt-0.5">
              {t('High-Density 3D Stitch', 'تطريز بارز ثلاثي الأبعاد')}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Craftsmanship', 'الصناعة')}
            </p>
            <p className="font-serif text-sm text-white mt-0.5">
              {t('Knit & Made in Cairo', 'غزل وصنع في القاهرة')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
