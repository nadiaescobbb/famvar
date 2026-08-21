import { Product, FAQItem } from '../types'

export const STANLEY_MATE_SYSTEM_FAQS: FAQItem[] = [
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

export const PRODUCTS: Product[] = [
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
    name: 'Termo Stanley Mate System 1.2L — Wisteria Shine (Púrpura)',
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
    name: 'Termo Stanley Mate System 1.2L — Marina Shine (Verde Azulado)',
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
    featured: false,
    faqs: STANLEY_MATE_SYSTEM_FAQS,
  },
  {
    id: 'stanley-classic-hot-coral',
    name: 'Termo Stanley Clásico 950 ml — Hot Coral',
    price: '$ 173.150',
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
    name: 'Taza Mezcladora Automática 380 ml — Recargable USB',
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
    name: 'Termo Stanley Clásico 1.4L — Verde',
    price: '$ 203.750',
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
  {
    id: 'stanley-quencher-protour-messi',
    name: 'Vaso Stanley Quencher Messi 1.18L — Celeste / Dorado',
    price: '$ 167.999',
    image: '/Stanley-Quencher-Messi-1.avif',
    images: [
      '/Stanley-Quencher-Messi-1.avif',
      '/Stanley-Quencher-Messi-2.avif',
      '/Stanley-Quencher-Messi-3.avif',
      '/Stanley-Quencher-Messi-4.avif',
      '/Stanley-Quencher-Messi-5.avif',
    ],
    description: 'El Vaso Quencher ProTour Flip Straw Messi x Stanley 1913 de 1.18 Lts. en edición Celeste / Dorado llegó para hacer la hidratación diaria más fácil y cómoda. Levantás el sorbete incorporado para tomar y lo cerrás al terminar: sin derrames ni complicaciones. Aislamiento al vacío de doble pared que conserva el agua helada por horas.',
    features: [
      {
        title: 'Sistema ProTour Flip Straw Hermético',
        text: 'Tapa ProTour a prueba de derrames con sorbete abatible incorporado: levantás para tomar y cerrás al instante sin fugas.',
      },
      {
        title: 'Capacidad de 1,18 Litros (40 oz)',
        text: 'Formato ideal para acompañar largas jornadas de gym, trabajo, facultad o viajes sin necesidad de recargar agua constantemente.',
      },
      {
        title: 'Aislamiento al Vacío de Doble Pared',
        text: 'Mantiene bebidas frías hasta 11 horas y heladas con hielo hasta 2 días continuos (48 horas) con máxima conservación.',
      },
      {
        title: 'Mango Ergonómico Antideslizante',
        text: 'Mango con textura suave de agarre seguro para llevarlo cómodamente. Fabricado en acero inoxidable 18/8 apto para lavavajillas.',
      },
    ],
    specGroups: [
      {
        category: 'Generales y Diseño',
        items: [
          'Modelo: Vaso Quencher ProTour Flip Straw Messi x Stanley 1913 1.18 Lts.',
          'Color / Acabado: CELESTE / DORADO',
          'Tipo de Boquilla: Flip Straw (Sorbete rebatible hermético)',
          'Tapa: Tapa ProTour bicolor a prueba de derrames',
          'Mango / Agarre: Mango ergonómico con textura antideslizante',
        ],
      },
      {
        category: 'Especificaciones Técnicas',
        items: [
          'Capacidad: 1,18 Litros (40 oz)',
          'Material: Acero inoxidable reciclado 18/8 libre de BPA',
          'Aislamiento: Doble pared con aislamiento al vacío',
          'Dimensiones: 27 cm x 14,7 cm',
          'Peso: 676 g',
        ],
      },
      {
        category: 'Rendimiento Térmico',
        items: [
          'Mantiene Frío: Hasta 11 horas',
          'Con Hielo: Hasta 2 días (48 horas)',
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
        question: '¿Para qué tipo de uso conviene el Vaso Stanley Quencher ProTour Flip Straw 1.18 L?',
        answer: 'El Vaso Stanley Quencher ProTour Flip Straw 1.18 L es ideal para quienes buscan mantenerse hidratados durante todo el día. Su gran capacidad de 1,18 litros lo hace práctico para llevar al gimnasio, al trabajo, a la facultad, en el auto, de viaje o para acompañar rutinas largas sin tener que recargar agua constantemente.',
      },
      {
        question: '¿El Vaso Stanley Quencher ProTour Flip Straw 1.18 L mantiene el agua fría?',
        answer: 'Sí. El Vaso Stanley Quencher ProTour Flip Straw 1.18 L mantiene las bebidas frías hasta 11 horas y con hielo hasta 2 días gracias a su doble pared con aislación al vacío. Es una buena opción para quienes quieren agua fría disponible durante muchas horas.',
      },
      {
        question: '¿La tapa ProTour Flip Straw evita derrames?',
        answer: 'Sí. El Vaso Stanley Quencher ProTour Flip Straw 1.18 L cuenta con tapa ProTour a prueba de derrames y sorbete incorporado. Solo tenés que levantar el sorbete para tomar y cerrarlo cuando terminás, lo que ayuda a evitar derrames y facilita el uso en movimiento.',
      },
      {
        question: '¿El Vaso Stanley Quencher ProTour Flip Straw 1.18 L es cómodo para transportar?',
        answer: 'Sí. El Vaso Stanley Quencher ProTour Flip Straw 1.18 L tiene manija con textura antideslizante y agarre cómodo, pensada para llevarlo con mayor seguridad durante el día. Además, está fabricado en acero inoxidable reciclado 18/8, es libre de BPA y apto para lavavajillas.',
      },
    ],
    status: 'new',
    availability: 'stock',
    category: 'termos',
    featured: true,
  },
]

export function getEffectiveAvailability(product: Product): 'stock' | 'order' | null {
  if (product.availability) return product.availability
  if (product.category !== 'celulares') return null
  if (product.status === 'out') return 'order'
  if (product.status === 'new') return 'order'
  if (product.status === 'used') return 'stock'
  return null
}

export function sortProductsByAvailability(productsList: Product[]): Product[] {
  return [...productsList].sort((a, b) => {
    const availA = getEffectiveAvailability(a)
    const availB = getEffectiveAvailability(b)

    const rankA = availA === 'stock' ? 1 : availA === 'order' ? 2 : 3
    const rankB = availB === 'stock' ? 1 : availB === 'order' ? 2 : 3

    return rankA - rankB
  })
}
