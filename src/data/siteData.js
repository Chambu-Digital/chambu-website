
export const SITE = {
  name: 'Chambu Digital',
  tagline: 'Your Full-Service Digital Partner in Kenya',
  description: 'Delivering innovative digital solutions from stunning websites and robust systems to creative brand identity  that drive business growth and transform customer experiences.',
  email: 'contact@chambudigital.com',
  phone1: '+254 748 069 158',
  phone2: '+254 743 301 609',
  phone3: '+254 706 025 696',
  wa1: 'https://wa.me/254748069158',
  wa2: 'https://wa.me/254743301609',
  wa3: 'https://wa.me/254706025696',

  waMsg: (msg) => `https://wa.me/254748069158?text=${encodeURIComponent(msg)}`,
  location: 'Nairobi, Kenya',
  socials: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    github: '#',
    linkedin: '#',
  },
};

export const SERVICES = [
  {
    id: 'web',
    title: 'Website Development',
  
    color: '#0ea5e9',
    colorDim: 'rgba(14,165,233,0.1)',
    desc: 'We craft fast, beautiful, and conversion-focused websites that make your brand shine online from corporate sites to full e-commerce stores.',
    features: [
      'Custom responsive design',
      'E-commerce & payment integration',
      'SEO-optimised codebase',
      'CMS for easy content updates',
      'Performance & speed optimisation',
    ],
    tags: ['React', 'Next.js', 'WordPress', 'Shopify'],
  },
  {
    id: 'system',
    title: 'System Development',
    
    color: '#8b5cf6',
    colorDim: 'rgba(139,92,246,0.1)',
    desc: 'Bespoke software systems built to automate your business processes from inventory & ERP systems to custom CRMs and management dashboards.',
    features: [
      'Custom ERP & CRM systems',
      'Business process automation',
      'API design & integrations',
      'Database architecture',
      'Legacy system modernisation',
    ],
    tags: ['Python', 'Node.js', 'PostgreSQL', 'REST API'],
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
   
    color: '#f59e0b',
    colorDim: 'rgba(245,158,11,0.1)',
    desc: 'Strategic technology advice to help your business make smart digital investments from infrastructure planning to cloud migration and digital transformation roadmaps.',
    features: [
      'Digital transformation strategy',
      'Technology stack assessment',
      'Cloud migration planning',
      'Cybersecurity audits',
      'IT infrastructure design',
    ],
    tags: ['Consulting', 'Cloud', 'Security', 'Strategy'],
  },
  {
    id: 'mobile',
    title: 'App Development',
   
    color: '#10b981',
    colorDim: 'rgba(16,185,129,0.1)',
    desc: 'Intuitive, high-performance mobile apps for iOS and Android that keep your customers engaged and your brand at their fingertips 24/7.',
    features: [
      'iOS & Android native apps',
      'Cross-platform development',
      'M-Pesa & payment integration',
      'Push notifications & analytics',
      'App Store & Play Store deployment',
    ],
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    id: 'design',
    title: 'Creative Design',
   
    color: '#ec4899',
    colorDim: 'rgba(236,72,153,0.1)',
    desc: 'Memorable brand identities that leave a lasting impression — from stunning logo design and business cards to full brand kits and marketing materials.',
    features: [
      'Logo design & brand identity',
      'Business cards & stationery',
      'Social media graphics & templates',
      'Brochures, flyers & print design',
      'UI/UX design & prototyping',
    ],
    tags: ['Illustrator', 'Figma', 'Photoshop', 'Canva Pro'],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
   
    color: '#00a85a',
    colorDim: 'rgba(0,168,90,0.1)',
    desc: 'Data-driven Google Ads, SEO, and content strategies that put your brand in front of the right audience and turn clicks into paying customers.',
    features: [
      'Google Search & Display Ads',
      'YouTube video ads',
      'SEO & content marketing',
      'Conversion rate optimisation',
      'Monthly performance reporting',
    ],
    tags: ['Google Ads', 'SEO', 'Analytics', 'Content'],
  },
];

export const PROJECTS = [
  {
    id: 'electromatt',
    category: 'E-Commerce',
    title: 'Electromatt',
    subtitle: 'Premium Electronics & Appliances',
    desc: "Kenya's trusted electronics retailer — shop fridges, TVs, smartphones and appliances with flash deals, M-Pesa checkout, and fast Nairobi delivery.",
    url: 'https://www.electromatt.co.ke',
    logo: 'https://www.electromatt.co.ke/electromatt-icon-only.svg',
    logoBg: '#0f172a',
    color: '#1e3a5f',
    initials: 'EM',
    tags: ['Next.js', 'E-Commerce', 'M-Pesa', 'Flash Deals'],
  },
  {
    id: 'allstar',
    category: 'E-Commerce',
    title: 'Allstar Tech',
    subtitle: 'Premium Computers & Electronics',
    desc: 'Full-featured tech store for laptops, desktops, monitors and accessories — with product catalogue, smart search, and same-day delivery in Nairobi.',
    url: 'https://www.allstar.co.ke',
    logo: 'https://www.allstar.co.ke/allstar-logo.svg',
    logoBg: '#0f172a',
    color: '#c2410c',
    initials: 'AS',
    tags: ['Next.js', 'E-Commerce', 'Inventory', 'Analytics'],
  },
  {
    id: 'javic',
    category: 'E-Commerce',
    title: 'Javic Collection',
    subtitle: 'Fashion & Lifestyle Store',
    desc: 'Elegant fashion e-commerce platform for a Kenyan clothing brand — featuring product collections, style lookbooks, and seamless mobile checkout.',
    url: 'https://www.javiccollection.co.ke',
    logo: 'https://www.javiccollection.co.ke/favicon.ico',
    logoBg: '#fff0f5',
    color: '#9f1239',
    initials: 'JC',
    tags: ['E-Commerce', 'Fashion', 'Mobile-First', 'M-Pesa'],
  },
  {
    id: 'rhino',
    category: 'Website',
    title: 'Rhino Linings Nairobi',
    subtitle: 'Premium Protective Coatings',
    desc: "Corporate website for Kenya's leading protective coatings provider — showcasing truck bed liners, industrial coatings, and service contact.",
    url: 'https://www.rhinoliningsnairobi.co.ke',
    logo: '/logos/rhino-linings.png',
    logoBg: '#f5f5f5',
    color: '#e85d04',
    initials: 'RL',
    tags: ['Corporate Website', 'Service Showcase', 'SEO'],
  },
 

];

export const PRICING = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'KES 25,000/=',
    period: 'per project',
    highlight: false,
    features: [
      'Professional website (up to 5 pages)',
      'Mobile responsive design',
      'Contact form & WhatsApp integration',
      'Basic SEO setup',
      'Google Maps integration',
      
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 'KES 60,000/=',
   
    period: 'per project',
    highlight: true,
    badge: 'Recommended',
    features: [
      'Custom web application (up to 15 pages)',
      'Advanced responsive design',
      'Content management system (CMS)',
      'E-commerce & M-Pesa integration',
      'Advanced SEO optimisation',
      'Admin dashboard',
      '3 months support & maintenance',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom ',
    period: 'tailored solution',
    highlight: false,
    features: [
      'Full-scale system development',
      'Custom ERP / CRM / management system',
      'API integrations & microservices',
      'Database design & optimisation',
      'Advanced security implementation',
      'IT consultancy & strategy sessions',
      '12 months support & dedicated PM',
    ],
  },
];

export const DESIGN_PRICING = [
  {
    id: 'logo-basic',
    name: 'Logo Design',
    price: 'KES 5,000',
    period: 'per logo',
    highlight: false,
    features: [
      '3 unique concept designs',
      'Unlimited revisions',
      'All file formats (PNG, SVG, AI)',
      'Brand colour palette',
      '48-hour delivery',
    ],
  },
  {
    id: 'brand-kit',
    name: 'Brand Identity Kit',
    price: 'KES 18,000',
    period: 'full package',
    highlight: true,
    badge: 'Best Value',
    features: [
      'Professional logo (primary + variations)',
      'Business card design (front & back)',
      'Letterhead & email signature',
      'Social media profile assets',
      'Brand style guide (fonts, colours)',
      'Print-ready files included',
    ],
  },
  {
    id: 'marketing-materials',
    name: 'Marketing Pack',
    price: 'KES 12,000',
    period: 'per project',
    highlight: false,
    features: [
      'Flyer & brochure design',
      'Social media post templates (10)',
      'Banner & poster designs',
      'Product/service catalogue layout',
      'Print & digital formats',
    ],
  },
];



export const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

export const WHY_US = [
  {
   
    title: 'Proven Track Record',
    desc: 'Over 50 successful projects delivered across Kenya, from startups to established enterprises.',
  },
  {

    title: 'Fast Turnaround',
    desc: 'We respect your deadlines. Most websites delivered in 7–14 days; logos in 48 hours.',
  },
  {
  
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security, regular backups, and 99.9% uptime guarantee on all our solutions.',
  },
  {
   
    title: 'Dedicated Support',
    desc: 'We don\'t disappear after launch. Get direct WhatsApp support from the team that built your product.',
  },
  {
    
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Fixed-price projects with clear milestones and payment terms you can trust.',
  },
  {
   
    title: 'Built for Kenya',
    desc: 'Deep understanding of the Kenyan market — M-Pesa integration, local SEO, and Kenyan design sensibilities.',
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: 'We listen, understand your goals, and map out the perfect solution.' },
  { step: '02', title: 'Design', desc: 'Wireframes and prototypes reviewed and approved before a single line of code.' },
  { step: '03', title: 'Build', desc: 'Agile development with weekly updates so you\'re always in the loop.' },
  { step: '04', title: 'Launch', desc: 'Thorough testing, training, and a smooth go-live with post-launch support.' },
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Design', href: '#design' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Contact', href: '#contact' },
];
