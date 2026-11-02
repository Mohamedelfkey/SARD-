import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CHAPTER_01_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface StoryPageProps {
  onExploreCollection: () => void;
  onSelectProduct: (product: Product) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({
  onExploreCollection,
  onSelectProduct
}) => {
  const { language, isRtl, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0b0c0e] py-16 text-[#ededee]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Masthead */}
        <div className="text-center mb-20 pb-12 border-b border-[#212328]">
          <div className="text-xs uppercase tracking-[0.3em] text-[#c7a76c] mb-3">
            {t('THE ARCHIVE & ESSAY', 'الأرشيف والمقال التأسيسي')}
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-light tracking-wide mb-4">
            {t('A Story in Every Thread', 'حكاية في كل خيط')}
          </h1>
          <p className="font-arabic text-2xl sm:text-3xl text-[#c7a76c] font-light">
            كل لون وراه حكاية
          </p>
        </div>

        {/* Section 1: What SARD Means */}
        <div className="space-y-8 mb-24">
          <div className="text-xs uppercase tracking-[0.25em] text-[#717480]">
            {t('01. THE ETYMOLOGY', '٠١. المعنى والاشتقاق')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light leading-snug">
            {t(
              'The Act of Unfolding: What Does سَــــرد Mean?',
              'فلسفة الرواية: ماذا تعني كلمة سَــــرد؟'
            )}
          </h2>

          <div className="max-w-none text-base sm:text-lg text-[#9da0aa] leading-relaxed font-light space-y-6">
            <p className="first-letter:font-serif first-letter:text-6xl first-letter:text-white first-letter:float-left first-letter:mr-4 first-letter:leading-none">
              {t(
                'In classical Arabic, سَــــرد (Sard) is not simply talking. It is the unhurried, rhythmic recounting of an authentic history. It is the art of giving sequence to chaos, connecting the solitary moments of a life until they form a coherent, indestructible whole.',
                'في فقه اللغة العربية، كلمة سَــــرد ليست مجرد كلام عابر؛ بل هي إحكام الشيء في توالٍ وتتابع محكم. هي رواية الحكاية بصدق ورويّة، وربط اللحظات الفردية المنعزلة حتى تشكّل نسيجاً متماسكاً لا تمحوه الأيام.'
              )}
            </p>
            <p>
              {t(
                'Modern clothing has become deafeningly loud yet strangely hollow—mass-produced garments designed to be worn three times, photographed, and discarded. SARD exists in deliberate resistance to this culture of transience.',
                'أصبحت الموضة المعاصرة صاخبة بشكل مفرط ومجردة من المشاعر الحقيقية — تصاميم استهلاكية تُصنع لترتدى مرات معدودة وتُصور ثم تُنسى. نشأت علامة سَرد لتقف بوعي في وجه هذه العشوائية.'
              )}
            </p>
            <p>
              {t(
                'We view clothing as an intimate daily archive. The clothes you wear during your most pivotal decisions, in silent train stations, during midnight conversations, or in moments of private triumph become imbued with your memory. They witness what others cannot see.',
                'نحن نرى الملابس كأرشيف يومي حميم. القطع التي ترتديها وأنت تتخذ قراراتك المصيرية، في لحظات السكون، وفي المحادثات الليلية الصادقة، أو في لحظات انتصارك الذاتي الهادئ، تتشبع بروحك وتصبح شاهدة على ما لا يراه الآخرون.'
              )}
            </p>
          </div>
        </div>

        {/* Section 2: Full bleed quote with atmospheric lookbook shot */}
        <div className="my-20 relative overflow-hidden border border-[#212328] bg-[#090a0d]">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <img
              src="/assets/editorial/lookbook-space.jpg"
              alt="SARD Contemplative Space"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center justify-center p-8 text-center">
              <div className="max-w-2xl space-y-3">
                <p className="font-serif text-2xl sm:text-3xl text-white font-light italic">
                  {t(
                    '“We do not wear clothes merely to cover the skin. We wear them to carry the weight of who we are becoming.”',
                    '«نحن لا نرتدي الملابس لمجرد تغطية الجسد؛ بل نرتديها لنحمل ثقل ومعنى ما نعيشه ونصبح عليه.»'
                  )}
                </p>
                <p className="font-arabic text-lg text-[#c7a76c]">
                  نرتدي ما نعيشه، ونحكي ما لا يُقال.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Why Every Color Represents a Story */}
        <div className="space-y-12 mb-24">
          <div className="text-xs uppercase tracking-[0.25em] text-[#717480]">
            {t('02. THE COLOR PSYCHOLOGY', '٠٢. فلسفة الألوان والشعور')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
            {t('Four Colors. Four Emotional States.', 'أربعة ألوان. أربع حالات شعورية.')}
          </h2>
          <p className="text-[#9da0aa] text-base leading-relaxed">
            {t(
              'Chapter 01 avoids decorative patterns or arbitrary graphics. Instead, every color was formulated to mirror a human psychological threshold:',
              'تجنب الفصل الأول أي رسومات عشوائية أو بهرجة بصرية؛ بل صُمم كل لون ليعكس حالة نفسية ووجدانية صادقة:'
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHAPTER_01_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="p-8 bg-[#101217] border border-[#212328] hover:border-[#383c48] transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: prod.hexValue }}
                    />
                    <span className="text-xs uppercase tracking-widest text-[#a2a6b4] font-medium">
                      {language === 'ar' ? prod.colorNameAr : prod.colorName}
                    </span>
                  </div>
                  <span className="font-arabic text-sm text-[#717480]">
                    {prod.storyArabic}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-white font-light group-hover:text-[#c7a76c] transition-colors mb-2">
                  “{language === 'ar' ? prod.storyPhraseAr : prod.storyPhrase}”
                </h3>

                <p className="text-xs text-[#828694] leading-relaxed mb-6">
                  {language === 'ar' ? prod.narrativeAr : prod.narrative}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#1b1d24] text-xs text-[#c7a76c]">
                  <span>{t('Explore this garment', 'استكشف هذه القطعة')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: The Craftsmanship in Cairo */}
        <div className="space-y-8 mb-20 pb-16 border-b border-[#212328]">
          <div className="text-xs uppercase tracking-[0.25em] text-[#717480]">
            {t('03. TEXTILE ANCHOR', '٠٣. أصالة النسيج المصري')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
            {t(
              '480 GSM Egyptian Cotton: The Tactile Weight of Reality',
              'قطن مصري ٤٨٠ جرام: ثقل الواقع وملمس الحقيقة'
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-[#9da0aa] leading-relaxed">
            <p>
              {t(
                'Egypt has for centuries been synonymous with the finest long-staple cotton on earth. But we did not choose Egyptian cotton for historical nostalgia; we chose it for its tensile strength, its breathability, and the unmatched softness it acquires as it ages.',
                'ارتبط اسم مصر عبر العصور بأجود أنواع القطن طويل التيلة في العالم. لكننا لم نختر القطن المصري كنوع من الحنين للماضي، بل لقوته الشدية الفائقة، وقدرته على التنفس، والنعومة التي تزداد جمالاً مع كل استخدام.'
              )}
            </p>
            <p>
              {t(
                'At 480 GSM, each Chapter 01 hoodie has structural presence. When you pull the hood up, it holds its shape. The dropped shoulders create an effortless unisex silhouette. Every back phrase is embroidered with fine-gauge tension thread, ensuring it never frays or crumbles.',
                'بوزن ٤٨٠ جرام، تتمتع كل قطعة في الفصل الأول بقوام معماري متماسك. عندما ترتدي غطاء الرأس، يحافظ على شكله ولا يتهدل. أكتافها الساقطة تمنح قواماً مريحاً للجنسين، بينما حُبكت عبارات الظهر بخيوط شد عالية الدقة لتبقى ثابتة مدى الحياة.'
              )}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-12 space-y-6">
          <p className="font-serif text-2xl sm:text-3xl text-white font-light">
            {t('Find the piece that speaks your story.', 'اختر القطعة التي تحكي قصتك.')}
          </p>
          <button
            onClick={onExploreCollection}
            className="px-8 py-4 bg-white hover:bg-[#e4e5e7] text-black font-medium text-xs uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-3 cursor-pointer"
          >
            <span>{t('DISCOVER CHAPTER 01', 'اكتشف الفصل الأول')}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
