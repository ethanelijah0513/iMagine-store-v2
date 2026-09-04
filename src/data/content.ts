export type StockStatus = 'in-stock' | 'order-in' | 'coming-soon';

export type Device = {
  id: string;
  name: string;
  category: 'apple' | 'accessories' | 'other';
  group: string;
  spec: string;
  image: string;
  alt: string;
  stock: StockStatus;
};

export const devices: Device[] = [
  // iPhone
  { id: 'iphone-17-pro-max', name: 'iPhone 17 Pro Max', category: 'apple', group: 'iPhone', spec: '6.9" Super Retina XDR · A19 Pro · Titanium', image: 'https://images.pexels.com/photos/13469804/pexels-photo-13469804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 17 Pro Max with triple camera', stock: 'coming-soon' },
  { id: 'iphone-17-pro', name: 'iPhone 17 Pro', category: 'apple', group: 'iPhone', spec: '6.3" Super Retina XDR · A19 Pro · Titanium', image: 'https://images.pexels.com/photos/12794501/pexels-photo-12794501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 17 Pro smartphone', stock: 'coming-soon' },
  { id: 'iphone-17', name: 'iPhone 17', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A19 · Ceramic Shield', image: 'https://images.pexels.com/photos/21008947/pexels-photo-21008947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 17 smartphone', stock: 'coming-soon' },
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', category: 'apple', group: 'iPhone', spec: '6.9" Super Retina XDR · A18 Pro · Titanium', image: 'https://images.pexels.com/photos/7438754/pexels-photo-7438754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 16 Pro Max smartphone', stock: 'in-stock' },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro', category: 'apple', group: 'iPhone', spec: '6.3" Super Retina XDR · A18 Pro · Titanium', image: 'https://images.pexels.com/photos/12360229/pexels-photo-12360229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 16 Pro smartphone', stock: 'in-stock' },
  { id: 'iphone-16-plus', name: 'iPhone 16 Plus', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A18 · Ceramic Shield', image: 'https://images.pexels.com/photos/33632627/pexels-photo-33632627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 16 Plus smartphone', stock: 'in-stock' },
  { id: 'iphone-16', name: 'iPhone 16', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A18 · Ceramic Shield', image: 'https://images.pexels.com/photos/37889435/pexels-photo-37889435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 16 smartphone', stock: 'in-stock' },
  { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A17 Pro · Titanium', image: 'https://images.pexels.com/photos/10885666/pexels-photo-10885666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 15 Pro Max smartphone', stock: 'order-in' },
  { id: 'iphone-15-pro', name: 'iPhone 15 Pro', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A17 Pro · Titanium', image: 'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 15 Pro smartphone', stock: 'order-in' },
  { id: 'iphone-15-plus', name: 'iPhone 15 Plus', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A16 Bionic', image: 'https://images.pexels.com/photos/13911541/pexels-photo-13911541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 15 Plus smartphone', stock: 'order-in' },
  { id: 'iphone-15', name: 'iPhone 15', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A16 Bionic', image: 'https://images.pexels.com/photos/18525573/pexels-photo-18525573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 15 smartphone', stock: 'in-stock' },
  { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A16 Bionic', image: 'https://images.pexels.com/photos/34624326/pexels-photo-34624326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 14 Pro Max smartphone', stock: 'order-in' },
  { id: 'iphone-14-pro', name: 'iPhone 14 Pro', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A16 Bionic', image: 'https://images.pexels.com/photos/14541068/pexels-photo-14541068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 14 Pro smartphone', stock: 'order-in' },
  { id: 'iphone-14-plus', name: 'iPhone 14 Plus', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A15 Bionic', image: 'https://images.pexels.com/photos/3945698/pexels-photo-3945698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 14 Plus smartphone', stock: 'in-stock' },
  { id: 'iphone-14', name: 'iPhone 14', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A15 Bionic', image: 'https://images.pexels.com/photos/7438754/pexels-photo-7438754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 14 smartphone', stock: 'in-stock' },
  { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A15 Bionic', image: 'https://images.pexels.com/photos/12794501/pexels-photo-12794501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 13 Pro Max smartphone', stock: 'order-in' },
  { id: 'iphone-13-pro', name: 'iPhone 13 Pro', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A15 Bionic', image: 'https://images.pexels.com/photos/13469804/pexels-photo-13469804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 13 Pro smartphone', stock: 'order-in' },
  { id: 'iphone-13', name: 'iPhone 13', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A15 Bionic', image: 'https://images.pexels.com/photos/21008947/pexels-photo-21008947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 13 smartphone', stock: 'in-stock' },
  { id: 'iphone-13-mini', name: 'iPhone 13 mini', category: 'apple', group: 'iPhone', spec: '5.4" Super Retina XDR · A15 Bionic', image: 'https://images.pexels.com/photos/12360229/pexels-photo-12360229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 13 mini smartphone', stock: 'order-in' },
  { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', category: 'apple', group: 'iPhone', spec: '6.7" Super Retina XDR · A14 Bionic', image: 'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 12 Pro Max smartphone', stock: 'order-in' },
  { id: 'iphone-12-pro', name: 'iPhone 12 Pro', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A14 Bionic', image: 'https://images.pexels.com/photos/33632627/pexels-photo-33632627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 12 Pro smartphone', stock: 'order-in' },
  { id: 'iphone-12', name: 'iPhone 12', category: 'apple', group: 'iPhone', spec: '6.1" Super Retina XDR · A14 Bionic', image: 'https://images.pexels.com/photos/37889435/pexels-photo-37889435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 12 smartphone', stock: 'in-stock' },
  { id: 'iphone-12-mini', name: 'iPhone 12 mini', category: 'apple', group: 'iPhone', spec: '5.4" Super Retina XDR · A14 Bionic', image: 'https://images.pexels.com/photos/13911541/pexels-photo-13911541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 12 mini smartphone', stock: 'order-in' },
  { id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', category: 'apple', group: 'iPhone', spec: '6.5" Liquid Retina HD · A13 Bionic', image: 'https://images.pexels.com/photos/10885666/pexels-photo-10885666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 11 Pro Max smartphone', stock: 'order-in' },
  { id: 'iphone-11-pro', name: 'iPhone 11 Pro', category: 'apple', group: 'iPhone', spec: '5.8" Super Retina XDR · A13 Bionic', image: 'https://images.pexels.com/photos/18525573/pexels-photo-18525573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 11 Pro smartphone', stock: 'order-in' },
  { id: 'iphone-11', name: 'iPhone 11', category: 'apple', group: 'iPhone', spec: '6.1" Liquid Retina HD · A13 Bionic', image: 'https://images.pexels.com/photos/7438754/pexels-photo-7438754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPhone 11 smartphone', stock: 'in-stock' },

  // iPad
  { id: 'ipad-pro-13', name: 'iPad Pro 13"', category: 'apple', group: 'iPad', spec: '13" Ultra Retina XDR · M4 chip', image: 'https://images.pexels.com/photos/6849081/pexels-photo-6849081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPad Pro 13 inch tablet', stock: 'in-stock' },
  { id: 'ipad-pro-11', name: 'iPad Pro 11"', category: 'apple', group: 'iPad', spec: '11" Ultra Retina XDR · M4 chip', image: 'https://images.pexels.com/photos/8024027/pexels-photo-8024027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPad Pro 11 inch tablet', stock: 'in-stock' },
  { id: 'ipad-air', name: 'iPad Air', category: 'apple', group: 'iPad', spec: '11" Liquid Retina · M2 chip', image: 'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPad Air tablet', stock: 'in-stock' },
  { id: 'ipad-10', name: 'iPad 10th Gen', category: 'apple', group: 'iPad', spec: '10.9" Liquid Retina · A14 Bionic', image: 'https://images.pexels.com/photos/6849081/pexels-photo-6849081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iPad 10th generation tablet', stock: 'in-stock' },

  // Mac
  { id: 'macbook-pro-16', name: 'MacBook Pro 16"', category: 'apple', group: 'Mac', spec: '16.2" Liquid Retina XDR · M4 Max', image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'MacBook Pro 16 inch laptop', stock: 'in-stock' },
  { id: 'macbook-pro-14', name: 'MacBook Pro 14"', category: 'apple', group: 'Mac', spec: '14.2" Liquid Retina XDR · M4 Pro', image: 'https://images.pexels.com/photos/8068269/pexels-photo-8068269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'MacBook Pro 14 inch laptop', stock: 'in-stock' },
  { id: 'macbook-air-15', name: 'MacBook Air 15"', category: 'apple', group: 'Mac', spec: '15.3" Liquid Retina · M3 chip', image: 'https://images.pexels.com/photos/11621727/pexels-photo-11621727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'MacBook Air 15 inch laptop', stock: 'in-stock' },
  { id: 'macbook-air-13', name: 'MacBook Air 13"', category: 'apple', group: 'Mac', spec: '13.6" Liquid Retina · M3 chip', image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'MacBook Air 13 inch laptop', stock: 'in-stock' },
  { id: 'imac', name: 'iMac 24"', category: 'apple', group: 'Mac', spec: '24" 4.5K Retina · M3 chip', image: 'https://images.pexels.com/photos/5082562/pexels-photo-5082562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'iMac 24 inch all-in-one desktop', stock: 'order-in' },
  { id: 'mac-mini', name: 'Mac mini', category: 'apple', group: 'Mac', spec: 'M4 chip · Compact desktop', image: 'https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Mac mini desktop computer', stock: 'in-stock' },

  // Apple Watch
  { id: 'apple-watch-ultra-2', name: 'Apple Watch Ultra 2', category: 'apple', group: 'Apple Watch', spec: '49mm Titanium · Action button', image: 'https://images.pexels.com/photos/9142237/pexels-photo-9142237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Apple Watch Ultra 2 smartwatch', stock: 'in-stock' },
  { id: 'apple-watch-series-10', name: 'Apple Watch Series 10', category: 'apple', group: 'Apple Watch', spec: '46mm / 42mm · Always-on display', image: 'https://images.pexels.com/photos/9584703/pexels-photo-9584703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Apple Watch Series 10 smartwatch', stock: 'in-stock' },
  { id: 'apple-watch-se', name: 'Apple Watch SE', category: 'apple', group: 'Apple Watch', spec: '44mm / 40mm · Retina display', image: 'https://images.pexels.com/photos/14979022/pexels-photo-14979022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Apple Watch SE smartwatch', stock: 'in-stock' },

  // AirPods
  { id: 'airpods-pro-2', name: 'AirPods Pro 2', category: 'apple', group: 'AirPods', spec: 'Adaptive Audio · USB-C · ANC', image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'AirPods Pro 2 wireless earbuds', stock: 'in-stock' },
  { id: 'airpods-4', name: 'AirPods 4', category: 'apple', group: 'AirPods', spec: 'Active Noise Cancellation · USB-C', image: 'https://images.pexels.com/photos/3921817/pexels-photo-3921817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'AirPods 4 wireless earbuds', stock: 'in-stock' },
  { id: 'airpods-max', name: 'AirPods Max', category: 'apple', group: 'AirPods', spec: 'Over-ear · Spatial Audio · ANC', image: 'https://images.pexels.com/photos/30981655/pexels-photo-30981655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'AirPods Max over-ear headphones', stock: 'order-in' },

  // Accessories
  { id: 'magsafe-charger', name: 'MagSafe Charger', category: 'accessories', group: 'Accessories', spec: '15W wireless charging pad', image: 'https://images.pexels.com/photos/19513471/pexels-photo-19513471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'MagSafe wireless charger', stock: 'in-stock' },
  { id: 'usb-c-cable', name: 'USB-C Cable', category: 'accessories', group: 'Accessories', spec: 'Thunderbolt 4 · 1m / 2m', image: 'https://images.pexels.com/photos/4499765/pexels-photo-4499765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'USB-C cable on desk', stock: 'in-stock' },
  { id: 'airtags', name: 'AirTag (4-pack)', category: 'accessories', group: 'Accessories', spec: 'Precision tracking · IP67', image: 'https://images.pexels.com/photos/3945698/pexels-photo-3945698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'AirTag tracking devices', stock: 'in-stock' },
  { id: 'magic-keyboard', name: 'Magic Keyboard', category: 'accessories', group: 'Accessories', spec: 'Wireless · Touch ID · USB-C', image: 'https://images.pexels.com/photos/37889435/pexels-photo-37889435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Magic Keyboard', stock: 'in-stock' },

  // Other Tech
  { id: 'gaming-console', name: 'Gaming Console', category: 'other', group: 'Other Tech', spec: 'Next-gen gaming · 4K 120Hz', image: 'https://images.pexels.com/photos/4522996/pexels-photo-4522996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gaming controllers', stock: 'in-stock' },
  { id: 'gaming-handheld', name: 'Handheld Gaming', category: 'other', group: 'Other Tech', spec: 'Portable gaming · OLED display', image: 'https://images.pexels.com/photos/14629382/pexels-photo-14629382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Handheld gaming console', stock: 'in-stock' },
  { id: 'drone', name: '4K Drone', category: 'other', group: 'Other Tech', spec: '4K video · 3-axis gimbal · 30min flight', image: 'https://images.pexels.com/photos/3823555/pexels-photo-3823555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Camera drone in flight', stock: 'order-in' },
  { id: 'smart-home-hub', name: 'Smart Home Hub', category: 'other', group: 'Other Tech', spec: 'Voice control · Smart home automation', image: 'https://images.pexels.com/photos/5366225/pexels-photo-5366225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Smart home desk setup', stock: 'in-stock' },
];

// Featured devices for home page (subset, no prices)
export const featuredDevices: Device[] = [
  devices[0], // iPhone 17 Pro Max
  devices.find((d) => d.id === 'ipad-pro-13')!,
  devices.find((d) => d.id === 'macbook-pro-16')!,
  devices.find((d) => d.id === 'apple-watch-ultra-2')!,
  devices.find((d) => d.id === 'airpods-pro-2')!,
  devices.find((d) => d.id === 'imac')!,
];

export type PhilosophyItem = {
  id: string;
  word: string;
  description: string;
  icon: string;
};

export const philosophyItems: PhilosophyItem[] = [
  { id: 'educate', word: 'Educate', description: 'Empowering through training, workshops, and knowledge-sharing across every device we sell.', icon: 'GraduationCap' },
  { id: 'innovate', word: 'Innovate', description: 'Delivering cutting-edge solutions through app development, IT consultancy, and software.', icon: 'Lightbulb' },
  { id: 'entertain', word: 'Entertain', description: 'Bringing joy and inspiration through premium technology experiences in-store and online.', icon: 'Sparkles' },
];

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  { id: 'experience', icon: 'Award', title: '8+ Years in Retail', description: 'A decade of trusted service to South African customers and businesses.' },
  { id: 'genuine', icon: 'ShieldCheck', title: 'Genuine Apple Products', description: 'Every product is authentic, sealed, and backed by full warranty.' },
  { id: 'support', icon: 'Headphones', title: 'Local Support', description: 'Real people, real expertise — right here in South Africa.' },
  { id: 'solutions', icon: 'Building2', title: 'Business & Education', description: 'Tailored solutions, training, and deployment for organisations.' },
];

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  { id: 'retail', icon: 'ShoppingBag', title: 'Retail', description: 'Apple products and premium tech, available in-store and online.' },
  { id: 'app-dev', icon: 'Code2', title: 'Application Development', description: 'Custom apps built by our network of experienced developers.' },
  { id: 'it-consultancy', icon: 'Network', title: 'IT Consultancy', description: 'Strategic IT guidance for businesses of every size.' },
  { id: 'ecommerce', icon: 'ShoppingCart', title: 'E-commerce', description: 'Seamless online shopping and digital storefront solutions.' },
  { id: 'software-dev', icon: 'Terminal', title: 'Software Development', description: 'Bespoke software tailored to your unique business needs.' },
  { id: 'support', icon: 'Headphones', title: 'Customer Support', description: 'Ongoing support and training for every product we sell.' },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  { id: 't1', quote: "iMagine made our school's iPad rollout effortless. From procurement to training, every step was handled with care.", author: 'Sarah Nkosi', role: 'IT Director, Rosebank College' },
  { id: 't2', quote: 'The team helped us equip our entire design studio with Macs. The quote process was seamless and the pricing was transparent.', author: 'James van der Merwe', role: 'Creative Director, Studio One' },
  { id: 't3', quote: "I've bought three iPhones from iMagine. Genuine products, fast delivery, and support that actually picks up the phone.", author: 'Lerato Mokoena', role: 'Customer since 2019' },
  { id: 't4', quote: 'Their IT consultancy transformed our business workflows. We now run more efficiently than ever before.', author: 'Pieter Steyn', role: 'COO, Nexus Group' },
  { id: 't5', quote: 'From app development to deployment, iMagine handled our entire digital transformation with professionalism.', author: 'Aisha Patel', role: 'Founder, Edge Labs' },
];

export const trustItems = [
  { icon: 'ShieldCheck', label: 'Genuine Apple Products' },
  { icon: 'Award', label: '8+ Years in SA' },
  { icon: 'Building2', label: 'Business & Education Solutions' },
  { icon: 'Headphones', label: 'Local Support' },
];

// Repair services
export type RepairService = {
  id: string;
  icon: string;
  title: string;
  description: string;
  devices: string;
  image: string;
  alt: string;
};

export const repairServices: RepairService[] = [
  {
    id: 'screen-replacement',
    icon: 'Smartphone',
    title: 'Screen Replacement',
    description: 'Cracked or shattered display? We replace screens with genuine-grade parts for iPhone, iPad, and Apple Watch.',
    devices: 'iPhone · iPad · Apple Watch',
    image: 'https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician repairing a smartphone screen',
  },
  {
    id: 'battery-replacement',
    icon: 'BatteryCharging',
    title: 'Battery Replacement',
    description: 'Is your battery draining fast or your device shutting down unexpectedly? A fresh battery restores full performance.',
    devices: 'iPhone · iPad · MacBook',
    image: 'https://images.pexels.com/photos/31862950/pexels-photo-31862950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Disassembled smartphone with battery and tools',
  },
  {
    id: 'logic-board-repair',
    icon: 'Cpu',
    title: 'Logic Board Repair',
    description: 'Water damage, no power, or charging issues? Our technicians perform component-level diagnostics and repair.',
    devices: 'iPhone · MacBook · iPad',
    image: 'https://images.pexels.com/photos/7639374/pexels-photo-7639374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician repairing a laptop circuit board',
  },
  {
    id: 'camera-repair',
    icon: 'Camera',
    title: 'Camera Repair',
    description: 'Blurry photos, cracked lens, or non-functioning camera? We repair and replace front and rear camera modules.',
    devices: 'iPhone · iPad',
    image: 'https://images.pexels.com/photos/6755056/pexels-photo-6755056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician using microscope for phone repair',
  },
];

export const repairSteps = [
  { step: 1, title: 'Book Your Repair', description: 'Submit a repair request online or visit us in-store. Tell us what\'s wrong with your device.' },
  { step: 2, title: 'Free Diagnostics', description: 'Our certified technicians inspect your device and provide a transparent quote — no obligation.' },
  { step: 3, title: 'Expert Repair', description: 'Once approved, we repair your device using genuine-grade parts and precision tools.' },
  { step: 4, title: 'Collect & Enjoy', description: 'Pick up your device with a warranty on all repairs. Most repairs completed same-day.' },
];

export const repairFAQs = [
  { q: 'How long do repairs take?', a: 'Most screen and battery replacements are completed same-day. Logic board and water damage repairs may take 2–5 business days depending on parts availability.' },
  { q: 'Do you use genuine Apple parts?', a: 'We use genuine-grade replacement parts that meet Apple\'s specifications. All repairs come with a 6-month warranty on parts and labour.' },
  { q: 'Will my warranty be voided?', a: 'Repairs performed by iMagine do not affect your Apple warranty for unrelated issues. However, Apple may not cover damage caused by third-party repairs.' },
  { q: 'Can you repair water-damaged devices?', a: 'Yes. We perform component-level diagnostics on water-damaged devices. Success depends on the extent of corrosion — we\'ll give you an honest assessment before any work begins.' },
  { q: 'Do you offer a warranty on repairs?', a: 'Every repair includes a 6-month warranty covering the replaced part and labour. If the same issue recurs within that period, we fix it free of charge.' },
];

// Quote form product groups
export type ProductGroup = {
  label: string;
  options: string[];
};

export const productGroups: ProductGroup[] = [
  {
    label: 'iPhone 17 Series',
    options: ['iPhone 17', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone 17 Air'],
  },
  {
    label: 'iPhone 16 Series',
    options: ['iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max'],
  },
  {
    label: 'iPhone 15 Series',
    options: ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max'],
  },
  {
    label: 'iPhone 14 Series',
    options: ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max'],
  },
  {
    label: 'iPhone 13 Series',
    options: ['iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max'],
  },
  {
    label: 'iPhone 12 Series',
    options: ['iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max'],
  },
  {
    label: 'iPhone 11 Series',
    options: ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max'],
  },
  {
    label: 'iPad',
    options: ['iPad Pro 13"', 'iPad Pro 11"', 'iPad Air', 'iPad 10th Gen', 'iPad mini'],
  },
  {
    label: 'Mac',
    options: ['MacBook Pro 16"', 'MacBook Pro 14"', 'MacBook Air 15"', 'MacBook Air 13"', 'iMac 24"', 'Mac mini', 'Mac Studio'],
  },
  {
    label: 'Apple Watch',
    options: ['Apple Watch Ultra 2', 'Apple Watch Series 10', 'Apple Watch SE'],
  },
  {
    label: 'AirPods',
    options: ['AirPods Pro 2', 'AirPods 4', 'AirPods Max'],
  },
  {
    label: 'Accessories',
    options: ['MagSafe Charger', 'USB-C Cable', 'AirTag (4-pack)', 'Magic Keyboard', 'Magic Mouse', 'Apple Pencil'],
  },
  {
    label: 'Other Tech',
    options: ['Gaming Console', 'Handheld Gaming', '4K Drone', 'Smart Home Hub'],
  },
];
