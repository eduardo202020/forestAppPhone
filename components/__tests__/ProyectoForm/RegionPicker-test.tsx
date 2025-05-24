import React from 'react';
import renderer from 'react-test-renderer';
import RegionPicker from '../../ProyectoForm/RegionPicker';

describe('RegionPicker', () => {
  it('se renderiza sin errores', () => {
    const tree = renderer
      .create(
        <RegionPicker value="" onChange={() => {}} editable error={undefined} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('muestra el error si existe', () => {
    const tree = renderer
      .create(
        <RegionPicker
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
