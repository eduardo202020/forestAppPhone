import { Projecto } from '@/data/proyectos';

export const userProyects: Projecto[] = [
  {
    id: '1',
    photo:
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',
    name: 'Bosque Urbano Loreto',
    location: { latitude: -12.0464, longitude: -77.0428 },
    startDate: '2025-01-10',
    progress: 45,
    area: 500,
    region: 'Loreto',
    descripcion:
      'Proyecto de reforestación para restaurar la biodiversidad en la región amazónica.',
    img: [
      'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',

      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/06/21125149/2_Miyawaki-in-Central-Delhi-1200x800.jpg',
    ],
    density: 3.8,
    plantas: [
      { nombre_cientifico: 'Tornillo', cantidad: 42 },
      { nombre_cientifico: 'Caoba', cantidad: 26 },
      { nombre_cientifico: 'Shihuahuaco', cantidad: 31 },
      { nombre_cientifico: 'Castaño', cantidad: 22 },
      { nombre_cientifico: 'Cedar', cantidad: 45 },
    ],
    estado: 'En progreso',
  },
];
