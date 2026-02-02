
export enum Category {
  ALL = 'All',
  ASO_EBI = 'Aso Ebi Collections',
  BRIDAL = 'Bridal Couture',
  EVENING_GALA = 'Evening & Gala Wear',
  TRADITIONAL = 'Traditional Couture',
  MENS_COUTURE = 'Men’s Couture',
  WOMENS_COUTURE = 'Women’s Couture',
  CHILDRENS_COUTURE = 'Children’s Couture'
}

export enum ProductStatus {
  AVAILABLE = 'Available',
  SOLD = 'Sold',
  COMING_SOON = 'Coming Soon',
  ARCHIVE = 'Archive'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: string;
  description: string;
  images: string[];
  fabricSpecs: string;
  sizes: string[];
  careInstructions: string;
  status: ProductStatus;
  dateAdded: string;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  productId: string;
  productName: string;
  message: string;
  status: 'New' | 'In Progress' | 'Completed';
  date: string;
}

export interface SiteSettings {
  businessName: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  logoUrl: string;
}
