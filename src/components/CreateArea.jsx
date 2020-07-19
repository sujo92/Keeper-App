import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function HandleNote(e) {
    //   console.log("title change");
    const { name, value } = e.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    //  console.log(currTitle);
  }

  function onSubmit(e) {
    props.onAdd(note);
    e.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={HandleNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={HandleNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
