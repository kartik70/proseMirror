// prose-mirror-editor.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { EditorState, Transaction } from 'prosemirror-state';
import { DirectEditorProps, EditorView } from 'prosemirror-view';
import { DOMParser } from 'prosemirror-model';
import { history, redo, undo } from 'prosemirror-history';
import { mySchema } from './schema';
import { toggleMark, setBlockType } from 'prosemirror-commands';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';

@Component({
  selector: 'app-prose-mirror-editor',
  templateUrl: './prose-mirror-editor.component.html',
  standalone: true,
  styleUrls: ['./prose-mirror-editor.component.scss']
})
export class ProseMirrorEditorComponent {
  @ViewChild('editor', { static: true }) editor!: ElementRef;
  view!: EditorView;

  constructor() { }

  ngOnInit(): void {
    const contentElement = document.querySelector('#content');

    if (!contentElement) {
      throw new Error('Content element not found');
    }

    const doc = DOMParser.fromSchema(mySchema).parse(contentElement);

    const state = EditorState.create({
      doc,
      schema: mySchema,
      plugins: [
        history(),
        keymap({
          'Mod-b': toggleMark(mySchema.marks.bold),
          'Mod-i': toggleMark(mySchema.marks.italic),
          'Mod-z': undo,
          'Mod-y': redo,
          'Mod-Shift-z': redo
        }),
        keymap(baseKeymap),
        dropCursor(),
        gapCursor()
      ]
    });

    const viewProps: DirectEditorProps = {
      state,
      dispatchTransaction: (transaction: Transaction) => {
        const newState = this.view.state.apply(transaction);
        this.view.updateState(newState);
      }
    };

    this.view = new EditorView(this.editor.nativeElement, viewProps);
  }

  toggleBold() {
    toggleMark(this.view.state.schema.marks['bold'])(this.view.state, this.view.dispatch);
  }

  toggleItalic() {
    toggleMark(this.view.state.schema.marks['italic'])(this.view.state, this.view.dispatch);
  }

  toggleHeading(level: number) {
    setBlockType(this.view.state.schema.nodes['heading'], { level })(this.view.state, this.view.dispatch);
  }

  undo = () => {
    undo(this.view.state, this.view.dispatch);
  }

  redo = () => {
    redo(this.view.state, this.view.dispatch);
  }
}
