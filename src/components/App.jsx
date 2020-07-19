import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  // const [noteDesc, setNoteDesc] = useState([]);

  function HandleAdd(note) {
    console.log("handle add called");
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function DeleteNote(id) {
    console.log("delete called" + id);
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={HandleAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={DeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
