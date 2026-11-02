import { Product, SizeChartItem, FAQItem } from '../types';

export const CHAPTER_01_PRODUCTS: Product[] = [
  {
    id: 'sard-ch01-burgundy',
    slug: 'burgundy-what-remains-unseen',
    title: 'Chapter 01 Hoodie',
    titleAr: 'سويت شيرت هودي — الفصل الأول',
    storyPhrase: 'WHAT REMAINS UNSEEN',
    storyPhraseAr: 'ما وراء الصمت',
    storyArabic: 'ما وراء الصمت',
    colorName: 'Deep Plum Burgundy',
    colorNameAr: 'بورجوندي دافئ (برقوقي)',
    colorCode: 'burgundy',
    hexValue: '#380d1e',
    accentBg: '#2a0916',
    price: 750,
    originalPrice: 1200,
    pricePlaceholderLabel: '750 EGP',
    badge: 'Signature Colorway',
    badgeAr: 'اللون التوقيعي',
    images: {
      front: '/assets/products/burgundy-front.jpg',
      back: '/assets/products/burgundy-back.jpg',
      composite: '/assets/products/burgundy-column.jpg',
      detail: '/assets/products/embroidery-details.jpg',
      swatch: '/assets/products/burgundy-fabric-swatch.jpg'
    },
    overview: 'Crafted in our signature deep plum-toned burgundy—an authoritative hue developed specifically for SARD with subtle wine undertones and zero excessive warmth.',
    overviewAr: 'صُمم بدرجة البورجوندي البرقوقي الداكن المعتمدة لدينا — لون حصري تم تطويره لعلامة سَرد بلمسات خمرية هادئة وبدون أي لمعان أو احمرار مبالغ فيه.',
    narrative: '“WHAT REMAINS UNSEEN” speaks to the hidden weight and quiet vulnerability we carry beneath the surface. It is the unspoken conversation held in the dark, the emotions never spelled out, and the beauty that exists purely because it was never performed for an audience.',
    narrativeAr: 'تعبّر عبارة "ما وراء الصمت" عن المشاعر العميقة التي نحملها في داخلنا دون أن نبوح بها. إنها الحوارات الصامتة في أوقات الهدوء، والأحاسيس التي لا تُكتب بالحروف، والجمال الخالص الذي ينبع من كونه حقيقياً لم يُصنع ليراه الجميع.',
    conceptNotes: [
      'Deep plum-toned burgundy swatch reference—rich, muted, and non-saturated',
      'Small Arabic "سرد" embroidered in pearl silver on front left chest',
      'Back features high-density embroidery: "WHAT REMAINS UNSEEN" with architectural vertical line',
      'Oversized relaxed drop-shoulder cut suited for all silhouettes'
    ],
    conceptNotesAr: [
      'درجة بورجوندي برقوقية داكنة معتمدة — لون غني ومطفي وغير مشبع',
      'تطريز عربي دقيق لكلمة "سرد" بلون فضي لؤلؤي على الصدر الأيسر',
      'تطريز خلفي بارز عالي الكثافة مع خط رأسي معماري هادئ',
      'قصّة واسعة (Oversized) بأكتاف ساقطة تمنح راحة وانسيابية لجميع الأجسام'
    ],
    fabricSpecs: {
      material: '100% Egyptian Combed Cotton Terry Fleece',
      weight: '480 GSM (Heavyweight structure with velvet-touch interior)',
      finish: 'Pre-shrunk, double-brushed, silicon softened',
      origin: 'Knit & Crafted in Cairo, Egypt',
      embroideryFront: 'High-density 3D stitch Arabic "سرد"',
      embroideryBack: 'Fine-gauge satin stitch “WHAT REMAINS UNSEEN |”'
    },
    fabricSpecsAr: {
      material: 'قطن مصري ممشط ١٠٠٪ تيري صوف',
      weight: '٤٨٠ جرام (خامة ثقيلة متماسكة بملمس مخملي ناعم من الداخل)',
      finish: 'معالج ضد الانكماش، وممشط مرتين لنعومة دائمة',
      origin: 'غزل وصنع في القاهرة، مصر',
      embroideryFront: 'تطريز بارز ثلاثي الأبعاد لكلمة "سرد"',
      embroideryBack: 'تطريز ساتان فائق الدقة مع خط رأسي'
    },
    careInstructions: [
      'Machine wash cold (30°C) on delicate cycle inside out',
      'Wash with similar deep shades only',
      'Hang dry in shade to maintain rich fabric luster and weight',
      'Iron inside out on low heat; avoid direct contact with embroidery threads'
    ],
    careInstructionsAr: [
      'غسيل آلي بماء بارد (٣٠ درجة مئوية) على الدورة الخفيفة مع قلب القطعة',
      'يُغسل مع ألوان داكنة مماثلة فقط',
      'يُجفف بالتعليق في الظل للحفاظ على بريق النسيج ووزنه',
      'الكي من الداخل على درجة حرارة منخفضة مع تجنب ملامسة خيوط التطريز مباشرة'
    ]
  },
  {
    id: 'sard-ch01-black',
    slug: 'black-silence-has-its-reasons',
    title: 'Chapter 01 Hoodie',
    titleAr: 'سويت شيرت هودي — الفصل الأول',
    storyPhrase: 'SILENCE HAS ITS REASONS',
    storyPhraseAr: 'للصمت أسبابه',
    storyArabic: 'للصمت أسبابه',
    colorName: 'Obsidian Black',
    colorNameAr: 'أسود فحمي مطفي',
    colorCode: 'black',
    hexValue: '#121316',
    accentBg: '#090a0c',
    price: 750,
    originalPrice: 1200,
    pricePlaceholderLabel: '750 EGP',
    badge: 'Core Edition',
    badgeAr: 'الإصدار الأساسي',
    images: {
      front: '/assets/products/black-front.jpg',
      back: '/assets/products/black-back.jpg',
      composite: '/assets/products/black-column.jpg',
      detail: '/assets/products/embroidery-details.jpg'
    },
    overview: 'A deep, pure obsidian black with matte light-absorption. Minimal, impenetrable, and timeless in every environment.',
    overviewAr: 'أسود فحمي نقي يمتص الضوء بأسلوب مطفي أنيق. بسيط، غامض، ولا يرتبط بزمن معين.',
    narrative: '“SILENCE HAS ITS REASONS” is an homage to deliberate quiet. In a world demanding constant noise, silence is neither absence nor hesitation—it is a conscious boundary, a refuge, and a measured sanctuary for what truly matters.',
    narrativeAr: 'عبارة "للصمت أسبابه" هي تقدير للهدوء الواعي. في عالم يمتلئ بالضجيج المستمر، ليس الصمت غياباً أو تردداً، بل هو مساحة أمان وحدود مدركة نضعها لحماية ما يهمنا بصدق.',
    conceptNotes: [
      'Deep optical pitch black dyed with low-impact pigment dyes',
      'Tonal yet crisp Arabic embroidery on front chest',
      'Back typography: "SILENCE HAS ITS REASONS" aligned with central linear stitch',
      'Substantial double-layered hood providing structural drape'
    ],
    conceptNotesAr: [
      'أسود بصري حالك مصبوغ بأصباغ آمنة وثابتة',
      'تطريز عربي لكلمة "سرد" على الصدر بدقة بالغة',
      'عبارة الظهر "للصمت أسبابه" موازية لخط التطريز المركزي',
      'غطاء رأس (Hood) مزدوج الطبقات يمنح قواماً ثابتاً وأنيقاً'
    ],
    fabricSpecs: {
      material: '100% Egyptian Combed Cotton Terry Fleece',
      weight: '480 GSM (Heavyweight architectural drape)',
      finish: 'Pre-shrunk, carbonized face finish for ultra-matte appearance',
      origin: 'Knit & Crafted in Cairo, Egypt',
      embroideryFront: 'High-density 3D stitch Arabic "سرد"',
      embroideryBack: 'Fine-gauge satin stitch “SILENCE HAS ITS REASONS |”'
    },
    fabricSpecsAr: {
      material: 'قطن مصري ممشط ١٠٠٪ تيري صوف',
      weight: '٤٨٠ جرام (قوام متماسك يحافظ على شكله طوال اليوم)',
      finish: 'معالج ضد الانكماش بسطح كربوني لمظهر مطفي فاخر',
      origin: 'غزل وصنع في القاهرة، مصر',
      embroideryFront: 'تطريز بارز ثلاثي الأبعاد لكلمة "سرد"',
      embroideryBack: 'تطريز ساتان فائق الدقة مع خط رأسي'
    },
    careInstructions: [
      'Machine wash cold (30°C) inside out to prevent black fade',
      'Use gentle liquid detergent with no optical brighteners',
      'Dry flat or hang in shade away from direct sunlight',
      'Cool iron inside out if desired'
    ],
    careInstructionsAr: [
      'غسيل آلي بماء بارد (٣٠ درجة مئوية) مع قلب القطعة لحماية ثبات اللون الأسود',
      'استخدام سائل غسيل لطيف خالٍ من المبيضات',
      'التجفيف في الظل بعيداً عن أشعة الشمس المباشرة',
      'كي خفيف من الداخل عند الرغبة'
    ]
  },
  {
    id: 'sard-ch01-navy',
    slug: 'navy-before-i-was-ready',
    title: 'Chapter 01 Hoodie',
    titleAr: 'سويت شيرت هودي — الفصل الأول',
    storyPhrase: 'BEFORE I WAS READY',
    storyPhraseAr: 'قبل أن أكون جاهزاً',
    storyArabic: 'قبل أن أكون جاهزاً',
    colorName: 'Midnight Navy',
    colorNameAr: 'كحلي ليلي',
    colorCode: 'navy',
    hexValue: '#141d2e',
    accentBg: '#0d131f',
    price: 750,
    originalPrice: 1200,
    pricePlaceholderLabel: '750 EGP',
    badge: 'Editorial Choice',
    badgeAr: 'اختيار التحرير',
    images: {
      front: '/assets/products/navy-front.jpg',
      back: '/assets/products/navy-back.jpg',
      composite: '/assets/products/navy-column.jpg',
      detail: '/assets/products/embroidery-details.jpg'
    },
    overview: 'A muted midnight navy with subtle oceanic depth. Quietly distinguished, pairs effortlessly across streetwear and tailored wardrobes.',
    overviewAr: 'كحلي ليلي هادئ بعمق لوني مميز. وقور وأنيق يسهل تنسيقه مع مختلف الإطلالات اليومية.',
    narrative: '“BEFORE I WAS READY” acknowledges life’s transformative turning points. The biggest moments never wait for readiness—they invite us to leap forward anyway, allowing understanding to catch up with our bravery.',
    narrativeAr: 'تعترف عبارة "قبل أن أكون جاهزاً" بالمحطات الفاصلة في حياتنا. إن القرارات الكبرى لا تنتظر لحظة الجاهزية الكاملة، بل تدعونا لأن نخوض التجربة بشجاعة حتى نتعلم ونتطور في الطريق.',
    conceptNotes: [
      'Muted nocturnal navy tone with subtle cool indigo base',
      'Clean contrast embroidery on front chest and upper back',
      'Heavy ribbed cuffs and hem engineered to hold shape over years',
      'Generous kangaroo pocket with reinforced bartack corners'
    ],
    conceptNotesAr: [
      'درجة كحلي نيلية ليلية ذات طابع راقٍ وهادئ',
      'تطريز عالي الوضوح على الصدر والظهر',
      'أساور وكمرات مضلعة قوية تحتفظ بمرونتها لسنوات طويلة',
      'جيب كنغر واسع بدرزات تقوية متينة عند الزوايا'
    ],
    fabricSpecs: {
      material: '100% Egyptian Combed Cotton Terry Fleece',
      weight: '480 GSM (Dense, wind-resistant weave)',
      finish: 'Pre-shrunk, enzyme-washed for softened hand feel',
      origin: 'Knit & Crafted in Cairo, Egypt',
      embroideryFront: 'High-density 3D stitch Arabic "سرد"',
      embroideryBack: 'Fine-gauge satin stitch “BEFORE I WAS READY |”'
    },
    fabricSpecsAr: {
      material: 'قطن مصري ممشط ١٠٠٪ تيري صوف',
      weight: '٤٨٠ جرام (نسيج كثيف يحمي من برودة الجو)',
      finish: 'معالج ضد الانكماش ومغسول إنزيمياً لملمس فائق النعومة',
      origin: 'غزل وصنع في القاهرة، مصر',
      embroideryFront: 'تطريز بارز ثلاثي الأبعاد لكلمة "سرد"',
      embroideryBack: 'تطريز ساتان فائق الدقة مع خط رأسي'
    },
    careInstructions: [
      'Machine wash gentle cycle cold (30°C) inside out',
      'Do not bleach or tumble dry',
      'Air dry flat or line dry out of direct sun',
      'Iron inside out on medium setting'
    ],
    careInstructionsAr: [
      'غسيل آلي على دورة الأقمشة الرقيقة بماء بارد مع قلب القطعة',
      'عدم استخدام المبيضات أو التجفيف الآلي',
      'التجفيف بالتعليق في الظل بعيداً عن الشمس',
      'الكي من الداخل على درجة حرارة متوسطة'
    ]
  },
  {
    id: 'sard-ch01-darkgrey',
    slug: 'darkgrey-neither-here-nor-there',
    title: 'Chapter 01 Hoodie',
    titleAr: 'سويت شيرت هودي — الفصل الأول',
    storyPhrase: 'NEITHER HERE NOR THERE',
    storyPhraseAr: 'بين هُنا وهُناك',
    storyArabic: 'بين هُنا وهُناك',
    colorName: 'Charcoal Dark Grey',
    colorNameAr: 'رمادي غامق',
    colorCode: 'dark-grey',
    hexValue: '#2e3036',
    accentBg: '#1e2024',
    price: 750,
    originalPrice: 1200,
    pricePlaceholderLabel: '750 EGP',
    badge: 'Atmospheric Tone',
    badgeAr: 'لون فني معاصر',
    images: {
      front: '/assets/products/darkgrey-front.jpg',
      back: '/assets/products/darkgrey-back.jpg',
      composite: '/assets/products/darkgrey-column.jpg',
      detail: '/assets/products/embroidery-details.jpg'
    },
    overview: 'An atmospheric dark charcoal grey reminiscent of aged architectural concrete and overcast dawn skies.',
    overviewAr: 'رمادي فحمي معاصر مستوحى من درجات الخرسانة المعمارية والغيوم الهادئة عند الفجر.',
    narrative: '“NEITHER HERE NOR THERE” reflects the beauty of the liminal space. It is for those who live between places, between identities, between yesterday and tomorrow—finding peace in the state of ongoing transition.',
    narrativeAr: 'تعكس عبارة "بين هُنا وهُناك" جمال المراحل الانتقالية. إنها لكل من يعيشون بين الأماكن، بين الماضي والمستقبل، ويجدون راحة وطمأنينة في رحلة التغيير المستمرة.',
    conceptNotes: [
      'Concrete charcoal grey with micro-heather depth',
      'Contrasting chalk embroidery on both front chest and back statement',
      'Unisex dropped shoulder with relaxed oversized sleeve volume',
      'Double-stitched structural seams designed for daily wear'
    ],
    conceptNotesAr: [
      'رمادي خرساني داكن بعمق ميكرو-هيثر أنيق',
      'تطريز طباشيري ناصع ومتباين على الصدر والظهر',
      'أكتاف ساقطة للجنسين مع اتساع عصري للأكمام',
      'خياطة مزدوجة متينة صُممت لتحمل الارتداء اليومي المتكرر'
    ],
    fabricSpecs: {
      material: '100% Egyptian Combed Cotton Terry Fleece',
      weight: '480 GSM (Substantial warmth and structured drape)',
      finish: 'Pre-shrunk, peach-skin surface treatment',
      origin: 'Knit & Crafted in Cairo, Egypt',
      embroideryFront: 'High-density 3D stitch Arabic "سرد"',
      embroideryBack: 'Fine-gauge satin stitch “NEITHER HERE NOR THERE |”'
    },
    fabricSpecsAr: {
      material: 'قطن مصري ممشط ١٠٠٪ تيري صوف',
      weight: '٤٨٠ جرام (دفء متوازن وثبات رائع في القوام)',
      finish: 'معالج ضد الانكماش مع ملمس قطيفة ناعم',
      origin: 'غزل وصنع في القاهرة، مصر',
      embroideryFront: 'تطريز بارز ثلاثي الأبعاد لكلمة "سرد"',
      embroideryBack: 'تطريز ساتان فائق الدقة مع خط رأسي'
    },
    careInstructions: [
      'Machine wash cold with mild detergent',
      'Do not wring; reshape while damp',
      'Flat air dry in shade',
      'Warm iron on reverse side'
    ],
    careInstructionsAr: [
      'غسيل آلي بماء بارد مع مسحوق غسيل معتدل',
      'عدم العصر القوي وإعادة ضبط قوام القطعة وهي رطبة',
      'تجفيف مسطح في الظل',
      'كي دافئ على الوجه الداخلي'
    ]
  }
];

export const EGYPT_GOVERNORATES = [
  'Cairo (القاهرة)',
  'Giza (الجيزة)',
  'Alexandria (الإسكندرية)',
  'Dakahlia / Mansoura (الدقهلية)',
  'Red Sea / Hurghada (البحر الأحمر)',
  'Sharqia (الشرقية)',
  'Gharbia / Tanta (الغربية)',
  'Qalyubia (القليوبية)',
  'Monufia (المنوفية)',
  'Beheira (البحيرة)',
  'Ismailia (الإسماعيلية)',
  'Port Said (بورسعيد)',
  'Suez (السويس)',
  'Kafr El Sheikh (كفر الشيخ)',
  'Damietta (دمياط)',
  'Fayoum (الفيوم)',
  'Beni Suef (بني سويف)',
  'Minya (المنيا)',
  'Asyut (أسيوط)',
  'Sohag (سوهاج)',
  'Qena (قنا)',
  'Luxor (الأقصر)',
  'Aswan (أسوان)',
  'South Sinai / Sharm (جنوب سيناء)',
  'Matrouh / North Coast (مطروح)'
];

// EXACT 4 APPROVED SIZES: M, L, XL, XXL
export const SIZE_CHART: SizeChartItem[] = [
  {
    size: 'M',
    chestCm: '126 cm',
    lengthCm: '72 cm',
    shoulderCm: '62 cm',
    sleeveCm: '61 cm',
    fitNote: 'Standard unisex oversized drape (170–178 cm)',
    fitNoteAr: 'القصّة الفضفاضة القياسية للجنسين لطول ١٧٠–١٧٨ سم'
  },
  {
    size: 'L',
    chestCm: '132 cm',
    lengthCm: '74 cm',
    shoulderCm: '65 cm',
    sleeveCm: '62 cm',
    fitNote: 'Relaxed boxy streetwear silhouette (178–185 cm)',
    fitNoteAr: 'قصّة ستريت وير مريحة ومميزة لطول ١٧٨–١٨٥ سم'
  },
  {
    size: 'XL',
    chestCm: '138 cm',
    lengthCm: '76 cm',
    shoulderCm: '68 cm',
    sleeveCm: '63 cm',
    fitNote: 'Extra relaxed oversized volume (182–192 cm)',
    fitNoteAr: 'اتساع إضافي مريح وفضفاض لطول ١٨٢–١٩٢ سم'
  },
  {
    size: 'XXL',
    chestCm: '144 cm',
    lengthCm: '78 cm',
    shoulderCm: '71 cm',
    sleeveCm: '64 cm',
    fitNote: 'Maximum volume boxy cut (190+ cm)',
    fitNoteAr: 'أقصى اتساع وقوام مريح لطول ١٩٠+ سم'
  }
];

export const SARD_FAQS: FAQItem[] = [
  {
    question: 'What is the philosophy behind SARD (سَــــرد)?',
    questionAr: 'ما هي فلسفة وفكرة علامة سَــــرد (SARD)؟',
    answer: 'In Arabic, “سَــــرد” means the deliberate narration and unfolding of a story. We believe everyday clothing should not be disposable aesthetic noise. Each piece in Chapter 01 represents a lived human emotion, embroidered directly into heavy Egyptian cotton threads to accompany you on your personal journey.',
    answerAr: 'في لغتنا العربية، "سَــــرد" تعني التتابع المنظم لرواية الحكاية واستحضار المعنى. نؤمن بأن الملابس اليومية ليست مجرد مظهر عابر؛ كل قطعة في الفصل الأول تمثل شعوراً حقيقياً وتجربة نعيشها، طُرّزت مباشرة على خيوط القطن المصري الفاخر لترافقك في رحلتك الخاصة.'
  },
  {
    question: 'How does SARD sizing work? Is it unisex?',
    questionAr: 'كيف صُممت مقاسات سَرد؟ وهل هي للجنسين؟',
    answer: 'All SARD garments are designed with a unisex, boxy drop-shoulder cut. Available sizes are M, L, XL, and XXL. We recommend choosing your true size for the intended modern oversized drape. Refer to our interactive Size Guide for precise measurements in centimeters.',
    answerAr: 'كافة قطع سَرد مصممة بقصّة واسعة للجنسين بأكتاف ساقطة (Unisex Oversized). المقاسات المتوفرة هي M، L، XL، و XXL. نوصي باختيار مقاسك المعتاد للحصول على القصة الواسعة المقصودة. يمكنك مراجعة دليل المقاسات للأبعاد الدقيقة بالسنتيمتر.'
  },
  {
    question: 'What are the fabric details and GSM weight?',
    questionAr: 'ما هي مواصفات خامة القطن والوزن (GSM)؟',
    answer: 'Chapter 01 hoodies are spun from 100% long-staple Egyptian combed cotton at an ultra-heavyweight 480 GSM. The interior features a dense, velvet-soft brushed fleece, while the outer surface is carbonized and pre-shrunk for a matte, zero-pilling finish.',
    answerAr: 'صُنعت قطع الفصل الأول من قطن مصري ممشط طويل التيلة ١٠٠٪ بوزن ثقيل جداً ٤٨٠ جرام (GSM). يتميز الجزء الداخلي بصوف ناعم كالمخمل، بينما السطح الخارجي معالج كربونياً ضد الانكماش والتحبب ليمنحك مظهراً مطفياً يدوم طويلاً.'
  },
  {
    question: 'How are shipping fees calculated across Egypt?',
    questionAr: 'كيف يتم حساب مصاريف الشحن داخل مصر؟',
    answer: 'Shipping fees are not fixed and will be confirmed after your order is submitted, based on your governorate and delivery address through our delivery partners (Bosta / Flextock).',
    answerAr: 'مصاريف الشحن ليست ثابتة، وسيتم تأكيدها بعد إرسال الطلب حسب المحافظة ومكان التوصيل المحدد عبر شركاء الشحن (بوسطة / فليكستوك).'
  },
  {
    question: 'What is your exchange and return policy?',
    questionAr: 'ما هي سياسة الاستبدال والمعاينة؟',
    answer: 'Unworn hoodies in their original pristine condition with all tags and packaging intact can be exchanged within 14 days of receipt. Our customer concierge coordinates courier collection right from your doorstep.',
    answerAr: 'يمكن استبدال القطع غير المستخدمة بحالتها الأصلية مع بطاقات التعريف والتغليف خلال ١٤ يوماً من تاريخ الاستلام، حيث يقوم مندوب التوصيل بالاستبدال مباشرة من باب منزلك.'
  },
  {
    question: 'What payment methods do you accept?',
    questionAr: 'ما هي طريقة الدفع المتاحة؟',
    answer: 'We exclusively accept Cash on Delivery (COD) in Egyptian Pounds across all Egyptian governorates, allowing you to inspect your package directly upon receipt.',
    answerAr: 'نعتمد حصرياً طريقة الدفع عند الاستلام (COD) بالجنيه المصري في جميع محافظات مصر، مما يتيح لك معاينة طلبك فور وصوله.'
  }
];
