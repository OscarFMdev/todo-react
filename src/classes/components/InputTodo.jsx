import {  useState } from "react";

const InputTodo = ({addTodoProps}) => {

  const [input, setInput] = useState('Hello');

  const handleOnChange = ({target}) => {
    setInput({[target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title.trim()) {
      addTodoProps(input.title);
      setInput({
        title: "",
      })
    } else {
      alert('Please write an item');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input.title}
        className="input-text"
        placeholder="Add Todo..."
        name="title"
        onChange={handleOnChange} />
      <button className="input-submit">Submit</button>
    </form>
  )
}
export default InputTodo;