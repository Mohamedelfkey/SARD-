import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BrandManifestoProps {
  onReadFullStory: () => void;
}

export const BrandManifesto: React.FC<BrandManifestoProps> = ({ onReadFullStory }) => {
  const { isRtl, t } = useLanguage();

  return (
    <section className="py-24 bg-[#0b0c0e] border-b border-[#212328] relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c7a76c] font-medium">
            {t('THE PHILOSOPHY', 'فلسفة سَــــرد')}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light mt-3 leading-snug">
            {t(
              'Clothing as a quiet archive of what we feel.',
              'الملابس كأرشيف هادئ لما نحمله في أعماقنا.'
            )}
          </h2>
        </div>

        {/* Story Prose */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#9da0aa] text-sm sm:text-base leading-relaxed font-light">
          <div className="space-y-6">
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {t(
                'In Arabic, the word سَــــرد translates to the deliberate act of narration—the art of weaving together events, memories, and unspoken truths into a unified tapestry.',
                'في اللغة العربية، تشير كلمة سَــــرد إلى رواية الحكاية بتتابع وإحكام — فن جمع اللحظات والذكريات والمشاعر الصامتة في نسيج واحد متماسك.'
              )}
            </p>
            <p>
              {t(
                'We established SARD on the conviction that a garment is never merely fabric sewn together. It is an intimate daily companion. It holds the places you have walked, the pauses you took, the decisions you made before you felt entirely ready, and the truths you chose not to speak aloud.',
                'أسسنا سَرد على قناعة بأن قطعة الملابس ليست مجرد قماش تم تجميعه؛ بل هي رفيقك اليومي المقرب. إنها تشهد على الأماكن التي زرتها، واللحظات التي توقفت فيها لتتأمل، والقرارات التي اتخذتها قبل أن تشعر بأنك جاهز تماماً، والحقائق التي اخترت ألا تبوح بها.'
              )}
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-arabic text-xl sm:text-2xl text-[#dedfe2] leading-relaxed border-r-2 border-[#c7a76c] pr-4 text-right">
              كل خيط يحمل ما عجزت الكلمات عن قوله. ليست مجرد ملابس، بل مشاعر حقيقية نرتديها لنتذكر من نحن وما مررنا به.
            </p>
            <p>
              {t(
                'Chapter 01 is intentionally constrained to four signature shades. Each colorway does not simply dress the body; it claims an emotional state. Spun from 480 GSM Egyptian cotton in Cairo, built to endure seasons of living.',
                'اقتصر الفصل الأول بعناية على أربعة ألوان أساسية. كل لون لا يكتفي بإلباس الجسد؛ بل يعبر عن حالة شعورية صادقة. نُسج من قطن مصري فاخر ٤٨٠ جرام في القاهرة، وصُنع ليدوم عبر فصول وسنوات حياتك.'
              )}
            </p>

            <div className="pt-2">
              <button
                onClick={onReadFullStory}
                className="text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-[#c7a76c] inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t('Read the complete narrative', 'قراءة القصة الكاملة وفلسفة البراند')}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Story Quotation Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12 border-t border-[#1e2026]">
          <div className="p-4 bg-[#101217] border border-[#1e2026]">
            <span className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Burgundy', 'بورجوندي')}
            </span>
            <p className="font-serif text-sm text-white mt-1">
              {t('“WHAT REMAINS UNSEEN”', '«ما وراء الصمت»')}
            </p>
            <p className="font-arabic text-xs text-[#828694] mt-0.5">ما وراء الصمت</p>
          </div>
          <div className="p-4 bg-[#101217] border border-[#1e2026]">
            <span className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Black', 'أسود')}
            </span>
            <p className="font-serif text-sm text-white mt-1">
              {t('“SILENCE HAS ITS REASONS”', '«للصمت أسبابه»')}
            </p>
            <p className="font-arabic text-xs text-[#828694] mt-0.5">للصمت أسبابه</p>
          </div>
          <div className="p-4 bg-[#101217] border border-[#1e2026]">
            <span className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Navy', 'كحلي')}
            </span>
            <p className="font-serif text-sm text-white mt-1">
              {t('“BEFORE I WAS READY”', '«قبل أن أكون جاهزاً»')}
            </p>
            <p className="font-arabic text-xs text-[#828694] mt-0.5">قبل أن أكون جاهزاً</p>
          </div>
          <div className="p-4 bg-[#101217] border border-[#1e2026]">
            <span className="text-[10px] uppercase tracking-widest text-[#717480]">
              {t('Dark Grey', 'رمادي غامق')}
            </span>
            <p className="font-serif text-sm text-white mt-1">
              {t('“NEITHER HERE NOR THERE”', '«بين هُنا وهُناك»')}
            </p>
            <p className="font-arabic text-xs text-[#828694] mt-0.5">بين هُنا وهُناك</p>
          </div>
        </div>
      </div>
    </section>
  );
};
