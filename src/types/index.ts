export type NavTab = 'home' | 'services' | 'team' | 'results' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  tag: string;
}

export interface PortfolioCase {
  id: string;
  category: 'vinir' | 'implant' | 'breket';
  categoryLabel: string;
  title: string;
  description: string;
  subDetail: string;
  image: string;
  badge: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface BookingData {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}
