import React, { useState } from 'react';
import { Product, GarmentSize } from '../types';
import { CHAPTER_01_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ProductCard } from '../components/ProductCard';
import {
  ArrowLeft,
  Check,
  Plus,
  Minus,
  Shield,
  Ruler,
  Truck,
  RotateCcw,
  Info
} from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onOpenSizeGuide
}) => {
  const { addToCart } = useCart();
  const { language, isRtl, t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<GarmentSize>('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState<'front' | 'back' | 'detail' | 'swatch'>('front');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Available image gallery items
  const galleryItems = [
    { key: 'front', label: t('Front View (Arabic SARD)', 'المظهر الأمامي (تطريز سرد)'), src: product.images.front },
    { key: 'back', label: t('Back View (Narrative & Line)', 'المظهر الخلفي (العبارة والخط)'), src: product.images.back },
    { key: 'detail', label: t('3D Precision Embroidery', 'تطريز بارز ثلاثي الأبعاد'), src: product.images.detail },
    ...(product.images.swatch ? [{ key: 'swatch', label: t('Fabric Swatch (Actual Color)', 'عينة القماش (اللون الفعلي)'), src: product.images.swatch }] : [])
  ];

  const currentImageSrc =
    activeImageIndex === 'front'
      ? product.images.front
      : activeImageIndex === 'back'
      ? product.images.back
      : activeImageIndex === 'detail'
      ? product.images.detail
      : product.images.swatch || product.images.front;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const relatedProducts = CHAPTER_01_PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-[#0b0c0e] py-10" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation & breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#212328]">
          <button
            onClick={onBack}
            className="text-xs uppercase tracking-widest text-[#828694] hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            <span>{t('Back to Collection', 'العودة للتشكيلة')}</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#646775]">
            <span>{t('Chapter 01', 'الفصل الأول')}</span>
            <span>/</span>
            <span className="text-[#a2a6b4]">{language === 'ar' ? product.colorNameAr : product.colorName}</span>
          </div>
        </div>

        {/* 2-Column Split: Sticky Left Gallery + Right Purchase Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Gallery (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary active image container */}
            <div className="relative aspect-[4/5] bg-[#0e1014] border border-[#212328] overflow-hidden flex items-center justify-center">
              <img
                src={currentImageSrc}
                alt={`${product.title} - ${product.colorName}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-6 sm:p-10 transition-all duration-300"
              />

              {/* View label badge */}
              <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} bg-black/60 backdrop-blur-xs border border-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-white`}>
                {galleryItems.find((g) => g.key === activeImageIndex)?.label}
              </div>

              {/* Authoritative Burgundy Callout if Burgundy */}
              {product.colorCode === 'burgundy' && activeImageIndex === 'swatch' && (
                <div className="absolute bottom-4 left-4 right-4 bg-[#2e0818]/90 backdrop-blur-xs border border-[#5c1a35] p-3 text-xs text-[#f4d2de]">
                  <strong className="text-white block font-medium">
                    {t('Authoritative Color Reference:', 'المرجع اللوني الرسمي:')}
                  </strong>
                  {t(
                    'Deep plum-toned burgundy with subtle wine undertones and zero bright red hue.',
                    'لون بورجوندي عميق بنغمات برقوقية داكنة خالية تماماً من درجات الأحمر الفاقع.'
                  )}
                </div>
              )}
            </div>

            {/* Gallery Thumbnail Row */}
            <div className="grid grid-cols-4 gap-3">
              {galleryItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveImageIndex(item.key as any)}
                  className={`relative aspect-square bg-[#0e1014] border p-2 transition-all cursor-pointer ${
                    activeImageIndex === item.key
                      ? 'border-[#c7a76c] ring-1 ring-[#c7a76c]'
                      : 'border-[#212328] hover:border-[#383c48] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 right-1 bg-black/80 text-[9px] uppercase tracking-wider text-center py-0.5 text-[#d4d5d9] truncate">
                    {item.key}
                  </div>
                </button>
              ))}
            </div>

            {/* Back Phrase High-Density Feature Banner */}
            <div className="p-6 bg-[#12141a] border border-[#212328] space-y-3">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#c7a76c]">
                {t('BACK EMBROIDERY STATEMENT', 'عبارة التطريز الخلفية')}
              </div>
              <div className="font-serif text-2xl text-white tracking-widest">
                “{product.storyPhrase}”
              </div>
              <div className="w-8 h-0.5 bg-[#c7a76c]" />
              <p className="text-xs text-[#9da0aa] leading-relaxed">
                {language === 'ar' ? (product.narrativeAr || product.narrative) : product.narrative}
              </p>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#101217] border border-[#212328] p-6 sm:p-8 space-y-6">
              {/* Product Header */}
              <div>
                <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#c7a76c] mb-2">
                  <span>{t('CHAPTER 01', 'الفصل الأول')}</span>
                  <span className="font-arabic text-sm text-[#828694]">سَــــرد</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl text-white font-light">
                  {t(product.title, product.titleAr || product.title)}
                </h1>
                <p className="text-sm font-medium text-[#c7a76c] tracking-wider uppercase mt-1">
                  “{language === 'ar' ? (product.storyPhraseAr || product.storyPhrase) : product.storyPhrase}”
                </p>
                <p className="font-arabic text-sm text-[#717480] mt-0.5">
                  {product.storyArabic}
                </p>
              </div>

              {/* Price: 750 EGP instead of 1200 EGP */}
              <div className="pb-4 border-b border-[#212328]">
                <div className="flex items-baseline gap-3">
                  <span className="text-base text-[#717480] line-through font-mono">
                    1,200 {t('EGP', 'ج.م')}
                  </span>
                  <span className="font-mono text-3xl font-semibold text-white tabular-nums">
                    750 {t('EGP', 'ج.م')}
                  </span>
                </div>
                <p className="text-[11px] text-[#717480] mt-1">
                  {t(
                    'Exclusive Chapter 01 Price · Cash on Delivery available across Egypt',
                    'سعر خاص لقطع الفصل الأول · الدفع عند الاستلام متاح في جميع محافظات مصر'
                  )}
                </p>
              </div>

              {/* Color Selection - Exact 4 approved colors */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider text-[#9da0aa]">
                    {t('Colorway:', 'اللون:')}
                  </span>
                  <span className="font-medium text-white">
                    {language === 'ar' ? product.colorNameAr : product.colorName}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {CHAPTER_01_PRODUCTS.map((p) => {
                    const isSelected = p.id === product.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => onSelectProduct(p)}
                        className={`p-2 border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-white bg-[#1a1d25]'
                            : 'border-[#212328] hover:border-[#383c48] bg-[#0c0d11]'
                        }`}
                      >
                        <div
                          className="w-full h-3 rounded-xs mb-1.5 border border-white/10"
                          style={{ backgroundColor: p.hexValue }}
                        />
                        <span className="block text-[10px] uppercase tracking-wider truncate text-[#d4d5d9]">
                          {language === 'ar' ? p.colorNameAr : p.colorName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider text-[#9da0aa]">
                    {t('Size (Unisex):', 'المقاس (للجنسين):')}
                  </span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="text-[#c7a76c] hover:underline flex items-center gap-1 text-[11px] uppercase tracking-wider cursor-pointer"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>{t('Size Guide', 'دليل المقاسات')}</span>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {(['M', 'L', 'XL', 'XXL'] as GarmentSize[]).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 text-sm font-mono font-medium border rounded-xs transition-colors cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-white text-black border-white'
                          : 'bg-[#14161d] text-[#a2a6b4] hover:text-white border-[#242630]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#717480]">
                  {t(
                    'Designed with oversized drop shoulders. For standard fitted silhouette, choose one size down.',
                    'القصة فضفاضة (Oversized) بأكتاف ساقطة. للحصول على مقاس مضبوط تماماً، اختر مقاساً أصغر.'
                  )}
                </p>
              </div>

              {/* Quantity Stepper & Add to Bag */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#262832] bg-[#0c0d11] rounded-xs px-2 py-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-[#828694] hover:text-white transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-mono text-sm text-white tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-[#828694] hover:text-white transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      addedAnimation
                        ? 'bg-[#1a3825] text-[#9ce0b5] border border-[#2a593b]'
                        : 'bg-white hover:bg-[#e4e5e7] text-[#0b0c0e]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>{t('Added to Bag', 'تمت الإضافة للحقيبة')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('Add to Bag', 'أضف للحقيبة')}</span>
                        <span className="font-mono">·</span>
                        <span className="font-mono tabular-nums">
                          {(750 * quantity).toLocaleString()} {t('EGP', 'ج.م')}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Shipping & Payment Note */}
              <div className="pt-4 border-t border-[#212328] space-y-3 text-xs text-[#828694]">
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#c7a76c] shrink-0 mt-0.5" />
                  <span className="text-white">
                    {t(
                      'Shipping fees will be confirmed after your order is submitted, based on your location.',
                      'سيتم تأكيد مصاريف الشحن بعد إرسال الطلب، حسب المحافظة ومكان التوصيل.'
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 text-[#c7a76c] shrink-0" />
                  <span>
                    {t(
                      '14-day hassle-free doorstep exchange and inspection policy.',
                      'إمكانية المعاينة والاستبدال خلال ١٤ يوماً من الاستلام.'
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#c7a76c] shrink-0" />
                  <span>
                    {t(
                      'Payment method: Cash on Delivery (COD) in Egyptian Pounds.',
                      'طريقة الدفع: الدفع نقداً عند الاستلام بالجنيه المصري.'
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Fabric & Care Specs Accordion / Card */}
            <div className="bg-[#101217] border border-[#212328] p-6 space-y-4">
              <h3 className="font-serif text-lg text-white font-medium">
                {t('Fabric & Care Specifications', 'مواصفات الخامة والعناية')}
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-[#1b1d24]">
                  <span className="text-[#646775]">{t('Material', 'الخامة')}</span>
                  <span className="text-white text-right font-medium">
                    {language === 'ar' && product.fabricSpecsAr ? product.fabricSpecsAr.material : product.fabricSpecs.material}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1b1d24]">
                  <span className="text-[#646775]">{t('Weight', 'الوزن')}</span>
                  <span className="text-white text-right font-medium">
                    {language === 'ar' && product.fabricSpecsAr ? product.fabricSpecsAr.weight : product.fabricSpecs.weight}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1b1d24]">
                  <span className="text-[#646775]">{t('Origin', 'المنشأ')}</span>
                  <span className="text-white text-right font-medium">
                    {language === 'ar' && product.fabricSpecsAr ? product.fabricSpecsAr.origin : product.fabricSpecs.origin}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1b1d24]">
                  <span className="text-[#646775]">{t('Front Placement', 'التطريز الأمامي')}</span>
                  <span className="text-white text-right font-medium">
                    {language === 'ar' && product.fabricSpecsAr ? product.fabricSpecsAr.embroideryFront : product.fabricSpecs.embroideryFront}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1b1d24]">
                  <span className="text-[#646775]">{t('Back Placement', 'التطريز الخلفي')}</span>
                  <span className="text-white text-right font-medium">
                    {language === 'ar' && product.fabricSpecsAr ? product.fabricSpecsAr.embroideryBack : product.fabricSpecs.embroideryBack}
                  </span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#828694] space-y-1">
                <p className="font-medium text-[#d4d5d9]">{t('Care Directions:', 'إرشادات الغسيل والعناية:')}</p>
                {(language === 'ar' && product.careInstructionsAr ? product.careInstructionsAr : product.careInstructions).map((instruction, idx) => (
                  <p key={idx}>· {instruction}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Chapter 01 Companions */}
        <div className="mt-24 pt-12 border-t border-[#212328]">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#c7a76c] mb-1">
                {t('EXPLORE COMPANION PIECES', 'قطع أخرى من التشكيلة')}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
                {t('More from Chapter 01', 'ألوان أخرى من الفصل الأول')}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard
                key={relProduct.id}
                product={relProduct}
                onSelect={(p) => {
                  onSelectProduct(p);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
