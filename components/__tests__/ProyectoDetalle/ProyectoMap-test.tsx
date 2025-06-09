import React from 'react';
import renderer from 'react-test-renderer';
import { ProyectoMap } from '../../ProyectoDetalle/ProyectoMap';

describe('ProyectoMap', () => {
  it('se renderiza correctamente con coordenadas', () => {
    const tree = renderer
      .create(<ProyectoMap location={{ latitude: 1.23, longitude: 4.56 }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
