import {useState, React} from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Image from "@tiptap/extension-image";
import StarterKit from '@tiptap/starter-kit';
// import Dropcursor from "@tiptap/extension-dropcursor";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faHeading, faItalic, faParagraph, faStrikethrough, faUndo, faRedo, faList, faListOl } from '@fortawesome/free-solid-svg-icons'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
<FontAwesomeIcon icon={faBold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FontAwesomeIcon icon={faItalic} />

      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
                <FontAwesomeIcon icon={faStrikethrough} />

      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
                <FontAwesomeIcon icon={faCode} />

      </button>
   
   
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
                <FontAwesomeIcon icon={faParagraph} />

      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
                <FontAwesomeIcon icon={faHeading} />

      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button> 
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>*/}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
                      
      <FontAwesomeIcon icon={faList} />

      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
      <FontAwesomeIcon icon={faListOl} />

      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
                        <FontAwesomeIcon icon={faCode} />

      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button> */}
      <button onClick={() => editor.chain().focus().undo().run()}>
      <FontAwesomeIcon icon={faUndo} />

      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
      <FontAwesomeIcon icon={faRedo} />

      </button>
    </>
  )
}
const ExpressionsEditor =  () => {

  

  const [txt, setTxt] = useState("");

  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, StarterKit],
    content: ``,
  });

const saveText = () => {
  
  const text = editor.getText();
  // txt = "";
  if (text.length > 0)
    setTxt(text);
    return text;
  
}

const getSavedText = () => {
  // saveText();
  console.log(saveText());

}

  const addImage = () => {
    const url = window.prompt("Enter link to image");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

//   const cont = () => {
//      setTxt( editor.getText());
//     }

//   const showSome = () => { 
//     console.log(` ${txt}`)
//  }
 

  return (
    <div className="expression">
      <h4>Express yourself!</h4>
      <MenuBar className="richTextMenu" editor={editor} />
      <EditorContent editor={editor} />

      <button className="imgBtn" onClick={addImage}>Link an image</button>
      {/* <button className='saveBtn' onClick={saveText}>save</button>     
      <button className='saveBtn' onClick={getSavedText}>getSaved</button>     
      */}
     {/* <button className='mintBtn'>mint</button> */}

      {/* <button className="imgBtn" onClick={cont}>set content</button>
      <button className="imgBtn" onClick={showSome}>show some part</button> */}


    </div>
  );
};

ExpressionsEditor.displayName = 'ExpressionsEditor';

export default ExpressionsEditor;