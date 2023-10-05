import { JSONEditor } from "vanilla-jsoneditor";

const content = {
  json: {
    bool: false
  }
};

const jsonEditor = new JSONEditor({
  target: document.querySelector("#jsonEditor"),
  props: {
    content,
    onChange() {
      console.log('onChange')
    },
  }
});

window.programmaticallyUpdateContentUsingSetAPIByMutatingTheOriginalJSON = () => {
  content.json.bool = !content.json.bool
  jsonEditor.set(content);
};

window.programmaticallyUpdateContentUsingSetAPIByCreatingANewJSON = () => {
  content.json.bool = !content.json.bool
  jsonEditor.set({
    json: {
      bool: content.json.bool
    }
  });
};

window.programmaticallyUpdateContentUsingUpdateAPIByMutatingTheOriginalJSON = () => {
  content.json.bool = !content.json.bool
  jsonEditor.update(content);
};

window.programmaticallyUpdateContentUsingUpdateAPIByCreatingANewJSON = () => {
  content.json.bool = !content.json.bool
  jsonEditor.update({
    json: {
      bool: content.json.bool
    }
  });
};
