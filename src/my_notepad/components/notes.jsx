import React, { useRef } from "react";
import Note from "./note";
import CreateNote from "./createNote";
import { PlusIcon } from "../SVGIcons";

const Notes = ({ notes, handleNoteClick, handleAddNote, handleShowDeleteNote}) => {
  const createNoteRef = useRef();

  const showCreateNote = () => {
    createNoteRef.current.style.display = "block";
  };

  const hideCreateNote = () => {
    createNoteRef.current.style.display = "none";
  };

  return (
    <div className="notelist">
      <div style={{overflow : 'auto'}}>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            noteClick={() => handleNoteClick(note)}
            handleShowDeleteNote={handleShowDeleteNote}
          />
        ))}
      </div>

      <div className="toolbox">
        <div onClick={showCreateNote}>
          <PlusIcon width={40} height={40} defaultColor={"#8b842b"} hoverColor={"#6D693B"} />
        </div>
      </div>

      <div ref={createNoteRef} className={"create-note-wrapper"}>
        <CreateNote
          handleAddNote={handleAddNote}
          hideCreateNote={hideCreateNote}
        />
      </div>
    </div>
  );
};

export default Notes;
