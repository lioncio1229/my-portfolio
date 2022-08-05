import React, { useRef } from "react";
import { DeleteIcon, TextFileIcon } from "../SVGIcons";

const Note = ({ note, noteClick, handleShowDeleteNote}) => {
  const deleteButtonRef = useRef();

  const getClass = (isSelected) => {
    return "note-item " + (isSelected ? "selected-color" : "default-color");
  };

  const handleMouseOver = () => {
    deleteButtonRef.current.style.display = "block";
  };

  const handleMouseOut = () => {
    deleteButtonRef.current.style.display = "none";
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      className={getClass(note.selected)}
      onClick={noteClick}
    >

      <div className="textfile-icon">
        <TextFileIcon width={30} height={30} defaultColor='#FFF78B' />
      </div>

      <div style={{ color: "white", width : '70%'}}>{note.title}</div>
      <small>{note.dateModified === '' ? 'Date Created '+note.dateCreated : 'Date Modified '+note.dateModified}</small>

      <div className="delete-button" ref={deleteButtonRef} onClick={(e) => {e.stopPropagation(); handleShowDeleteNote(note);}}>
        <DeleteIcon width={30} height={30} defaultColor={'#FFF78B'} hoverColor={'red'}/>
      </div>
    </div>
  );
};

export default Note;
