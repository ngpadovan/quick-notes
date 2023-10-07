import { useState } from "react";
// import * as notesAPI from '../../utilities/notes.api'


export default function NewNoteForm ({user, handleAdd}) {
const [newNote, setNewNote] = useState({
    text: '',

});

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
        onChange={handleChange} value={newNote.text} />
        <button type="submit">Add Note</button>
        </form>
        </>
    )
}