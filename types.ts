
export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

export interface AgriculturalProduct {
  id: string;
  name: string;
  unit: string;
  price: number;
  lastUpdate: string;
  market: string; // e.g., Corabastos, Paloquemao
  trend: 'up' | 'down' | 'stable';
}

export interface Expert {
  id: string;
  name: string;
  specialty: string;
  contact: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
    