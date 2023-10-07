import { useState } from "react";


export default function NewNoteForm () {
const [newNote, setNewNote] = useState({

})

function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
  }
  
    return (
        <>
        <h1>newnoteform</h1>
        <input name="text" type="textarea"
        onChange={handleChange} value={NewNoteForm.text} />

        </>
    )
}