import React from 'react';
import renderer from 'react-test-renderer';
import { ProyectoFecha } from '../ProyectoDetalle/ProyectoFecha';

describe('ProyectoFecha', () => {
  it('renderiza correctamente el calendario con la fecha marcada', () => {
    const tree = renderer
      .create(<ProyectoFecha fecha="2025-05-31" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
