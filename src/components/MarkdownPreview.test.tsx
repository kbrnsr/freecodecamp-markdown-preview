import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MarkdownPreview from './MarkdownPreview';
import constants from '../constants';

const {
  mpWrapper, mpEditorBox, mpEditor,
  mpPreviewBox, mpPreview,
} = constants;

describe('functionality tests', () => {
  test('preview mirrors editor', async () => {
    render(<MarkdownPreview />);
    const user = userEvent.setup();
    const testString = 'What is love?\n'
    + '\tBaby, don\'t hurt me\n\n'
    + 'no more';

    const mpEditorElement = screen.getByRole('textbox');
    const mpPreviewElement = screen.getByTestId(mpPreview);

    await user.type(mpEditorElement, testString);
    expect(mpPreviewElement.innerHTML).toBe(testString);
  });
});

describe('structure tests', () => {
  beforeEach(() => {
    render(<MarkdownPreview />);
  });

  test('component wrapper existence', () => {
    const wrapperElement = screen.getByTestId(mpWrapper);
    expect(wrapperElement).toBeInTheDocument();
  });

  test('editor box existence', () => {
    const mpEditorwBoxElement = screen.getByTestId(mpEditorBox);
    expect(mpEditorwBoxElement).toBeInTheDocument();
  });

  test('editor element existence', () => {
    const mpEditorElement = screen.getByRole('textbox');
    expect(mpEditorElement)
      .toHaveAttribute('data-testid', expect
        .stringContaining(mpEditor));
  });

  test('preview box existence', () => {
    const mpPreviewBoxElement = screen.getByTestId(mpPreviewBox);
    expect(mpPreviewBoxElement).toBeInTheDocument();
  });

  test('preview element existence', () => {
    const mpPreviewElement = screen.getByTestId(mpPreview);
    expect(mpPreviewElement).toBeInTheDocument();
  });
});
