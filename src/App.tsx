import { useState } from "react"
import './app.css';

function App() {

  const [todo, setTodo] = useState(['']);
  const [text, setText] = useState("");

  const onChangeText = ({ target: { value } }) => {
    console.log(value);
    setText(value);
  }

  const addTask = () => {
    setTodo([
      ...todo,
      text
    ]);
    setText("");
  }


  return (
    <div className="mt-2">
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={addTask}>Add</button>

      {
        todo.map((todo) => {
          return (
            <div className='todo' key={todo}>
              {todo}
            </div>
          );
        })
      }
    </div>
  )
}

export default App
