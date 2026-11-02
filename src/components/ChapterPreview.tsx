import React, { useState } from 'react';
import { Product, HoodieColor } from '../types';
import { CHAPTER_01_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ChapterPreviewProps {
  onSelectProduct: (product: Product) => void;
  onViewAll: () => void;
}

export const ChapterPreview: React.FC<ChapterPreviewProps> = ({
  onSelectProduct,
  onViewAll
}) => {
  const { language, isRtl, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | HoodieColor>('all');

  const filteredProducts =
    activeFilter === 'all'
      ? CHAPTER_01_PRODUCTS
      : CHAPTER_01_PRODUCTS.filter((p) => p.colorCode === activeFilter);

  return (
    <section className="py-24 bg-[#0b0c0e] border-b border-[#212328]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c7a76c] mb-2">
              <span>{t('OFFICIAL CHAPTER 01 COLLECTION', 'تشكيلة الفصل الأول الرسمية')}</span>
              <span className="text-[#494c59]">·</span>
              <span>{t('FOUR SIGNATURE SHADES', 'أربعة ألوان معتمدة')}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              {t('The Architecture of Emotion', 'هندسة المشاعر والنسيج')}
            </h2>
          </div>

          {/* Interactive filter controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#13151b] border border-[#212328] rounded-xs overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'text-[#828694] hover:text-white'
              }`}
            >
              {t('All (4)', 'الكل (٤)')}
            </button>
            <button
              onClick={() => setActiveFilter('burgundy')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'burgundy'
                  ? 'bg-[#380d1e] text-white font-semibold border border-[#52132b]'
                  : 'text-[#828694] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#380d1e] border border-white/20 inline-block" />
              {t('Burgundy', 'بورجوندي')}
            </button>
            <button
              onClick={() => setActiveFilter('black')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'black'
                  ? 'bg-[#1b1c20] text-white font-semibold border border-[#30323a]'
                  : 'text-[#828694] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#121316] border border-white/20 inline-block" />
              {t('Black', 'أسود')}
            </button>
            <button
              onClick={() => setActiveFilter('navy')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'navy'
                  ? 'bg-[#141d2e] text-white font-semibold border border-[#233352]'
                  : 'text-[#828694] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#141d2e] border border-white/20 inline-block" />
              {t('Navy', 'كحلي')}
            </button>
            <button
              onClick={() => setActiveFilter('dark-grey')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === 'dark-grey'
                  ? 'bg-[#2e3036] text-white font-semibold border border-[#444750]'
                  : 'text-[#828694] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#2e3036] border border-white/20 inline-block" />
              {t('Dark Grey', 'رمادي غامق')}
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* View All Collection Banner */}
        <div className="mt-16 pt-8 border-t border-[#1e2026] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#828694]">
            {t(
              'Unisex 480 GSM Heavyweight Combed Cotton · Limited Chapter 01 Release',
              'قطن مصري ممشط ٤٨٠ جرام للجنسين · إصدار محدود للفصل الأول'
            )}
          </div>
          <button
            onClick={onViewAll}
            className="text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-[#c7a76c] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>{t('View Full Chapter 01 Catalog & Editorial', 'استعراض تشكيلة الفصل الأول بالكامل')}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
