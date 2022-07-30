import React from 'react';
import constants from '../constants';

function MarkdownPreview() {
  const { mpWrapper } = constants;
  return (
    <div data-testid={mpWrapper}>
      <p>Markdown previewer</p>
    </div>
  );
}

export default MarkdownPreview;
