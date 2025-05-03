import * as React from 'react';
import { render } from '@testing-library/react-native';
import { renderPlanta } from '@/components/renderPlanta'; // Ajusta la ruta si es necesario

// Datos de ejemplo para la planta
const plantaEjemplo = {
  nombre_comun: 'Rosa',
  nombre_cientifico: 'Rosa spp.',
  caracteristicas: 'Es una planta ornamental muy popular.',
  img: ['https://example.com/rosa.jpg'],
};

it('debería renderizar correctamente el componente renderPlanta', () => {
  const { getByText, getByTestId } = render(
    renderPlanta({ item: plantaEjemplo })
  );

  // Verificar que el nombre común y científico se renderizan correctamente
  expect(getByText('Rosa')).toBeTruthy(); // Nombre común
  expect(getByText('Rosa spp.')).toBeTruthy(); // Nombre científico

  // Verificar que las características de la planta están visibles
  expect(getByText('Es una planta ornamental muy popular.')).toBeTruthy();

  // Verificar que la imagen está presente
  const image = getByTestId('plant-image');
  expect(image).toHaveProp('source', { uri: 'https://example.com/rosa.jpg' });
});
