import React from 'react';
import { screen, render } from '@testing-library/react';
import MarkdownPreview from './MarkdownPreview';
import constants from '../constants';

const {
  mpWrapper, mpEditorBox, mpEditor,
  mpPreview,
} = constants;

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

test('editor element existence', () => {
  const mpEditorElement = screen.getByRole('textbox');
  expect(mpEditorElement)
    .toHaveAttribute('data-testid', expect
      .stringContaining(mpEditor));
});

test('preview element existence', () => {
  const mpPreviewElement = screen.getByTestId(mpPreview);
  expect(mpPreviewElement).toBeInTheDocument();
});
