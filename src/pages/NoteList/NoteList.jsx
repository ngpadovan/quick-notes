import { useState, useEffect } from "react";
import * as notesAPI from "../../utilities/notes-api";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import Note from "../../components/Note/Note";

export default function NoteList({user}) {

    const [notes, setNotes] = useState([]);

    useEffect(function() {
        async function getNotes() {
          const notes = await notesAPI.getAll();
          setNotes(notes);
        }
        getNotes();
      }, [])

      const notesList = notes.map((note, idx) => (
        <Note note={note} setNotes={setNotes} key={idx}/>
      ));
    

    async function handleAdd(newNoteData) {
        const newNote = await notesAPI.addNote(newNoteData);
        setNotes([...notes, newNote]);
      }



      return (
        <div >
          <NewNoteForm user={user} handleAdd={handleAdd}/>
          <h1>Notes</h1>
            {!notes.length ? <p>No Notes Yet</p> :  notesList}
        </div>
      );
    }