
import Loader from "./Loader"
import NoteCard from "./NoteCard"

const NoteCardContainer = ({notes, loading}) => {
  return (
    <div className="container">
    <div className="note-has-grid row">

    {/* { notes.map(note => <NoteCard key={note.id} note={note}/>)} */}
        { loading && <Loader loading={loading}/> }

      { notes.map(note => <NoteCard color="blue" key={note.id} note={note}/>) }
      {/* <NoteCard color="purple"/>
      <NoteCard color="blue"/>

      <NoteCard color="green"/>
      <NoteCard color="purple"/>
      <NoteCard color="blue"/>

      <NoteCard color="green"/>
      <NoteCard color="purple"/>
      <NoteCard color="blue"/> */}
      
    </div>
    </div>
  )
}

export default NoteCardContainer