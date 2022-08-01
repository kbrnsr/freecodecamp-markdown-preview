const defaultInput = `# A h1 heading
## A h2 heading
A link www.google.com
Another [link](www.google.com)
An \`inline code snippet\`
A
\`\`\`javascript
const codeblock='Wowzers!';
\`\`\`
- A list item
> Some quoted
> text
An image
![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
**Some bolded text**`;

const constants = {
  mpWrapper: 'wrapper',
  mpEditorBox: 'editor-box',
  mpEditor: 'editor',
  mpPreviewBox: 'preview-box',
  mpPreview: 'preview',
  mpDefaultInput: defaultInput,
};

export default constants;
