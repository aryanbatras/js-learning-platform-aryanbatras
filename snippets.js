// Your custom code snippets configuration
// This file defines autocomplete snippets for Monaco Editor
// Structure: language -> array of snippet objects

export const SNIPPETS_CONFIG = {
  javascript: [
  css: [
    {
      label: "CSS Reset",
      kind: "snippet",
      insertText: "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}",
      documentation: "CSS reset styles"
    }
  ]
};

// Add your custom snippets below:
// SNIPPETS_CONFIG.javascript.push({
//   label: "Your Custom Snippet",
//   kind: "function",
//   insertText: "your custom template with ${1:placeholders}",
//   documentation: "Description of your snippet"
// });