


export default function Note({note}) {
    return (
<p>{note.text} - {new Date(note.updatedAt).toLocaleDateString()}</p>

      );
      
    } 


