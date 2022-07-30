import React from 'react';
import constants from '../constants';

function MarkdownPreview() {
  const { mpWrapper, mpEditorBox } = constants;
  return (
    <div data-testid={mpWrapper} id={mpWrapper}>
      <p>Markdown previewer</p>
      <div data-testid={mpEditorBox} id={mpEditorBox}>
        <p>Editor</p>
      </div>
    </div>
  );
}

export default MarkdownPreview;
