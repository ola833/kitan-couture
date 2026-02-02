import { Product, Category, ProductStatus } from './types';
import { ASSETS } from './assets';

export const COLORS = {
  primary: '#FDFCFB',
  secondary: '#1A1A1A',
  accent: '#B8860B',
  text: '#2C2C2C',
  gold: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)'
};

export const CONTACT_INFO = {
  phone: '+234 703 248 0389',
  phoneDisplay: '+234 703 248 0389',
  email: 'olaitanomotanwa7@gmail.com',
  address: '14 Olufunmilayo St, Oke Odo, Lagos 102213, Lagos, Nigeria',
  addressShort: '14 Olufunmilayo St, Oke Odo',
  instagram: '@kitancouture',
  whatsapp: '2347032480389'
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Aso Ebi Ensemble',
    category: Category.ASO_EBI,
    price: 'Bespoke Quote Only',
    description: 'A masterclass in coordination. Featuring hand-loomed textiles and precision embroidery for the most distinguished celebrations.',
    images: ASSETS.products.asoEbi,
    fabricSpecs: 'Premium Guipure Lace, Silk Organza',
    sizes: ['Bespoke Fitting Required'],
    careInstructions: 'Dry clean only by specialists.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-01'
  },
  {
    id: '2',
    name: 'Celestial Bridal Gown',
    category: Category.BRIDAL,
    price: 'Price Upon Consultation',
    description: 'The pinnacle of bridal artistry. A cathedral train meets intricate hand-applied beadwork for an ethereal silhouette.',
    images: ASSETS.products.bridal,
    fabricSpecs: 'Italian Silk Tulle, French Lace',
    sizes: ['Bespoke'],
    careInstructions: 'Professional bridal preservation recommended.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-05'
  },
  {
    id: '3',
    name: 'Emerald Gala Gown',
    category: Category.EVENING_GALA,
    price: '₦485,000',
    description: 'Sculptural elegance defined. This deep emerald piece features a structured corseted bodice and liquid-silk draping.',
    images: ASSETS.products.evening,
    fabricSpecs: 'Luxury Stretch Velvet, Satin Lining',
    sizes: ['S', 'M', 'L', 'Custom'],
    careInstructions: 'Professional steam only.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-10'
  },
  {
    id: '4',
    name: 'Artisanal Adire Wrapper',
    category: Category.TRADITIONAL,
    price: '₦95,000',
    description: 'Heritage meets high fashion. Hand-dyed indigo patterns translated into a contemporary silhouette.',
    images: ASSETS.products.traditional,
    fabricSpecs: 'Hand-dyed Adire Cotton',
    sizes: ['One Size Fits Most'],
    careInstructions: 'Cold hand wash separately.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-12'
  },
  {
    id: '5',
    name: 'Imperial Agbada Suite',
    category: Category.MENS_COUTURE,
    price: '₦320,000',
    description: 'Commanding presence in every thread. Hand-embroidered gold motifs on structured wool.',
    images: ASSETS.products.mens,
    fabricSpecs: 'English Wool, Gold Filigree Thread',
    sizes: ['M', 'L', 'XL', 'Custom'],
    careInstructions: 'Professional dry clean.',
    status: ProductStatus.AVAILABLE,
    dateAdded: '2024-03-15'
  }
];