import React from 'react';
import { render } from '@testing-library/react';
import MarkdownPreview from './MarkdownPreview';

test('markdown component existence', () => {
  render(<MarkdownPreview />);
});
