import React from 'react';
import { screen, render } from '@testing-library/react';
import MarkdownPreview from './MarkdownPreview';
import constants from '../constants';

const { mpWrapper, mpEditorBox } = constants;

beforeEach(() => {
  render(<MarkdownPreview />);
});
test('component wrapper existence', () => {
  const wrapperElement = screen.getByTestId(mpWrapper);
  expect(wrapperElement).toBeInTheDocument();
});
test('preview box existence', () => {
  const mpEditorwBoxElement = screen.getByTestId(mpEditorBox);
  expect(mpEditorwBoxElement).toBeInTheDocument();
});
