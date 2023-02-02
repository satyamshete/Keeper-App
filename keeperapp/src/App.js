import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './Styles.css'
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import Note from './Components/Note';
// import Allnotes from './Components/Allnote';
import CreateArea from './CreateArea';



function App() {

  const [allNote, SetallNote] = useState([]) /// all notes gets aved in array of objects

  function onAdd(noteDetail) //function for add note into array
  {
    SetallNote((previoueNote) =>
    {
      return [...previoueNote,noteDetail]
    }
    )
    // console.log(allNote);
  }
  function displayNote()   //function for display notes from array
  {
    return(
    allNote.map((e,index) => {
      return(<Note
      key = {index}
      id = {index}
      title = {e.title}
      content = {e.content}
      ondelete = {onDelete}
    />)})
    )
  }

  function onDelete(noteDetailID)  //function for delete note from array
  {
    SetallNote((previoueNote) =>
    {
      return previoueNote.filter((e,index) =>  index !== noteDetailID )
    }
    )
    // console.log(allNote);
  }
  


  return (
    <div>
      <Heading></Heading>
      <CreateArea
        onSubmit = {onAdd}
      />
      {displayNote()}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
