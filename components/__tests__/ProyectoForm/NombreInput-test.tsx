import React from 'react';
import renderer from 'react-test-renderer';
import NombreInput from '../../ProyectoForm/NombreInput';

describe('NombreInput', () => {
  it('se renderiza sin errores', () => {
    const tree = renderer
      .create(
        <NombreInput
          value="Proyecto A"
          onChange={() => {}}
          editable
          error={undefined}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('muestra el error si existe', () => {
    const tree = renderer
      .create(
        <NombreInput
          value=""
          onChange={() => {}}
          editable
          error="Campo requerido"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
