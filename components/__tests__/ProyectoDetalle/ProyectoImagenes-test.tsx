import React from 'react';
import renderer from 'react-test-renderer';
import { ProyectoImagenes } from '../../ProyectoDetalle/ProyectoImagenes';

describe('ProyectoImagenes', () => {
  it('renderiza correctamente una lista de imágenes', () => {
    const imagenes = ['https://img.com/1.png', 'https://img.com/2.png'];
    const tree = renderer
      .create(<ProyectoImagenes imagenes={imagenes} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renderiza correctamente sin imágenes', () => {
    const tree = renderer.create(<ProyectoImagenes imagenes={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
