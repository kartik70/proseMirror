import { toggleMark, wrapIn } from 'prosemirror-commands';
import { MenuItem, blockTypeItem } from 'prosemirror-menu';
import { MarkType, NodeType, Schema } from 'prosemirror-model';

function markItem(markType: MarkType, options: { [key: string]: any }) {
  let command = toggleMark(markType);
  return new MenuItem({
    ...options,
    active(state: any) {
      return markType.isInSet(state.storedMarks || state.selection.$from.marks());
    },
    enable(state: any) {
      return command(state);
    },
    run(state: any, dispatch: any, view: any) {
      return command(state, dispatch, view);
    }
  });
}

function menu(schema: Schema) {
  let r = [
    markItem(schema.marks['strong'], { title: "Bold", icon: { text: "B" } }),
    markItem(schema.marks['em'], { title: "Italic", icon: { text: "I" } }),
    markItem(schema.marks['strike'], { title: "Strike", icon: { text: "S" } }),
    markItem(schema.marks['underline'], { title: "Underline", icon: { text: "U" } })
  ];

  let heading = blockTypeItem(schema.nodes['heading'], {
    title: "Change to heading",
    label: "Heading"
  });

  let orderedList = wrapIn(schema.nodes['ordered_list']);
  let bulletList = wrapIn(schema.nodes['bullet_list']);

  let list = [
    new MenuItem({
      title: "Bullet list",
      icon: { text: "UL" },
      run: bulletList
    }),
    new MenuItem({
      title: "Ordered list",
      icon: { text: "OL" },
      run: orderedList
    })
  ];

  return [
    r,
    [heading],
    list
  ];
}

export { menu };
