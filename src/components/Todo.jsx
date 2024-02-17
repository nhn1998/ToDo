import { useEffect, useState } from "react";

const Todo = ({ todos }) => {

  const [active, setActive] = useState('todo');
  const [completedItems, setCompletedItems] = useState([]);
  const [incomplete,setIncomplete] = useState([])
//   console.log(incomplete)
  useEffect(()=>{
    setIncomplete([...todos])
  },[todos])

  const handleComplete = (taskId) => {
    // Find the task by taskId and move it to completedItems
    const completedTask = todos.find(task => task.id === taskId);
    setCompletedItems(prev => [...prev, completedTask]);

    // Remove the completed task from the todos
    const updatedTodos = todos.filter(task => task.id !== taskId);
    setIncomplete(updatedTodos)
    // Update the state with the remaining incomplete tasks
    // This will trigger a re-render with only the incomplete tasks
  }
  

  return (
    <div className="pb-10">
      <div className="mx-20 flex gap-[1px] pb-10">
        <button onClick={() => setActive('todo')} className={` shadow px-6 py-5 text-white font-bold ${active === 'todo' ? 'bg-green-500' : 'bg-gray-600'}`}>Todo</button>
        <button onClick={() => setActive('completed')} className={` shadow px-6 py-5 text-white font-bold ${active === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>Completed</button>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {incomplete?.map(to => (
          (active === 'todo' && to.task) && (
            <div key={to.id} className={`flex justify-between mx-20 bg-gray-200 px-10 py-5 rounded`}>
              <div>
                <h1 className="text-2xl font-bold">{to.task}</h1>
                <p>{to.description}</p>
              </div>
              <div>
                <button className={`bg-green-500 px-5 py-2 text-white`} onClick={() => handleComplete(to.id)}>Complete</button>
                <button className="bg-red-500 ml-2 font-bold px-5 py-2 text-white">Delete</button>
              </div>
            </div>
          )
        ))}
        {active === 'completed' && completedItems.map(completedTask => (
          <div key={completedTask.id} className={`flex justify-between mx-20 bg-gray-200 px-10 py-5 rounded`}>
            <div>
              <h1 className="text-2xl font-bold">{completedTask.task}</h1>
              <p>{completedTask.description}</p>
            </div>
            <div>
            <button className="bg-red-500 ml-2 font-bold px-5 py-2 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
