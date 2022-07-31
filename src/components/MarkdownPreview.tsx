import React from 'react';
import constants from '../constants';

function MarkdownPreview() {
  const { mpWrapper, mpEditorBox, mpEditor } = constants;
  return (
    <div data-testid={mpWrapper} id={mpWrapper}>
      <p>Markdown previewer</p>
      <div data-testid={mpEditorBox} id={mpEditorBox}>
        <p>Editor</p>
        <textarea
          data-testid={mpEditor}
          id={mpEditor}
          rows={6}
          cols={10}
        />
      </div>
    </div>
  );
}

export default MarkdownPreview;
