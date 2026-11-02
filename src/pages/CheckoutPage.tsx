import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { CheckoutFormData } from '../types';
import { EGYPT_GOVERNORATES } from '../data/products';
import {
  ArrowLeft,
  ShieldCheck,
  MapPin,
  Phone,
  User,
  Info,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';

interface CheckoutPageProps {
  onBackToShopping: () => void;
  onNavigateHome: () => void;
}

const SARD_WHATSAPP_NUMBER = '201039442061'; // +20 103 944 2061

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  onBackToShopping,
  onNavigateHome
}) => {
  const { items, subtotal, clearCart } = useCart();
  const { language, isRtl, t } = useLanguage();

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    alternativePhone: '',
    email: '',
    governorate: 'Cairo (القاهرة)',
    cityArea: '',
    detailedAddress: '',
    buildingApt: '',
    orderNotes: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [whatsappPrepared, setWhatsappPrepared] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState('');
  const [preparedMessage, setPreparedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // If cart is empty and WhatsApp hasn't been prepared, show empty state
  if (items.length === 0 && !whatsappPrepared) {
    return (
      <div className="min-h-screen bg-[#0b0c0e] py-24 flex items-center justify-center" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full border border-[#272930] flex items-center justify-center text-[#717480] mx-auto mb-6">
            <span className="font-serif text-2xl">س</span>
          </div>
          <h2 className="font-serif text-3xl text-white font-light mb-3">
            {t('Your shopping bag is empty', 'حقيبة التسوق فارغة')}
          </h2>
          <p className="text-xs text-[#828694] mb-8 leading-relaxed">
            {t(
              'Please select at least one Chapter 01 hoodie before proceeding to checkout.',
              'يرجى اختيار قطعة واحدة على الأقل من الفصل الأول قبل التوجه لإتمام الطلب.'
            )}
          </p>
          <button
            onClick={onBackToShopping}
            className="px-8 py-3.5 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-[#e4e5e7] transition-colors cursor-pointer"
          >
            {t('Explore Chapter 01', 'استعراض تشكيلة الفصل الأول')}
          </button>
        </div>
      </div>
    );
  }

  const validatePhone = (phoneStr: string) => {
    const cleaned = phoneStr.replace(/[\s-]/g, '');
    // Standard Egyptian mobile number validation: 11 digits starting with 010, 011, 012, or 015
    return /^01[0125][0-9]{8}$/.test(cleaned);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t(
        'Full name is required for delivery.',
        'الاسم بالكامل مطلوب لتوصيل الطلب.'
      );
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t(
        'Phone number is required.',
        'رقم الهاتف مطلوب للتواصل وتأكيد الشحن.'
      );
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t(
        'Please enter a valid 11-digit Egyptian phone number (e.g. 010XXXXXXXX, 011XXXXXXXX).',
        'يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقماً (مثال: 010XXXXXXXX).'
      );
    }

    if (formData.alternativePhone.trim() && !validatePhone(formData.alternativePhone)) {
      newErrors.alternativePhone = t(
        'Alternative phone must be a valid 11-digit Egyptian mobile number.',
        'رقم الهاتف البديل يجب أن يكون رقماً مصرياً صحيحاً مكوناً من 11 رقماً.'
      );
    }

    if (!formData.governorate.trim()) {
      newErrors.governorate = t('Please select a governorate.', 'يرجى اختيار المحافظة.');
    }

    if (!formData.cityArea.trim()) {
      newErrors.cityArea = t(
        'City or area is required (e.g. New Cairo, Maadi, Sheikh Zayed).',
        'المدينة أو المنطقة مطلوبة (مثال: التجمع الخامس، المعادي، الشيخ زايد).'
      );
    }

    if (!formData.detailedAddress.trim()) {
      newErrors.detailedAddress = t(
        'Full detailed address is required for courier delivery.',
        'العنوان بالتفصيل مطلوب لوصول مندوب الشحن.'
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const isAr = language === 'ar';

    if (isAr) {
      let msg = `*طلب جديد — SARD (سَــــرد)*\n`;
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `*بيانات العميل والتوصيل:*\n`;
      msg += `• الاسم بالكامل: ${formData.fullName.trim()}\n`;
      msg += `• رقم الهاتف: ${formData.phone.trim()}\n`;
      if (formData.alternativePhone.trim()) {
        msg += `• رقم هاتف بديل: ${formData.alternativePhone.trim()}\n`;
      }
      msg += `• المحافظة: ${formData.governorate}\n`;
      msg += `• المدينة / المنطقة: ${formData.cityArea.trim()}\n`;
      msg += `• العنوان بالتفصيل: ${formData.detailedAddress.trim()}`;
      if (formData.buildingApt.trim()) {
        msg += ` (${formData.buildingApt.trim()})`;
      }
      msg += `\n`;
      if (formData.orderNotes.trim()) {
        msg += `• ملاحظات إضافية: ${formData.orderNotes.trim()}\n`;
      }
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `*المنتجات المطلوبة (الفصل الأول):*\n`;
      items.forEach((item, index) => {
        const itemTitle = item.titleAr || item.title;
        const itemColor = item.colorNameAr || item.colorName;
        msg += `${index + 1}. *${itemTitle}*\n`;
        msg += `   - اللون: ${itemColor}\n`;
        msg += `   - المقاس: ${item.size}\n`;
        msg += `   - الكمية: ${item.quantity}\n`;
        msg += `   - سعر القطعة: 750 ج.م\n`;
        msg += `   - الإجمالي: ${item.quantity * 750} ج.م\n`;
      });
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `*إجمالي المنتجات:* ${subtotal.toLocaleString()} ج.م\n`;
      msg += `*طريقة الدفع:* الدفع عند الاستلام (COD) — Cash on Delivery\n`;
      msg += `*مصاريف الشحن:* سيتم تأكيدها بعد مراجعة الطلب حسب المحافظة ومكان التوصيل.\n`;
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `_أرجو تأكيد الطلب والبدء في التجهيز._`;
      return msg;
    } else {
      let msg = `*NEW ORDER — SARD (سَــــرد)*\n`;
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `*Customer & Delivery Information:*\n`;
      msg += `• Full Name: ${formData.fullName.trim()}\n`;
      msg += `• Phone: ${formData.phone.trim()}\n`;
      if (formData.alternativePhone.trim()) {
        msg += `• Alt Phone: ${formData.alternativePhone.trim()}\n`;
      }
      msg += `• Governorate: ${formData.governorate}\n`;
      msg += `• City / Area: ${formData.cityArea.trim()}\n`;
      msg += `• Full Address: ${formData.detailedAddress.trim()}`;
      if (formData.buildingApt.trim()) {
        msg += ` (${formData.buildingApt.trim()})`;
      }
      msg += `\n`;
      if (formData.orderNotes.trim()) {
        msg += `• Notes: ${formData.orderNotes.trim()}\n`;
      }
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `*Ordered Items (Chapter 01):*\n`;
      items.forEach((item, index) => {
        msg += `${index + 1}. *${item.title}*\n`;
        msg += `   - Color: ${item.colorName}\n`;
        msg += `   - Size: ${item.size}\n`;
        msg += `   - Quantity: ${item.quantity}\n`;
        msg += `   - Unit Price: 750 EGP\n`;
        msg += `   - Item Total: ${item.quantity * 750} EGP\n`;
      });
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `*Products Subtotal:* ${subtotal.toLocaleString()} EGP\n`;
      msg += `*Payment Method:* Cash on Delivery (COD)\n`;
      msg += `*Shipping Fees:* Will be confirmed based on your location.\n`;
      msg += `━━━━━━━━━━━━━━━━━━━\n`;
      msg += `_Please confirm and process my order._`;
      return msg;
    }
  };

  const handleProceedToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${SARD_WHATSAPP_NUMBER}&text=${encodedMessage}`;

    setPreparedMessage(message);
    setPreparedUrl(url);
    setWhatsappPrepared(true);

    // Open WhatsApp in a new tab or window
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(preparedMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] py-16 text-[#ededee]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top Navigation */}
        <div className="mb-10 pb-4 border-b border-[#212328] flex items-center justify-between">
          <button
            onClick={onBackToShopping}
            className="text-xs uppercase tracking-widest text-[#828694] hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            <span>{t('Back to Collection', 'العودة للمنتجات')}</span>
          </button>
          <div className="text-xs text-[#717480]">
            {t('Direct WhatsApp Checkout · Cash on Delivery', 'طلب مباشر عبر واتساب · الدفع عند الاستلام')}
          </div>
        </div>

        {/* POST-ACTION GUIDANCE CARD (Shows when WhatsApp has been opened) */}
        {whatsappPrepared && (
          <div className="mb-12 bg-[#12161f] border border-[#2c364c] p-6 sm:p-8 rounded-xs space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1b3d2b] border border-[#2b6d49] text-[#7ce4a8] flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {t(
                    'Next Step: Press "Send" in WhatsApp',
                    'الخطوة التالية: اضغط "إرسال" داخل تطبيق واتساب'
                  )}
                </h3>
                <p className="text-xs text-[#a2a6b4] leading-relaxed">
                  {t(
                    'We have pre-filled your entire order details and customer information into WhatsApp. Your order is NOT finalized until you press Send to SARD team at +20 103 944 2061.',
                    'قمنا بتجهيز كافة تفاصيل طلبك وبيانات الشحن داخل رسالة واتساب. لم يتم استلام طلبك بعد — يجب الضغط على زر "إرسال" داخل واتساب لممثلي خدمة عملاء SARD على الرقم +20 103 944 2061.'
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#1e2638]">
              <a
                href={preparedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-medium text-xs uppercase tracking-wider flex items-center gap-2 rounded-xs transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t('Open WhatsApp Again', 'فتح واتساب مرة أخرى')}</span>
              </a>

              <button
                onClick={handleCopyMessage}
                className="px-4 py-2.5 bg-[#171a24] hover:bg-[#202533] border border-[#2c3144] text-xs text-white uppercase tracking-wider flex items-center gap-2 rounded-xs transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#7ce4a8]" />
                    <span className="text-[#7ce4a8]">{t('Copied to Clipboard', 'تم نسخ الرسالة')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t('Copy Order Text', 'نسخ نص الطلب')}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  clearCart();
                  onNavigateHome();
                }}
                className="px-4 py-2.5 text-xs text-[#828694] hover:text-white transition-colors cursor-pointer ml-auto"
              >
                {t('I have sent the message · Clear bag', 'أرسلت الرسالة بالفعل · تفريغ الحقيبة')}
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form: Customer Information (7 Cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleProceedToWhatsApp} className="bg-[#101217] border border-[#212328] p-6 sm:p-10 space-y-8">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#c7a76c] mb-1">
                  {t('DELIVERY INFORMATION', 'بيانات الشحن والتوصيل')}
                </div>
                <h1 className="font-serif text-3xl text-white font-light">
                  {t('Customer & Delivery Details', 'بيانات العميل ومكان الاستلام')}
                </h1>
                <p className="text-xs text-[#828694] mt-1 leading-relaxed">
                  {t(
                    'Please fill in your exact delivery address before generating the WhatsApp order message.',
                    'يرجى ملء بيانات التوصيل بدقة لإنشاء رسالة الطلب عبر واتساب.'
                  )}
                </p>
              </div>

              {/* 1. Customer Contact Details */}
              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-wider text-[#9da0aa] font-medium pb-2 border-b border-[#1c1e26] flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#c7a76c]" />
                  <span>{t('1. Customer Information', '١. البيانات الشخصية')}</span>
                </h2>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                    {t('Full Name', 'الاسم بالكامل')} <span className="text-[#d36f6f]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder={t('e.g. Omar El-Sherif', 'مثال: عمر الشريف')}
                    className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white rounded-xs"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-[#d36f6f] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                      {t('Phone Number', 'رقم الهاتف (موبايل)')} <span className="text-[#d36f6f]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white font-mono rounded-xs"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-[#d36f6f] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                      {t('Alternative Phone', 'رقم هاتف بديل')} <span className="text-[#646775] normal-case tracking-normal">({t('Optional', 'اختياري')})</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.alternativePhone}
                      onChange={(e) => {
                        setFormData({ ...formData, alternativePhone: e.target.value });
                        if (errors.alternativePhone) setErrors({ ...errors, alternativePhone: '' });
                      }}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white font-mono rounded-xs"
                    />
                    {errors.alternativePhone && (
                      <p className="text-[11px] text-[#d36f6f] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.alternativePhone}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. Delivery Destination */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xs uppercase tracking-wider text-[#9da0aa] font-medium pb-2 border-b border-[#1c1e26] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c7a76c]" />
                  <span>{t('2. Delivery Destination', '٢. عنوان التوصيل')}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                      {t('Governorate', 'المحافظة')} <span className="text-[#d36f6f]">*</span>
                    </label>
                    <select
                      value={formData.governorate}
                      onChange={(e) => {
                        setFormData({ ...formData, governorate: e.target.value });
                        if (errors.governorate) setErrors({ ...errors, governorate: '' });
                      }}
                      className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white rounded-xs cursor-pointer"
                    >
                      {EGYPT_GOVERNORATES.map((gov) => (
                        <option key={gov} value={gov} className="bg-[#12141a] text-white">
                          {gov}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                      {t('City / Area', 'المدينة / المنطقة')} <span className="text-[#d36f6f]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.cityArea}
                      onChange={(e) => {
                        setFormData({ ...formData, cityArea: e.target.value });
                        if (errors.cityArea) setErrors({ ...errors, cityArea: '' });
                      }}
                      placeholder={t('e.g. New Cairo (Tagamoa) / Maadi', 'مثال: التجمع الخامس / المعادي')}
                      className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white rounded-xs"
                    />
                    {errors.cityArea && (
                      <p className="text-[11px] text-[#d36f6f] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.cityArea}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                    {t('Full Detailed Address', 'العنوان بالتفصيل')} <span className="text-[#d36f6f]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.detailedAddress}
                    onChange={(e) => {
                      setFormData({ ...formData, detailedAddress: e.target.value });
                      if (errors.detailedAddress) setErrors({ ...errors, detailedAddress: '' });
                    }}
                    placeholder={t('Street name, landmark, building number...', 'اسم الشارع، علامة مميزة، رقم المبنى...')}
                    className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white rounded-xs"
                  />
                  {errors.detailedAddress && (
                    <p className="text-[11px] text-[#d36f6f] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.detailedAddress}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                      {t('Building / Apartment / Floor', 'المبنى / رقم الشقة / الدور')} <span className="text-[#646775] normal-case tracking-normal">({t('Optional', 'اختياري')})</span>
                    </label>
                    <input
                      type="text"
                      value={formData.buildingApt}
                      onChange={(e) => setFormData({ ...formData, buildingApt: e.target.value })}
                      placeholder={t('Bldg 12, Apt 4, 3rd floor', 'عمارة ١٢، شقة ٤، الدور الثالث')}
                      className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#828694] mb-1.5">
                      {t('Additional Notes', 'ملاحظات إضافية')} <span className="text-[#646775] normal-case tracking-normal">({t('Optional', 'اختياري')})</span>
                    </label>
                    <input
                      type="text"
                      value={formData.orderNotes}
                      onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                      placeholder={t('Any delivery instructions...', 'أي تعليمات للمندوب...')}
                      className="w-full px-4 py-3 bg-[#0c0d11] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-sm text-white rounded-xs"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Payment Method: Cash on Delivery ONLY */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xs uppercase tracking-wider text-[#9da0aa] font-medium pb-2 border-b border-[#1c1e26] flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c7a76c]" />
                  <span>{t('3. Payment Method', '٣. طريقة الدفع')}</span>
                </h2>

                <div className="p-4 bg-[#14161f] border border-[#2c2f3d] rounded-xs flex items-start gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={true}
                    readOnly
                    className="mt-1 text-[#c7a76c] focus:ring-0"
                  />
                  <div>
                    <span className="font-serif text-base text-white block">
                      {t('Cash on Delivery (COD)', 'الدفع عند الاستلام (COD)')}
                    </span>
                    <p className="text-xs text-[#828694] mt-0.5 leading-relaxed">
                      {t(
                        'Pay in cash upon receiving and inspecting your package. No online payment required.',
                        'ادفع نقداً عند استلام ومعاينة الشحنة مباشرة للمندوب. لا يتطلب أي دفع إلكتروني مسبق.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping fee mandatory bilingual notice */}
              <div className="p-4 bg-[#12141a] border border-[#212328] rounded-xs flex items-start gap-3">
                <Info className="w-4 h-4 text-[#c7a76c] shrink-0 mt-0.5" />
                <div className="text-xs text-[#9da0aa] leading-relaxed space-y-1">
                  <p className="text-white font-medium">
                    {t(
                      'Shipping fees will be confirmed after your order is submitted, based on your location.',
                      'سيتم تأكيد مصاريف الشحن بعد إرسال الطلب، حسب المحافظة ومكان التوصيل.'
                    )}
                  </p>
                  <p className="text-[#717480] text-[11px]">
                    {t(
                      'Our team will confirm courier dispatch via Bosta or Flextock with exact delivery rates to your area.',
                      'سيقوم فريقنا بالتواصل لتأكيد شركة الشحن (بوسطة أو فليكستوك) ومصاريف التوصيل المحددة لموقعك.'
                    )}
                  </p>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#212328]">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-black font-medium text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2 rounded-xs shadow-lg shadow-[#25D366]/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {t(
                      `Confirm & Send via WhatsApp (${subtotal.toLocaleString()} EGP)`,
                      `تأكيد وإرسال الطلب عبر واتساب (${subtotal.toLocaleString()} ج.م)`
                    )}
                  </span>
                </button>
                <p className="text-center text-[11px] text-[#717480] mt-3 leading-relaxed">
                  {t(
                    'Clicking opens WhatsApp (+20 103 944 2061) with your order ready. Remember to press Send in WhatsApp.',
                    'الضغط على الزر سيفتح محادثة واتساب (+20 103 944 2061) برسالة جاهزة. يرجى الضغط على إرسال في واتساب لإتمام الطلب.'
                  )}
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#101217] border border-[#212328] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#212328]">
                <h2 className="font-serif text-xl text-white font-medium">
                  {t('Order Summary', 'ملخص الطلب')}
                </h2>
                <span className="font-mono text-xs text-[#c7a76c]">
                  {items.length} {t(items.length === 1 ? 'Piece' : 'Pieces', 'قطع')}
                </span>
              </div>

              {/* Itemized List */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 text-xs p-2 bg-[#0c0d11] border border-[#1d1f27] rounded-xs">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-16 object-contain bg-black p-1 rounded-xs shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm text-white font-medium">
                          {t(item.title, 'سويت شيرت هودي')}
                        </p>
                        <p className="text-[11px] text-[#c7a76c] font-medium">
                          “{item.storyPhrase}”
                        </p>
                        <p className="text-[#828694] mt-0.5 text-[11px]">
                          {language === 'ar' ? (item.colorNameAr || item.colorName) : item.colorName} · {t('Size', 'المقاس')} {item.size} · {t('Qty', 'الكمية')} {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-baseline justify-between pt-1 border-t border-[#1a1c24]">
                        <span className="text-[10px] text-[#646775]">
                          {t('Unit Price:', 'سعر القطعة:')} 750 {t('EGP', 'ج.م')}
                        </span>
                        <div className="text-right">
                          <span className="text-[10px] text-[#646775] line-through font-mono mr-1.5">
                            {(1200 * item.quantity).toLocaleString()} {t('EGP', 'ج.م')}
                          </span>
                          <span className="font-mono text-xs text-white tabular-nums font-semibold">
                            {(item.price * item.quantity).toLocaleString()} {t('EGP', 'ج.م')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="pt-4 border-t border-[#212328] space-y-3 text-xs">
                {/* Clearly labeled as Products Subtotal in English / إجمالي المنتجات in Arabic */}
                <div className="flex justify-between items-baseline text-sm font-medium text-white pb-3 border-b border-[#212328]">
                  <span className="font-serif text-base">
                    {t('Products Subtotal', 'إجمالي المنتجات')}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-[#717480] line-through font-mono mr-2">
                      {(1200 * items.reduce((s, i) => s + i.quantity, 0)).toLocaleString()} {t('EGP', 'ج.م')}
                    </span>
                    <span className="font-mono text-xl text-[#c7a76c] tabular-nums font-semibold">
                      {subtotal.toLocaleString()} {t('EGP', 'ج.م')}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#13151c] border border-[#212328] rounded-xs text-[11px] text-[#9da0aa] leading-relaxed">
                  <span className="text-white block font-medium mb-0.5">
                    {t('Shipping Fee:', 'مصاريف الشحن:')}
                  </span>
                  {t(
                    'Shipping fees will be confirmed after your order is submitted, based on your location.',
                    'سيتم تأكيد مصاريف الشحن بعد إرسال الطلب، حسب المحافظة ومكان التوصيل.'
                  )}
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 text-[11px] text-[#717480] space-y-1.5 border-t border-[#1c1e26]">
                <p>• {t('100% Egyptian Combed Cotton Terry (480 GSM)', 'قطن مصري ممشط ١٠٠٪ (٤٨٠ جرام)')}</p>
                <p>• {t('Payment on delivery in Egyptian Pounds (COD)', 'الدفع عند الاستلام بالجنيه المصري (COD)')}</p>
                <p>• {t('SARD Official WhatsApp: +20 103 944 2061', 'واتساب SARD الرسمي: 2061 944 103 20+')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
