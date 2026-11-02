import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Info } from 'lucide-react';

interface CartDrawerProps {
  onNavigateCheckout: () => void;
  onNavigateShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  onNavigateCheckout,
  onNavigateShop
}) => {
  const {
    items,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    subtotal
  } = useCart();
  const { language, isRtl, t } = useLanguage();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      <div className={`fixed inset-y-0 ${isRtl ? 'left-0 pr-10' : 'right-0 pl-10'} max-w-full flex`}>
        <div className="w-screen max-w-md bg-[#0d0e12] border-x border-[#212328] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#212328] flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl tracking-wider text-white">
                {t('YOUR SELECTION', 'حقيبة التسوق')}
              </h2>
              <p className="text-xs text-[#828694] mt-0.5">
                {t('Chapter 01 Collection', 'تشكيلة الفصل الأول')}
              </p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-[#828694] hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping note */}
          <div className="px-6 py-3.5 bg-[#12141a] border-b border-[#212328] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#c7a76c] shrink-0 mt-0.5" />
            <p className="text-xs text-[#9da0aa] leading-relaxed">
              {t(
                'Shipping fees will be confirmed after your order is submitted, based on your location.',
                'سيتم تأكيد مصاريف الشحن بعد إرسال الطلب، حسب المحافظة ومكان التوصيل.'
              )}
            </p>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-full border border-[#272930] flex items-center justify-center text-[#717480] mb-4">
                  <span className="font-serif text-lg">س</span>
                </div>
                <p className="font-serif text-lg text-white mb-2">
                  {t('Your bag is empty', 'حقيبة التسوق فارغة')}
                </p>
                <p className="text-xs text-[#828694] max-w-xs mb-6 leading-relaxed">
                  {t(
                    'Every thread in Chapter 01 carries an emotional narrative. Choose your color and size.',
                    'كل قطعة في الفصل الأول تحمل حكاية وشعوراً خاصاً. اختر لونك ومقاسك المناسب.'
                  )}
                </p>
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigateShop();
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest text-[#0b0c0e] bg-white hover:bg-[#e4e5e7] font-medium transition-colors cursor-pointer"
                >
                  {t('Explore Chapter 01', 'استعرض الفصل الأول')}
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-[#13151b] border border-[#212328] rounded-xs group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 object-contain bg-[#090a0c] p-1.5 rounded-xs shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-base text-white font-medium leading-snug">
                            {t(item.title, 'سويت شيرت هودي')}
                          </h3>
                          <p className="text-[11px] text-[#c7a76c] tracking-wider font-medium">
                            “{item.storyPhrase}”
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#646775] hover:text-[#d36f6f] transition-colors p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1.5 text-xs text-[#9da0aa]">
                        <span>{language === 'ar' ? (item.colorNameAr || item.colorName) : item.colorName}</span>
                        <span>·</span>
                        <span className="text-white font-mono bg-[#1c1e26] px-1.5 py-0.5 rounded-xs text-[11px]">
                          {t('Size', 'المقاس')} {item.size}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1a1c22]">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-[#2a2d36] bg-[#0c0d11] rounded-xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#828694] hover:text-white transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 font-mono text-xs text-white tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#828694] hover:text-white transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price: 750 EGP instead of 1200 EGP */}
                      <div className="text-right">
                        <div className="flex items-baseline gap-1.5 justify-end">
                          <span className="text-[11px] text-[#646775] line-through font-mono">
                            {(1200 * item.quantity).toLocaleString()} {t('EGP', 'ج.م')}
                          </span>
                          <span className="font-mono text-sm font-semibold text-white tabular-nums">
                            {(item.price * item.quantity).toLocaleString()} {t('EGP', 'ج.م')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#212328] bg-[#0e1014] space-y-4">
              <div className="space-y-2 text-xs">
                {/* Clearly labeled as Products Subtotal in English / إجمالي المنتجات in Arabic */}
                <div className="flex justify-between items-baseline text-sm font-medium text-white pb-2 border-b border-[#212328]">
                  <span>{t('Products Subtotal', 'إجمالي المنتجات')}</span>
                  <div className="text-right">
                    <span className="text-xs text-[#717480] line-through font-mono mr-2">
                      {(1200 * items.reduce((s, i) => s + i.quantity, 0)).toLocaleString()} {t('EGP', 'ج.م')}
                    </span>
                    <span className="font-mono text-base text-[#c7a76c] tabular-nums font-semibold">
                      {subtotal.toLocaleString()} {t('EGP', 'ج.م')}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-[#828694] leading-relaxed pt-1">
                  {t(
                    'Shipping fees will be confirmed after your order is submitted, based on your location.',
                    'سيتم تأكيد مصاريف الشحن بعد إرسال الطلب، حسب المحافظة ومكان التوصيل.'
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  onNavigateCheckout();
                }}
                className="w-full py-3.5 bg-white hover:bg-[#e6e7ea] text-[#0b0c0e] font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t('Proceed to Checkout', 'المتابعة لإتمام الطلب')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#717480]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c7a76c]" />
                <span>
                  {t(
                    'Cash on Delivery (COD) · Fast WhatsApp Confirmation',
                    'الدفع عند الاستلام (COD) · تأكيد سريع عبر واتساب'
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
