import { useState } from "react";
import Todo from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([])

  const [id,setId]=useState(1)

  const handleClick = (event)=>{
    event.preventDefault()
    const form = event.target
    const task = form.task.value
    const description = form.description.value
    setId(id+1)
    const values = {
      task,
      description,
      id
    }
    setTodos([...todos,values])
    form.reset()
    
     
  }
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center text-white mb-[100px]">
        My ToDo List App
      </h1>
      <div className=" rounded-xl lg:w-[70%] w-full mx-auto bg-gray-800">
        <div>
          <form onSubmit={handleClick} className="flex gap-10 px-20 pt-20 pb-10">
            <input
            name="task"
              type="text"
              className="w-full"
              placeholder="Task"
            />
            <input
              type="text"
              name="description"
              id=""
              className="w-full "
              placeholder="Description"
            />
            <input
              type="submit"
              value="Add"
              className="bg-green-500 text-white px-20 py-2 rounded-lg"
            />
          </form>
            <hr className="mx-10 py-10 text-gray-900"/>
        </div>
        <Todo todos={todos}/>
      </div>
    </div>
  );
}

export default App;
