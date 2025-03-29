export const userProyect = {
  name: 'Municipalidad Provincial de Loreto',
  photo:
    'https://cdn.sanity.io/images/oyzyxja8/v2/d5cfa200bc906a2ed17f8b1919e0d3bfbdade20f-4167x2174.jpg?w=2048&q=90&auto=format',
  projects: [
    {
      id: 1,
      name: 'Bosque Urbano Loreto',
      location: { latitude: -12.0464, longitude: -77.0428 },
      startDate: '2025-01-10',
      progress: 45,
      area: 500,
      img: [
        'https://www.ecolandscaping.org/wp-content/uploads/2021/12/PostPlanting_DinoKuznik-scaled.jpeg',

        'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/06/21125149/2_Miyawaki-in-Central-Delhi-1200x800.jpg',
      ],
      density: 3.8,
      plantas: [
        { nombre: 'Tornillo', cantidad: 42 },
        { nombre: 'Caoba', cantidad: 26 },
        { nombre: 'Shihuahuaco', cantidad: 31 },
        { nombre: 'Castaño', cantidad: 22 },
        { nombre: 'Cedar', cantidad: 45 },
      ],
    },
  ],
};
