import React, { useState } from 'react';
import { PageView } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Check, Instagram, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  const { isRtl, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#08090b] text-[#9da0aa] border-t border-[#1b1d24]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Upper Newsletter & Chapter 02 Waitlist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#1b1d24]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c7a76c]">
              {t('THE ARCHIVE DISPATCH', 'رسائل الأرشيف')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              {t(
                'Receive early access to Chapter 02 releases.',
                'احصل على إشعار مبكر عند إطلاق قطع الفصل الثاني.'
              )}
            </h3>
            <p className="text-xs text-[#828694] max-w-lg leading-relaxed">
              {t(
                'We release garments in disciplined, numbered chapters. Subscribe to be notified when future narratives and limited production runs are unveiled.',
                'نطلق إصداراتنا في فصول محددة ومدروسة. اشترك لتصلك إشعارات حصرية عند الكشف عن الفصول والقصص القادمة.'
              )}
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 bg-[#141d17] border border-[#26472f] text-xs text-[#90d6a4] flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>
                  {t(
                    'You are recorded in the Chapter 02 archive ledger.',
                    'تم تسجيل بريدك الإلكتروني في سجل قائمة انتظار الفصل الثاني بنجاح.'
                  )}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('Enter your email address', 'أدخل بريدك الإلكتروني')}
                  className="flex-1 px-4 py-3 bg-[#111318] border border-[#262832] focus:border-[#c7a76c] focus:outline-none text-xs text-white rounded-xs"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-white text-black hover:bg-[#e4e5e7] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer shrink-0"
                >
                  {t('Join', 'اشتراك')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-white tracking-[0.2em]">SARD</span>
              <span className="text-[#3a3d46]">|</span>
              <span className="font-arabic text-xl text-[#d4d5d9]">سَــــرد</span>
            </div>
            <p className="text-xs text-[#717480] leading-relaxed">
              A STORY IN EVERY THREAD.
              <br />
              <span className="font-arabic text-sm text-[#828694]">كل لون وراه حكاية.</span>
            </p>
            <p className="text-xs text-[#646775] leading-relaxed">
              {t(
                'Independent streetwear label rooted in Cairo, Egypt. Heavyweight 480 GSM Egyptian cotton garments built for personal narratives.',
                'علامة أزياء ستريت وير مستقلة تنطلق من القاهرة، مصر. قطع من القطن المصري الثقيل ٤٨٠ جرام صُنعت لتروي قصتك الخاصة.'
              )}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white font-medium">
              {t('Navigation', 'أقسام الموقع')}
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('Home Overview', 'الصفحة الرئيسية')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('Chapter 01 Collection', 'تشكيلة الفصل الأول')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('Our Story & Philosophy', 'قصتنا وفلسفتنا')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lookbook')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('Editorial Lookbook', 'سجل الإطلالات (Lookbook)')}
                </button>
              </li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white font-medium">
              {t('Client Concierge', 'خدمة وتجربة العملاء')}
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('Size Guide (M–XXL)', 'دليل المقاسات (M–XXL)')}
                </button>
              </li>
              <li>
                <a
                  href="#sard-faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('sard-faq')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('Shipping & Governorates', 'الشحن والتوصيل للمحافظات')}
                </a>
              </li>
              <li>
                <span className="text-[#828694]">
                  {t('14-Day Doorstep Exchanges', 'استبدال خلال ١٤ يوماً من باب منزلك')}
                </span>
              </li>
              <li>
                <span className="text-[#828694]">
                  {t('Cash on Delivery (COD)', 'الدفع عند الاستلام (COD)')}
                </span>
              </li>
            </ul>
          </div>

          {/* Location & Social */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white font-medium">
              {t('Origin & Contact', 'التواصل والمقر')}
            </p>
            <div className="space-y-2 text-xs text-[#828694]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c7a76c] shrink-0 mt-0.5" />
                <span>{t('Cairo, Arab Republic of Egypt', 'القاهرة، جمهورية مصر العربية')}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c7a76c] shrink-0 mt-0.5" />
                <span>concierge@sard-eg.com</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c7a76c] font-mono text-xs mt-0.5">WA:</span>
                <a
                  href="https://wa.me/201039442061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +20 103 944 2061
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white hover:text-[#c7a76c] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@sard.eg</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Colophon */}
        <div className="mt-16 pt-8 border-t border-[#16181f] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#646775] gap-4">
          <p>
            {t(
              '© 2026 SARD (سَــــرد). All rights reserved. Unisex Streetwear Cairo.',
              '© ٢٠٢٦ علامة سَــــرد (SARD). جميع الحقوق محفوظة. أزياء الشارع للجنسين، القاهرة.'
            )}
          </p>
          <div className="flex items-center gap-4">
            <span>{t('Egyptian Combed Cotton', 'قطن مصري ممشط')}</span>
            <span>·</span>
            <span>{t('Unisex Silhouette', 'قصّة واسعة للجنسين')}</span>
            <span>·</span>
            <span>{t('Chapter 01 Edition', 'إصدار الفصل الأول')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
