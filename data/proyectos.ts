// Definimos la interfaz para la planta con la nueva estructura
export interface Planta {
  region: string;
  nombre_cientifico: string;
  nombre_comun: string;
  caracteristicas: string;
  zona: string;
  tipo: string;
  img: string[];
}

// Definimos la interfaz para el proyecto con sus propiedades
export interface Proyecto {
  id: string;
  nombre: string;
  ubicacion: string;
  fecha: string;
  region: string;
  descripcion: string;
  plantas: Planta[];
  estado: 'En progreso' | 'Pendiente' | 'Completado';
  imagenes: string[];
  location?: { latitude: number; longitude: number };
}

// Datos de ejemplo para los proyectos con la nueva estructura de plantas
export const proyectosData: Proyecto[] = [
  {
    id: '1',
    nombre: 'Reforestación Amazonas',
    ubicacion: 'Zona A, Amazonas',
    fecha: '2023-05-01',
    region: 'Amazonas',
    descripcion:
      'Proyecto de reforestación para restaurar la biodiversidad en la región amazónica.',
    plantas: [
      {
        region: 'Loreto',
        nombre_cientifico: 'Cedrelinga cateniformis',
        nombre_comun: 'Tornillo',
        caracteristicas: 'Madera dura, crecimiento rápido, resistente a plagas',
        zona: 'Selva',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.719QYVRbMbJUZ68KCO-4rQHaHa&w=474&h=474&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.MCrqZ0ORCpWF6HiS89QZZwHaFj&w=355&h=355&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.W8vE8pcCkSqqIe-jOKoxlAHaJ4&w=474&h=474&c=7',
        ],
      },
      {
        region: 'Loreto',
        nombre_cientifico: 'Swietenia macrophylla',
        nombre_comun: 'Caoba',
        caracteristicas:
          'Madera valiosa, crecimiento lento, resistente a sequías',
        zona: 'Selva',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://tse2.mm.bing.net/th?id=OIP.Tqq0rnlPIW4jh7M4UpW4owHaEU&w=276&h=276&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.gn4pveklrSq1uZtgaDwNywHaF8&w=380&h=380&c=7',
          'https://tse1.mm.bing.net/th?id=OIP.nGZjA2ewYNSkIRMpHjo2ngHaFj&w=355&h=355&c=7',
        ],
      },
    ],
    estado: 'En progreso',
    imagenes: [
      'https://tse1.mm.bing.net/th?id=OIP.719QYVRbMbJUZ68KCO-4rQHaHa&w=474&h=474&c=7',
      'https://tse3.mm.bing.net/th?id=OIP.MCrqZ0ORCpWF6HiS89QZZwHaFj&w=355&h=355&c=7',
      'https://tse3.mm.bing.net/th?id=OIP.W8vE8pcCkSqqIe-jOKoxlAHaJ4&w=474&h=474&c=7',
    ],
    location: { latitude: -3.4653, longitude: -62.2159 },
  },
  {
    id: '2',
    nombre: 'Reforestación Loreto',
    ubicacion: 'Zona B, Loreto',
    fecha: '2023-06-15',
    region: 'Loreto',
    descripcion:
      'Reforestación en la zona norte de Loreto, con enfoque en la recuperación del ecosistema local.',
    plantas: [
      {
        region: 'Loreto',
        nombre_cientifico: 'Dipteryx micrantha',
        nombre_comun: 'Shihuahuaco',
        caracteristicas:
          'Madera dura, resistente a hongos, usada en construcciones',
        zona: 'Selva',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.b9F5q7RzaICzCJg5jZofSQHaE7&w=315&h=315&c=7',
          'https://tse1.mm.bing.net/th?id=OIP.ovmlezC6IKILrqsg2XouSQHaE8&w=316&h=316&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.edf849EeILm0GYMOTm1gjAHaD6&w=250&h=250&c=7',
        ],
      },
      {
        region: 'Loreto',
        nombre_cientifico: 'Bertholletia excelsa',
        nombre_comun: 'Castaña Amazónica',
        caracteristicas:
          'Producción de frutos comestibles, importancia económica',
        zona: 'Selva',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://tse1.mm.bing.net/th?id=OIP.x3Bc-5_bpG6c0ykb0fo6vQHaFj&w=355&h=355&c=7',
          'https://tse4.mm.bing.net/th?id=OIP.FAwTxmnYR_UyuwfJVEKxrAHaJ4&w=474&h=474&c=7',
          'https://tse3.mm.bing.net/th?id=OIP.FQrmMwTCjk6EcxXXfnlSmwHaGe&w=414&h=414&c=7',
        ],
      },
    ],
    estado: 'Pendiente',
    imagenes: [
      'https://tse1.mm.bing.net/th?id=OIP.b9F5q7RzaICzCJg5jZofSQHaE7&w=315&h=315&c=7',
      'https://tse1.mm.bing.net/th?id=OIP.ovmlezC6IKILrqsg2XouSQHaE8&w=316&h=316&c=7',
      'https://tse4.mm.bing.net/th?id=OIP.edf849EeILm0GYMOTm1gjAHaD6&w=250&h=250&c=7',
    ],
    location: { latitude: -3.748, longitude: -73.245 },
  },
  {
    id: '3',
    nombre: 'Proyecto Puno',
    ubicacion: 'Zona C, Puno',
    fecha: '2023-07-20',
    region: 'Puno',
    descripcion:
      'Reforestación en las laderas de Puno, con especies adaptadas a climas fríos.',
    plantas: [
      {
        region: 'Puno',
        nombre_cientifico: 'Queñua',
        nombre_comun: 'Queñua',
        caracteristicas:
          'Resistente a alturas extremas, crecimiento lento, madera densa',
        zona: 'Sierra',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://img.freepik.com/fotos-premium/arbol-papel-polylepis-incana_261041-1433.jpg',
          'https://live.staticflickr.com/65535/50288184356_110a9e5c9b_b.jpg',
          'https://as1.ftcdn.net/v2/jpg/05/68/05/44/1000_F_568054439_gfZeiEHa6bAJzdAszsswk9oDu5pUs5nA.jpg',
        ],
      },
      {
        region: 'Puno',
        nombre_cientifico: 'Buddleja coriacea',
        nombre_comun: 'Quishuar o Kiswar',
        caracteristicas:
          'Arbusto perenne, resistente a sequías, valor medicinal',
        zona: 'Sierra',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://2.bp.blogspot.com/-LB-w8hgp-24/W2ZfchWMUKI/AAAAAAAAAys/fVz5aBr9iZYVrCY-grV7qiN9-bNgmlpagCLcBGAs/w1200-h630-p-k-no-nu/IMG_4958.JPG',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/139258145/medium.jpeg',
          'https://d3e1m60ptf1oym.cloudfront.net/2f54ff72-ad56-472b-8bfe-41df960c9ca6/BolFlora2014D37_xgaplus.jpg',
        ],
      },
    ],
    estado: 'Completado',
    imagenes: [
      'https://img.freepik.com/fotos-premium/arbol-papel-polylepis-incana_261041-1433.jpg',
      'https://live.staticflickr.com/65535/50288184356_110a9e5c9b_b.jpg',
      'https://as1.ftcdn.net/v2/jpg/05/68/05/44/1000_F_568054439_gfZeiEHa6bAJzdAszsswk9oDu5pUs5nA.jpg',
    ],
    location: { latitude: -15.8409, longitude: -70.0216 },
  },
  {
    id: '4',
    nombre: 'Restauración Madre de Dios',
    ubicacion: 'Zona D, Madre de Dios',
    fecha: '2023-08-05',
    region: 'Madre de Dios',
    descripcion:
      'Proyecto para restaurar las zonas de bosque degradadas en la región de Madre de Dios.',
    plantas: [
      {
        region: 'Madre de Dios',
        nombre_cientifico: 'Dipteryx odorata',
        nombre_comun: 'Shihuahuaco',
        caracteristicas:
          'Madera utilizada en construcción, frutos comestibles para fauna',
        zona: 'Selva',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://d2seqvvyy3b8p2.cloudfront.net/c757229d08484bcbacbb203b27c965fb.jpg',
          'https://inaturalist-open-data.s3.amazonaws.com/photos/1321926/medium.jpg',
          'https://biogeodb.stri.si.edu/bioinformatics/dfmfiles/files/c/10960/10960.jpg',
        ],
      },
      {
        region: 'Madre de Dios',
        nombre_cientifico: 'Bertholletia excelsa',
        nombre_comun: 'Castaña Amazónica',
        caracteristicas:
          'Frutos comestibles, importancia económica, árbol de gran altura',
        zona: 'Selva',
        tipo: 'Arboles_de_dosel_alto',
        img: [
          'https://www.outdoorcircle.org/uploads/2/6/1/4/26147365/bertholetia-excelsa_orig.jpg',
          'https://perubiodiverso.com/wp-content/uploads/2020/08/ARBOL.jpg',
          'https://shiwi.pe/wp-content/uploads/2020/01/2016-PR-2.jpg',
        ],
      },
    ],
    estado: 'En progreso',
    imagenes: [
      'https://d2seqvvyy3b8p2.cloudfront.net/c757229d08484bcbacbb203b27c965fb.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/1321926/medium.jpg',
      'https://biogeodb.stri.si.edu/bioinformatics/dfmfiles/files/c/10960/10960.jpg',
    ],
    location: { latitude: -12.5691, longitude: -69.202 },
  },
];
