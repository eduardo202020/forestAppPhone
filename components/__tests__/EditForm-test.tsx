import React from 'react';
import renderer from 'react-test-renderer';

// Un componente de ejemplo para edición
const Edit = () => <div>Editar proyecto</div>;

describe('Edit', () => {
  it('renderiza el componente Edit sin errores', () => {
    const tree = renderer.create(<Edit />).toJSON();
    expect(tree).toBeTruthy();
  });
});

export default Edit;
 