export type HoodieColor = 'burgundy' | 'black' | 'navy' | 'dark-grey';

export type GarmentSize = 'M' | 'L' | 'XL' | 'XXL';

export type Language = 'en' | 'ar';

export interface ProductImageSet {
  front: string;
  back: string;
  composite: string;
  detail: string;
  swatch?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  storyPhrase: string;
  storyPhraseAr: string;
  storyArabic: string;
  colorName: string;
  colorNameAr: string;
  colorCode: HoodieColor;
  hexValue: string;
  accentBg: string;
  price: number; // 750 EGP
  originalPrice: number; // 1200 EGP
  pricePlaceholderLabel: string;
  badge?: string;
  badgeAr?: string;
  images: ProductImageSet;
  overview: string;
  overviewAr: string;
  narrative: string;
  narrativeAr: string;
  conceptNotes: string[];
  conceptNotesAr: string[];
  fabricSpecs: {
    material: string;
    weight: string;
    finish: string;
    origin: string;
    embroideryFront: string;
    embroideryBack: string;
  };
  fabricSpecsAr: {
    material: string;
    weight: string;
    finish: string;
    origin: string;
    embroideryFront: string;
    embroideryBack: string;
  };
  careInstructions: string[];
  careInstructionsAr: string[];
}

export interface CartItem {
  id: string; // unique item id: productId-size
  productId: string;
  title: string;
  titleAr?: string;
  colorName: string;
  colorNameAr: string;
  storyPhrase: string;
  storyPhraseAr?: string;
  size: GarmentSize;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  alternativePhone: string;
  email: string;
  governorate: string;
  cityArea: string;
  detailedAddress: string;
  buildingApt: string;
  orderNotes: string;
  paymentMethod: 'cod';
}

export interface OrderConfirmation {
  orderId: string;
  timestamp: string;
  customer: CheckoutFormData;
  items: CartItem[];
  subtotal: number;
  paymentMethod: string;
}

export interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface SizeChartItem {
  size: GarmentSize;
  chestCm: string;
  lengthCm: string;
  shoulderCm: string;
  sleeveCm: string;
  fitNote: string;
  fitNoteAr: string;
}

export type PageView = 'home' | 'shop' | 'story' | 'lookbook' | 'product-detail' | 'checkout' | 'confirmation';
