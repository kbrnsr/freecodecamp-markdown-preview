import React from 'react';
import { screen, render } from '@testing-library/react';
import MarkdownPreview from './MarkdownPreview';
import constants from '../constants';

const { mpWrapper } = constants;

test('component existence', () => {
  render(<MarkdownPreview />);
});
test('component wrapper existence', () => {
  render(<MarkdownPreview />);
  const wrapperElement = screen.getByTestId(mpWrapper);
  expect(wrapperElement).toBeInTheDocument();
});
