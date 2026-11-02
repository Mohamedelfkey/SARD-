/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { PageView, Product } from './types';
import { CHAPTER_01_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterPreview } from './components/ChapterPreview';
import { FabricShowcase } from './components/FabricShowcase';
import { BrandManifesto } from './components/BrandManifesto';
import { EditorialGallery } from './components/EditorialGallery';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ShopPage } from './pages/ShopPage';
import { ProductPage } from './pages/ProductPage';
import { StoryPage } from './pages/StoryPage';
import { LookbookPage } from './pages/LookbookPage';
import { CheckoutPage } from './pages/CheckoutPage';

import { LanguageProvider, useLanguage } from './context/LanguageContext';

function SARDApp() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(CHAPTER_01_PRODUCTS[0]);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const { isRtl, t } = useLanguage();

  // Sync hash routing for shareable links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'chapter01' || hash === 'shop') {
        setActivePage('shop');
      } else if (hash === 'story') {
        setActivePage('story');
      } else if (hash === 'lookbook') {
        setActivePage('lookbook');
      } else if (hash === 'checkout') {
        setActivePage('checkout');
      } else if (hash.startsWith('product-')) {
        const slug = hash.replace('product-', '');
        const found = CHAPTER_01_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setSelectedProduct(found);
          setActivePage('product-detail');
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
    window.location.hash = `product-${product.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePage = (page: PageView) => {
    setActivePage(page);
    if (page === 'home') window.location.hash = '';
    else if (page === 'shop') window.location.hash = 'chapter01';
    else if (page === 'story') window.location.hash = 'story';
    else if (page === 'lookbook') window.location.hash = 'lookbook';
    else if (page === 'checkout') window.location.hash = 'checkout';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0b0c0e] text-[#f2f2f3] flex flex-col font-sans selection:bg-[#380d1e] selection:text-[#f8d7e0]"
    >
      {/* Top Bar Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigatePage}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              onExplore={() => handleNavigatePage('shop')}
              onReadStory={() => handleNavigatePage('story')}
            />

            {/* Short Editorial Brand Intro Banner */}
            <section className="py-16 bg-[#0e1014] border-b border-[#212328]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#c7a76c] font-medium">
                  {t('CAIRO STREETWEAR MANIFESTO', 'بيان أزياء الشارع — القاهرة')}
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-white font-light leading-relaxed">
                  {t(
                    '“SARD is built on the belief that every garment is a quiet vessel of human memory. We do not design for the trend cycle; we weave stories to stay with you.”',
                    '«سَرد مبنية على فكرة أن كل قطعة ملابس هي وعاء هادئ يحمل ذكريات ومشاعر حقيقية. نحن لا نصمم لتتبع الصيحات المؤقتة؛ نحن ننسج حكايات لتبقى معك.»'
                  )}
                </p>
                <div className="pt-2 flex items-center justify-center gap-4 text-xs text-[#828694]">
                  <span>{t('Unisex Oversized Fit', 'قصّة واسعة للجنسين (Oversized)')}</span>
                  <span>·</span>
                  <span>{t('480 GSM Egyptian Terry', '٤٨٠ جرام قطن مصري فاخر')}</span>
                  <span>·</span>
                  <span className="font-arabic text-sm text-[#d4d5d9]">كل لون وراه حكاية</span>
                </div>
              </div>
            </section>

            <ChapterPreview
              onSelectProduct={handleSelectProduct}
              onViewAll={() => handleNavigatePage('shop')}
            />

            <FabricShowcase />

            <BrandManifesto
              onReadFullStory={() => handleNavigatePage('story')}
            />

            <EditorialGallery />

            <FAQSection
              onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            />
          </>
        )}

        {activePage === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}

        {activePage === 'product-detail' && (
          <ProductPage
            product={selectedProduct}
            onBack={() => handleNavigatePage('shop')}
            onSelectProduct={handleSelectProduct}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}

        {activePage === 'story' && (
          <StoryPage
            onExploreCollection={() => handleNavigatePage('shop')}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {activePage === 'lookbook' && (
          <LookbookPage
            onSelectProduct={handleSelectProduct}
            onExploreCollection={() => handleNavigatePage('shop')}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage
            onBackToShopping={() => handleNavigatePage('shop')}
            onNavigateHome={() => handleNavigatePage('home')}
          />
        )}
      </main>

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        onNavigateCheckout={() => handleNavigatePage('checkout')}
        onNavigateShop={() => handleNavigatePage('shop')}
      />

      {/* Unisex Sizing & Dimensions Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigatePage}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <SARDApp />
      </CartProvider>
    </LanguageProvider>
  );
}
