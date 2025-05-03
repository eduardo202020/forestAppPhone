// Definimos la interfaz para la planta con la nueva estructura
export interface Planta {
  nombre_cientifico: string;
  cantidad: number; // La cantidad es opcional
}

// Definimos la interfaz para el proyecto con sus propiedades
export interface Projecto {
  id: string;
  photo: string;
  name: string;
  location: { latitude: number; longitude: number };
  startDate: string;
  progress: number;
  area: number;
  region: string;
  descripcion: string;
  img: string[];
  density: number;
  plantas: Planta[];
  estado: 'En progreso' | 'Pendiente' | 'Completado';
}

// Datos de ejemplo para los proyectos con la nueva estructura de plantas
export const proyectosData: Projecto[] = [
  {
    id: '1',
    photo:
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
    name: 'Reforestación Amazonas',
    startDate: '2023-05-01',
    region: 'Amazonas',
    location: { latitude: -12.0464, longitude: -77.0428 },
    progress: 45,
    area: 500,
    img: [
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/06/21125149/2_Miyawaki-in-Central-Delhi-1200x800.jpg',
    ],
    density: 3.8,
    descripcion:
      'Proyecto de reforestación para restaurar la biodiversidad en la región amazónica.',
    plantas: [
      {
        nombre_cientifico: 'Cedrelinga cateniformis',
        cantidad: 42,
      },
      {
        nombre_cientifico: 'Swietenia macrophylla',
        cantidad: 26,
      },
    ],
    estado: 'En progreso',
  },
  {
    id: '2',
    photo:
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
    name: 'Reforestación Loreto',
    startDate: '2023-06-15',
    region: 'Loreto',
    location: { latitude: -12.0464, longitude: -77.0428 },
    progress: 45,
    area: 500,
    img: [
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/06/21125149/2_Miyawaki-in-Central-Delhi-1200x800.jpg',
    ],
    density: 3.8,
    descripcion:
      'Reforestación en la zona norte de Loreto, con enfoque en la recuperación del ecosistema local.',
    plantas: [
      {
        nombre_cientifico: 'Dipteryx micrantha',
        cantidad: 31,
      },
      {
        nombre_cientifico: 'Bertholletia excelsa',
        cantidad: 22,
      },
    ],
    estado: 'Pendiente',
  },
  {
    id: '3',
    photo:
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
    name: 'Proyecto Puno',
    startDate: '2023-07-20',
    region: 'Puno',
    location: { latitude: -12.0464, longitude: -77.0428 },
    progress: 45,
    area: 500,
    img: [
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/06/21125149/2_Miyawaki-in-Central-Delhi-1200x800.jpg',
    ],
    density: 3.8,
    descripcion:
      'Reforestación en las laderas de Puno, con especies adaptadas a climas fríos.',
    plantas: [
      {
        nombre_cientifico: 'Queñua',
        cantidad: 10,
      },
      {
        nombre_cientifico: 'Buddleja coriacea',
        cantidad: 15,
      },
    ],
    estado: 'Completado',
  },
  {
    id: '4',
    photo:
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
    name: 'Restauración Madre de Dios',
    startDate: '2023-08-05',
    region: 'Madre de Dios',
    location: { latitude: -12.0464, longitude: -77.0428 },
    progress: 45,
    area: 500,
    img: [
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/06/21125149/2_Miyawaki-in-Central-Delhi-1200x800.jpg',
    ],
    density: 3.8,
    descripcion:
      'Proyecto para restaurar las zonas de bosque degradadas en la región de Madre de Dios.',
    plantas: [
      {
        nombre_cientifico: 'Dipteryx odorata',
        cantidad: 20,
      },
      {
        nombre_cientifico: 'Bertholletia excelsa',
        cantidad: 30,
      },
    ],
    estado: 'En progreso',
  },
];
