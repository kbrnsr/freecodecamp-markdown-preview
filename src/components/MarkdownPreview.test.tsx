import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MarkdownPreview from './MarkdownPreview';
import constants from '../constants';

const {
  mpWrapper, mpEditorBox, mpEditor, mpEditorButton,
  mpPreviewBox, mpPreview,
} = constants;

describe('functionality tests', () => {
  test('preview mirrors editor', async () => {
    render(<MarkdownPreview />);
    const user = userEvent.setup();

    const expectInput = 'What is love?';
    const expectOutput = '<p>What is love?</p>';

    const mpEditorElement = screen.getByRole('textbox');
    const mpEditorButtonElement = screen
      .getByRole('button', { name: mpEditorButton });
    const mpPreviewElement = screen.getByTestId(mpPreview);

    await user.click(mpEditorButtonElement);
    await user.type(mpEditorElement, expectInput);

    expect(mpPreviewElement.innerHTML).toBe(expectOutput);
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

  test('reset editor button existence', () => {
    const mpEditorButtonElement = screen
      .getByRole('button', { name: mpEditorButton });
    expect(mpEditorButtonElement).toBeInTheDocument();
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
