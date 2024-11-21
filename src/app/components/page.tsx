"use client"
import { useState } from "react"
import style from '@/app/page.module.css'


export default function ToDo(){

  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      setTaskList((prevTaskList) => [...prevTaskList, taskName]);
      setTaskName("");
    }
  };


  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };


  return(
    <div className={style.appContainer} >
      <div className={style.grid} >
        <div className={style.spaceY10} >
          <input
          type="text"
          name="task"
          id="task"
          value={taskName}
          onChange={handleTaskNameChange}
          placeholder="Enter a task"
          className={style.appInput}
           ></input>
           <div className={style.buttonContainer} >
          <button
           className={style.button}  
           onClick={handleAddTask}
           >Add Task</button>
        </div>
        <ul className="font-normal text-xl space-y-5" >
          {taskList.map((task,index)=>(
            <li
            key={index}
            className={`${style.li}bg-gray-600 text-black px-4 py-2 rounded-2xl w-[400px] flex justify-between item-center`}
             >
              <div className="inline-block w-[250px]" >{task}</div>
             <span>
              <button 
              className="bg-yellow-400 rounded-lg text-xl h-8 w-8 text-white"
              onClick={()=>handleDeleteTask(index)}
              >x</button>
             </span>
             </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}
