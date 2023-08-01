import React, {useState} from 'react';
import './App.css'

const App:React.FC = () => {
  const [name,setName] = useState<string>(""); // array destructuring 
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <>
      <input
      type = "text"
      placeholder = "name? "
      value = {name}
      onChange = {handleInputChange}
      className = "input-class"
      ></input>
      <h1 className="msg">Hello, {name?name:"World"}</h1>
    </>
  )
}

export default App;
