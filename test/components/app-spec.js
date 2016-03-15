import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../../src/components/app.js';

describe('App', () => {

  it('should render a div with a class name of app__base', () => {
    const renderer = TestUtils.createRenderer();
    const expected = 'div';
    renderer.render(<App />);
    const actual = renderer.getRenderOutput().type;
    expect(actual).toEqual(expected);
    expect(renderer.getRenderOutput().props.className).toInclude('app__base');
  });
});
