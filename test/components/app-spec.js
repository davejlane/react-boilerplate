import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../../src/components/app.js';

describe('App', () => {

  it('should render Well howdy do', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'div';

    expect(actual).toEqual(expected);
  });
});


