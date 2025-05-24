import React from 'react';
import renderer from 'react-test-renderer';
import { ExternalLink } from '../ExternalLink';

describe('ExternalLink', () => {
  it('renderiza correctamente el link', () => {
    const tree = renderer
      .create(
        <ExternalLink href="https://example.com">Ir a ejemplo</ExternalLink>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
