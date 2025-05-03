import * as React from 'react';
import renderer from 'react-test-renderer';
import Proyect from '@/components/Proyect'; // Ajusta la ruta si es necesario
import { Projecto } from '@/data/proyectos';

// Datos de ejemplo para el test
const proyectoEjemplo: Projecto = {
  id: '1',
  name: 'Proyecto de Reforestación',
  startDate: '2023-01-01',
  progress: 50,
  area: 1000,
  density: 10,
  img: ['https://example.com/img1.jpg', 'https://example.com/img2.jpg'],
};

it('debería renderizar correctamente el componente Proyect', () => {
  const tree = renderer.create(<Proyect proyect={proyectoEjemplo} />).toJSON();
  expect(tree).toMatchSnapshot(); // Comparar con el snapshot
});
