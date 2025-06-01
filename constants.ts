
import { CarouselImage, AgriculturalProduct, Expert, NavItem } from './types';

export const APP_NAME = "Agrolisth";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Precios Hoy', href: '#prices' },
  { label: 'Conectar Expertos', href: '#experts' },
  { label: 'Asesor IA', href: '#ai-advisor' },
  { label: 'Sobre Nosotros', href: '#about' },
];

export const CAROUSEL_IMAGES: CarouselImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/colombiafarm1/1200/500', alt: 'Campo colombiano productivo' },
  { id: 2, src: 'https://picsum.photos/seed/colombiafarm2/1200/500', alt: 'Agricultor trabajando en el campo' },
  { id: 3, src: 'https://picsum.photos/seed/colombiafarm3/1200/500', alt: 'Tecnología en la agricultura colombiana' },
  { id: 4, src: 'https://picsum.photos/seed/colombiafarm4/1200/500', alt: 'Cosecha de productos agrícolas' },
  { id: 5, src: 'https://picsum.photos/seed/colombiafarm5/1200/500', alt: 'Paisaje agrícola de Colombia' },
];

export const MOCK_PRODUCTS: AgriculturalProduct[] = [
  { id: '1', name: 'Papa Pastusa', unit: 'Bulto 50kg', price: 75000, lastUpdate: '2024-07-28', market: 'Corabastos', trend: 'stable' },
  { id: '2', name: 'Cebolla Cabezona Blanca', unit: 'Bulto 50kg', price: 90000, lastUpdate: '2024-07-28', market: 'Corabastos', trend: 'up' },
  { id: '3', name: 'Tomate Chonto', unit: 'Caja 25kg', price: 60000, lastUpdate: '2024-07-28', market: 'Paloquemao', trend: 'down' },
  { id: '4', name: 'Plátano Hartón', unit: 'Racimo', price: 35000, lastUpdate: '2024-07-28', market: 'Corabastos', trend: 'stable' },
  { id: '5', name: 'Aguacate Hass', unit: 'Kilogramo', price: 8000, lastUpdate: '2024-07-28', market: 'Éxito', trend: 'up' },
  { id: '6', name: 'Café Pergamino Seco', unit: 'Carga 125kg', price: 1450000, lastUpdate: '2024-07-28', market: 'Federación Nal. Cafeteros', trend: 'stable' },
  { id: '7', name: 'Maíz Amarillo', unit: 'Tonelada', price: 1200000, lastUpdate: '2024-07-28', market: 'Corabastos', trend: 'down' },
  { id: '8', name: 'Arroz Blanco', unit: 'Bulto 50kg', price: 180000, lastUpdate: '2024-07-28', market: 'Molinos', trend: 'up' },
];

export const MOCK_EXPERTS: Expert[] = [
  { id: '1', name: 'Ing. Ana Pérez', specialty: 'Cultivos de Clima Frío', contact: 'ana.perez@agrolisth.co', imageUrl: 'https://picsum.photos/seed/expert1/200/200' },
  { id: '2', name: 'Ing. Carlos Rojas', specialty: 'Manejo de Suelos y Fertilizantes', contact: 'carlos.rojas@agrolisth.co', imageUrl: 'https://picsum.photos/seed/expert2/200/200' },
  { id: '3', name: 'Ing. Sofia Gómez', specialty: 'Control de Plagas y Enfermedades', contact: 'sofia.gomez@agrolisth.co', imageUrl: 'https://picsum.photos/seed/expert3/200/200' },
];

export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';
export const GEMINI_IMAGE_MODEL_NAME = 'imagen-3.0-generate-002';

export const SYSTEM_INSTRUCTION_AGROBOT = `Eres Agrobot, un asistente virtual experto en agricultura colombiana. Tu propósito es ayudar a los campesinos con consejos prácticos, información sobre cultivos, manejo de plagas, fertilización, y optimización de cosechas. Responde de manera clara, concisa y amigable. Si la pregunta es muy compleja o requiere una visita técnica, sugiere contactar a un ingeniero agrónomo. No respondas preguntas fuera del ámbito agrícola.`;
    