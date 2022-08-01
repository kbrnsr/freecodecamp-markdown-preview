import React, { useState, useEffect } from 'react';
import Markdown from 'marked-react';
import constants from '../constants';
import './MarkdownPreview.css';

function MarkdownPreview() {
  const {
    mpWrapper, mpEditorBox, mpEditor, mpEditorButton,
    mpPreviewBox, mpPreview, mpDefaultInput,
  } = constants;
  const [input, setInput] = useState(mpDefaultInput);
  const [output, setOutput] = useState(mpDefaultInput);

  useEffect(() => {
    setOutput(input);
  }, [input]);

  return (
    <div
      className="row"
      data-testid={mpWrapper}
      id={mpWrapper}
    >
      <div className="column" data-testid={mpEditorBox} id={mpEditorBox}>
        <p>Editor</p>
        <textarea
          wrap="off"
          data-testid={mpEditor}
          id={mpEditor}
          rows={6}
          cols={10}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() => setInput('')}
        >
          {mpEditorButton}

        </button>
      </div>
      <div
        className="column"
        data-testid={mpPreviewBox}
        id={mpPreviewBox}
      >
        <p>Previewer</p>
        <div
          data-testid={mpPreview}
          id={mpPreview}
        >
          <Markdown gfm breaks value={output} />
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreview;
