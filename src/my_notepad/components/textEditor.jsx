import React, {useRef} from "react";
import EditIcon from "../Icons/edit.svg";
import CheckIcon from "../Icons/check.svg";
import InfoIcon from "../Icons/info.svg";

const TextEditor = (props) => {
  const textAreaRef = useRef(null);
  const titleRef = useRef(null);

  const {note} = props;
  if (note == undefined) return <div className="no-selected"> No note selected </div>;
  if (note.editable && textAreaRef != null) textAreaRef.current.focus();

  const focusOut = () => {
    props.handleTitleChange(note, titleRef.current.value);
  };

  return (
    <div className="text-editor">
      <div className="text-editor-title">
        <input
          id="title"
          onChange={() =>
            props.handleTitleCharChange(note.id, titleRef.current.value)
          }
          ref={titleRef}
          onBlur={focusOut}
          type="text"
          autoComplete="off"
          value={note.title}
        />
      </div>

      <textarea
        value={note.content}
        onChange={() =>
          props.handleOnTextChange(note.id, textAreaRef.current.value)
        }
        readOnly={!note.editable}
        ref={textAreaRef}
      />

      <div className="toolbox">
        {/* <img src={InfoIcon} width={40} height={40} /> */}
        <img
          onClick={() => props.handleEditClick(note)}
          src={note.editable ? CheckIcon : EditIcon}
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default TextEditor;
