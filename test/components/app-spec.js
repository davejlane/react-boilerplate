import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../../src/components/app.js';

describe('App', () => {

  it('should render a div', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'div';
    // console.log(renderer.getRenderOutput().props.className);
    expect(actual).toEqual(expected);
  });
});
