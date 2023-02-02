import React, { useState } from "react";

function CreateArea(props) {
    const [inputTextarea,SetInputTextarea] = useState("")
    const [inputText, SetInputText] = useState("")
    function handleOnChangeInput(event) {
        SetInputText(event.target.value)
    }
    function handleOnChangeInputArea(event) {
        SetInputTextarea(event.target.value)
    }
    function handleOnClick(e) {
        const noteDetail = {
            title: inputText,
            content: inputTextarea
        }
        props.onSubmit(noteDetail)
        SetInputTextarea("")
        SetInputText("")
        e.preventDefault()
        

    }
    
  return (
    <div>
      <form>
        <input onChange={handleOnChangeInput} name="title" placeholder="Title" value={inputText} />
        <textarea onChange={handleOnChangeInputArea} value={inputTextarea} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleOnClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
