import React from 'react';
import { Product } from '../types';
import { CHAPTER_01_PRODUCTS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { Eye } from 'lucide-react';

interface LookbookPageProps {
  onSelectProduct: (product: Product) => void;
  onExploreCollection: () => void;
}

export const LookbookPage: React.FC<LookbookPageProps> = ({
  onSelectProduct,
  onExploreCollection
}) => {
  const { language, isRtl, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0b0c0e] py-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead */}
        <div className="mb-16 pb-8 border-b border-[#212328] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#c7a76c] mb-2">
              {t('AUTUMN / WINTER 2026 CAMPAIGN', 'حملة خريف وشتاء ٢٠٢٦')}
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-white font-light">
              {t('Chapter 01 Lookbook', 'سجل إطلالات الفصل الأول (Lookbook)')}
            </h1>
          </div>
          <div className={`text-right ${isRtl ? 'md:text-left' : 'md:text-right'}`}>
            <span className="font-arabic text-xl sm:text-2xl text-[#828694]">
              سِـجل بصري للمشاعر
            </span>
            <p className="text-xs text-[#717480] mt-1 font-serif">
              Unisex Streetwear · Cairo Architecture
            </p>
          </div>
        </div>

        {/* Campaign Hero Feature */}
        <div className="mb-20 bg-[#0e1014] border border-[#212328] overflow-hidden">
          <div className="aspect-[16/9] w-full relative">
            <img
              src="/assets/editorial/hero-campaign.jpg"
              alt="SARD Campaign Models in Brutalist Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 sm:p-12">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-widest text-[#c7a76c] font-medium">
                  {t('Plate 01 · Unisex Silhouette & Proportions', 'لوحة ٠١ · قصّة وأبعاد للجنسين')}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-light mt-2">
                  {t('Sculpted Volume in Architectural Concrete', 'قوام منحوت في فضاءات خرسانية معمارية')}
                </h3>
                <p className="text-xs text-[#a2a6b4] mt-2 leading-relaxed">
                  {t(
                    'Featuring the signature Deep Plum Burgundy and Charcoal Dark Grey hoodies cut with dropped shoulders and balanced drape.',
                    'تظهر هوديات البورجوندي البرقوقي والرمادي الغامق بأكتاف ساقطة وقوام متوازن وثابت.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Plate Showcase: Each of the 4 Approved Colorways */}
        <div className="space-y-24 mb-24">
          {CHAPTER_01_PRODUCTS.map((prod, idx) => (
            <div
              key={prod.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media Section */}
              <div
                className={`lg:col-span-7 grid grid-cols-2 gap-4 ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="bg-[#101217] aspect-[3/4] p-6 border border-[#212328] flex items-center justify-center relative group">
                  <img
                    src={prod.images.front}
                    alt={`${prod.title} Front View`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'} text-[10px] uppercase tracking-wider text-[#646775]`}>
                    {t('Front View · Arabic Stitch', 'المظهر الأمامي · تطريز سرد')}
                  </span>
                </div>
                <div className="bg-[#101217] aspect-[3/4] p-6 border border-[#212328] flex items-center justify-center relative group">
                  <img
                    src={prod.images.back}
                    alt={`${prod.title} Back View`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'} text-[10px] uppercase tracking-wider text-[#c7a76c]`}>
                    {t('Back View · Narrative Line', 'المظهر الخلفي · العبارة والخط')}
                  </span>
                </div>
              </div>

              {/* Text Editorial Info */}
              <div
                className={`lg:col-span-5 space-y-5 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ backgroundColor: prod.hexValue }}
                  />
                  <span className="text-xs uppercase tracking-widest text-[#c7a76c] font-medium">
                    {language === 'ar' ? prod.colorNameAr : prod.colorName}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#646775]">
                  {t(`LOOKBOOK ENTRY 0${idx + 1}`, `سجل الإطلالة ٠${idx + 1}`)}
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                  “{language === 'ar' ? prod.storyPhraseAr : prod.storyPhrase}”
                </h2>

                <p className="font-arabic text-xl text-[#9da0aa]">
                  {prod.storyArabic}
                </p>

                <p className="text-xs text-[#828694] leading-relaxed">
                  {language === 'ar' ? prod.narrativeAr : prod.narrative}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#1e2026] text-xs">
                  <div className="flex justify-between text-[#828694]">
                    <span>{t('Fabric Composition:', 'الخامة والتركيب:')}</span>
                    <span className="text-white">{t('100% Egyptian Combed Cotton', 'قطن مصري ممشط ١٠٠٪')}</span>
                  </div>
                  <div className="flex justify-between text-[#828694]">
                    <span>{t('Fabric Density:', 'الوزن والكثافة:')}</span>
                    <span className="text-white font-mono">{t('480 GSM Brushed Terry', '٤٨٠ جرام قطيفة')}</span>
                  </div>
                  <div className="flex justify-between text-[#828694]">
                    <span>{t('Available Sizes:', 'المقاسات المتوفرة:')}</span>
                    <span className="text-white font-mono font-medium">M · L · XL · XXL</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="px-6 py-3 bg-[#15171e] hover:bg-white hover:text-black border border-[#272932] text-xs uppercase tracking-widest font-medium transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t('View Product Details & Sizes', 'تفاصيل القطعة واختيار المقاس')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Lookbook Plate with Solitude Model */}
        <div className="bg-[#0e1014] border border-[#212328] p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c7a76c]">
            {t('A STORY IN EVERY THREAD', 'كل لون وراه حكاية')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light max-w-2xl mx-auto">
            {t('Wear your chapter with quiet confidence.', 'ارتدِ قصتك بثقة هادئة وحضور دائم.')}
          </h2>
          <p className="font-arabic text-xl text-[#828694]">
            كل لون وراه حكاية... اختر حكايتك
          </p>
          <div className="pt-4">
            <button
              onClick={onExploreCollection}
              className="px-8 py-4 bg-white text-black hover:bg-[#e4e5e7] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              {t('Shop Chapter 01 Hoodies (750 EGP)', 'تسوق هوديات الفصل الأول (٧٥٠ ج.م)')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
