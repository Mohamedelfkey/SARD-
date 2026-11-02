import React, { useState } from 'react';
import { Product, GarmentSize } from '../types';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { addToCart } = useCart();
  const { language, isRtl, t } = useLanguage();
  const [currentView, setCurrentView] = useState<'front' | 'back'>('front');
  const [selectedSize, setSelectedSize] = useState<GarmentSize>('M');
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative bg-[#0e1015] border border-[#1f2229] hover:border-[#383c48] transition-all duration-300 flex flex-col justify-between cursor-pointer"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Media Container */}
      <div className="relative aspect-[3/4] bg-[#090a0d] overflow-hidden">
        {/* Color Badge / Story Kicker */}
        <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} z-10 flex items-center gap-2`}>
          <span
            className="w-2.5 h-2.5 rounded-full border border-white/20"
            style={{ backgroundColor: product.hexValue }}
          />
          <span className="text-[11px] uppercase tracking-widest text-[#a2a6b4] font-medium">
            {language === 'ar' ? product.colorNameAr : product.colorName}
          </span>
        </div>

        {product.badge && (
          <span className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} z-10 text-[10px] uppercase tracking-widest text-[#c7a76c] bg-[#14161c]/90 px-2.5 py-1 border border-[#2b2e38]`}>
            {product.badge}
          </span>
        )}

        {/* Garment Image (Smooth Front/Back switch) */}
        <div
          onMouseEnter={() => setCurrentView('back')}
          onMouseLeave={() => setCurrentView('front')}
          className="w-full h-full relative"
        >
          <img
            src={currentView === 'front' ? product.images.front : product.images.back}
            alt={`${product.title} - ${product.colorName} (${currentView} view)`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain p-4 group-hover:scale-[1.04] transition-transform duration-500"
          />

          {/* View toggle badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center bg-[#0e1014]/80 backdrop-blur-xs border border-[#272930] rounded-xs px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#828694]">
            <span className={currentView === 'front' ? 'text-white' : 'text-[#646775]'}>
              {t('Front', 'الأمام')}
            </span>
            <span className="mx-1 text-[#42444e]">/</span>
            <span className={currentView === 'back' ? 'text-white' : 'text-[#646775]'}>
              {t('Back Phrase', 'العبارة بالخلف')}
            </span>
          </div>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between border-t border-[#1a1d24]">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-lg text-white font-medium group-hover:text-[#c7a76c] transition-colors">
              {t(product.title, product.titleAr || product.title)}
            </h3>
            <div className="flex items-baseline gap-1.5 shrink-0">
              <span className="text-xs text-[#646775] line-through font-mono">
                1,200 {t('EGP', 'ج.م')}
              </span>
              <span className="font-mono text-sm font-semibold text-white tabular-nums">
                750 {t('EGP', 'ج.م')}
              </span>
            </div>
          </div>

          {/* Story Phrase (Back embroidery quote) */}
          <div className="mb-3">
            <p className="text-xs uppercase tracking-wider font-medium text-[#c7a76c]">
              “{language === 'ar' ? (product.storyPhraseAr || product.storyPhrase) : product.storyPhrase}”
            </p>
            <p className="font-arabic text-xs text-[#717480] mt-0.5">
              {product.storyArabic}
            </p>
          </div>

          <p className="text-xs text-[#828694] line-clamp-2 leading-relaxed">
            {language === 'ar' ? (product.overviewAr || product.overview) : product.overview}
          </p>
        </div>

        {/* Quick Size selection and Actions */}
        <div className="mt-5 pt-4 border-t border-[#181a20] space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#717480] uppercase tracking-wider">
              {t('Select Size', 'المقاس')}
            </span>
            <div className="flex items-center gap-1">
              {(['M', 'L', 'XL', 'XXL'] as GarmentSize[]).map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  className={`w-7 h-6 flex items-center justify-center font-mono text-[10px] rounded-xs transition-colors cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-white text-black font-semibold'
                      : 'bg-[#15171e] text-[#828694] hover:text-white border border-[#242630]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(product);
              }}
              className="py-2.5 px-3 bg-[#13151b] hover:bg-[#1a1d25] border border-[#262832] text-xs uppercase tracking-wider text-[#d4d5d9] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t('Details', 'التفاصيل')}</span>
            </button>

            <button
              onClick={handleQuickAdd}
              className={`py-2.5 px-3 text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                added
                  ? 'bg-[#1a3825] text-[#9ce0b5] border border-[#2a593b]'
                  : 'bg-white hover:bg-[#e4e5e7] text-[#0b0c0e]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{t('Added', 'تمت الإضافة')}</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('Add to Bag', 'أضف للحقيبة')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
