import React, { Component } from "react";
import "./notepad_stylesheet.css";
import Header from "./header";
import Notes from "./notes";
import TextEditor from "./textEditor";
import DeleteNote from "./deleteNote";

class App extends Component {
  state = {
    notes: [],
    deleteWindowEnable : false
  };

  noteForDeletion = null;
  selectedNoteIndex = -1;

  handleNoteClick = (currentNote) => {
    const stateNotes = this.state.notes;
    const notes = [...stateNotes];
    for (let i = 0; i < notes.length; i++) {
      const note = { ...notes[i] };
      if(currentNote.id === stateNotes[i].id)
      {
        note.selected = true;
        this.selectedNoteIndex = i;
      }
      else note.selected = false;
      notes[i] = note;
    }
    this.setState({ notes });
  };

  handleAddNote = (title) => {
    if(title === '') return;
    const notes = [...this.state.notes];
    const len = notes.length;
    let newNote = {
      id: len == 0 ? 0 : notes[len-1].id + 1,
      title: title,
      content: "",
      dateCreated: new Date().toLocaleDateString(),
      dateModified: '',
      selected: false,
      editable: false
    }
    notes.push(newNote);
    this.setState({notes});
  }

  handleEditClick = (note) => 
  {
    const stateNotes = this.state.notes;
    let index = stateNotes.findIndex(obj => {return obj.id == note.id});

    const notes = [...stateNotes];
    let currentNote ={...notes[index]};
    currentNote.editable = !currentNote.editable;
    if(!currentNote.editable)
      currentNote.dateModified = new Date().toLocaleDateString();
    notes[index] = currentNote;

    this.setState({notes});
  }

  handleOnTextChange = (id, text) => {
    const stateNotes = this.state.notes;
    let index = stateNotes.findIndex(obj => {return obj.id == id});
    const notes = [...stateNotes];

    let currentNote ={...notes[index]};
    currentNote.content = text;
    notes[index] = currentNote;
    
    this.setState({notes});
  }

  showDeleteNote = (note) => {
    this.noteForDeletion = note;
    this.setState({deleteWindowEnable : true});
  }

  hideDeleteNote = () => {
    this.noteForDeletion = null;
    this.setState({deleteWindowEnable : false});
  }

  handleDeleteNote = () => {
    if(this.noteForDeletion == null) return;

    const stateNotes = this.state.notes;
    const targetId = this.noteForDeletion.id;
    let notes = [];
    
    let index = -1;

    for (let i = 0; i < stateNotes.length; i++) {
      if(stateNotes[i].id !== targetId)
        notes.push(stateNotes[i]);

      else if(this.selectedNoteIndex == i)
      {
        index = i == 0 ? (stateNotes.length > 1 ? 0 : -1) : i-1;
        this.selectedNoteIndex = index;
      }
      else if(this.selectedNoteIndex > i){
        this.selectedNoteIndex-=1;
      }
    }

    if(index != -1)
    {
      let noteCopy = {...notes[index]};
      noteCopy.selected = true;
      notes[index] = noteCopy;
    }

    this.setState({notes});
    this.hideDeleteNote();
  }

  handleTitleChange = (note, newTitle) => {
    const stateNotes = this.state.notes;
    const notes = [...stateNotes]
    for (let i = 0; i < notes.length; i++) {
      if(note.id == notes[i].id)
      {
        let noteTemp = {...note};
        noteTemp.title = newTitle;
        noteTemp.dateModified = new Date().toLocaleDateString();
        notes[i] = noteTemp;
      }
    }
    this.setState({notes});
  }

  handleTitleCharChange = (id, text) => {
    const stateNotes = this.state.notes;
    let index = stateNotes.findIndex(obj => {return obj.id == id});
    const notes = [...stateNotes];

    let currentNote ={...notes[index]};
    currentNote.title = text;
    notes[index] = currentNote;
    
    this.setState({notes});
  }

  render() {
    const { notes, deleteWindowEnable} = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="content">
          <div className="notes-wrapper">
            <Notes
              notes={notes}
              handleNoteClick={this.handleNoteClick}
              handleAddNote={this.handleAddNote}
              handleShowDeleteNote={this.showDeleteNote}
            />
          </div>

          <div className="text-editor-wrapper">
            <TextEditor
              note={notes[this.selectedNoteIndex]}
              handleOnTextChange={this.handleOnTextChange}
              handleEditClick={this.handleEditClick}
              handleTitleChange={this.handleTitleChange}
              handleTitleCharChange={this.handleTitleCharChange}
            />
          </div>
        </div>

        <div
          className="delete-note-wrapper"
          style={{ display: deleteWindowEnable ? "block" : "none" }}
        >
          <DeleteNote
            handleHideDeleteNote={this.hideDeleteNote}
            handleDeleteNote={this.handleDeleteNote}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;