import React, { useState } from 'react';
import Markdown from 'marked-react';
import constants from '../constants';

function MarkdownPreview() {
  const {
    mpWrapper, mpEditorBox, mpEditor,
    mpPreviewBox, mpPreview, mpDefaultInput,
  } = constants;
  const [input, setInput] = useState(mpDefaultInput);

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div
        data-testid={mpPreviewBox}
        id={mpPreviewBox}
      >
        <p>Previewer</p>
        <div
          data-testid={mpPreview}
          id={mpPreview}
        >
          <Markdown gfm breaks value={input} />
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreview;
