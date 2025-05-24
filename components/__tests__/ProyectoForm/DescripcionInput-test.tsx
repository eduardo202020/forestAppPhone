import React from 'react';
import renderer from 'react-test-renderer';
import DescripcionInput from '../../ProyectoForm/DescripcionInput';

describe('DescripcionInput', () => {
  it('se renderiza sin errores', () => {
    const tree = renderer
      .create(
        <DescripcionInput
          value="desc"
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
        <DescripcionInput
          value=""
          onChange={() => {}}
          editable
          error="Campo requerido"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('llama a onChange cuando el usuario escribe', () => {
    const onChange = jest.fn();
    const testRenderer = renderer.create(
      <DescripcionInput
        value=""
        onChange={onChange}
        editable
        error={undefined}
      />
    );
    const input = testRenderer.root.findByProps({ placeholder: 'Descripción' });
    input.props.onChangeText('nuevo texto');
    expect(onChange).toHaveBeenCalledWith('nuevo texto');
  });
});
