import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sass } from "@codemirror/lang-sass";
//
import "./example_textarea.html";
import "./example_textarea.scss";
// example d'initialisation.
// let view = new EditorView({
//   extensions: [basicSetup, javascript()],
//   parent: document.body.querySelector("#container_editor_js"),
// });

function editorFromTextArea(textarea, extensions) {
  let view = new EditorView({ doc: textarea.value, extensions });
  textarea.parentNode.insertBefore(view.dom, textarea);
  textarea.style.display = "none";
  if (textarea.form)
    textarea.form.addEventListener("submit", () => {
      console.log(view.state.doc.toString());
      alert("put data in texteara");
      textarea.value = view.state.doc.toString();
    });
  return view;
}
editorFromTextArea(document.querySelector("textarea#editor_js"), [basicSetup, javascript()]);
editorFromTextArea(document.querySelector("textarea#editor_scss"), [basicSetup, sass()]);
// maye kan wo
