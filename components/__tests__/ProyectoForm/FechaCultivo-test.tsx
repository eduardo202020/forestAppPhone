import React from 'react';
import renderer from 'react-test-renderer';
import FechaCultivo from '../../ProyectoForm/FechaCultivo';

describe('FechaCultivo', () => {
  it('se renderiza sin errores', () => {
    const tree = renderer
      .create(
        <FechaCultivo
          selectedDate="2025-05-17"
          setSelectedDate={() => {}}
          error={undefined}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('muestra el error si existe', () => {
    const tree = renderer
      .create(
        <FechaCultivo
          selectedDate=""
          setSelectedDate={() => {}}
          error="Campo requerido"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
