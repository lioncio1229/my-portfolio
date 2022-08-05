import React from "react";
import DeleteIcon from "../Icons/delete.svg";
import CloseIcon from "../Icons/close.svg";

const DeleteNote = ({ handleHideDeleteNote, handleDeleteNote }) => {
  return (
    <div className="window">
      <div className="window-title">
        DELETE
        <img
          style={{ left: "12px" }}
          src={DeleteIcon}
          alt="delete"
          width={27}
          height={27}
        />
        <img
          onClick={handleHideDeleteNote}
          style={{ right: "12px", cursor: "pointer" }}
          src={CloseIcon}
          alt="Close"
          width={23}
          height={23}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          color: "var(--pallete4)",
          overflow: "hidden",
          padding: '10px'
        }}
      >
        Do you really want to delete this?
      </p>

      <div onClick={handleDeleteNote} className="button button-s2 make-center"> YES </div>
    </div>
  );
};

export default DeleteNote;
