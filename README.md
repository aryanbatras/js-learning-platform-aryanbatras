# Configuration Files

This directory contains your personal configuration files that sync with your GitHub repository.

## Files

- **snippets.js**: Define custom code snippets for Monaco Editor autocomplete
- **settings.json**: Monaco Editor preferences
- **package.json**: Project metadata and dependencies

## How to Use

1. Edit any configuration file in the Monaco Editor
2. Changes are automatically saved and synced to GitHub
3. Snippets from `snippets.js` are immediately available in the editor
4. Editor settings from `settings.json` are applied when you switch files

## Snippets Configuration

In `snippets.js`, you can define custom autocomplete snippets:

```javascript
SNIPPETS_CONFIG.javascript.push({
  label: "Your Snippet",
  kind: "function", 
  insertText: "your custom template with ${1:placeholders}",
  documentation: "Description"
});
```

### Snippet Properties

- `label`: Name shown in autocomplete
- `kind`: Type (function, snippet, interface, type)
- `insertText`: Template with tab stops (${1:placeholder})
- `documentation`: Description shown on hover

### Supported Languages

- javascript
- typescript  
- html
- css

## Editor Settings

In `settings.json`, you can customize the Monaco Editor:

```json
{
  "editor": {
    "fontSize": 16,                    // Font size
    "theme": "jsDarkOrange",           // Editor theme
    "wordWrap": "on",                 // Word wrapping
    "minimap": { "enabled": false },  // Minimap toggle
    "lineNumbers": "off",             // Line numbers
    "autoClosingBrackets": "always",  // Auto bracket closing
    "autoClosingQuotes": "always",   // Auto quote closing
    "autoIndent": "full"              // Auto indentation
  }
}
```

### Available Settings

- `fontSize`: Number - Font size in pixels
- `theme`: String - Editor theme name
- `wordWrap`: "on" | "off" - Word wrapping
- `minimap.enabled`: Boolean - Show/hide minimap
- `lineNumbers`: "on" | "off" - Show/hide line numbers
- `autoClosingBrackets`: "always" | "never" | "languageDefined"
- `autoClosingQuotes`: "always" | "never" | "languageDefined"
- `autoIndent": "none" | "keep" | "brackets" | "advanced" | "full"

## GitHub Sync

All configuration files are stored in your GitHub repository and automatically:
- Created when you first sign up
- Updated when you make changes
- Pulled when you login on other devices