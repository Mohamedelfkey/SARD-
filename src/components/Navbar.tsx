import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { PageView } from '../types';
import { ShoppingBag, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onOpenSizeGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenSizeGuide
}) => {
  const { itemCount, setIsDrawerOpen } = useCart();
  const { language, toggleLanguage, isRtl, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0c0e]/90 backdrop-blur-md border-b border-[#212328] transition-colors duration-200" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-baseline gap-2.5 whitespace-nowrap shrink-0 focus:outline-none cursor-pointer"
        >
          <span className="font-serif text-2xl tracking-[0.2em] font-medium text-white group-hover:text-[#c7a76c] transition-colors">
            SARD
          </span>
          <span className="text-[#3b3e47] text-sm font-light">|</span>
          <span className="font-arabic text-xl text-[#d4d5d9] group-hover:text-white transition-colors">
            سَــــرد
          </span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase font-medium text-[#9da0aa]">
          <button
            onClick={() => handleNavClick('shop')}
            className={`transition-colors hover:text-white whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activePage === 'shop' ? 'text-white border-b border-white' : ''
            }`}
          >
            {t('Chapter 01', 'الفصل الأول')}
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className={`transition-colors hover:text-white whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activePage === 'story' ? 'text-white border-b border-white' : ''
            }`}
          >
            {t('Our Story', 'حكايتنا')}
          </button>
          <button
            onClick={() => handleNavClick('lookbook')}
            className={`transition-colors hover:text-white whitespace-nowrap shrink-0 py-1 cursor-pointer ${
              activePage === 'lookbook' ? 'text-white border-b border-white' : ''
            }`}
          >
            {t('Lookbook', 'اللوك بوك')}
          </button>
          <button
            onClick={onOpenSizeGuide}
            className="transition-colors hover:text-white whitespace-nowrap shrink-0 py-1 cursor-pointer"
          >
            {t('Size Guide', 'دليل المقاسات')}
          </button>
          <button
            onClick={() => {
              if (activePage !== 'home') setActivePage('home');
              setTimeout(() => {
                const el = document.getElementById('sard-faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="transition-colors hover:text-white whitespace-nowrap shrink-0 py-1 cursor-pointer"
          >
            {t('FAQ', 'الأسئلة الشائعة')}
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#a2a6b4] hover:text-white bg-[#13151b] border border-[#242630] rounded-xs transition-colors cursor-pointer"
            title={language === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#c7a76c]" />
            <span className="font-mono text-[11px] tracking-wider uppercase">
              {language === 'en' ? 'عربي' : 'EN'}
            </span>
          </button>

          {/* Shopping Bag Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Shopping bag"
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-widest font-medium text-[#dedfe2] bg-[#15171c] hover:bg-[#1e2027] border border-[#272930] rounded-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('Bag', 'الحقيبة')}</span>
            <span className="font-mono text-[11px] tabular-nums text-[#c7a76c]">
              ({itemCount})
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#9da0aa] hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#212328] bg-[#0b0c0e] px-6 py-6 space-y-4 text-sm uppercase tracking-widest font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 text-white border-b border-[#1b1d22] cursor-pointer"
          >
            {t('Home', 'الرئيسية')}
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className="block w-full text-left py-2 text-[#d4d5d9] hover:text-white border-b border-[#1b1d22] cursor-pointer"
          >
            {t('Chapter 01 Collection', 'تشكيلة الفصل الأول')}
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="block w-full text-left py-2 text-[#d4d5d9] hover:text-white border-b border-[#1b1d22] cursor-pointer"
          >
            {t('Our Story & Philosophy', 'حكايتنا وفلسفة البراند')}
          </button>
          <button
            onClick={() => handleNavClick('lookbook')}
            className="block w-full text-left py-2 text-[#d4d5d9] hover:text-white border-b border-[#1b1d22] cursor-pointer"
          >
            {t('Editorial Lookbook', 'اللوك بوك')}
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSizeGuide();
            }}
            className="block w-full text-left py-2 text-[#d4d5d9] hover:text-white border-b border-[#1b1d22] cursor-pointer"
          >
            {t('Size Guide & Dimensions', 'دليل المقاسات والأبعاد')}
          </button>
          <div className="pt-2 flex items-center justify-between text-xs text-[#717480] normal-case tracking-normal">
            <span className="font-arabic">كل لون وراه حكاية</span>
            <span className="font-mono">Cairo, EG</span>
          </div>
        </div>
      )}
    </header>
  );
};
