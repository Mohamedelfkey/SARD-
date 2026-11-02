import React, { useState } from 'react';
import { Product, HoodieColor } from '../types';
import { CHAPTER_01_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { LayoutGrid, Columns, Filter } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onOpenSizeGuide
}) => {
  const { language, isRtl, t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<'all' | HoodieColor>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const filteredProducts =
    selectedColor === 'all'
      ? CHAPTER_01_PRODUCTS
      : CHAPTER_01_PRODUCTS.filter((p) => p.colorCode === selectedColor);

  return (
    <div className="min-h-screen bg-[#0b0c0e] py-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collection Header */}
        <div className="mb-14 pb-8 border-b border-[#212328]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c7a76c] mb-3">
            <span>{t('OFFICIAL LAUNCH', 'الإطلاق الرسمي')}</span>
            <span>·</span>
            <span>{t('AUTUMN / WINTER', 'خريف / شتاء')}</span>
            <span>·</span>
            <span>{t('LIMITED PRODUCTION', 'إنتاج محدود')}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl text-white font-light">
                {t('Chapter 01: The Threads', 'الفصل الأول: خيوط الحكاية')}
              </h1>
              <p className="text-sm text-[#9da0aa] max-w-xl mt-3 font-light leading-relaxed">
                {t(
                  'Four unisex heavyweight hoodies. Four distinct emotional statements. Crafted in Cairo from 480 GSM Egyptian combed cotton with tactile 3D embroidery.',
                  'أربعة هوديز للجنسين بوزن ثقيل متماسك. أربعة تعبيرات شعورية فريدة. صُنعت في القاهرة من قطن مصري ممشط ٤٨٠ جرام مع تطريز بارز ثلاثي الأبعاد.'
                )}
              </p>
            </div>
            <div className={`text-right ${isRtl ? 'md:text-left' : 'md:text-right'}`}>
              <span className="font-arabic text-2xl sm:text-3xl text-[#d4d5d9]">
                كل لون وراه حكاية
              </span>
              <p className="text-xs text-[#717480] mt-1 font-serif tracking-wider">
                A STORY IN EVERY THREAD
              </p>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#1b1d24]">
          {/* Color Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <span className="text-xs uppercase tracking-wider text-[#646775] mr-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>{t('Color:', 'اللون:')}</span>
            </span>

            <button
              onClick={() => setSelectedColor('all')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                selectedColor === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#13151b] text-[#828694] hover:text-white border border-[#212328]'
              }`}
            >
              {t('All Shades (4)', 'جميع الألوان (٤)')}
            </button>

            <button
              onClick={() => setSelectedColor('burgundy')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                selectedColor === 'burgundy'
                  ? 'bg-[#380d1e] text-white font-medium border border-[#52132b]'
                  : 'bg-[#13151b] text-[#828694] hover:text-white border border-[#212328]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#380d1e] border border-white/20" />
              <span>{t('Burgundy', 'بورجوندي')}</span>
            </button>

            <button
              onClick={() => setSelectedColor('black')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                selectedColor === 'black'
                  ? 'bg-[#1b1c20] text-white font-medium border border-[#30323a]'
                  : 'bg-[#13151b] text-[#828694] hover:text-white border border-[#212328]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#121316] border border-white/20" />
              <span>{t('Black', 'أسود')}</span>
            </button>

            <button
              onClick={() => setSelectedColor('navy')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                selectedColor === 'navy'
                  ? 'bg-[#141d2e] text-white font-medium border border-[#233352]'
                  : 'bg-[#13151b] text-[#828694] hover:text-white border border-[#212328]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#141d2e] border border-white/20" />
              <span>{t('Navy', 'كحلي')}</span>
            </button>

            <button
              onClick={() => setSelectedColor('dark-grey')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                selectedColor === 'dark-grey'
                  ? 'bg-[#2e3036] text-white font-medium border border-[#444750]'
                  : 'bg-[#13151b] text-[#828694] hover:text-white border border-[#212328]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2e3036] border border-white/20" />
              <span>{t('Dark Grey', 'رمادي غامق')}</span>
            </button>
          </div>

          {/* View mode toggle & size guide trigger */}
          <div className="flex items-center gap-4 text-xs text-[#828694] shrink-0">
            <button
              onClick={onOpenSizeGuide}
              className="hover:text-white uppercase tracking-wider underline cursor-pointer"
            >
              {t('Size Guide (M–XXL)', 'دليل المقاسات (M–XXL)')}
            </button>

            <div className="flex items-center gap-1 bg-[#13151b] border border-[#212328] p-1 rounded-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#222530] text-white' : 'text-[#646775] hover:text-white'
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('editorial')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'editorial' ? 'bg-[#222530] text-white' : 'text-[#646775] hover:text-white'
                }`}
                aria-label="Editorial Split View"
              >
                <Columns className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          /* Editorial Split View */
          <div className="space-y-12">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-[#0e1014] border border-[#212328] hover:border-[#383c48] transition-all p-6 sm:p-10 cursor-pointer group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Visual Duo */}
                  <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                    <div className="bg-[#090a0d] aspect-[3/4] p-4 flex flex-col items-center justify-center relative">
                      <img
                        src={product.images.front}
                        alt={`${product.title} front`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 text-[10px] uppercase tracking-widest text-[#717480]">
                        {t('Front · SARD Chest', 'الأمام · تطريز سرد')}
                      </span>
                    </div>
                    <div className="bg-[#090a0d] aspect-[3/4] p-4 flex flex-col items-center justify-center relative">
                      <img
                        src={product.images.back}
                        alt={`${product.title} back`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 text-[10px] uppercase tracking-widest text-[#c7a76c]">
                        {t('Back · Phrase & Line', 'الظهر · العبارة والخط')}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Text Details */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: product.hexValue }}
                      />
                      <span className="text-xs uppercase tracking-widest text-[#c7a76c] font-medium">
                        {language === 'ar' ? product.colorNameAr : product.colorName}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                      “{language === 'ar' ? product.storyPhraseAr : product.storyPhrase}”
                    </h2>

                    <p className="font-arabic text-lg text-[#9da0aa]">
                      {product.storyArabic}
                    </p>

                    <p className="text-xs text-[#828694] leading-relaxed">
                      {language === 'ar' ? product.narrativeAr : product.narrative}
                    </p>

                    <div className="pt-4 border-t border-[#1b1d24] flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-[#717480] line-through font-mono">
                          1,200 {t('EGP', 'ج.م')}
                        </span>
                        <span className="font-mono text-xl text-white tabular-nums font-semibold">
                          750 {t('EGP', 'ج.م')}
                        </span>
                      </div>
                      <button className="px-5 py-2.5 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-[#e4e5e7] transition-colors cursor-pointer">
                        {t('Explore Piece', 'استعراض القطعة')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Master Catalog Reference Banner */}
        <div className="mt-20 p-8 bg-[#12141a] border border-[#212328] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c7a76c]">
              {t('AUTHENTIC CHAPTER 01 CANON', 'معايير الفصل الأول المعتمدة')}
            </span>
            <h3 className="font-serif text-2xl text-white font-light">
              {t('Four Hoodies. No Compromise.', 'أربعة ألوان معتمدة. دون أي مساومة.')}
            </h3>
            <p className="text-xs text-[#828694] max-w-xl">
              {t(
                'Chapter 01 is strictly defined by Burgundy, Black, Navy, and Dark Grey. Every single piece is individually inspected and pressed in Cairo before dispatch.',
                'الفصل الأول محدد بدقة بأربعة ألوان: البورجوندي، الأسود، الكحلي، والرمادي الغامق. كل قطعة تُفحص وتُكوى يدوياً بعناية في القاهرة قبل تسليمها للشحن.'
              )}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className={`text-right ${isRtl ? 'text-left' : 'text-right'}`}>
              <span className="font-mono text-sm text-white block">
                {t('100% Egyptian Cotton', 'قطن مصري ١٠٠٪')}
              </span>
              <span className="text-xs text-[#717480]">
                {t('480 GSM Heavy Terry', '٤٨٠ جرام تيري ثقيل')}
              </span>
            </div>
            <div className="w-12 h-12 border border-[#2b2e38] rounded-full flex items-center justify-center font-serif text-lg text-[#c7a76c]">
              س
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
