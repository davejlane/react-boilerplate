import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import SampleIcon from '../../../src/components/icons/sample-icon';

describe('Sample Icon', () => {

  it('should render an svg', () => {
    const renderer = TestUtils.createRenderer();
    const expected = 'svg';
    renderer.render(<SampleIcon />);
    const actual = renderer.getRenderOutput().type;
    expect(actual).toEqual(expected);
  });

  it('should accept a prop for a class name', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<SampleIcon classes={'foo'} />);
    expect(renderer.getRenderOutput().props.className).toEqual('foo');
  });
});
