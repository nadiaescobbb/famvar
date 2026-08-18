import { useState, useEffect } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type View = 'home' | 'category' | 'product'

interface ProductSpec {
  label: string
  value: string
}

interface SpecGroup {
  category: string
  items: string[]
}

interface StorageOption {
  size: string
  price: string
}

interface ProductFeature {
  title: string
  text: string
}

interface FAQItem {
  question: string
  answer: string
}

interface Product {
  id: string
  name: string
  price: string
  image: string
  images?: string[]
  description: string
  features?: ProductFeature[]
  status: 'new' | 'used' | 'out' | null
  availability?: 'stock' | 'order' | null
  category: string
  featured?: boolean
  specs?: ProductSpec[]
  specGroups?: SpecGroup[]
  storageOptions?: StorageOption[]
  faqs?: FAQItem[]
}

interface Category {
  id: string
  label: string
  image: string
  count: string
  isPhones?: boolean
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    id: 'celulares',
    label: 'Celulares',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&auto=format',
    count: 'iPhone · Samsung · a pedido',
    isPhones: true,
  },
  {
    id: 'fundas',
    label: 'Fundas',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop&auto=format',
    count: 'Para todos los modelos',
  },
  {
    id: 'cargadores',
    label: 'Cargadores',
    image: 'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=600&h=400&fit=crop&auto=format',
    count: 'USB-C · Lightning · Inalámbrico',
  },
  {
    id: 'termos',
    label: 'Termos y vasos',
    image: '/termosbanner.avif',
    count: 'Stanley · Tazas automáticas',
  },
  {
    id: 'variedad',
    label: 'Variedad',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop&auto=format',
    count: 'Productos importados',
  },
]

const STANLEY_MATE_SYSTEM_FAQS: FAQItem[] = [
  {
    question: '¿El Termo Stanley Mate System 1.2 L sirve especialmente para tomar mate?',
    answer: 'Sí. El Termo Stanley Mate System 1.2 L está diseñado especialmente para acompañar el ritual del mate. Su tapón de alta precisión permite cebar con un flujo continuo y exacto, ayudando a controlar mejor la salida del agua en cada cebada.',
  },
  {
    question: '¿La tapa del Termo Stanley Mate System se puede usar como mate?',
    answer: 'Sí. Una de las principales ventajas del Termo Stanley Mate System 1.2 L es que su tapa de acero inoxidable también funciona como mate. Esto lo convierte en una opción práctica para llevar todo lo necesario en un solo producto, ideal para el trabajo, viajes, facultad, plaza o uso diario.',
  },
  {
    question: '¿Cuánto tiempo mantiene caliente el agua el Termo Stanley Mate System 1.2 L?',
    answer: 'El Termo Stanley Mate System 1.2 L mantiene las bebidas calientes hasta 30 horas, gracias a su doble pared con aislación al vacío. También conserva bebidas frías hasta 30 horas y con hielo hasta 4 días, por lo que puede usarse tanto para mate como para otras bebidas frías o calientes.',
  },
  {
    question: '¿El Termo Stanley Mate System 1.2 L pierde líquido si lo llevo en la mochila?',
    answer: 'No, el Termo Stanley Mate System 1.2 L está diseñado a prueba de fugas, por lo que se puede transportar con mayor seguridad en mochila, bolso o matera. Además, está fabricado en acero inoxidable reciclado 18/8, es libre de BPA y apto para lavavajillas, lo que facilita su limpieza y uso frecuente.',
  },
]

const PRODUCTS: Product[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    price: '$ 3.799.990',
    image: '/iphone17promax1.avif',
    images: [
      '/iphone17promax1.avif',
      '/iphone17promax2.avif',
      '/iphone17promax3.avif',
      '/iphone17promax4.avif',
    ],
    storageOptions: [
      { size: '256GB', price: '$ 3.799.990' },
      { size: '512GB', price: '$ 4.499.990' },
      { size: '1TB', price: '$ 5.139.990' },
      { size: '2TB', price: '$ 6.429.990' },
    ],
    description: 'El nuevo iPhone 17 Pro Max redefine la potencia y el diseño. Con su nueva estructura Unibody de aluminio forjado térmicamente, cámara de vapor para disipación del chip A19 Pro y un sistema de cámaras en tetraprisma de 16x aumentos, representa el hito más grande de ingeniería en la historia del iPhone.',
    features: [
      {
        title: 'Diseño',
        text: 'El iPhone 17 Pro Max llega pisando fuerte con un rediseño total desde la propia base. Su nueva estructura Unibody de aluminio forjado térmicamente eleva la resistencia, el rendimiento y la autonomía a una nueva dimensión. Todo un hito de la ingeniería para crear los modelos de iPhone más potentes de la historia.',
      },
      {
        title: 'Cámara',
        text: 'El sistema de cámaras del iPhone 17 Pro Max está pensado para que puedas llevar tu creatividad muy lejos. Incluye el teleobjetivo de mayor alcance en un iPhone, con un equivalente de hasta 200 mm de distancia focal, así como nuestro diseño en tetraprisma de última generación y un sensor un 56 % más grande. Vas a tener mucho terreno por explorar con un rango de zoom óptico de 16 aumentos. Además, las fotos con poca luz son toda una revelación y los vídeos, simplemente de película.',
      },
      {
        title: 'Rendimiento',
        text: 'Gracias a su avanzada tecnología de refrigeración, el iPhone 17 Pro Max es capaz de manejar archivos y gráficos monumentales y seguir tan fresco. Apple ha diseñado una cámara de vapor soldada por láser que une fuerzas con la estructura Unibody de aluminio para disipar el calor del chip A19 Pro de manera eficiente. ¿El resultado? Un rendimiento superior que no baja el ritmo. Este prodigio de la gestión térmica nos ha permitido crear el iPhone más potente de todos los tiempos.',
      },
      {
        title: 'Chip A19 Pro',
        text: 'El chip de Apple del iPhone 17 Pro Max ofrece la mayor potencia que haya tenido un iPhone. Atrévete con esos proyectos y juegos que siempre piden más y más.',
      },
    ],
    specGroups: [
      {
        category: 'Dimensiones y peso',
        items: [
          'Alto: 16,34 cm',
          'Ancho: 7,8 cm',
          'Grosor: 0,88 cm',
          'Peso: 231 g',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Pantalla Super Retina XDR',
          'Pantalla OLED de 6,9 pulgadas (17,42 cm) en diagonal',
          'Resolución de 2.868 por 1.320 píxeles a 460 p/p',
          'Dynamic Island y Pantalla siempre activa',
          'Tecnología ProMotion con frecuencia de actualización adaptativa de hasta 120 Hz',
          'Pantalla HDR, True Tone y Gama cromática amplia (P3)',
          'Respuesta háptica y Contraste de 2.000.000:1 (típico)',
          'Brillo máximo de 1.000 nits (típico), pico de brillo de 1.600 nits (HDR), pico de brillo de 3.000 nits (en exteriores) y brillo mínimo de 1 nit',
          'Cubierta oleófuga antihuellas y Película antirreflectante',
          'Compatible con la presentación simultánea de múltiples idiomas y grupos de caracteres',
        ],
      },
      {
        category: 'Chip',
        items: [
          'Chip A19 Pro',
          'CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia)',
          'GPU de 6 núcleos con aceleradores neuronales',
          'Neural Engine de 16 núcleos',
          'Trazado de rayos por aceleración de hardware',
        ],
      },
      {
        category: 'Cámara',
        items: [
          'Sistema de cámaras Pro Fusion de 48 Mpx',
          'Cámara principal Fusion de 48 Mpx: 24 mm, apertura de ƒ/1,78, estabilización óptica de imagen por desplazamiento del sensor de segunda generación, 100 % Focus Pixels y compatibilidad con fotos de superalta resolución (24 y 48 Mpx)',
          'Teleobjetivo x2 de calidad óptica de 12 Mpx: 48 mm, apertura de ƒ/1,78, estabilización óptica de imagen por desplazamiento del sensor de segunda generación y 100 % Focus Pixels',
          'Ultra gran angular Fusion de 48 Mpx: 13 mm, apertura de ƒ/2,2, campo de visión de 120°, Hybrid Focus Pixels y compatibilidad con fotos de superalta resolución (48 Mpx)',
          'Teleobjetivo Fusion de 48 Mpx: 100 mm (x4), apertura de ƒ/2,8, Hybrid Focus Pixels, estabilización óptica de imagen por desplazamiento del sensor en 3D con enfoque automático y diseño en tetraprisma',
          'Teleobjetivo x8 de calidad óptica de 12 Mpx: 200 mm, apertura de ƒ/2,8, Hybrid Focus Pixels, estabilización óptica de imagen por desplazamiento del sensor en 3D con enfoque automático y diseño en tetraprisma',
          'Zoom óptico de acercamiento x8, zoom óptico de alejamiento x2 y rango de zoom óptico x16',
          'Zoom digital hasta x40',
          'Objetivo por defecto personalizable (cámara principal Fusion)',
          'Flash True Tone adaptativo y HDR Inteligente 5',
        ],
      },
      {
        category: 'Conectividad',
        items: [
          '5G',
          'Wi-Fi 7',
          'Bluetooth 6',
          'Ultra Wideband (UWB) chip U2',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Hasta 37 horas de reproducción de video',
          'Carga rápida: Hasta un 50 % de carga en 20 minutos con un adaptador de 40 W o superior (se vende por separado) y un cable de carga USB‑C. Hasta un 50 % de carga en 30 minutos con un adaptador de 30 W o superior y un cargador MagSafe (ambos se venden por separado)',
          'Carga inalámbrica con cargadores MagSafe de hasta 25 W',
        ],
      },
      {
        category: 'Sensores',
        items: [
          'Face ID',
          'Escáner LiDAR',
          'Barómetro',
          'Giroscopio de alto rango dinámico',
          'Acelerómetro de fuerza g alta',
          'Sensor de proximidad',
          'Doble sensor de luz ambiental',
        ],
      },
      {
        category: 'Sistema Operativo',
        items: [
          'iOS 26',
        ],
      },
      {
        category: 'Seguridad',
        items: [
          'Emergencia SOS vía satélite',
          'Detección de accidentes',
        ],
      },
      {
        category: 'Reproducción de audio',
        items: [
          'Formatos compatibles: AAC, APAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus y Dolby Atmos (entre otros)',
          'Audio espacial',
          'Límite de volumen configurable por el usuario',
        ],
      },
      {
        category: 'Contenido de la caja',
        items: [
          'iPhone con iOS 26',
          'Cable de carga USB‑C (1 m)',
        ],
      },
    ],
    status: 'new',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    price: '$ 3.499.990',
    image: '/iphone17pro1.avif',
    images: [
      '/iphone17pro1.avif',
      '/iphone17pro2.avif',
    ],
    storageOptions: [
      { size: '256GB', price: '$ 3.499.990' },
      { size: '512GB', price: '$ 4.199.990' },
      { size: '1TB', price: '$ 4.799.990' },
    ],
    description: 'El nuevo iPhone 17 Pro redefine la potencia en un formato compacto de 6,3". Con su nueva estructura Unibody de aluminio forjado térmicamente, refrigeración por cámara de vapor soldada por láser con chip A19 Pro y un avanzado sistema de cámaras Pro Fusion con zoom óptico x16.',
    features: [
      {
        title: 'Diseño',
        text: 'El iPhone 17 Pro llega pisando fuerte con un rediseño total desde la propia base. Su nueva estructura Unibody de aluminio forjado térmicamente eleva la resistencia, el rendimiento y la autonomía a una nueva dimensión. Todo un hito de la ingeniería para crear los modelos de iPhone más potentes de la historia.',
      },
      {
        title: 'Cámara',
        text: 'El sistema de cámaras del iPhone 17 Pro está pensado para que puedas llevar tu creatividad muy lejos. Incluye el teleobjetivo de mayor alcance en un iPhone, con un equivalente de hasta 200 mm de distancia focal, así como nuestro diseño en tetraprisma de última generación y un sensor un 56 % más grande. Vas a tener mucho terreno por explorar con un rango de zoom óptico de 16 aumentos. Además, las fotos con poca luz son toda una revelación y los vídeos, simplemente de película.',
      },
      {
        title: 'Rendimiento',
        text: 'Gracias a su avanzada tecnología de refrigeración, el iPhone 17 Pro es capaz de manejar archivos y gráficos monumentales y seguir tan fresco. Apple ha diseñado una cámara de vapor soldada por láser que une fuerzas con la estructura Unibody de aluminio para disipar el calor del chip A19 Pro de manera eficiente. ¿El resultado? Un rendimiento superior que no baja el ritmo. Este prodigio de la gestión térmica nos ha permitido crear el iPhone más potente de todos los tiempos.',
      },
      {
        title: 'Chip A19 Pro',
        text: 'El chip de Apple del iPhone 17 Pro ofrece la mayor potencia que haya tenido un iPhone. Atrévete con esos proyectos y juegos que siempre piden más y más.',
      },
    ],
    specGroups: [
      {
        category: 'Dimensiones y peso',
        items: [
          'Alto: 15 cm',
          'Ancho: 7,19 cm',
          'Grosor: 0,88 cm',
          'Peso: 204 g',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Pantalla Super Retina XDR',
          'Pantalla OLED de 6,3 pulgadas (15,93 cm) en diagonal',
          'Resolución de 2.622 por 1.206 píxeles a 460 p/p',
          'Dynamic Island y Pantalla siempre activa',
          'Tecnología ProMotion con frecuencia de actualización adaptativa de hasta 120 Hz',
          'Pantalla HDR, True Tone y Gama cromática amplia (P3)',
          'Respuesta háptica y Contraste de 2.000.000:1 (típico)',
          'Brillo máximo de 1.000 nits (típico), pico de brillo de 1.600 nits (HDR), pico de brillo de 3.000 nits (en exteriores) y brillo mínimo de 1 nit',
          'Cubierta oleófuga antihuellas y Película antirreflectante',
          'Compatible con la presentación simultánea de múltiples idiomas y grupos de caracteres',
        ],
      },
      {
        category: 'Chip',
        items: [
          'Chip A19 Pro',
          'CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia)',
          'GPU de 6 núcleos con aceleradores neuronales',
          'Neural Engine de 16 núcleos',
          'Trazado de rayos por aceleración de hardware',
        ],
      },
      {
        category: 'Cámara',
        items: [
          'Sistema de cámaras Pro Fusion de 48 Mpx',
          'Cámara principal Fusion de 48 Mpx: 24 mm, apertura de ƒ/1,78, estabilización óptica de imagen por desplazamiento del sensor de segunda generación, 100 % Focus Pixels y compatibilidad con fotos de superalta resolución (24 y 48 Mpx)',
          'Teleobjetivo x2 de calidad óptica de 12 Mpx: 48 mm, apertura de ƒ/1,78, estabilización óptica de imagen por desplazamiento del sensor de segunda generación y 100 % Focus Pixels',
          'Ultra gran angular Fusion de 48 Mpx: 13 mm, apertura de ƒ/2,2, campo de visión de 120°, Hybrid Focus Pixels y compatibilidad con fotos de superalta resolución (48 Mpx)',
          'Teleobjetivo Fusion de 48 Mpx: 100 mm (x4), apertura de ƒ/2,8, Hybrid Focus Pixels, estabilización óptica de imagen por desplazamiento del sensor en 3D con enfoque automático y diseño en tetraprisma',
          'Teleobjetivo x8 de calidad óptica de 12 Mpx: 200 mm, apertura de ƒ/2,8, Hybrid Focus Pixels, estabilización óptica de imagen por desplazamiento del sensor en 3D con enfoque automático y diseño en tetraprisma',
          'Zoom óptico de acercamiento x8, zoom óptico de alejamiento x2 y rango de zoom óptico x16',
          'Zoom digital hasta x40',
          'Objetivo por defecto personalizable (cámara principal Fusion)',
          'Flash True Tone adaptativo y HDR Inteligente 5',
        ],
      },
      {
        category: 'Conectividad',
        items: [
          '5G',
          'Wi-Fi 7',
          'Bluetooth 6',
          'Ultra Wideband (UWB) chip U2',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Hasta 31 horas de reproducción de video',
          'Carga rápida: Hasta un 50 % de carga en 20 minutos con un adaptador de 40 W o superior (se vende por separado) y un cable de carga USB‑C. Hasta un 50 % de carga en 30 minutos con un adaptador de 30 W o superior y un cargador MagSafe (ambos se venden por separado)',
          'Carga inalámbrica con cargadores MagSafe de hasta 25 W',
        ],
      },
      {
        category: 'Sensores',
        items: [
          'Face ID',
          'Escáner LiDAR',
          'Barómetro',
          'Giroscopio de alto rango dinámico',
          'Acelerómetro de fuerza g alta',
          'Sensor de proximidad',
          'Doble sensor de luz ambiental',
        ],
      },
    ],
    status: 'new',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 256GB',
    price: '$ 3.399.999',
    image: '/samsung_s25_ultra1.avif',
    images: [
      '/samsung_s25_ultra1.avif',
      '/samsung_s25_ultra2.avif',
      '/samsung_s25_ultra3.avif',
      '/samsung_s25_ultra4.avif',
      '/samsung_s25_ultra5.avif',
    ],
    description: 'El nuevo Samsung Galaxy S25 Ultra eleva la experiencia móvil con su procesador Octa-Core de 4.47GHz, 12GB de memoria RAM, pantalla Dynamic AMOLED 2X Quad HD+ a 120Hz con soporte S Pen integrado y un revolucionario sistema de cámaras cuádruple de 200 MP.',
    features: [
      {
        title: 'Potencia & Rendimiento Octa-Core',
        text: 'Equipado con un procesador Octa-Core que alcanza frecuencias de hasta 4.47GHz combinado con 12GB de RAM, diseñado para multitarea pesada, edición y gaming sin concesiones.',
      },
      {
        title: 'Pantalla Dynamic AMOLED 2X Quad HD+ & S Pen',
        text: 'Pantalla de 6.9 pulgadas (3120 x 1440) a 120 Hz de tasa de refresco adaptativa. Incluye el icónico S Pen integrado para tomar notas, dibujar y controlar el equipo con precisión.',
      },
      {
        title: 'Cámaras Cuádruples de 200 MP con Video 8K',
        text: 'Sensor principal de 200 MP con estabilización óptica (OIS), ultra gran angular de 50 MP y doble teleobjetivo de 50 MP + 10 MP con zoom óptico 3x/5x (10x calidad óptica) y zoom digital 100x con grabación de video en UHD 8K@30fps.',
      },
      {
        title: 'Batería de 5000 mAh & Actualizaciones hasta 2032',
        text: 'Batería de alta densidad para hasta 31 horas de reproducción de video continua. Incluye soporte para Samsung DeX, banda ultraancha UWB y parches de seguridad garantizados por 7 años (hasta enero de 2032).',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Procesador',
        items: [
          'Peso: 218 g (Factor de forma barra táctil)',
          'Procesador: Octa-Core (Velocidad de CPU 4.47GHz y 3.5GHz)',
          'Sistema Operativo: Android',
          'Dimensiones: 162.8 x 77.6 x 8.2 mm',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Tamaño: 6.9" (174.2 mm rectángulo completo) / 6.8" (172.2 mm esquinas redondeadas)',
          'Tecnología: Dynamic AMOLED 2X',
          'Resolución: 3120 x 1440 (Quad HD+) a 16M colores',
          'Tasa Máxima de Refresco: 120 Hz adaptativa',
          'Soporte S Pen integrado: Sí',
        ],
      },
      {
        category: 'Almacenamiento y Memoria',
        items: [
          'Memoria RAM: 12 GB',
          'Almacenamiento Interno: 256 GB (222.7 GB disponibles)',
        ],
      },
      {
        category: 'Cámaras Traseras (Cuádruple)',
        items: [
          'Resolución: 200.0 MP + 50.0 MP + 50.0 MP + 10.0 MP (Aperturas F1.7, F3.4, F1.9, F2.4)',
          'Enfoque Automático y Estabilización Óptica (OIS)',
          'Zoom: Óptico 3x y 5x, Calidad Óptica 2x y 10x, Digital hasta 100x',
          'Grabación de Vídeo: UHD 8K (7680 x 4320) @30fps',
          'Cámara Lenta: 240fps @FHD, 120fps @FHD, 120fps @UHD',
        ],
      },
      {
        category: 'Cámara Frontal',
        items: [
          'Resolución: 12.0 MP (Apertura F2.2) con Enfoque Automático',
        ],
      },
      {
        category: 'Batería y Autonomía',
        items: [
          'Capacidad de Batería: 5000 mAh (típica)',
          'Tiempo de Reproducción de Video: Hasta 31 Horas',
        ],
      },
      {
        category: 'Red y Conectividad',
        items: [
          'SIM: Dual-SIM (Dual SIM / SIM 1 + eSIM)',
          'Redes: 5G Sub6, 4G LTE, 3G, 2G',
          'Conector: USB Tipo C (USB 3.2 Gen 1)',
          'Wi-Fi: 802.11a/b/g/n/ac/ax/be 2.4GHz+5GHz+6GHz (Wi-Fi 7, Wi-Fi Direct)',
          'Bluetooth v5.4, NFC, UWB (Banda Ultraancha)',
          'Localización: GPS, Glonass, Beidou, Galileo, QZSS',
        ],
      },
      {
        category: 'Audio y Video',
        items: [
          'Soporte Estéreo: Sí',
          'Reproducción de Video: UHD 8K (7680 x 4320) @60fps',
          'Formatos de Audio: MP3, AAC, OGG, WAV, FLAC, DFF, DSF, APE',
        ],
      },
      {
        category: 'Sensores y Servicios',
        items: [
          'Sensores: Acelerómetro, Barómetro, Sensor de Huella en pantalla, Giroscopio, Sensor Hall, Proximidad',
          'Soporte Samsung DeX y SmartThings',
          'Actualización de Seguridad garantizada hasta: 31 de Enero de 2032',
          'Compatibilidad: Galaxy Ring, Galaxy Buds3 Pro, Galaxy Watch Ultra, Galaxy Watch7',
        ],
      },
    ],
    status: 'new',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'samsung-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra',
    price: '$ 3.399.999',
    image: '/samsung-s26-ultra.avif',
    images: [
      '/samsung-s26-ultra.avif',
    ],
    storageOptions: [
      { size: '256GB', price: '$ 3.399.999' },
      { size: '512GB', price: '$ 3.699.999' },
      { size: '1TB', price: '$ 4.399.999' },
    ],
    description: 'El nuevo Samsung Galaxy S26 Ultra revoluciona la gama alta con el procesador Snapdragon 8 Elite Gen 5, pantalla de 6,9" con tecnología de privacidad integrada, cámara principal de 200 MP y Super Fast Charging 3.0 con 31 horas de reproducción de video.',
    features: [
      {
        title: 'Procesador Snapdragon 8 Elite Gen 5',
        text: 'Equipado con la máxima potencia de la arquitectura Snapdragon 8 Elite Gen 5 (Octa-Core hasta 4.74GHz) para rendimiento gaming y multitarea sin límites.',
      },
      {
        title: 'Pantalla de 6,9” con Privacidad Integrada',
        text: 'Pantalla AMOLED de 6,9 pulgadas (174.9 mm) a 120Hz con tecnología de privacidad integrada directamente en el panel.',
      },
      {
        title: 'Cámara Gran Angular de 200 MP',
        text: 'Sistema cuádruple de cámaras de 200.0 MP + 50.0 MP + 50.0 MP + 10.0 MP para capturas ultra detalladas en cualquier condición de luz.',
      },
      {
        title: 'Super Fast Charging 3.0 & Autonomía',
        text: 'Carga super rápida 3.0 que alcanza el 75% de batería en solo 30 minutos, con hasta 31 horas de reproducción continua de video.',
      },
    ],
    specGroups: [
      {
        category: 'Procesador',
        items: [
          'Procesador: Snapdragon 8 Elite Gen 5',
          'Velocidad de CPU: Octa-Core 4.74GHz, 3.6GHz',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Tamaño de pantalla: 174.9 mm (6.9" full rectangle)',
          'Tecnología de privacidad integrada',
          'Soporte S Pen: Sí',
        ],
      },
      {
        category: 'Almacenamiento y Memoria',
        items: [
          'Capacidades disponibles: 256GB - 512GB - 1TB',
        ],
      },
      {
        category: 'Cámaras',
        items: [
          'Cámara Trasera (Cuádruple): 200.0 MP + 50.0 MP + 50.0 MP + 10.0 MP',
          'Cámara Frontal: 12.0 MP',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Capacidad de Batería: 5,000 mAh',
          'Super Fast Charging 3.0 (75% en 30 minutos)',
          'Autonomía: Hasta 31 horas de reproducción de video',
          'Pin de Carga: USB Type-C',
        ],
      },
      {
        category: 'Conectividad y SIM',
        items: [
          'SIM: Nano-SIM (4FF), SIM Integrada (eSIM)',
          'Redes: 5G Sub6 (FDD/TDD), 4G LTE (FDD/TDD), 3G WCDMA, 2G GSM',
          'NFC: Sí',
        ],
      },
      {
        category: 'Certificaciones y Adicionales',
        items: [
          'Ramatel ID: H-33258',
          'Compatible con S Pen: Sí',
        ],
      },
    ],
    status: 'new',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    price: '$ 2.299.990',
    image: '/IPHONE161.avif',
    images: [
      '/IPHONE161.avif',
      '/IPHONE162.avif',
      '/IPHONE163.avif',
    ],
    storageOptions: [
      { size: '128GB', price: '$ 2.299.990' },
      { size: '256GB', price: '$ 2.419.990' },
      { size: '512GB', price: '$ 2.699.990' },
    ],
    description: 'El iPhone 16 está diseñado para Apple Intelligence. Con chip A18 Bionic, nuevo sistema de cámara Fusion de 48 MP con ultra gran angular macro y teleobjetivo 2x, chasis de aluminio de calidad aeroespacial y Ceramic Shield de última generación.',
    features: [
      {
        title: 'Diseñado para Apple Intelligence',
        text: 'Apple Intelligence es un sistema de inteligencia personal que te ayuda a redactar, expresarte y hacer tus tareas diarias sin esfuerzo. Cuenta con revolucionarias prestaciones de privacidad para que nadie más pueda acceder a tus datos. Ni siquiera Apple.',
      },
      {
        title: 'Cámara',
        text: 'El sistema de cámaras del iPhone 16 es un triunfo seguro tanto en las distancias cortas como en las largas. La cámara Fusion de 48 Mpx te ofrece una resolución impresionante y, con el teleobjetivo de dos aumentos de calidad óptica, puedes acercarte a la acción sin moverte del sitio. Por otro lado, el ultra gran angular te permite hacer desde las fotos macro más extremas hasta panorámicas donde cabe todo un paisaje. Es como llevar cuatro objetivos en el bolsillo.',
      },
      {
        title: 'Diseño resistente',
        text: 'El diseño del iPhone 16 cuenta con una carcasa en aluminio de calidad aeroespacial y una parte trasera de vidrio tintado en masa tan resistente como irresistible. La parte delantera está fabricada con Ceramic Shield de última generación, un material el doble de duro que cualquier vidrio en un smartphone. Y su nuevo diseño interno disipa el calor de manera más eficaz para ofrecer un rendimiento de primer nivel.',
      },
      {
        title: 'Autonomía',
        text: 'El iPhone 16 se ha diseñado para dar espacio a una batería más grande. Si a eso le sumas la eficiencia del chip A18, el resultado es un subidón en autonomía aun con todas las nuevas prestaciones. Spoiler: se vienen maratones de juegos y series.',
      },
    ],
    specGroups: [
      {
        category: 'Dimensiones y peso',
        items: [
          'Alto: 147.6 mm',
          'Ancho: 71.6 mm',
          'Grosor: 7.8 mm',
          'Peso: 170 g',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Pantalla Super Retina XDR OLED de 6.1 pulgadas',
          'Resolución de 2556 x 1179 píxeles a 460 ppi',
          'Dynamic Island y True Tone',
          'Gama cromática amplia (P3)',
          'Brillo máximo de 1000 nits; hasta 2000 nits en exteriores',
        ],
      },
      {
        category: 'Chip',
        items: [
          'A18 Bionic',
          'CPU de 6 núcleos',
          'GPU de 5 núcleos',
          'Neural Engine de 16 núcleos',
        ],
      },
      {
        category: 'Cámara',
        items: [
          'Sistema de cámara dual de 48 MP',
          'Ultra gran angular de 12 MP',
          'Zoom óptico de acercamiento x2',
          'Zoom digital hasta x10',
          'Photonic Engine, Modo Noche, Deep Fusion, HDR Inteligente 5',
        ],
      },
      {
        category: 'Conectividad',
        items: [
          '5G',
          'Wi-Fi 6',
          'Bluetooth 5.3',
          'Ultra Wideband (UWB) chip U2',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Hasta 22 horas de reproducción de video',
          'Carga rápida con adaptador de 20 W o superior',
          'Carga inalámbrica MagSafe de hasta 15 W',
          'Puerto USB-C',
        ],
      },
      {
        category: 'Resistencia al Agua y Polvo',
        items: [
          'Clasificación IP68 (hasta 6 metros por 30 minutos)',
        ],
      },
      {
        category: 'Sistema Operativo',
        items: [
          'iOS 18',
        ],
      },
      {
        category: 'Seguridad',
        items: [
          'Face ID',
          'Protección de datos con encriptación de extremo a extremo',
        ],
      },
      {
        category: 'Audio',
        items: [
          'Audio espacial',
          'Dolby Atmos',
        ],
      },
      {
        category: 'Accesorios Compatibles',
        items: [
          'Compatible con cargadores MagSafe',
        ],
      },
    ],
    status: 'new',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    price: '$ 1.050.000',
    image: '/iphone15pro.avif',
    images: [
      '/iphone15pro.avif',
    ],
    description: 'El iPhone 15 Pro es el primer iPhone diseñado en titanio de calidad aeroespacial. Equipado con el revolucionario chip A17 Pro, Botón de Acción personalizable y un versátil sistema de cámaras Pro de 48 MP con múltiples distancias focales.',
    features: [
      {
        title: 'Diseño en Titanio Aeroespacial',
        text: 'Fabricado con titanio de calidad aeroespacial, la misma aleación que se usa en las naves espaciales. Marco súper resistente y ligero con los bordes más delgados jamás vistos en un iPhone.',
      },
      {
        title: 'Chip A17 Pro & Gaming',
        text: 'El chip A17 Pro inaugura una nueva era para los gráficos móviles. Disfruta de un rendimiento sin precedentes y trazado de rayos por aceleración de hardware para juegos de nivel de consola.',
      },
      {
        title: 'Sistema de Cámaras Pro de 48 MP',
        text: 'Explora hasta 7 objetivos profesionales en tu bolsillo. Sensor principal de 48 MP con superalta resolución por defecto y teleobjetivo de 3 aumentos con estabilización óptica.',
      },
      {
        title: 'Botón de Acción & USB-C Superrápido',
        text: 'El nuevo Botón de Acción te da acceso directo a tu función favorita. Además, el conector USB-C compatible con USB 3 ofrece transferencias de datos ultra rápidas de hasta 10 Gb/s.',
      },
    ],
    specGroups: [
      {
        category: 'Dimensiones y peso',
        items: [
          'Alto: 14.66 cm',
          'Ancho: 7.06 cm',
          'Grosor: 0.825 cm',
          'Peso: 187 g',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Pantalla Super Retina XDR OLED de 6.1 pulgadas (15.5 cm) en diagonal',
          'Resolución de 2.556 por 1.179 píxeles a 460 p/p',
          'Dynamic Island y Pantalla siempre activa',
          'Tecnología ProMotion con frecuencia adaptativa de hasta 120 Hz',
          'Pantalla HDR, True Tone y Gama cromática amplia (P3)',
          'Brillo máximo de 1.000 nits (típico), pico de 1.600 nits (HDR) y pico de 2.000 nits (exteriores)',
        ],
      },
      {
        category: 'Chip',
        items: [
          'Chip A17 Pro',
          'CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia)',
          'GPU de 6 núcleos con trazado de rayos por aceleración de hardware',
          'Neural Engine de 16 núcleos',
        ],
      },
      {
        category: 'Cámara',
        items: [
          'Sistema de cámaras Pro de 48 MP',
          'Principal de 48 MP: 24 mm, apertura de ƒ/1.78, OIS por desplazamiento del sensor de 2ª generación y 100 % Focus Pixels',
          'Ultra gran angular de 12 MP: 13 mm, apertura de ƒ/2.2, campo de visión de 120° y Focus Pixels',
          'Teleobjetivo x3 de 12 MP: 77 mm, apertura de ƒ/2.8 y estabilización óptica de imagen',
          'Zoom óptico de acercamiento x3, zoom óptico de alejamiento x2 y rango de zoom óptico x6',
          'Zoom digital hasta x15',
          'Flash True Tone adaptativo y HDR Inteligente 5',
        ],
      },
      {
        category: 'Conectividad y USB',
        items: [
          'Conector USB-C compatible con USB 3 (transferencia de hasta 10 Gb/s)',
          '5G (sub-6 GHz y mmWave)',
          'Wi-Fi 6E (802.11ax)',
          'Bluetooth 5.3',
          'Chip de Ultra Ancho de Banda (UWB) de segunda generación',
          'NFC con modo de lectura',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Hasta 23 horas de reproducción de video',
          'Carga rápida: Hasta un 50 % de carga en 30 minutos con un adaptador de 20 W o superior',
          'Carga inalámbrica MagSafe de hasta 15 W y Qi de hasta 7.5 W',
        ],
      },
      {
        category: 'Sensores y Botón de Acción',
        items: [
          'Botón de Acción personalizable (Silencioso, Cámara, Linterna, Nota de Voz, Traducir, Lupa, Atajos)',
          'Face ID',
          'Escáner LiDAR',
          'Barómetro y Giroscopio de alto rango dinámico',
          'Acelerómetro de fuerza g alta y Sensor de proximidad',
        ],
      },
      {
        category: 'Sistema Operativo y Seguridad',
        items: [
          'iOS 17 (actualizable a iOS 18)',
          'Emergencia SOS vía satélite',
          'Detección de accidentes',
        ],
      },
    ],
    status: 'used',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'iphone-12-purpura',
    name: 'iPhone 12 Púrpura',
    price: '$ 430.000',
    image: '/iphone12.avif',
    images: [
      '/iphone12.avif',
    ],
    description: 'El iPhone 12 en su icónico acabado Púrpura combina una pantalla Super Retina XDR de 6,1 pulgadas, chip A14 Bionic con Neural Engine, tecnología 5G ultra rápida, resistencia frontal Ceramic Shield y sistema avanzado de doble cámara de 12 MP con Modo Noche en todas sus lentes.',
    features: [
      {
        title: 'Acabado Púrpura & Ceramic Shield',
        text: 'Chasis de aluminio de calidad aeroespacial en acabado Púrpura con frente de Ceramic Shield, cuatro veces más resistente a las caídas que cualquier otro vidrio de smartphone.',
      },
      {
        title: 'Pantalla Super Retina XDR OLED',
        text: 'Pantalla OLED de 6,1 pulgadas con contraste de 2.000.000:1, tecnología True Tone y brillo pico de 1.200 nits en HDR para negros intensos y blancos brillantes.',
      },
      {
        title: 'Chip A14 Bionic & Conectividad 5G',
        text: 'El primer chip de 5 nanómetros en la industria para velocidades de procesamiento descomunales, descargas ultra rápidas con 5G y máxima eficiencia de batería.',
      },
      {
        title: 'Sistema Dual de Cámara de 12 MP',
        text: 'Cámaras gran angular y ultra gran angular con Modo Noche en todas las lentes, Deep Fusion, HDR Inteligente 3 y grabación de video en 4K Dolby Vision a 30 fps.',
      },
    ],
    specGroups: [
      {
        category: 'Dimensiones y peso',
        items: [
          'Alto: 14.67 cm',
          'Ancho: 7.15 cm',
          'Grosor: 0.74 cm',
          'Peso: 162 g',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Pantalla Super Retina XDR OLED de 6.1 pulgadas (15.5 cm) en diagonal',
          'Resolución de 2.532 por 1.170 píxeles a 460 p/p',
          'Pantalla HDR, True Tone y Gama cromática amplia (P3)',
          'Brillo máximo de 625 nits (típico) y pico de 1.200 nits (HDR)',
          'Cubierta oleófuga antihuellas',
        ],
      },
      {
        category: 'Chip',
        items: [
          'Chip A14 Bionic',
          'CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia)',
          'GPU de 4 núcleos',
          'Neural Engine de 16 núcleos',
        ],
      },
      {
        category: 'Cámara',
        items: [
          'Sistema de cámara dual de 12 MP (gran angular ƒ/1.6 y ultra gran angular ƒ/2.4)',
          'Modo Noche y Deep Fusion en todas las lentes',
          'Estabilización óptica de imagen en cámara gran angular',
          'Zoom óptico de alejamiento x2 y zoom digital hasta x5',
          'Grabación de vídeo en HDR con Dolby Vision hasta 4K a 30 fps',
        ],
      },
      {
        category: 'Conectividad y MagSafe',
        items: [
          '5G (sub-6 GHz)',
          'Wi-Fi 6 (802.11ax) con MIMO 2x2',
          'Bluetooth 5.0 y NFC con modo de lectura',
          'Compatible con accesorios y cargadores inalámbricos MagSafe de hasta 15 W',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Hasta 17 horas de reproducción de video',
          'Carga rápida: Hasta un 50 % de carga en 30 minutos con un adaptador de 20 W o superior',
          'Conector Lightning',
        ],
      },
      {
        category: 'Resistencia al Agua y Polvo',
        items: [
          'Clasificación IP68 (hasta 6 metros de profundidad durante un máximo de 30 minutos)',
        ],
      },
      {
        category: 'Sistema Operativo y Seguridad',
        items: [
          'iOS 17 (compatible con iOS 18)',
          'Reconocimiento facial Face ID mediante cámara TrueDepth',
        ],
      },
    ],
    status: 'used',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    price: '$ 650.000',
    image: '/iphone14.avif',
    images: [
      '/iphone14.avif',
    ],
    description: 'El iPhone 14 incluye una pantalla Super Retina XDR de 6,1 pulgadas, chip A15 Bionic ultra potente con GPU de 5 núcleos, avanzado sistema de dos cámaras de 12 MP con Photonic Engine para fotos sorprendentes en poca luz, y mayor autonomía de batería.',
    features: [
      {
        title: 'Pantalla Super Retina XDR OLED',
        text: 'Pantalla OLED de 6,1 pulgadas con tecnología True Tone, gama cromática amplia P3 y hasta 1.200 nits de brillo pico en HDR.',
      },
      {
        title: 'Chip A15 Bionic con GPU de 5 Núcleos',
        text: 'Potencia de sobra para ejecutar aplicaciones exigentes y juegos de alta carga gráfica con eficiencia térmica optimizada.',
      },
      {
        title: 'Photonic Engine & Cámaras de 12 MP',
        text: 'Fotos espectaculares con luz baja gracias a la cámara principal de 12 MP con sensor más grande y apertura ƒ/1.5, acompañado de ultra gran angular y Modo Acción.',
      },
      {
        title: 'Seguridad de Vanguardia & Batería',
        text: 'Detección de Accidentes, Emergencia SOS vía satélite y batería para todo el día con hasta 20 horas de reproducción de video.',
      },
    ],
    specGroups: [
      {
        category: 'Dimensiones y peso',
        items: [
          'Alto: 14.67 cm',
          'Ancho: 7.15 cm',
          'Grosor: 0.78 cm',
          'Peso: 172 g',
        ],
      },
      {
        category: 'Pantalla',
        items: [
          'Pantalla Super Retina XDR OLED de 6,1 pulgadas (15,4 cm) en diagonal',
          'Resolución de 2.532 por 1.170 píxeles a 460 p/p',
          'Pantalla HDR, True Tone y Gama cromática amplia (P3)',
          'Brillo máximo de 800 nits (típico) y pico de 1.200 nits (HDR)',
        ],
      },
      {
        category: 'Chip',
        items: [
          'Chip A15 Bionic',
          'CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia)',
          'GPU de 5 núcleos',
          'Neural Engine de 16 núcleos',
        ],
      },
      {
        category: 'Cámara',
        items: [
          'Sistema de cámara dual de 12 MP (principal de 12 MP 26 mm ƒ/1.5 y ultra gran angular de 12 MP 13 mm ƒ/2.4)',
          'Photonic Engine, Deep Fusion y Modo Noche en todas las cámaras',
          'Modo Acción para estabilización de video y Modo Cine en 4K HDR a 30 fps',
          'Zoom óptico de alejamiento x2 y zoom digital hasta x5',
        ],
      },
      {
        category: 'Conectividad y MagSafe',
        items: [
          '5G (sub-6 GHz)',
          'Wi-Fi 6 (802.11ax) con MIMO 2x2',
          'Bluetooth 5.3 y NFC con modo de lectura',
          'Compatible con accesorios y cargadores MagSafe de hasta 15 W',
        ],
      },
      {
        category: 'Batería y Carga',
        items: [
          'Hasta 20 horas de reproducción de video',
          'Carga rápida: Hasta un 50 % de carga en 30 minutos con adaptador de 20 W o superior',
          'Conector Lightning',
        ],
      },
      {
        category: 'Resistencia y Seguridad',
        items: [
          'Clasificación IP68 (hasta 6 metros durante 30 minutos)',
          'Frente de Ceramic Shield',
          'Detección de Accidentes y Emergencia SOS vía satélite',
        ],
      },
      {
        category: 'Sistema Operativo',
        items: [
          'iOS 16 (compatible con iOS 18)',
          'Reconocimiento facial Face ID mediante cámara TrueDepth',
        ],
      },
    ],
    status: 'used',
    category: 'celulares',
    featured: true,
  },
  {
    id: 'stanley-mate-system-violeta',
    name: 'Termo Stanley Mate System 1.2 L Wisteria Shine (Púrpura)',
    price: '$ 182.000',
    image: '/Termo-Stanley-violeta1.avif',
    images: [
      '/Termo-Stanley-violeta1.avif',
      '/Termo-Stanley-violeta2.avif',
    ],
    description: 'El Termo Stanley Mate System Classic 1.2 L en acabado Wisteria Shine (Púrpura) es el compañero ideal para el ritual del mate. Su tapón de alta precisión permite cebar con un flujo continuo y exacto, y su tapa aislada de acero inoxidable funciona como mate. Mantiene el agua caliente o fría hasta por 30 horas.',
    features: [
      {
        title: 'Tapón Cebador de Alta Precisión',
        text: 'Diseñado especialmente para el ritual del mate, permitiendo un flujo continuo y exacto para controlar mejor la salida de agua en cada cebada.',
      },
      {
        title: 'Tapa de Acero que Funciona como Mate',
        text: 'Su tapa aislada multifunción de acero inoxidable funciona también como mate práctico para llevar a viajes, facultad o trabajo.',
      },
      {
        title: 'Aislamiento Térmico de 30 Horas',
        text: 'Doble pared con aislamiento al vacío que mantiene bebidas calientes o frías hasta por 30 horas y con hielo hasta 4 días.',
      },
      {
        title: 'Estructura 100% A Prueba de Fugas',
        text: 'Fabricado en acero inoxidable 18/8 libre de BPA, apilable, apto para lavavajillas y con garantía oficial Stanley de por vida.',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Diseño',
        items: [
          'Modelo: Termo Stanley Mate System Classic 1.2 L',
          'Color / Acabado: Wisteria Shine (Púrpura)',
          'Tipo de Boquilla: Pico cebador de alta precisión',
          'Tapa / Mate: Tapa de acero inoxidable que funciona como mate',
        ],
      },
      {
        category: 'Especificaciones Técnicas',
        items: [
          'Capacidad: 1.2 Litros',
          'Material: Acero inoxidable reciclado 18/8 libre de BPA',
          'Aislamiento: Doble pared con aislamiento al vacío',
          'Dimensiones: 32,8 cm x 10,8 cm',
          'Peso: 950 g',
        ],
      },
      {
        category: 'Rendimiento Térmico',
        items: [
          'Mantiene Caliente: Hasta 30 horas',
          'Mantiene Frío: Hasta 30 horas',
          'Con Hielo: Hasta 4 días (96 horas)',
        ],
      },
      {
        category: 'Garantía y Compatibilidad',
        items: [
          'A prueba de fugas: Sí',
          'Apto lavavajillas: Sí',
          'Apilable: Sí',
          'Garantía: Garantía de por vida Stanley',
        ],
      },
    ],
    status: 'new',
    availability: 'stock',
    category: 'termos',
    featured: true,
    faqs: STANLEY_MATE_SYSTEM_FAQS,
  },
  {
    id: 'stanley-mate-system-azul',
    name: 'Termo Stanley Mate System 1.2 L Marina Shine (Verde Azulado)',
    price: '$ 182.000',
    image: '/Stanley-Mate-System-azulmetalizado.avif',
    images: [
      '/Stanley-Mate-System-azulmetalizado.avif',
      '/Stanley-Mate-System-azulmetalizado-2.avif',
    ],
    description: 'El Termo Stanley Mate System Classic 1.2 L en acabado Marina Shine (Verde Azulado) es el compañero ideal para el ritual del mate. Su tapón de alta precisión permite cebar con un flujo continuo y exacto, y su tapa aislada de acero inoxidable funciona como mate. Mantiene el agua caliente o fría hasta por 30 horas.',
    features: [
      {
        title: 'Tapón Cebador de Alta Precisión',
        text: 'Diseñado especialmente para el ritual del mate, permitiendo un flujo continuo y exacto para controlar mejor la salida de agua en cada cebada.',
      },
      {
        title: 'Tapa de Acero que Funciona como Mate',
        text: 'Su tapa aislada multifunción de acero inoxidable funciona también como mate práctico para llevar a viajes, facultad o trabajo.',
      },
      {
        title: 'Aislamiento Térmico de 30 Horas',
        text: 'Doble pared con aislamiento al vacío que mantiene bebidas calientes o frías hasta por 30 horas y con hielo hasta 4 días.',
      },
      {
        title: 'Estructura 100% A Prueba de Fugas',
        text: 'Fabricado en acero inoxidable 18/8 libre de BPA, apilable, apto para lavavajillas y con garantía oficial Stanley de por vida.',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Diseño',
        items: [
          'Modelo: Termo Stanley Mate System Classic 1.2 L',
          'Color / Acabado: Marina Shine (Verde Azulado)',
          'Tipo de Boquilla: Pico cebador de alta precisión',
          'Tapa / Mate: Tapa de acero inoxidable que funciona como mate',
        ],
      },
      {
        category: 'Especificaciones Técnicas',
        items: [
          'Capacidad: 1.2 Litros',
          'Material: Acero inoxidable reciclado 18/8 libre de BPA',
          'Aislamiento: Doble pared con aislamiento al vacío',
          'Dimensiones: 32,8 cm x 10,8 cm',
          'Peso: 950 g',
        ],
      },
      {
        category: 'Rendimiento Térmico',
        items: [
          'Mantiene Caliente: Hasta 30 horas',
          'Mantiene Frío: Hasta 30 horas',
          'Con Hielo: Hasta 4 días (96 horas)',
        ],
      },
      {
        category: 'Garantía y Compatibilidad',
        items: [
          'A prueba de fugas: Sí',
          'Apto lavavajillas: Sí',
          'Apilable: Sí',
          'Garantía: Garantía de por vida Stanley',
        ],
      },
    ],
    status: 'new',
    availability: 'stock',
    category: 'termos',
    featured: true,
    faqs: STANLEY_MATE_SYSTEM_FAQS,
  },
  {
    id: 'stanley-classic-hot-coral',
    name: 'Termo Stanley Clásico 950ml Con Manija - Hot Coral',
    price: '$ 137.999',
    image: '/STANLEY-coral-1.avif',
    images: [
      '/STANLEY-coral-1.avif',
      '/STANLEY-coral-2.avif',
      '/STANLEY-coral-3.avif',
      '/STANLEY-coral-4.avif',
    ],
    description: 'El Termo Mate Stanley Classic 950 ml con Asa y tapón cebador es un producto icónico diseñado para mantener tus bebidas calientes o frías durante 24 horas y heladas hasta 5 días. Construcción en acero inoxidable 18/8 con aislamiento al vacío legendario.',
    features: [
      {
        title: 'Aislamiento Térmico Legendario',
        text: 'Aislamiento al vacío de doble pared que mantiene bebidas calientes durante 24 horas, frías durante 24 horas y heladas hasta por 5 días.',
      },
      {
        title: 'Tapón Cebador Picosuave',
        text: 'Tapón giratorio de vertido suave y preciso ideal para cebar mate sin derrames. Incluye tapa aislada multifunción que sirve como taza.',
      },
      {
        title: 'Diseño Ergonómico con Asa',
        text: 'Formato delgado fácil de sostener con una mano, equipado con manija lateral resistente para transporte cómodo en cualquier viaje.',
      },
      {
        title: 'Construcción Inoxidable 18/8 - Hot Coral',
        text: 'Acero inoxidable de calidad alimentaria libre de BPA, ultra resistente a golpes en un vibrante acabado Hot Coral.',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Diseño',
        items: [
          'Serie: Classic',
          'Capacidad: 950 ml',
          'Color: Hot Coral',
          'Material: Acero inoxidable 18/8 libre de BPA',
        ],
      },
      {
        category: 'Rendimiento Térmico',
        items: [
          'Mantiene Caliente: 24 horas',
          'Mantiene Frío: 24 horas',
          'Mantiene Helado: 5 días',
        ],
      },
      {
        category: 'Tapón y Accesorios',
        items: [
          'Tapón cebador con vertido suave de precisión',
          'Tapa aislada multifunción (funciona como taza)',
          'Asa lateral de agarre seguro integrada',
        ],
      },
      {
        category: 'Disponibilidad',
        items: [
          'AGOTADO EN STOCK INMEDIATO — Podés hacer tu pedido a través de WhatsApp.',
        ],
      },
    ],
    status: 'out',
    availability: 'order',
    category: 'termos',
    featured: true,
  },
  {
    id: 'taza-mezcladora-usb',
    name: 'Taza Mezcladora Automática con USB',
    price: '$ 25.320',
    image: '/Taza-mezcladora-USB-1.avif',
    images: [
      '/Taza-mezcladora-USB-1.avif',
      '/Taza-mezcladora-USB-2.avif',
      '/Taza-mezcladora-USB-3.avif',
      '/Taza-mezcladora-USB-4.avif',
    ],
    description: 'Taza inteligente con mezclador magnético automático de 380 ml recargable vía USB. Construida con interior de acero inoxidable de grado alimenticio y carcasa exterior de resina ABS térmica. Ideal para preparar café, leche con chocolate, suplementos en polvo, té, matcha o batidos sin necesidad de cucharas.',
    features: [
      {
        title: 'Mezclador Magnético Automático',
        text: 'Cápsula magnética giratoria de alta velocidad que disuelve instantáneamente café, proteínas, batidos o chocolate sin dejar grumos.',
      },
      {
        title: 'Recarga USB Incluida',
        text: 'Batería recargable integrada con cable USB incluido. Disfrutá de mezcla rápida en cualquier lugar sin gastar en pilas descartables.',
      },
      {
        title: 'Acero Inoxidable & Carcasa ABS',
        text: 'Interior en acero inoxidable seguro y duradero + carcasa protectora exterior en ABS aislante táctil (disponible en Blanco o Marrón).',
      },
      {
        title: 'Capacidad de 380 ml & Tamaño Compacto',
        text: 'Dimensiones portátiles de 13,5 cm de alto x 9,5 cm de ancho. Capacidad de 380 ml perfecta para hogar, oficina o viajes.',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Diseño',
        items: [
          'Producto: Taza Mezcladora Automática Recargable',
          'Colores Disponibles: Blanco / Marrón',
          'Sistema de Mezclado: Mezclador magnético de alta potencia',
          'Alimentación: Batería recargable vía USB (cable incluido)',
        ],
      },
      {
        category: 'Especificaciones Técnicas',
        items: [
          'Capacidad: 380 ml',
          'Material Interior: Acero inoxidable de grado alimenticio',
          'Material Exterior: Carcasa térmica en resina ABS de alta calidad',
          'Dimensiones: 13,5 cm alto x 9,5 cm ancho',
        ],
      },
      {
        category: 'Uso y Mantenimiento',
        items: [
          'Operación: Botón táctil de encendido/apagado rápido',
          'Aplicaciones: Café, proteína, batidos, chocolate caliente, matcha, té',
          'Limpieza: Fácil de lavar con agua (cápsula magnética removible)',
        ],
      },
    ],
    status: 'new',
    availability: 'stock',
    category: 'termos',
    featured: true,
  },
  {
    id: 'stanley-classic-1.4l',
    name: 'Termo Stanley Clásico Asa Plegable 1.4 L',
    price: '$ 156.000',
    image: '/Stanley-Classic-1.4L-1.avif',
    images: [
      '/Stanley-Classic-1.4L-1.avif',
      '/Stanley-Classic-1.4L-2.avif',
    ],
    description: 'El icónico Termo Stanley Clásico de 1.4 L con asa plegable combina un diseño elegante, construcción ultrarresistente y máxima capacidad térmica. Totalmente a prueba de fugas y capaz de mantener las bebidas calientes durante 40 horas, frías durante 35 horas o con hielo hasta 6 días.',
    features: [
      {
        title: 'Aislamiento Térmico Superior de 40 Horas',
        text: 'Doble pared de acero con vacío que conserva agua caliente 40 horas, fría 35 horas y con hielo hasta 6 días completas.',
      },
      {
        title: 'Asa Lateral Plegable Integrada',
        text: 'Formato ergonómico con asa resistente que se pliega para ahorrar espacio y facilitar el transporte en cualquier salida.',
      },
      {
        title: 'Tapón Cebador Picosuave',
        text: 'Tapón de alta precisión para un vertido fluido sin derrames + tapa de acero aislada multifunción que sirve como taza.',
      },
      {
        title: 'Construcción Inoxidable 18/8 & Libre de BPA',
        text: 'Pared externa de acero grueso ultrarresistente a golpes, apto para lavavajillas y con garantía oficial de por vida.',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Diseño',
        items: [
          'Modelo: Termo Stanley Clásico con Asa Plegable 1.4 L',
          'Tipo de Boquilla: Tapón cebador de precisión',
          'Tapa / Taza: Tapa aislada multifunción (funciona como taza)',
          'Asa: Asa lateral plegable reforzada',
        ],
      },
      {
        category: 'Especificaciones Técnicas',
        items: [
          'Capacidad: 1.4 Litros',
          'Material: Acero inoxidable reciclado 18/8 libre de BPA',
          'Aislamiento: Doble pared con aislamiento al vacío legendario',
          'Dimensiones: 35,8 cm x 9,9 cm',
          'Peso: 910 g',
        ],
      },
      {
        category: 'Rendimiento Térmico',
        items: [
          'Mantiene Caliente: Hasta 40 horas',
          'Mantiene Frío: Hasta 35 horas',
          'Con Hielo: Hasta 6 días (144 horas)',
        ],
      },
      {
        category: 'Garantía y Compatibilidad',
        items: [
          'A prueba de fugas: Sí',
          'Apto lavavajillas: Sí',
          'Garantía: Garantía de por vida Stanley',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Para qué tipo de uso conviene el Termo Stanley Clásico con Asa Plegable 1.4 L?',
        answer: 'El Termo Stanley Clásico con Asa Plegable 1.4 L es ideal para quienes necesitan mayor capacidad y conservación térmica durante muchas horas. Es una excelente opción para mateadas largas, viajes, camping, jornadas de trabajo, actividades al aire libre o para compartir bebidas calientes o frías con más de una persona.',
      },
      {
        question: '¿Cuánto tiempo mantiene caliente el agua el Termo Stanley Clásico 1.4 L?',
        answer: 'El Termo Stanley Clásico con Asa Plegable 1.4 L mantiene las bebidas calientes hasta 40 horas gracias a su doble pared con aislación al vacío. También conserva bebidas frías hasta 35 horas y con hielo hasta 6 días, por lo que ofrece un alto rendimiento térmico para distintos usos.',
      },
      {
        question: '¿Qué ventaja tiene el asa plegable del Termo Stanley Clásico 1.4 L?',
        answer: 'El asa plegable facilita el agarre y el transporte del termo, especialmente por tratarse de un modelo de mayor capacidad. Permite llevarlo con más comodidad en salidas, viajes o actividades al aire libre, y al plegarse ayuda a que ocupe menos espacio cuando no se está usando.',
      },
      {
        question: '¿El Termo Stanley Clásico con Asa Plegable 1.4 L pierde líquido?',
        answer: 'No. El Termo Stanley Clásico con Asa Plegable 1.4 L está diseñado a prueba de fugas, por lo que se puede transportar con mayor seguridad en bolso, mochila, auto o equipo de camping. Además, está fabricado en acero inoxidable reciclado 18/8, es libre de BPA y apto para lavavajillas.',
      },
    ],
    status: 'new',
    availability: 'stock',
    category: 'termos',
    featured: true,
  },
]

// ─── Icons ───────────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function LionLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#111111" />
      <ellipse cx="20" cy="21" rx="12" ry="10" fill="#B5502F" />
      <ellipse cx="20" cy="21" rx="8" ry="7" fill="#F5C842" />
      <polygon points="11,14 14,19 8,19" fill="#B5502F" />
      <polygon points="29,14 32,19 26,19" fill="#B5502F" />
      <circle cx="17" cy="20" r="1.5" fill="#111111" />
      <circle cx="23" cy="20" r="1.5" fill="#111111" />
      <ellipse cx="20" cy="24" rx="2" ry="1.2" fill="#B5502F" />
      <path d="M18 25.5 Q20 27 22 25.5" stroke="#111111" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <circle cx="17.6" cy="19.4" r="0.4" fill="white" />
      <circle cx="23.6" cy="19.4" r="0.4" fill="white" />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function TruckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function ShieldCheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function CreditCardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  )
}

function CpuIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  )
}

function HardDriveIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="12" x2="2" y2="12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" y1="16" x2="6.01" y2="16" />
      <line x1="10" y1="16" x2="10.01" y2="16" />
    </svg>
  )
}

function SparklesIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-6.5l-2.1 2.1m-6.8 6.8l-2.1 2.1m0-11l2.1 2.1m6.8 6.8l2.1 2.1" />
    </svg>
  )
}

function ChevronDownIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function MapPinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// ─── Shared Components ───────────────────────────────────────────────────────

function getEffectiveAvailability(product: Product): 'stock' | 'order' | null {
  if (product.availability) return product.availability
  if (product.category !== 'celulares') return null
  if (product.status === 'out') return 'order'
  if (product.status === 'new') return 'order'
  if (product.status === 'used') return 'stock'
  return null
}

function sortProductsByAvailability(productsList: Product[]): Product[] {
  return [...productsList].sort((a, b) => {
    const availA = getEffectiveAvailability(a)
    const availB = getEffectiveAvailability(b)

    const rankA = availA === 'stock' ? 1 : availA === 'order' ? 2 : 3
    const rankB = availB === 'stock' ? 1 : availB === 'order' ? 2 : 3

    return rankA - rankB
  })
}

function ProductBadges({ product, inline = false }: { product: Product; inline?: boolean }) {
  if (!product.status) return null

  const isCelulares = product.category === 'celulares'
  const availability = getEffectiveAvailability(product)

  const containerClasses = inline
    ? 'flex flex-wrap gap-1.5 items-center'
    : 'absolute top-2 left-2 flex flex-col items-start gap-1 z-10'

  if (product.status === 'out') {
    return (
      <div className={containerClasses}>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide shadow-sm bg-[#111111] text-white"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A pedido
        </span>
      </div>
    )
  }

  const statusStyles: Record<string, string> = {
    new: 'bg-[#B5502F] text-white',
    used: 'bg-[#8A8580] text-white',
  }

  const statusLabels: Record<string, string> = {
    new: isCelulares ? 'Sellado' : 'Nuevo',
    used: 'Usado',
  }

  const availStyles: Record<string, string> = {
    stock: 'bg-[#2E7D32] text-white',
    order: 'bg-[#111111] text-white',
  }
  const availLabels: Record<string, string> = {
    stock: 'En stock',
    order: 'A pedido',
  }

  const showStatusBadge = isCelulares || !product.availability || product.status === 'used'
  const showAvailBadge = isCelulares ? !!availability : product.availability === 'stock'

  return (
    <div className={containerClasses}>
      {showStatusBadge && (
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide shadow-sm ${statusStyles[product.status]}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {statusLabels[product.status]}
        </span>
      )}
      {showAvailBadge && availability && (
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide shadow-sm ${availStyles[availability]}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {availLabels[availability]}
        </span>
      )}
    </div>
  )
}

function WhatsAppButton({
  label = 'Consultar por WhatsApp',
  product,
  customText,
  full = false,
  size = 'md',
}: {
  label?: string
  product?: Product
  customText?: string
  full?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  const msg = customText
    ? `Hola FAMVAR! ${customText}`
    : product
      ? `Hola FAMVAR! Me interesa: *${product.name}* (${product.price}). ¿Tienen disponibilidad?`
      : 'Hola FAMVAR! Quiero hacer una consulta.'
  const href = `https://wa.me/5493624076857?text=${encodeURIComponent(msg)}`
  const sizeClasses = {
    sm: 'py-2 px-3 text-xs gap-1.5',
    md: 'py-2.5 px-3 text-sm gap-2',
    lg: 'py-4 px-6 text-base gap-2.5',
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center bg-[#B5502F] text-white font-semibold rounded-xl transition-opacity hover:opacity-90 active:opacity-75 ${full ? 'w-full' : ''} ${sizeClasses[size]}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <WhatsAppIcon size={size === 'lg' ? 22 : size === 'sm' ? 15 : 18} />
      {label}
    </a>
  )
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (p: Product) => void }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8E4DB] flex flex-col cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
      onClick={() => onSelect(product)}
    >
      <div className="relative w-full aspect-square bg-[#F0EDE6] overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full ${product.id === 'taza-mezcladora-usb' ? 'object-contain p-3' : 'object-cover'}`}
          loading="lazy"
        />
        <ProductBadges product={product} />
      </div>
      <div className="p-3 flex flex-col gap-2 flex-1">
        <p className="text-[13px] font-semibold leading-snug text-[#111111] line-clamp-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {product.name}
        </p>
        <div className="mt-auto">
          {product.storageOptions ? (
            <p className="text-[11px] text-[#8A8580] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Desde <span className="text-[#B5502F] font-bold text-base">{product.price}</span>
            </p>
          ) : (
            <p className="text-[#B5502F] font-bold text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              {product.price}
            </p>
          )}
          <div onClick={(e) => e.stopPropagation()}>
            <WhatsAppButton product={product} label="Consultar" full size="sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Home ────────────────────────────────────────────────────────────

function HomeScreen({
  onSelectCategory,
  onSelectProduct,
}: {
  onSelectCategory: (cat: Category) => void
  onSelectProduct: (p: Product) => void
}) {
  const featuredProducts = sortProductsByAvailability(PRODUCTS.filter((p) => p.featured))

  return (
    <div className="min-h-screen bg-[#F5F1E8]">

      {/* Top Banner Bar */}
      <div className="bg-[#111111] text-[#F5F1E8] text-xs py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <TruckIcon size={14} />
        <span>Envíos a todo el país desde La Escondida, Chaco</span>
        <span className="hidden sm:inline text-white/30">|</span>
        <span className="hidden sm:inline text-[#F5F1E8]/80">Atención inmediata por WhatsApp</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F5F1E8]/95 backdrop-blur border-b border-[#E0DBD0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { window.location.hash = '#/' }}>
            <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-[#111111]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              FAMVAR
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Nav links visible on desktop */}
            <nav className="hidden md:flex items-center gap-6 mr-4">
              {CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => onSelectCategory(cat)}
                  className="text-sm text-[#8A8580] hover:text-[#111111] font-medium transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {cat.label}
                </button>
              ))}
            </nav>
            <a href="https://wa.me/5493624076857" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#B5502F] text-white text-sm font-semibold px-3.5 py-2 rounded-xl hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              <WhatsAppIcon size={16} />
              <span className="hidden sm:inline">Escribinos</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pt-16 lg:pb-12">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#B5502F]">
              <TruckIcon size={15} />
              <span className="text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                Envíos a todo el país
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] text-[#111111] mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Celulares,<br />
              accesorios y<br />
              <span className="text-[#B5502F]">mucha variedad.</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#8A8580] leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              iPhone, Samsung, termos Stanley, fundas y más — nuevos, usados y a pedido. Todo con envío desde La Escondida, Chaco.
            </p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton label="Consultar ahora" size="lg" />
              <button onClick={() => onSelectCategory(CATEGORIES[0])}
                className="flex items-center gap-2 border border-[#111111] text-[#111111] font-semibold px-6 py-4 rounded-xl text-base hover:bg-[#111111] hover:text-[#F5F1E8] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                Ver celulares
              </button>
            </div>
          </div>

          {/* Hero image using user custom banner */}
          <div className="hidden lg:block relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#111111]">
            <img
              src="/bannerhome.avif"
              alt="FAMVAR Banner Home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex gap-2 flex-wrap">
              <span className="bg-[#B5502F] text-white text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif' }}>iPhone</span>
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur"
                style={{ fontFamily: 'Inter, sans-serif' }}>Samsung</span>
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur"
                style={{ fontFamily: 'Inter, sans-serif' }}>A pedido</span>
            </div>
          </div>
        </section>

        {/* Mobile Banner Image */}
        <div className="lg:hidden mb-8 rounded-2xl overflow-hidden aspect-[16/9] bg-[#111111]">
          <img
            src="/bannerhome.avif"
            alt="FAMVAR Banner Home"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Trust Badges Bar */}
        <section className="mb-10 p-4 sm:p-5 bg-white rounded-2xl border border-[#E0DBD0] shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B5502F]/10 text-[#B5502F] flex items-center justify-center shrink-0">
              <ShieldCheckIcon size={20} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#111111]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Equipos Garantizados
              </h4>
              <p className="text-[11px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Garantía oficial y propia
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-[#E0DBD0] pt-3 sm:pt-0 sm:pl-4">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
              <TruckIcon size={20} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#111111]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Despachos Rápidos
              </h4>
              <p className="text-[11px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Correo Argentino / Andreani
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-[#E0DBD0] pt-3 sm:pt-0 sm:pl-4">
            <div className="w-10 h-10 rounded-xl bg-[#B5502F] text-white flex items-center justify-center shrink-0">
              <CreditCardIcon size={20} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-[#111111]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Medios de Pago
              </h4>
              <p className="text-[11px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Efectivo / Transferencia
              </p>
            </div>
          </div>
        </section>

        {/* Category grid */}
        <section className="pb-10 sm:pb-12">
          <h2 className="text-[13px] font-semibold tracking-widest uppercase text-[#8A8580] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Categorías
          </h2>

          {/* Desktop: 5-col grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => onSelectCategory(cat)}
                className="rounded-2xl overflow-hidden relative bg-[#111111] text-left group"
                style={{ aspectRatio: '3/4' }}>
                <img src={cat.image} alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="block text-[15px] font-bold text-[#F5F1E8] leading-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {cat.label}
                  </span>
                  <span className="text-[#F5F1E8]/60 text-[10px] mt-0.5 block leading-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {cat.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <button onClick={() => onSelectCategory(CATEGORIES[0])}
              className="w-full mb-3 rounded-2xl overflow-hidden relative h-44 block text-left group">
              <img src={CATEGORIES[0].image} alt={CATEGORIES[0].label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="block text-[22px] font-bold text-white leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {CATEGORIES[0].label}
                </span>
                <span className="text-[#F5F1E8]/70 text-xs mt-0.5 block"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {CATEGORIES[0].count}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-[#B5502F] text-white text-[10px] font-bold px-2 py-1 rounded-full"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                A pedido
              </div>
            </button>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.slice(1).map((cat) => (
                <button key={cat.id} onClick={() => onSelectCategory(cat)}
                  className="rounded-2xl overflow-hidden relative h-32 text-left bg-[#111111] group">
                  <img src={cat.image} alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-200" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="block text-[16px] font-bold text-[#F5F1E8] leading-tight"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {cat.label}
                    </span>
                    <span className="text-[#F5F1E8]/60 text-[10px] mt-0.5 block leading-tight"
                      style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cat.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="pb-10 sm:pb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-semibold tracking-widest uppercase text-[#8A8580]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Productos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelectProduct} />
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="mb-10 sm:mb-14 bg-[#111111] rounded-3xl px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#F5F1E8] mb-1"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              ¿Buscás algo específico?
            </h3>
            <p className="text-[#8A8580] text-sm sm:text-base"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Escribinos y te conseguimos lo que necesitás. Respondemos al instante.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsAppButton label="Consultar ahora" size="lg" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#E0DBD0] bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3 cursor-pointer" onClick={() => { window.location.hash = '#/' }}>
                <span className="font-bold text-[20px] text-[#111111]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAMVAR</span>
              </div>
              <p className="text-[14px] text-[#8A8580] leading-relaxed max-w-xs"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                Celulares nuevos y usados, accesorios y productos 100% importados, con envío a todo el país.
              </p>
            </div>
            {/* Info */}
            <div>
              <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#111111] mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Contacto
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#8A8580]"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex items-center gap-2 text-[#8A8580]">
                  <MapPinIcon size={16} />
                  <span>La Escondida, Chaco</span>
                </li>
                <li className="flex items-center gap-2 text-[#8A8580]">
                  <TruckIcon size={16} />
                  <span>Envíos a todo el país</span>
                </li>
                <li className="pt-0.5 pb-0.5">
                  <a
                    href="https://wa.me/5493624076857?text=Hola%20FAMVAR!%20Quiero%20hacer%20una%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#B5502F] text-white text-xs font-semibold px-3 py-1.5 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Escribinos por WhatsApp</span>
                  </a>
                </li>
                <li className="flex flex-col gap-1.5 pt-0.5">
                  <a
                    href="https://instagram.com/famvar.importados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#8A8580] hover:text-[#B5502F] transition-colors"
                  >
                    <InstagramIcon size={16} />
                    <span>@famvar.importados</span>
                  </a>
                  <a
                    href="https://instagram.com/luca.escobar.9250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#8A8580] hover:text-[#B5502F] transition-colors"
                  >
                    <InstagramIcon size={16} />
                    <span>@luca.escobar.9250</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Categories */}
            <div>
              <h4 className="text-[12px] font-semibold tracking-widest uppercase text-[#111111] mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Categorías
              </h4>
              <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button onClick={() => onSelectCategory(cat)} className="text-[13px] text-[#8A8580] hover:text-[#B5502F] transition-colors">
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-[#E0DBD0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[12px] text-[#8A8580]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2025 FAMVAR — Todos los derechos reservados. Diseñado por{' '}
              <a
                href="https://heytrama.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#B5502F] transition-colors"
              >
                heytrama
              </a>
            </p>
            <div className="flex items-center gap-2 text-[#B5502F]">
              <TruckIcon size={14} />
              <span className="text-[12px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                Envíos a todo el país
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Screen: Category ────────────────────────────────────────────────────────

function CategoryScreen({
  category,
  onBack,
  onSelectProduct,
}: {
  category: Category
  onBack: () => void
  onSelectProduct: (p: Product) => void
}) {
  const [search, setSearch] = useState('')

  const products = sortProductsByAvailability(
    PRODUCTS.filter(
      (p) =>
        p.category === category.id &&
        (search === '' || p.name.toLowerCase().includes(search.toLowerCase()))
    )
  )

  return (
    <div className="min-h-screen bg-[#F5F1E8]">

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F5F1E8]/95 backdrop-blur border-b border-[#E0DBD0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-3 mb-3">
            <button onClick={onBack}
              className="w-9 h-9 rounded-xl bg-white border border-[#E0DBD0] flex items-center justify-center text-[#111111] hover:bg-[#F5F1E8] transition-colors shrink-0">
              <ArrowLeft />
            </button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { window.location.hash = '#/' }}>
              <span className="text-[13px] text-[#8A8580] font-medium hidden sm:block"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                FAMVAR /
              </span>
            </div>
            <h1 className="text-[18px] sm:text-[20px] font-bold text-[#111111]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {category.label}
            </h1>
          </div>
          {/* Search */}
          <div className="relative max-w-lg">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8580]">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder={`Buscar en ${category.label.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#E0DBD0] rounded-xl pl-9 pr-4 py-2.5 text-[14px] text-[#111111] placeholder:text-[#8A8580] outline-none focus:border-[#B5502F] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Phones disclaimer */}
        {category.isPhones && (
          <div className="mb-6 bg-[#111111] rounded-2xl px-5 py-4 flex gap-3 items-start">
            <span className="text-[#B5502F] text-xl shrink-0">📱</span>
            <div>
              <p className="text-[13px] sm:text-[14px] text-[#F5F1E8]/90 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="font-semibold text-[#F5F1E8]">Tenemos usados en stock, listos para entregar</span> — y conseguimos sellados a pedido. Consultanos por el modelo que buscás, lo tengamos en la grilla o no.
              </p>
            </div>
          </div>
        )}

        {/* Product count */}
        <p className="text-[12px] text-[#8A8580] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {products.length} producto{products.length !== 1 ? 's' : ''}
          {search && ` para "${search}"`}
        </p>

        {/* Grid: 2 cols mobile → 3 tablet → 4 desktop */}
        {products.length === 0 ? (
          <div className="text-center py-20 text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">No encontramos productos para "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={onSelectProduct} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            label={category.isPhones ? 'Pedir modelo específico' : `Consultar en ${category.label}`}
            size="lg"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Product Detail ───────────────────────────────────────────────────

function ProductDetailScreen({
  product,
  onBack,
}: {
  product: Product
  onBack: () => void
}) {
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image]
  const [selectedImg, setSelectedImg] = useState<string>(gallery[0])
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(
    product.storageOptions && product.storageOptions.length > 0 ? product.storageOptions[0] : null
  )
  const [openAccordion, setOpenAccordion] = useState<Record<string, boolean>>({
    'Generales y Procesador': true,
    'Dimensiones y peso': true,
    'Pantalla': true,
    'Chip': true,
  })

  const activePrice = selectedStorage ? selectedStorage.price : product.price

  function toggleAccordion(catName: string) {
    setOpenAccordion((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }))
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8]">

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F5F1E8]/95 backdrop-blur border-b border-[#E0DBD0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <button onClick={onBack}
            className="w-9 h-9 rounded-xl bg-white border border-[#E0DBD0] flex items-center justify-center text-[#111111] hover:bg-[#F5F1E8] transition-colors shrink-0">
            <ArrowLeft />
          </button>
          <span className="text-[15px] font-semibold text-[#111111] truncate cursor-pointer"
            onClick={() => { window.location.hash = '#/' }}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {product.name}
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Two-column on desktop */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start mb-10">

          {/* Gallery Container */}
          <div className="flex flex-col gap-3 mb-6 lg:mb-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#E8E4DB] aspect-square shadow-sm">
              <img src={selectedImg} alt={product.name}
                className="w-full h-full object-cover transition-all duration-300" />
              {product.status && (
                <ProductBadges product={product} />
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(imgUrl)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 bg-white shrink-0 transition-all ${selectedImg === imgUrl ? 'border-[#B5502F] scale-95 shadow-sm' : 'border-[#E8E4DB] opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img src={imgUrl} alt={`${product.name} - ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:pt-2">
            {product.status && (
              <div className="mb-3">
                <ProductBadges product={product} inline />
              </div>
            )}
            <h1 className="text-[26px] sm:text-[34px] font-bold leading-tight text-[#111111] mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {product.name} {selectedStorage ? `(${selectedStorage.size})` : ''}
            </h1>
            <p className="text-[32px] sm:text-[38px] font-bold text-[#B5502F] mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              {activePrice}
            </p>

            {/* Storage Capacity Selector */}
            {product.storageOptions && product.storageOptions.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-[#E8E4DB] mb-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <HardDriveIcon size={16} />
                  <h2 className="text-[12px] font-bold tracking-widest uppercase text-[#111111]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Almacenamiento
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {product.storageOptions.map((opt) => (
                    <button
                      key={opt.size}
                      onClick={() => setSelectedStorage(opt)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all ${selectedStorage?.size === opt.size
                          ? 'bg-[#111111] text-white border-[#111111] shadow-sm scale-[1.02]'
                          : 'bg-[#F5F1E8]/50 text-[#111111] border-[#E8E4DB] hover:border-[#B5502F]'
                        }`}
                    >
                      <span className="block text-[14px] font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {opt.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Información del producto (resumen principal) */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8E4DB] mb-6 shadow-sm">
              <h2 className="text-[12px] font-bold tracking-widest uppercase text-[#B5502F] mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Resumen del Producto
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#111111] leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6 text-[#8A8580]">
              <TruckIcon size={16} />
              <span className="text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Envío a todo el país · La Escondida, Chaco
              </span>
            </div>

            <WhatsAppButton
              customText={selectedStorage ? `Me interesa: *${product.name} ${selectedStorage.size}* (${selectedStorage.price}). ¿Tienen disponibilidad?` : undefined}
              product={product}
              label="Consultar por WhatsApp"
              full
              size="lg"
            />

            <p className="text-center text-[11px] text-[#8A8580] mt-3"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Te respondemos al instante por WhatsApp
            </p>
          </div>
        </div>

        {/* Pilares destacados de Información del Producto */}
        {product.features && product.features.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DB] shadow-sm mb-8">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#E8E4DB]">
              <div className="w-9 h-9 rounded-xl bg-[#B5502F] text-white flex items-center justify-center shrink-0">
                <SparklesIcon size={18} />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111111]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Información del Producto
                </h2>
                <p className="text-[12px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Aspectos destacados de diseño, cámaras y potencia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feat, idx) => (
                <div key={idx} className="bg-[#F5F1E8]/50 p-5 rounded-2xl border border-[#E8E4DB] flex flex-col gap-2">
                  <h3 className="text-[15px] font-bold text-[#111111] flex items-center gap-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    <span className="w-2 h-2 rounded-full bg-[#B5502F]" />
                    {feat.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#8A8580] leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {feat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Especificaciones técnicas (Formato Acordeón) */}
        {product.specGroups && product.specGroups.length > 0 ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DB] shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#E8E4DB]">
              <div className="w-9 h-9 rounded-xl bg-[#111111] text-[#F5F1E8] flex items-center justify-center shrink-0">
                <CpuIcon size={18} />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111111]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Especificaciones técnicas
                </h2>
                <p className="text-[12px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ficha técnica oficial y componentes de {product.name}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {product.specGroups.map((group) => {
                const isOpen = openAccordion[group.category] ?? false
                return (
                  <div key={group.category} className="border border-[#E8E4DB] rounded-2xl overflow-hidden bg-[#F5F1E8]/30 transition-all">
                    <button
                      onClick={() => toggleAccordion(group.category)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#F5F1E8]/70 transition-colors"
                    >
                      <span className="text-[15px] font-bold text-[#111111]"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {group.category}
                      </span>
                      <span className={`transform transition-transform duration-200 text-[#B5502F] ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon size={20} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-[#E8E4DB]/60 bg-white">
                        <ul className="space-y-2.5">
                          {group.items.map((item, i) => (
                            <li key={i} className="text-[13px] sm:text-[14px] text-[#111111] leading-relaxed flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B5502F] mt-2 shrink-0" />
                              <span style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ) : product.specs && product.specs.length > 0 ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DB] shadow-sm">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#E8E4DB]">
              <div className="w-9 h-9 rounded-xl bg-[#111111] text-[#F5F1E8] flex items-center justify-center shrink-0">
                <CpuIcon size={18} />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111111]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Especificaciones técnicas
                </h2>
                <p className="text-[12px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Detalles y componentes oficiales de {product.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col py-2.5 border-b border-[#F5F1E8] last:border-b-0">
                  <span className="text-[12px] font-semibold text-[#8A8580] uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {spec.label}
                  </span>
                  <span className="text-[14px] font-bold text-[#111111]"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Preguntas frecuentes */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DB] shadow-sm mt-8">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#E8E4DB]">
              <div className="w-9 h-9 rounded-xl bg-[#B5502F] text-white flex items-center justify-center shrink-0 font-bold text-base">
                ?
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111111]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Preguntas frecuentes
                </h2>
                <p className="text-[12px] text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Respuestas a las dudas más comunes sobre {product.name}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {product.faqs.map((faq, idx) => {
                const faqKey = `faq-${idx}`
                const isOpen = openAccordion[faqKey] ?? false
                return (
                  <div key={idx} className="border border-[#E8E4DB] rounded-2xl overflow-hidden bg-[#F5F1E8]/30 transition-all">
                    <button
                      onClick={() => toggleAccordion(faqKey)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#F5F1E8]/70 transition-colors"
                    >
                      <span className="text-[14px] sm:text-[15px] font-bold text-[#111111] pr-4"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {faq.question}
                      </span>
                      <span className={`transform transition-transform duration-200 text-[#B5502F] shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon size={20} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 border-t border-[#E8E4DB]/60 bg-white">
                        <p className="text-[13px] sm:text-[14px] text-[#8A8580] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#/')

  useEffect(() => {
    function handleHashChange() {
      setCurrentHash(window.location.hash || '#/')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Enrutamiento seguro basado en URL Hash
  let view: View = 'home'
  let selectedCategory: Category | null = null
  let selectedProduct: Product | null = null

  if (currentHash.startsWith('#/categoria/')) {
    const catId = currentHash.replace('#/categoria/', '')
    const foundCat = CATEGORIES.find((c) => c.id === catId)
    if (foundCat) {
      view = 'category'
      selectedCategory = foundCat
    }
  } else if (currentHash.startsWith('#/producto/')) {
    const prodId = currentHash.replace('#/producto/', '')
    const foundProd = PRODUCTS.find((p) => p.id === prodId)
    if (foundProd) {
      view = 'product'
      selectedProduct = foundProd
    }
  }

  function goToCategory(cat: Category) {
    window.location.hash = `#/categoria/${cat.id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goToProduct(product: Product) {
    window.location.hash = `#/producto/${product.id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goBack() {
    if (view === 'product' && selectedProduct) {
      const cat = CATEGORIES.find((c) => c.id === selectedProduct?.category)
      if (cat) {
        window.location.hash = `#/categoria/${cat.id}`
      } else {
        window.location.hash = '#/'
      }
    } else {
      window.location.hash = '#/'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {view === 'home' && (
        <HomeScreen
          onSelectCategory={goToCategory}
          onSelectProduct={goToProduct}
        />
      )}
      {view === 'category' && selectedCategory && (
        <CategoryScreen category={selectedCategory} onBack={goBack} onSelectProduct={goToProduct} />
      )}
      {view === 'product' && selectedProduct && (
        <ProductDetailScreen product={selectedProduct} onBack={goBack} />
      )}
    </>
  )
}
