// src/app/prose-mirror-editor/schema.ts
import { Schema } from 'prosemirror-model';

export const mySchema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: {
      content: 'inline*',
      group: 'block',
      parseDOM: [{ tag: 'p' }],
      toDOM: () => ['p', 0]
    },
    text: {
      group: 'inline'
    },
    heading: {
      attrs: { level: { default: 1 } },
      content: 'inline*',
      group: 'block',
      defining: true,
      parseDOM: [
        { tag: 'h1', getAttrs: () => ({ level: 1 }) },
        { tag: 'h2', getAttrs: () => ({ level: 2 }) }
      ],
      toDOM: node => ['h' + node.attrs['level'], 0]
    },
    // Add more nodes as needed
  },
  marks: {
    bold: {
      toDOM: () => ['strong', 0],
      parseDOM: [{ tag: 'strong' }, { style: 'font-weight=bold' }]
    },
    italic: {
      toDOM: () => ['em', 0],
      parseDOM: [{ tag: 'em' }, { style: 'font-style=italic' }]
    },
    // Add more marks as needed
  }
});
