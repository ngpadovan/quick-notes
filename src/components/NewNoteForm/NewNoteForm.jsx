import { useState } from "react";


export default function NewNoteForm () {
const [newNote, setNewNote] = useState({

})

function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const newNoteData = {...newNote};
    newNoteData.user = user;
    handleAdd(newNoteData);
    setNewNote({text: ''})
  }

    return (
        <>
        <h1>newnoteform</h1>
        <form onSubmit={handleSubmit}>
        <input name="text" type="textarea"
        onChange={handleChange} value={NewNoteForm.text} />
        <button type="submit">Add Note</button>
        </form>
        </>
    )
}