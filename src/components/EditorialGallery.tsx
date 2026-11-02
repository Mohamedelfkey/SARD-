import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EditorialGallery: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const images = [
    {
      src: '/assets/editorial/lookbook-space.jpg',
      alt: 'SARD Chapter 01 Lookbook in Brutalist Gallery',
      caption: t('Space & Solitude · Brutalist Gallery, Cairo', 'المساحة والهدوء · معرض بروتاليستي، القاهرة'),
      tag: t('#SARDChapter01', '#سرد_الفصل_الأول')
    },
    {
      src: '/assets/products/top-campaign-grid.jpg',
      alt: 'SARD Chapter 01 Four Color Lineup',
      caption: t('The Four Colors · Chapter 01 Lineup', 'الألوان الأربعة · تشكيلة الفصل الأول'),
      tag: '@sard.eg'
    },
    {
      src: '/assets/products/embroidery-details.jpg',
      alt: 'Tactile 3D Embroidery Close-Up',
      caption: t('Raised 3D Stitching · Egyptian Cotton Terry', 'تطريز بارز ثلاثي الأبعاد · قطن مصري فاخر'),
      tag: t('#TactileStorytelling', '#حكاية_في_كل_خيط')
    },
    {
      src: '/assets/editorial/hero-campaign.jpg',
      alt: 'Unisex Silhouette in Architectural Setting',
      caption: t('Unisex Proportions · Designed for Movement', 'قصّة واسعة للجنسين · حرية وانسيابية في الحركة'),
      tag: t('#AStoryInEveryThread', '#كل_لون_وراه_حكاية')
    }
  ];

  return (
    <section className="py-24 bg-[#090a0d] border-b border-[#212328]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#1f2229]">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#c7a76c] mb-1">
              {t('VISUAL DIARY', 'السجل البصري')}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              {t('Moments from the Archive', 'لحظات من أرشيف سَــــرد')}
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-[#9da0aa] hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#c7a76c]" />
            <span>{t('@SARD.EG ON INSTAGRAM', 'حساب سَرد على إنستغرام @SARD.EG')}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/5] bg-[#12141a] overflow-hidden border border-[#1e2027]"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-[#c7a76c]">
                  {item.tag}
                </span>
                <p className="font-serif text-sm text-white mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
