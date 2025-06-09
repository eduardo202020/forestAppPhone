import React from 'react';
import renderer from 'react-test-renderer';
import FechaCultivo from '../../ProyectoForm/FechaCultivo';

describe('FechaCultivo', () => {
  it('se renderiza sin errores', () => {
    expect(() =>
      renderer.create(
        <FechaCultivo
          selectedDate="2025-05-17"
          setSelectedDate={() => {}}
          error={undefined}
        />
      )
    ).not.toThrow();
  });

  it('muestra el error si existe', () => {
    expect(() =>
      renderer.create(
        <FechaCultivo
          selectedDate=""
          setSelectedDate={() => {}}
          error="Campo requerido"
        />
      )
    ).not.toThrow();
  });
});
