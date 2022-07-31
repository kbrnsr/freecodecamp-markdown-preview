import React, { useState, useEffect } from 'react';
import constants from '../constants';

function MarkdownPreview() {
  const {
    mpWrapper, mpEditorBox, mpEditor,
    mpPreviewBox, mpPreview,
  } = constants;
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    setOutput(input);
  }, [input]);

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
          {output}
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreview;
