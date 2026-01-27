// Your custom code snippets configuration
// This file defines autocomplete snippets for Monaco Editor
// Structure: language -> array of snippet objects

export const SNIPPETS_CONFIG = {
  javascript: [
    {
      label: "useCallback",
      kind: "function", 
      insertText: "const ${1:callback} = useCallback(($2) => {\n  $3\n}, [$4]);",
      documentation: "React useCallback hook"
    },
    {
      label: "useMemo",
      kind: "function",
      insertText: "const ${1:memoizedValue} = useMemo(() => $2, [$3]);",
      documentation: "React useMemo hook"
    },
    {
      label: "React Component",
      kind: "function",
      insertText: "function ${1:ComponentName}({$2}) {\n  return (\n    <div>\n      $3\n    </div>\n  );\n}",
      documentation: "React functional component"
    },
    {
      label: "Arrow Component",
      kind: "function",
      insertText: "const ${1:ComponentName} = ({$2}) => {\n  return (\n    <div>\n      $3\n    </div>\n  );\n};",
      documentation: "React arrow function component"
    }
  ],
  typescript: [
    {
      label: "TypeScript Interface",
      kind: "interface",
      insertText: "interface ${1:InterfaceName} {\n  ${2:property}: ${3:type};\n}",
      documentation: "TypeScript interface definition"
    },
    {
      label: "TypeScript Type",
      kind: "type",
      insertText: "type ${1:TypeName} = ${2:type};",
      documentation: "TypeScript type alias"
    }
  ],
  html: [
    {
      label: "HTML5 Boilerplate",
      kind: "snippet",
      insertText: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>${1:Title}</title>\n</head>\n<body>\n  $2\n</body>\n</html>",
      documentation: "HTML5 boilerplate structure"
    }
  ],
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