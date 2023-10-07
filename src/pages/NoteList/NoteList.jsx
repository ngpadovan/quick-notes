import { useState, useEffect } from "react";
import * as notesAPI from "../../utilities/notes-api";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NoteList({user}) {

    async function handleAdd(newNoteData) {
        const newNote = await notesAPI.addNote(newNoteData);
        setNotes([...notes, newNote]);
      }

    const [notes, setNotes] = useState([]);

    return (
        <NewNoteForm user={user} handleAdd={handleAdd}/>
    )

}