/**
 * Digitify Agency — In-Depth Case Studies Data
 * 
 * Case studies follow Digitify's core methodology:
 * DISCOVER → DEFINE → DESIGN → DELIVER
 * 
 * Each case study is structured into 8 distinct sections:
 * 01. THE CHALLENGE
 * 02. DISCOVER
 * 03. DEFINE
 * 04. DESIGN
 * 05. EXECUTE
 * 06. DELIVER
 * 07. OUTCOME (Factual tangible outcomes only — strictly zero fabricated statistics)
 * 08. PROJECT SNAPSHOT
 */

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  disciplines: string[];
  timeline: string;
  overviewImage: string;
  galleryImages: string[];
  nextSlug: string;
  nextTitle: string;
  sections: {
    challenge: {
      headline: string;
      description: string;
      keyObstacles: string[];
    };
    discover: {
      headline: string;
      description: string;
      findings: string[];
    };
    define: {
      headline: string;
      description: string;
      strategicPillars: string[];
    };
    design: {
      headline: string;
      description: string;
      decisions: string[];
    };
    execute: {
      headline: string;
      description: string;
      phases: string[];
    };
    deliver: {
      headline: string;
      description: string;
      deliverablesList: string[];
    };
    outcome: {
      headline: string;
      description: string;
      tangibleTakeaways: string[];
    };
    snapshot: {
      client: string;
      services: string[];
      industry: string;
      deliverables: string[];
    };
  };
}

export const caseStudiesData: CaseStudy[] = [
  /* ━━━━━━━━━━━━━━━━━━━━
     01 — COOLBEE STORE
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'coolbee-store',
    slug: 'coolbee-store',
    number: '01',
    title: 'Coolbee Store',
    subtitle: 'Modern E-Commerce Architecture & Multi-Channel Social Content Engine',
    client: 'Coolbee Store',
    disciplines: ['Website', 'Social Media Management', 'Digital Marketing'],
    timeline: 'Multi-Phase Campaign & Build',
    overviewImage: '/images/projects/coolbee.png',
    galleryImages: [
      '/images/projects/coolbee.png',
      '/images/projects/coolbee-catalog.png',
      '/images/projects/homecraft.png',
    ],
    nextSlug: 'homecraft-textiles',
    nextTitle: 'Homecraft Textiles',
    sections: {
      challenge: {
        headline: 'Bridging E-Commerce Commerce with Cohesive Social Narrative',
        description:
          'Coolbee Store required a modern, responsive digital storefront capable of presenting consumer lifestyle merchandise with exceptional visual clarity. Concurrently, their brand presence was fragmented across social channels, necessitating a unified editorial voice and synchronized marketing campaigns.',
        keyObstacles: [
          'Previous online presence suffered from navigational clutter that slowed down mobile browsing',
          'Social media channels lacked visual consistency with the core product packaging and catalog',
          'Absence of a synchronized campaign calendar connecting promotional social drops with storefront inventory',
        ],
      },
      discover: {
        headline: 'Auditing Direct-to-Consumer Behavior & Mobile Shopping Friction',
        description:
          'During discovery, our team audited consumer journeys across modern lifestyle and essentials retailers. We observed that mobile shoppers abandoned journeys when confronted with multi-step menu layers or ambiguous product specifications.',
        findings: [
          'High mobile intent requires instant visual categorization and minimal tap sequences to access product variants',
          'Social audiences respond best to contextual lifestyle photography rather than isolated catalog cutouts',
          'Coordinated promotional timing between Instagram content and storefront landing views directly reduces drop-offs',
        ],
      },
      define: {
        headline: 'Establishing an Uncluttered Commerce System & Content Calendar',
        description:
          'We defined a strategic blueprint pairing a streamlined e-commerce experience with an ongoing social content engine. The strategy aligned storefront releases with weekly content themes.',
        strategicPillars: [
          'Distraction-Free Navigation — Restricting menu levels to clear primary lifestyle categories',
          'Synchronized Media Cadence — Weekly structured content schedules integrating drops, educational reels, and seasonal campaigns',
          'Responsive Performance Standards — Prioritizing instant asset rendering and smooth mobile interaction',
        ],
      },
      design: {
        headline: 'Refined Product Architecture and Modular Social Templates',
        description:
          'Our creative team designed a minimalist visual language with high contrast, generous whitespace, and disciplined typography. For social media, we created a modular kit of story and post templates reflecting the website palette.',
        decisions: [
          'High-contrast typography paired with neutral stone surfaces to let product colors command focus',
          'Modular social template system with standardized typography hierarchy for rapid weekly turnaround',
          'Thumb-friendly mobile action bars and clear variant selection chips',
        ],
      },
      execute: {
        headline: 'Agile Frontend Engineering and Synchronized Campaign Rollout',
        description:
          'We built the storefront with responsive, component-driven layouts, and implemented automated image optimization for rapid loading. In parallel, our digital marketing team took over daily social publishing and community engagement.',
        phases: [
          'Phase 1: Architecture audit, wireframing, and design system tokenization',
          'Phase 2: Responsive frontend build with mobile-first checkout flows and schema integration',
          'Phase 3: Rollout of social media content engine, branded reel formats, and targeted campaign assets',
        ],
      },
      deliver: {
        headline: 'Production-Ready Web Flagship and Operational Marketing Suite',
        description:
          'Digitify delivered a fully functional responsive e-commerce web platform alongside an end-to-end social media management operational system.',
        deliverablesList: [
          'Fully responsive custom e-commerce web storefront with mobile-optimized checkout',
          'Complete branded social media design asset kit (posts, stories, carousel frames)',
          'Operational monthly social media calendar and publishing workflow',
          'Targeted digital marketing creative assets and audience messaging guides',
        ],
      },
      outcome: {
        headline: 'Unified Brand Touchpoints and Frictionless Shopping Experience',
        description:
          'Coolbee Store operates with a cohesive, polished digital presence across both web and social channels. The online store functions with complete cross-device stability and intuitive product exploration.',
        tangibleTakeaways: [
          'Successfully deployed full-featured e-commerce storefront with zero mobile layout regressions',
          'Established consistent brand voice across all active organic social media channels',
          'Eliminated multi-step navigation hurdles, allowing direct category access in one tap',
        ],
      },
      snapshot: {
        client: 'Coolbee Store',
        services: ['Website', 'Social Media Management', 'Digital Marketing'],
        industry: 'Consumer Retail & Lifestyle Commerce',
        deliverables: [
          'Responsive E-Commerce Platform',
          'Social Media Design System',
          'Campaign Creative Collateral',
          'Brand Content Calendar',
        ],
      },
    },
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     02 — HOMECRAFT TEXTILES
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'homecraft-textiles',
    slug: 'homecraft-textiles',
    number: '02',
    title: 'Homecraft Textiles',
    subtitle: 'Tactile E-Commerce Platform for Curated Fabrics & Interior Materials',
    client: 'Homecraft Textiles',
    disciplines: ['Website'],
    timeline: 'Digital Flagship Build',
    overviewImage: '/images/projects/homecraft.png',
    galleryImages: [
      '/images/projects/homecraft.png',
      '/images/projects/homecraft-catalog.png',
      '/images/projects/signofthetimes.png',
    ],
    nextSlug: 'carrotstick',
    nextTitle: 'Carrotstick',
    sections: {
      challenge: {
        headline: 'Communicating Physical Fabric Quality in a Digital Environment',
        description:
          'Homecraft Textiles required an online platform that could accurately communicate the weave, texture, drape, and material nuances of physical fabrics in a purely digital browser interface. The client needed a platform that served both trade interior designers and retail fabric buyers.',
        keyObstacles: [
          'Traditional textile websites struggle to display high-resolution weaves without severe page load lag',
          'Customers required detailed technical metrics (composition, width, rub count, weight) presented simply',
          'Trade buyers needed frictionless sample-ordering mechanisms alongside standard yardage purchases',
        ],
      },
      discover: {
        headline: 'Evaluating Textile Purchasing Workflows and Material Nuances',
        description:
          'We studied how interior decorators, upholsterers, and consumers select fabrics. We discovered that tactile confidence depends heavily on seeing both macro texture details and contextual drape photography.',
        findings: [
          'Accurate color reproduction requires neutral, non-distracting background UI surfaces',
          'Designers frequently filter by functional durability specs and fiber composition rather than price alone',
          'Clear sample-order affordances significantly lower purchase hesitation for high-ticket rolls',
        ],
      },
      define: {
        headline: 'Material-First Hierarchy and Granular Fabric Taxonomies',
        description:
          'We established a material-first information architecture prioritizing texture clarity, dual-view product previews (flat swatch vs. draped application), and a standardized spec table for every SKU.',
        strategicPillars: [
          'Texture-First Visual Hierarchy — Dedicated high-definition swatch zoom on all product views',
          'Comprehensive Technical Specs — Standardized display of composition, width, weight, and care instructions',
          'Sample-First User Flow — Direct sample request action paired alongside bulk roll inquiries',
        ],
      },
      design: {
        headline: 'Gallery-Grade Layout with High-Fidelity Material Focus',
        description:
          'The design system embraces an art-gallery aesthetic: warm neutral backgrounds, restrained editorial serif typography, and clean metadata grids that make fabric details the undisputed visual focal point.',
        decisions: [
          'Clean neutral backdrop ensuring fabric dye tones and subtle weaves render accurately without color distortion',
          'Structured attribute chips for composition, durability rating, and roll width',
          'Interactive sample-order drawer allowing multi-swatch compilation without leaving the collection page',
        ],
      },
      execute: {
        headline: 'Engineering Responsive Performance for Texture-Heavy Catalogs',
        description:
          'We built a custom responsive web application with progressive image loading, instant swatch attribute filtering, and optimized touch ergonomics for mobile tablet designers working on site.',
        phases: [
          'Phase 1: Catalog taxonomy design, sample workflow mapping, and responsive wireframes',
          'Phase 2: High-resolution image zoom integration, swatch drawer build, and spec schema setup',
          'Phase 3: Cross-device testing across iOS Safari, iPadOS, and desktop browser environments',
        ],
      },
      deliver: {
        headline: 'Complete Textile Digital Flagship and Swatch Management System',
        description:
          'Digitify delivered a full-featured textile commerce platform engineered to scale with Homecraft Textiles’ seasonal fabric additions.',
        deliverablesList: [
          'Responsive custom e-commerce web platform (`homecrafttextiles.com.au`)',
          'Multi-attribute fabric search and filter engine (weave, colorway, composition, durability)',
          'Interactive swatch viewer with macro texture inspection capabilities',
          'Streamlined sample request and inquiry handling workflow',
        ],
      },
      outcome: {
        headline: 'A Digitized Showroom Accessible Anywhere',
        description:
          'Homecraft Textiles successfully transitioned their physical showroom catalog into an intuitive digital experience that accurately conveys material craftsmanship.',
        tangibleTakeaways: [
          'Delivered zero-layout-shift responsive catalog supporting extensive high-resolution fabric galleries',
          'Standardized technical specification display across all live textile product families',
          'Enabled seamless dual-mode sample ordering and yardage checkout on mobile and desktop',
        ],
      },
      snapshot: {
        client: 'Homecraft Textiles',
        services: ['Website Design & Development'],
        industry: 'Textiles & Interior Furnishing',
        deliverables: [
          'Responsive Web Flagship',
          'Attribute Filter Engine',
          'Macro Swatch Viewer',
          'Sample Order System',
        ],
      },
    },
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     03 — CARROTSTICK
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'carrotstick',
    slug: 'carrotstick',
    number: '03',
    title: 'Carrotstick',
    subtitle: 'Interactive Digital Web Platform & Product Discovery Interface',
    client: 'Carrotstick',
    disciplines: ['Website'],
    timeline: 'Sprint-Based Web Delivery',
    overviewImage: '/images/projects/carrotstick.png',
    galleryImages: [
      '/images/projects/carrotstick.png',
      '/images/projects/coolbee.png',
      '/images/projects/urbanplatter.png',
    ],
    nextSlug: 'sign-of-the-times-london',
    nextTitle: 'Sign of the Times London',
    sections: {
      challenge: {
        headline: 'Explaining Product Value Through Interactive Engagement',
        description:
          'Carrotstick needed a web platform that communicates its core digital capabilities quickly and clearly. Traditional text-heavy landing pages created friction; the client required an interactive experience that demonstrates product features dynamically.',
        keyObstacles: [
          'Dense feature explanations were causing early visitor drop-off on standard marketing pages',
          'Need to demonstrate interactive software concepts directly within web viewports',
          'Requirement for high-performance frontend code that loads smoothly without heavy third-party framework overhead',
        ],
      },
      discover: {
        headline: 'Analyzing Modern SaaS Interfaces and Progressive Disclosure',
        description:
          'We examined top-tier digital product landing pages and user onboarding patterns. Research revealed that modern digital product users prefer exploring interactive preview components over reading static marketing copy.',
        findings: [
          'Demonstrating features via interactive widgets increases message comprehension significantly',
          'Clean, dark-mode accents and precise micro-copy create a high-credibility technological impression',
          'Page speed and lightweight script execution are critical for retaining first-time tech visitors',
        ],
      },
      define: {
        headline: 'Interactive Component Strategy & Progressive Disclosure Thesis',
        description:
          'We formulated a structured experience strategy centered on progressive disclosure: introducing value propositions through interactive cards, bite-sized product demonstrations, and contextual actions throughout the user journey.',
        strategicPillars: [
          'Interactive Feature Demonstration — Replacing static text with live exploratory UI blocks',
          'Crisp Typographic Rhythm — Pairing modern sans-serif headings with monospace technical labels',
          'Lightweight Architecture — Minimizing client-side bundle size to ensure instant initial render',
        ],
      },
      design: {
        headline: 'Contemporary Technical Visual Language & Fluid States',
        description:
          'Our design team crafted a modern visual language featuring dark theme accents, sharp monospaced micro-copy, refined card elevation, and smooth CSS hover and state transitions.',
        decisions: [
          'Sharp, geometric layout grid creating visual order across complex feature hierarchies',
          'Interactive toggle states and simulated product controls embedded directly in the hero and feature sections',
          'Subtle purple and metallic accents providing focal points for primary action items',
        ],
      },
      execute: {
        headline: 'Clean Component Engineering and Semantic Frontend Structure',
        description:
          'We developed the website with clean semantic markup, CSS hardware acceleration, and cross-browser responsive testing across modern mobile and desktop engines.',
        phases: [
          'Phase 1: Information architecture and interactive component wireframing',
          'Phase 2: Custom frontend development with lightweight CSS animations and widget logic',
          'Phase 3: Cross-device responsiveness and performance optimization across viewports',
        ],
      },
      deliver: {
        headline: 'High-Performance Web Platform and Modular UI Toolkit',
        description:
          'Digitify delivered the production-ready website (`carrotstick.com`) alongside a modular UI toolkit supporting future expansion.',
        deliverablesList: [
          'Production-ready responsive website (`carrotstick.com`)',
          'Modular component library for future product documentation pages',
          'Interactive feature demonstration widgets with responsive touch ergonomics',
          'Accessible, semantic code architecture with zero external layout shifts',
        ],
      },
      outcome: {
        headline: 'A Modern Interactive Platform Explaining Value at a Glance',
        description:
          'Carrotstick’s live website presents its offerings through engaging, interactive interface modules that let visitors experience product functionality immediately.',
        tangibleTakeaways: [
          'Shipped lightweight, high-performance web platform functioning smoothly across mobile and desktop',
          'Replaced static blocks of text with intuitive interactive feature previews',
          'Provided fully maintainable code structure ready for future product feature releases',
        ],
      },
      snapshot: {
        client: 'Carrotstick',
        services: ['Website Design & Frontend Architecture'],
        industry: 'Digital Products & Interactive Technology',
        deliverables: [
          'Responsive Web Platform',
          'Interactive Demo Widgets',
          'Modular Component Library',
          'Cross-Device Performance Tuning',
        ],
      },
    },
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     04 — SIGN OF THE TIMES LONDON
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'sign-of-the-times-london',
    slug: 'sign-of-the-times-london',
    number: '04',
    title: 'Sign of the Times London',
    subtitle: 'Curated Luxury Fashion Resale & High-End Editorial E-Commerce Storefront',
    client: 'Sign of the Times London',
    disciplines: ['Website'],
    timeline: 'Bespoke E-Commerce Build',
    overviewImage: '/images/projects/signofthetimes.png',
    galleryImages: [
      '/images/projects/signofthetimes.png',
      '/images/projects/signofthetimes-catalog.png',
      '/images/projects/coolbee.png',
    ],
    nextSlug: 'urban-platter',
    nextTitle: 'Urban Platter',
    sections: {
      challenge: {
        headline: 'Elevating Authenticated Pre-Owned Luxury to High-Fashion Editorial Standards',
        description:
          'Sign of the Times London required an e-commerce platform that mirrors the elegance of luxury fashion boutiques while managing the unique operational complexities of one-off authenticated resale pieces. Every product item is singular, demanding clear condition grading and provenance display.',
        keyObstacles: [
          'Single-SKU inventory model requires real-time stock state clarity to prevent checkout collisions',
          'Luxury customers expect immaculate photography and detailed condition transparency',
          'Balancing high-fashion editorial aesthetics with fast mobile purchasing speed',
        ],
      },
      discover: {
        headline: 'Examining Luxury Circular Fashion and Authentication Trust',
        description:
          'Our research examined the luxury consignment landscape in London and international European markets. Discerning buyers demand authoritative authentication credentials, detailed condition grading, and a buying environment that honors the heritage of designer houses.',
        findings: [
          'Trust markers (authentication guarantees, condition scales) must be integrated directly into product layouts',
          'Luxury shoppers browse predominantly on mobile and expect boutique-grade editorial typography',
          'Clean white-space and high-resolution garment detail imagery drive purchasing confidence for one-of-a-kind items',
        ],
      },
      define: {
        headline: 'Editorial-Led Commerce Architecture & Trust Verification System',
        description:
          'We established an editorial-first commerce architecture that combines high-fashion magazine aesthetics with rigorous e-commerce utility: clear authentication badges, garment condition grading, and a frictionless mobile cart.',
        strategicPillars: [
          'Editorial Boutique Atmosphere — Timeless serif typography paired with generous whitespace',
          'Transparent Condition Grading — Standardized rating scales and stitch-level condition notes',
          'Frictionless Single-Item Checkout — Instant cart reservation mechanics for one-off pieces',
        ],
      },
      design: {
        headline: 'Classic British Editorial Palette and Refined Micro-Details',
        description:
          'The visual identity uses refined serif and grotesque typography pairings, subtle borders, high-fidelity gallery zooms, and dedicated provenance callouts that validate the authenticity of every vintage and contemporary luxury piece.',
        decisions: [
          'Classic editorial serif headings paired with clean monospaced authentication labels',
          'Interactive condition scale with standardized definitions for pristine, gently worn, and vintage states',
          'Full-bleed visual carousels with smooth swipe controls on touch viewports',
        ],
      },
      execute: {
        headline: 'Developing a Bespoke Storefront with Singular Inventory Support',
        description:
          'We engineered a responsive e-commerce web experience featuring bespoke filtering for designer houses, garment condition, sizing standards, and category collections, optimized for rapid browsing on mobile Safari.',
        phases: [
          'Phase 1: Luxury consignment journey mapping and editorial layout prototyping',
          'Phase 2: Custom frontend development with single-inventory status handling',
          'Phase 3: Integration of authentication badges and multi-angle product galleries',
        ],
      },
      deliver: {
        headline: 'Fully Functional Luxury Resale Platform and Editorial Layouts',
        description:
          'Digitify delivered the full-featured luxury commerce platform (`signofthetimeslondon.com`), featuring bespoke product templates, condition scale components, and responsive mobile navigation.',
        deliverablesList: [
          'Custom responsive luxury e-commerce platform (`signofthetimeslondon.com`)',
          'Designer brand directory with alphabetical indexing and fast search',
          'Standardized garment condition evaluation UI and authentication badge system',
          'Editorial collection landing page templates for curated drops',
        ],
      },
      outcome: {
        headline: 'A Digital Flagship Befitting London’s Luxury Resale Pioneer',
        description:
          'Sign of the Times London operates a sophisticated online boutique that presents pre-owned designer garments with the same reverence and polish as premier luxury fashion houses.',
        tangibleTakeaways: [
          'Launched custom responsive platform with boutique-grade editorial aesthetics',
          'Implemented standardized authentication and condition grading across all inventory categories',
          'Delivered seamless single-item checkout flow with zero mobile layout regressions',
        ],
      },
      snapshot: {
        client: 'Sign of the Times London',
        services: ['Website Design & E-Commerce Frontend'],
        industry: 'Luxury Fashion & Circular Commerce',
        deliverables: [
          'Bespoke Luxury Storefront',
          'Authentication Badge System',
          'Editorial Collection Layouts',
          'Mobile Checkout Flow',
        ],
      },
    },
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     05 — URBAN PLATTER
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'urban-platter',
    slug: 'urban-platter',
    number: '05',
    title: 'Urban Platter',
    subtitle: 'Specialty Gourmet E-Commerce Storefront for Culinary Ingredients & Pantry Essentials',
    client: 'Urban Platter',
    disciplines: ['Website'],
    timeline: 'Scale-Oriented Web Redesign',
    overviewImage: '/images/projects/urbanplatter.png',
    galleryImages: [
      '/images/projects/urbanplatter.png',
      '/images/projects/homecraft.png',
      '/images/projects/signofthetimes.png',
    ],
    nextSlug: 'divas-entertainment-awards',
    nextTitle: 'Divas Entertainment Awards',
    sections: {
      challenge: {
        headline: 'Organizing Thousands of Gourmet SKUs into an Effortless Shopping Journey',
        description:
          'Urban Platter manages thousands of gourmet SKUs across specialty spices, vegan essentials, gourmet condiments, and global baking ingredients. The client needed a fast, highly organized digital storefront enabling customers to discover, evaluate, and purchase complex specialty food items effortlessly.',
        keyObstacles: [
          'Catalog scale: thousands of items across distinct dietary classes (vegan, keto, gluten-free, organic)',
          'Complex dietary and nutritional filtering required without slowing page response times',
          'High basket item counts demanding quick-add mechanics and clear cart visibility',
        ],
      },
      discover: {
        headline: 'Deciphering Gourmet Grocery Search Patterns and Dietary Intent',
        description:
          'Our research evaluated user search habits across specialty grocery and culinary supply platforms. Shoppers predominantly browse by dietary preference and recipe intent; sluggish filtering or deeply buried sub-menus directly caused customer friction.',
        findings: [
          'Customers frequently search by specific dietary labels (e.g., vegan, dairy-free, sugar-free)',
          'Clear dietary icons and ingredient transparency reduce hesitation on unfamiliar culinary products',
          'Quick-add controls on category grid cards significantly streamline multi-item pantry replenishment',
        ],
      },
      define: {
        headline: 'Taxonomy-First Architecture & Rapid Dietary Filter Matrix',
        description:
          'We established a comprehensive information architecture prioritizing instant dietary filtering, visual recipe-pairing hooks, and streamlined category browsing directly accessible from the primary navigation.',
        strategicPillars: [
          'Dietary Matrix Navigation — Top-level filtering by lifestyle preferences and dietary categories',
          'Optimized Catalog Performance — Fast grid rendering and progressive image loading for large SKU lists',
          'Frictionless Pantry Replenishment — Prominent quick-add buttons and sticky cart progress indicators',
        ],
      },
      design: {
        headline: 'Vibrant Culinary Presentation with Utilitarian Commerce Flow',
        description:
          'The design system combines appetizing product photography with clear packaging visibility, standardized dietary badge icons, and high-contrast call-to-action buttons designed for effortless mobile tapping.',
        decisions: [
          'Standardized dietary badge iconography placed directly on card corners for instantaneous scanning',
          'Crisp typography balancing functional ingredient lists with modern brand presentation',
          'Persistent mobile cart summary and streamlined quick-view product modal',
        ],
      },
      execute: {
        headline: 'Engineering Scalable Frontend Architecture for High-Volume SKU Catalogs',
        description:
          'We built the storefront with a focus on performant DOM management, efficient client-side filtering by dietary tags, and responsive thumb-zone ergonomics for mobile grocery builders.',
        phases: [
          'Phase 1: Catalog taxonomy restructuring and dietary filter wireframing',
          'Phase 2: Custom frontend development with quick-add card states and nutrition drawers',
          'Phase 3: Image compression pipeline and cross-device speed optimization',
        ],
      },
      deliver: {
        headline: 'High-Capacity Gourmet Storefront and Dietary Filtering System',
        description:
          'Digitify delivered a complete e-commerce web platform (`urbanplatter.com`) engineered to handle extensive culinary SKU catalogs seamlessly.',
        deliverablesList: [
          'High-capacity responsive e-commerce web platform (`urbanplatter.com`)',
          'Multi-parameter dietary filter engine (vegan, keto, gluten-free, origin)',
          'Mobile quick-add catalog grid components with instant cart integration',
          'Detailed nutritional and ingredient specification drawer templates',
        ],
      },
      outcome: {
        headline: 'Effortless Discovery for Culinary Enthusiasts and Home Chefs',
        description:
          'Urban Platter operates a digital storefront that simplifies specialty grocery discovery, allowing customers to navigate extensive ingredient catalogs with complete clarity.',
        tangibleTakeaways: [
          'Successfully deployed responsive platform supporting thousands of specialty food SKUs',
          'Enabled instantaneous dietary and category filtering without full page reloads',
          'Provided touch-optimized quick-add interfaces for efficient multi-item shopping',
        ],
      },
      snapshot: {
        client: 'Urban Platter',
        services: ['Website Design & Catalog Interface Engineering'],
        industry: 'Gourmet Food & Direct-to-Consumer Grocery',
        deliverables: [
          'High-Volume E-Commerce Platform',
          'Dietary Filter Engine',
          'Quick-Add Mobile UI',
          'Nutritional Spec System',
        ],
      },
    },
  },

  /* ━━━━━━━━━━━━━━━━━━━━
     06 — DIVAS ENTERTAINMENT AWARDS
     ━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'divas-entertainment-awards',
    slug: 'divas-entertainment-awards',
    number: '06',
    title: 'Divas Entertainment Awards',
    subtitle: 'Digital Marketing Strategy & High-Impact Social Media Storytelling for Industry Honors',
    client: 'Divas Entertainment Awards',
    disciplines: ['Digital Marketing', 'Social Media'],
    timeline: 'Campaign Season Execution',
    overviewImage: '/images/projects/divas-awards.png',
    galleryImages: [
      '/images/projects/divas-awards.png',
      '/images/projects/signofthetimes.png',
      '/images/projects/coolbee.png',
    ],
    nextSlug: 'coolbee-store',
    nextTitle: 'Coolbee Store',
    sections: {
      challenge: {
        headline: 'Orchestrating a Multi-Phase Digital Campaign for Industry Honors',
        description:
          'The Divas Entertainment Awards required a commanding digital campaign framework and social media rollout to announce nominations, highlight honorees, and maintain continuous audience buzz across multiple media phases. The campaign required synchronized coordination across celebrity spotlight releases, audience voting, and live ceremony coverage.',
        keyObstacles: [
          'Multi-phase timeline with strict embargo dates across nominees, voting periods, and winner announcements',
          'Need to produce high volumes of branded social collateral under tight publication turnaround times',
          'Requirement for a prestigious visual identity appropriate for high-profile talent and film industry honorees',
        ],
      },
      discover: {
        headline: 'Analyzing Award Season Dynamics and Entertainment Engagement Spikes',
        description:
          'Our research analyzed audience participation patterns across entertainment award shows. We found that engagement peaks intensely around visual nominee announcements and red carpet reveals, provided the creative assets are shared with rapid turnaround.',
        findings: [
          'Celebrity nominees amplify social assets when provided with bespoke, high-polish personal graphic cards',
          'Public voting phases require clear, unambiguous visual instructions across story and feed formats',
          'Synchronized live coverage during the ceremony drives real-time conversational momentum',
        ],
      },
      define: {
        headline: 'Three-Phase Campaign Architecture & Embargo Governance',
        description:
          'We established a three-phase digital campaign roadmap: Phase 1 — Nomination Reveal & Voting Engagement; Phase 2 — Honoree Spotlight & Countdown; Phase 3 — Night-Of Live Coverage & Winner Highlights.',
        strategicPillars: [
          'Three-Phase Phasing — Structured rollout ensuring steady momentum before, during, and after the ceremony',
          'Standardized Talent Kit — Pre-formatted graphic cards for nominated talent and presenters',
          'Real-Time Publishing Protocol — Rapid asset production workflow for live-event announcements',
        ],
      },
      design: {
        headline: 'Prestigious Metallic Contrast & Dramatic Editorial Typography',
        description:
          'The creative team engineered a visual identity kit characterized by deep metallic blacks, refined gold accents, bold modern typography, and cinematic lighting effects that celebrated the glamour of the entertainment industry.',
        decisions: [
          'Deep charcoal and gold palette conveying prestige and red-carpet exclusivity',
          'Cinematic portrait framing highlighting nominee headshots with uniform dramatic tone',
          'Multi-format template suite (1:1 feed cards, 9:16 vertical stories, 16:9 widescreen banners)',
        ],
      },
      execute: {
        headline: 'Multi-Channel Campaign Distribution and Live Event Production',
        description:
          'Digitify managed campaign asset production, scheduled synchronized multi-platform drops, and coordinated real-time social posting throughout the official ceremony.',
        phases: [
          'Phase 1: Campaign blueprint, strategic presentation deck (PDF), and visual asset kit production',
          'Phase 2: Nominee announcement rollout, voting drive management, and talent amplification',
          'Phase 3: Live-event ceremony coverage, instant winner graphics, and recap highlights',
        ],
      },
      deliver: {
        headline: 'End-to-End Campaign Strategy Deck and Social Asset Package',
        description:
          'Digitify delivered a comprehensive digital marketing campaign package, documented in a master strategy deck and a full suite of ready-to-publish creative collateral.',
        deliverablesList: [
          'Strategic digital marketing presentation deck (PDF) detailing phase architecture and execution',
          'Complete multi-format social media asset suite (nominee cards, countdown graphics, winner badges)',
          'Day-of-event live publishing schedule and content workflow',
          'Post-ceremony recap asset templates and highlight packaging',
        ],
      },
      outcome: {
        headline: 'Seamless Campaign Execution Across All Official Channels',
        description:
          'The Divas Entertainment Awards digital marketing and social media campaign executed with complete operational discipline and a unified visual presence throughout the entire awards season.',
        tangibleTakeaways: [
          'Executed multi-phase digital campaign on schedule across all announcement and ceremony milestones',
          'Maintained 100% visual consistency across hundreds of published social creative assets',
          'Delivered comprehensive campaign strategy deck and full operational asset kit to the client',
        ],
      },
      snapshot: {
        client: 'Divas Entertainment Awards',
        services: ['Digital Marketing', 'Social Media Campaign Architecture'],
        industry: 'Entertainment, Film & Celebrity Honors',
        deliverables: [
          'Campaign Strategy Presentation Deck (PDF)',
          'Social Media Design Suite',
          'Live Event Publishing Protocol',
          'Nominee & Winner Creative Assets',
        ],
      },
    },
  },
];
