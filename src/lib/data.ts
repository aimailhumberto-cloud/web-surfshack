// Surf Shack - Contenido del Landing
// Actualizado: 30-Mar-2026

export const PHONE_NUMBER = '+5076XXXXXXX'; // TODO: Reemplazar con número real

export const WHATSAPP_MESSAGE = `¡Hola! Quiero obtener mi membresía de Surf Shack.

[ ] Personal ($25/mes) - 2 personas
[ ] Familiar ($40/mes) - 5 personas

Nombre: 
Teléfono: `;

export const HERO = {
  title: "Tu Club de Playa en Playa Caracol",
  subtitle: "Piscina • Pump Track • Restaurante • Surf",
  description: "Tu escape perfecto a 1 hora de Panamá",
  cta: "Obtener Mi Membresía",
  ctaSecondary: "Ver Precios",
  rating: "5.0",
  reviews: "12",
  location: "75km de Panamá",
  hours: "8 AM - 10 PM",
};

export const BENEFITS = [
  {
    category: "Acceso Ilimitado",
    icon: "🏊‍♂️",
    items: [
      "Piscina con vista al mar",
      "Pump track (skate/scooter)",
      "Acceso a playa",
      "Ranchos (sujeto a disponibilidad)",
    ],
  },
  {
    category: "Descuentos en Todo",
    icon: "🍽️",
    items: [
      "10% en restaurante y bar",
      "15% en clases de surf",
      "10% en reservas Playa Caracol",
      "15% en alquiler de equipos",
    ],
  },
  {
    category: "Extras Incluidos",
    icon: "🎁",
    items: [
      "Estacionamiento gratuito",
      "Duchas y lockers",
      "Acceso a eventos",
      "1 clase surf cumpleaños (Familiar)",
    ],
  },
];

export const MEMBERSHIPS = [
  {
    name: "Personal",
    price: 25,
    period: "mes",
    description: "Perfecto para parejas",
    people: "2 personas",
    peopleDetail: "Tú + 1 acompañante ilimitado",
    popular: false,
    savings: "$30/mes",
    savingsDetail: "vs 2 pasadías ($15 c/u)",
    benefits: [
      "Acceso ilimitado",
      "10% en restaurante",
      "15% clases surf",
      "Estacionamiento",
      "Duchas",
      "Eventos gratis",
    ],
  },
  {
    name: "Familiar",
    price: 40,
    period: "mes",
    description: "Ideal para familias",
    people: "5 personas",
    peopleDetail: "Tú + 4 acompañantes ilimitado",
    popular: true,
    savings: "$75/mes",
    savingsDetail: "vs 5 pasadías ($15 c/u)",
    benefits: [
      "Acceso ilimitado",
      "10% en restaurante",
      "15% clases surf",
      "Rancho prioridad",
      "Estacionamiento",
      "Duchas",
      "Eventos gratis",
      "1 clase cumpleaños",
      "2 bebidas bienvenida",
    ],
  },
];

export const PRICING_PERIODS = {
  personal: [
    { period: "Mensual", price: 25, discount: null },
    { period: "Trimestral", price: 70, discount: "7%" },
    { period: "Semestral", price: 130, discount: "13%" },
    { period: "Anual", price: 240, discount: "20%" },
  ],
  familiar: [
    { period: "Mensual", price: 40, discount: null },
    { period: "Trimestral", price: 115, discount: "4%" },
    { period: "Semestral", price: 220, discount: "8%" },
    { period: "Anual", price: 420, discount: "13%" },
  ],
};

export const TESTIMONIALS = [
  {
    name: "María G.",
    rating: 5,
    membership: "Personal",
    since: "Enero 2026",
    text: "Venido 3 veces por semana. La membresía se paga sola en la segunda visita.",
  },
  {
    name: "Carlos P.",
    rating: 5,
    membership: "Familiar",
    since: "Febrero 2026",
    text: "Perfecto para la familia. Los niños aman el pump track y la piscina. 100% recomendado.",
  },
  {
    name: "Andrea M.",
    rating: 5,
    membership: "Personal",
    since: "Marzo 2026",
    text: "La mejor decisión. Lugar increíble, buena comida, y el descuento en clases de surf es clave.",
  },
];

export const FAQS = [
  {
    question: "¿Puedo ir solo y usar la membresía Personal?",
    answer: "Sí, puedes ir solo. La membresía te cubre a ti + 1 acompañante. Si vas solo, igual puedes invitar a alguien en otra visita.",
  },
  {
    question: "¿Qué pasa si mi familia tiene más de 5 personas?",
    answer: "Puedes pagar pasadías adicionales ($15/persona) para los extra, o considerar dos membresías.",
  },
  {
    question: "¿Necesito reservar para ir?",
    answer: "No necesitas reservar para acceso general. Solo reservamos ranchos para eventos privados.",
  },
  {
    question: "¿Cómo pago mi membresía?",
    answer: "Aceptamos Yappy, tarjeta de crédito/débito, y transferencia bancaria. Pagos recurrentes automáticos disponibles.",
  },
  {
    question: "¿Puedo cancelar mi membresía?",
    answer: "Puedes cancelar anytime. Sin contratos largos. Tu acceso termina al final del período pagado.",
  },
  {
    question: "¿Las clases de surf están incluidas?",
    answer: "No están incluidas, pero miembros tienen 15% de descuento en clases con ANS AI.",
  },
  {
    question: "¿Hay estacionamiento?",
    answer: "Sí, estacionamiento gratuito incluido con membresía.",
  },
  {
    question: "¿Puedo traer comida?",
    answer: "Preferimos que disfrutes nuestro restaurante. Miembros tienen 10% de descuento en comida y bebidas.",
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Playa Caracol - Vista principal",
    caption: "Playa",
  },
  {
    src: "https://images.unsplash.com/photo-1530755414729-7b7e6c1bb219?w=800&q=80",
    alt: "Piscina Surf Shack",
    caption: "Piscina",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21b224c1de6d?w=800&q=80",
    alt: "Área social",
    caption: "Área Social",
  },
  {
    src: "https://images.unsplash.com/photo-1502680327475-0a5b1f5c77db?w=800&q=80",
    alt: "Actividades",
    caption: "Actividades",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Comunidad Surf Shack",
    caption: "Comunidad",
  },
  {
    src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&q=80",
    alt: "Atardeceres",
    caption: "Atardeceres",
  },
];

export const LOCATION = {
  address: "Playa Caracol, Chame, Panamá",
  distance: "75km de Panamá (1 hora en auto)",
  hours: "Lunes a Domingo: 8:00 AM - 10:00 PM",
  mapsUrl: "https://maps.google.com/?q=Playa+Caracol+Chame+Panama",
};

export const ACTIVITIES = [
  "Piscina con vista al mar",
  "Pump track (skate/scooter)",
  "Acceso a playa",
  "Restaurante y bar",
  "Clases de surf (ANS AI)",
  "Ranchos privados",
];

export const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Membresías", href: "/#membresias" },
  { name: "El Club", href: "/#club" },
  { name: "FAQ", href: "/#faq" },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://instagram.com/surfshackpty", icon: "instagram" },
  { name: "Facebook", url: "https://facebook.com/surfshackpty", icon: "facebook" },
  { name: "WhatsApp", url: `https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`, icon: "whatsapp" },
];