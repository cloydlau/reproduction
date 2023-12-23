import { JSONEditor } from "vanilla-jsoneditor";

const jsonEditor = new JSONEditor({
  target: document.querySelector("#jsonEditor"),
  props: {
    mode: 'text',
  }
})

window.setJSONValueUnderTextMode = () => {
  jsonEditor.set({
    json: {
      randomNumber: Math.random()
    }
  })
}
