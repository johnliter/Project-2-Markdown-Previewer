// Get the necessary elements from the DOM
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Event listener for updating the preview as the user types
editor.addEventListener('input', updatePreview);

// Initial rendering of the default markdown
window.addEventListener('DOMContentLoaded', renderDefaultMarkdown);

function updatePreview() {
  const markdownText = editor.value;
  const htmlText = marked(markdownText);
  preview.innerHTML = htmlText;
}

function renderDefaultMarkdown() {
  const defaultMarkdown = `
# Heading 1
## Subheading
[Link to Google](https://www.google.com)
\`inline code\`
\`\`\`
// Code block
function greet() {
  console.log('Hello, world!');
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_large.png)
**Bold text**
`;
  editor.value = defaultMarkdown;
  updatePreview();
}
