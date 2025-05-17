import React from 'react';
import renderer from 'react-test-renderer';
import ImagenesInput from '../../ProyectoForm/ImagenesInput';

describe('ImagenesInput', () => {
  it('se renderiza en modo horizontal', () => {
    const imagenes = ['https://test/1.png', 'https://test/2.png'];
    const setModalVisible = () => {};
    const tree = renderer
      .create(
        <ImagenesInput
          imagenes={imagenes}
          setModalVisible={setModalVisible}
          modalVisible={false}
          horizontal
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('se renderiza en modo vertical', () => {
    const imagenes = ['a', 'b'];
    const setModalVisible = () => {};
    const tree = renderer
      .create(
        <ImagenesInput
          imagenes={imagenes}
          setModalVisible={setModalVisible}
          modalVisible={false}
          horizontal={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
