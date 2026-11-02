import React, { useState } from 'react';
import { SIZE_CHART } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const { language, isRtl, t } = useLanguage();
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isOpen) return null;

  const toInches = (cmStr: string) => {
    const val = parseFloat(cmStr);
    return isNaN(val) ? cmStr : `${(val / 2.54).toFixed(1)} in`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-4">
        <div className="inline-block w-full max-w-3xl my-8 p-6 sm:p-8 overflow-hidden text-left align-middle bg-[#0e1015] border border-[#262832] shadow-2xl relative">
          {/* Header */}
          <div className="flex items-start justify-between pb-5 border-b border-[#212328]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#c7a76c] font-medium">
                {t('SARD CHAPTER 01 FIT CONSTITUTION', 'معايير قياسات الفصل الأول من سَرد')}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mt-1">
                {t('Unisex Sizing & Dimensions', 'دليل المقاسات والأبعاد للجنسين')}
              </h3>
              <p className="text-xs text-[#828694] mt-1">
                {t(
                  'Precise dimensional measurements for the unisex oversized cut (M – L – XL – XXL)',
                  'القياسات والأبعاد الدقيقة للقصة الفضفاضة للجنسين (M – L – XL – XXL)'
                )}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#828694] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Unit Toggle & Fit Tip */}
          <div className="my-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#14161d] border border-[#212328]">
            <div className="text-xs text-[#9da0aa] leading-relaxed">
              <strong className="text-white font-medium">
                {t('Fit Philosophy:', 'فلسفة القصة والمقاس:')}
              </strong>{' '}
              {t(
                'All Chapter 01 hoodies are cut with intentional dropped shoulders and boxy chest volume. Available in M, L, XL, and XXL.',
                'جميع هوديات الفصل الأول مصممة بأكتاف ساقطة وقصّة واسعة متماسكة. متوفرة بالمقاسات M و L و XL و XXL.'
              )}
            </div>
            <div className="flex items-center gap-1 bg-[#0b0c0e] p-1 border border-[#262832] rounded-xs shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 text-xs font-mono uppercase transition-colors cursor-pointer ${
                  unit === 'cm' ? 'bg-white text-black font-semibold' : 'text-[#828694] hover:text-white'
                }`}
              >
                CM
              </button>
              <button
                onClick={() => setUnit('in')}
                className={`px-3 py-1 text-xs font-mono uppercase transition-colors cursor-pointer ${
                  unit === 'in' ? 'bg-white text-black font-semibold' : 'text-[#828694] hover:text-white'
                }`}
              >
                INCHES
              </button>
            </div>
          </div>

          {/* Sizing Table: M, L, XL, XXL */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#212328] text-[#717480] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">{t('Size', 'المقاس')}</th>
                  <th className="py-3 px-3">{t('Chest Width', 'عرض الصدر')}</th>
                  <th className="py-3 px-3">{t('Body Length', 'طول الهودي')}</th>
                  <th className="py-3 px-3">{t('Shoulder Drop', 'عرض الأكتاف')}</th>
                  <th className="py-3 px-3">{t('Sleeve Length', 'طول الأكمام')}</th>
                  <th className="py-3 px-3">{t('Recommended For', 'مناسب لطول')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1b1d24] font-mono text-[#d4d5d9]">
                {SIZE_CHART.map((row) => (
                  <tr key={row.size} className="hover:bg-[#14161d] transition-colors">
                    <td className="py-3 px-3 font-semibold text-white font-mono text-sm">{row.size}</td>
                    <td className="py-3 px-3 tabular-nums">
                      {unit === 'cm' ? row.chestCm : toInches(row.chestCm)}
                    </td>
                    <td className="py-3 px-3 tabular-nums">
                      {unit === 'cm' ? row.lengthCm : toInches(row.lengthCm)}
                    </td>
                    <td className="py-3 px-3 tabular-nums">
                      {unit === 'cm' ? row.shoulderCm : toInches(row.shoulderCm)}
                    </td>
                    <td className="py-3 px-3 tabular-nums">
                      {unit === 'cm' ? row.sleeveCm : toInches(row.sleeveCm)}
                    </td>
                    <td className="py-3 px-3 font-sans text-[#828694] text-[11px]">
                      {language === 'ar' ? row.fitNoteAr : row.fitNote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Garment Care Callout */}
          <div className="mt-6 pt-5 border-t border-[#212328] flex flex-col sm:flex-row items-center justify-between text-xs text-[#717480] gap-3">
            <span>
              {t(
                'Pre-shrunk 100% Egyptian combed cotton (480 GSM) · Zero shrinkage when cold washed',
                'قطن مصري ممشط ١٠٠٪ معالج مسبقاً ضد الانكماش (٤٨٠ جرام) · لا ينكمش مع الغسيل البارد'
              )}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-white text-black hover:bg-[#e4e5e7] font-medium uppercase text-xs tracking-wider transition-colors cursor-pointer"
            >
              {t('Back to Wardrobe', 'العودة للمنتجات')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
