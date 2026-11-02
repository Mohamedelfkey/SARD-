import React from 'react';
import { Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FabricShowcase: React.FC = () => {
  const { isRtl, t } = useLanguage();

  return (
    <section className="py-24 bg-[#0e1014] border-b border-[#212328]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#212328] gap-6">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-[#c7a76c] mb-2">
              {t('MATERIAL EXCELLENCE & CRAFTSMANSHIP', 'جودة الخامات ودقة الصناعة')}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              {t('Crafted in Cairo. Designed for Stillness.', 'صُنع في القاهرة. صُمم ليبقى.')}
            </h2>
          </div>
          <p className="font-arabic text-xl sm:text-2xl text-[#828694] md:text-right">
            {t('خامات فاخرة، وتطريز دقيق، وتفاصيل لا تُنسى', 'خامات فاخرة، وتطريز دقيق، وتفاصيل لا تُنسى')}
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Authoritative Burgundy Fabric Swatch */}
          <div className="bg-[#12141a] border border-[#212328] flex flex-col justify-between overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <img
                src="/assets/products/burgundy-fabric-swatch.jpg"
                alt="SARD Authoritative Burgundy Fabric Reference"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-80" />
              <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-white`}>
                {t('Authoritative Swatch', 'عينة اللون المعتمدة')}
              </div>
            </div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-[#c7a76c] font-medium mb-1">
                {t('Deep Plum Burgundy', 'بورجوندي برقوقي داكن')}
              </div>
              <h3 className="font-serif text-2xl text-white font-light mb-3">
                {t('The Color Philosophy', 'فلسفة اللون')}
              </h3>
              <p className="text-xs text-[#828694] leading-relaxed">
                {t(
                  'Neither bright cherry red nor generic wine, our burgundy is tinted with plum and obsidian undertones. It responds organically to diffused natural light—revealing deep complexity in daylight and retreating to velvet mystery at night.',
                  'ليس أحمر فاقعاً ولا نبيذياً تقليدياً؛ لون البورجوندي المعتمد لدينا مشبع بنغمات برقوقية داكنة وظلال هادئة. يتفاعل بطبيعية مع الضوء الطبيعي ليكشف عن عمق لوني فريد بالنهار ومظهر مخملي غامض بالمساء.'
                )}
              </p>
            </div>
          </div>

          {/* Card 2: 3D High-Density Precision Embroidery */}
          <div className="bg-[#12141a] border border-[#212328] flex flex-col justify-between overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <img
                src="/assets/products/embroidery-details.jpg"
                alt="SARD High-Density Embroidery Details"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-80" />
              <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-white`}>
                {t('Raised 3D Stitching', 'تطريز بارز ثلاثي الأبعاد')}
              </div>
            </div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-[#c7a76c] font-medium mb-1">
                {t('Precision Placement', 'مواضع التطريز الدقيقة')}
              </div>
              <h3 className="font-serif text-2xl text-white font-light mb-3">
                {t('Every Word Has Weight', 'لكل كلمة وزن ومعنى')}
              </h3>
              <p className="text-xs text-[#828694] leading-relaxed">
                {t(
                  'The front chest bears the subtle Arabic brand mark "سرد", while the spine carries its English narrative accompanied by a clean vertical line. Spun with tens of thousands of tension-controlled stitches for tactile permanence.',
                  'يحمل الصدر الأيسر شعار "سرد" العربي المصغر، بينما يمتد على الظهر النص التعبيري مصحوباً بخط رأسي أنيق. نُسجت بعشرات الآلاف من غرز الخيوط المحكمة لضمان بقائها وثباتها للأبد.'
                )}
              </p>
            </div>
          </div>

          {/* Card 3: 480 GSM Egyptian Cotton Specs */}
          <div className="bg-[#12141a] border border-[#212328] p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#1a1d25] border border-[#2c2f3a] flex items-center justify-center text-[#c7a76c] mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[#c7a76c] font-medium mb-1">
                {t('Textile Engineering', 'هندسة النسيج')}
              </div>
              <h3 className="font-serif text-2xl text-white font-light mb-4">
                {t('480 GSM Brushed Terry', '٤٨٠ جرام قطن ممشط فاخر')}
              </h3>
              <p className="text-xs text-[#828694] leading-relaxed mb-6">
                {t(
                  'Engineered for substantial structure without rigidity. Spun from 100% Egyptian long-staple combed cotton, double-washed to eliminate post-wash shrinkage and provide a peach-fuzz velvet interior.',
                  'صُممت لتمنح قواماً ثابتاً وفخماً دون قسوة. غُزلت من قطن مصري ممشط طويل التيلة ١٠٠٪، وغُسلت مرتين لحمايتها من الانكماش ولتمنحك ملمساً داخلياً ناعماً كالحرير.'
                )}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#212328] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#646775]">{t('Cotton Purity', 'نقاوة القطن')}</span>
                  <span className="font-mono text-white">{t('100% Egyptian Combed', 'قطن مصري ممشط ١٠٠٪')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#646775]">{t('Fabric Density', 'كثافة النسيج')}</span>
                  <span className="font-mono text-white">{t('480 GSM Heavyweight', '٤٨٠ جرام وزن ثقيل')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#646775]">{t('Silhouette', 'القصّة')}</span>
                  <span className="font-mono text-white">{t('Unisex Drop-Shoulder Boxy', 'قصّة واسعة للجنسين (Oversized)')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#646775]">{t('Production Run', 'دفعة الإنتاج')}</span>
                  <span className="font-mono text-[#c7a76c]">{t('Chapter 01 Limited Edition', 'إصدار محدود — الفصل الأول')}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#212328] flex items-center justify-between text-[11px] text-[#717480]">
              <span>{t('Made with pride in Egypt', 'صُنع بكل فخر في مصر')}</span>
              <span className="font-arabic">صُنع بحب في مصر</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
