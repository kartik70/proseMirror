# ProseMirror Editor — Angular Integration

A rich text editor built by integrating [ProseMirror](https://prosemirror.net/) into an Angular application. Implements a custom document schema, toolbar menu, and full keyboard command support as a reusable Angular component.

## Features

- Custom ProseMirror schema (headings, lists, bold, italic, links)
- Toolbar menu with formatting controls built with `prosemirror-menu`
- Keyboard shortcuts via `prosemirror-keymap`
- Undo/redo history via `prosemirror-history`
- Encapsulated as a standalone Angular component — drop it into any Angular project

## Tech Stack

![Angular](https://img.shields.io/badge/Angular_14-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![ProseMirror](https://img.shields.io/badge/ProseMirror-000000?style=flat)

| Package | Purpose |
|---|---|
| `prosemirror-state` / `prosemirror-view` | Core editor state and DOM rendering |
| `prosemirror-model` | Document schema definition |
| `prosemirror-commands` | Built-in editing commands |
| `prosemirror-keymap` | Keyboard shortcut bindings |
| `prosemirror-history` | Undo/redo stack |
| `prosemirror-menu` | Toolbar UI |
| `prosemirror-schema-list` | List node support |

## Project Structure

```
src/app/prose-mirror-editor/
├── prose-mirror-editor.component.ts   # Angular component wrapper
├── prose-mirror-editor.component.html # Template
├── schema.ts                          # Custom ProseMirror document schema
└── menu.ts                            # Toolbar menu configuration
```

## Getting Started

```bash
git clone https://github.com/kartik70/proseMirror.git
cd proseMirror
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

## Why ProseMirror?

ProseMirror gives precise control over the document model, selection, and transformations — unlike contenteditable-based editors. This makes it suitable for structured documents where the schema must be enforced (e.g., no arbitrary HTML allowed).

## Author

[Kartik Kakad](https://github.com/kartik70)
