import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, Dropcursor],
    content: `Write a title and hit enter`,
  });

  const addImage = () => {
    const url = window.prompt("Enter link to image");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="expression">
      <h4>Express yourself!</h4>
      <EditorContent editor={editor} />

      <button className="imgBtn" onClick={addImage}>Link an image</button>
    </div>
  );
};
