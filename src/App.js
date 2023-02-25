import { useState } from 'react';
import './App.css';
import Categoriescard from './components/Categories_card';
import Modal from './components/Modal';
import Nav from './components/Nav';

function App() {
  const [todoCategories, setTodoCategories] = useState([]);
  //This taskDate is a string of input from the input element on the Modal, data is stored
  //here first before it is transferred to the taskArray which contains an array of all todo
  //yet to be done.
  const [taskData, setTaskData]= useState("");
  //This is used to store the category of task to be done
  const [title, setTitle]=useState("");
  const [taskArray, setTaskArray]=useState([]);
  //Helps to collect info on background color of task category cards
  const [color,setColor]= useState("");
  
  const submitColor = (color)=>{
       setColor(color);
       console.log(color)
 
  }
  const displayModal = ()=>{
    const element = document.getElementById("modal");
    element.classList.remove("hidden");
  }
  const closeModal = ()=>{
    const element = document.getElementById("modal");
    element.classList.add("hidden");
  }
  const Addtask = ()=>{
    
    setTaskArray([...taskArray, taskData]);
    setTaskData("");
    
  }
  const addCategoryTodo = ()=>{
      const emptyObject = {};
      emptyObject['Title'] = title;
      emptyObject['Tasks'] = taskArray;
      emptyObject["color"] = color;
      setTodoCategories([...todoCategories, emptyObject]);
      setTitle("");
      setTaskArray([]);
      setColor("");
      const element = document.getElementById("modal");
      element.classList.add("hidden");
      console.log(todoCategories);
  }
  return (
    <>
    <Nav/>
    <button onClick={ displayModal}id="custom-btn">
    <i className="text-2xl text-blue-500 fas fa-plus"></i>
      </button>
    <main className='font-poppins flex justify-center px-3 py-3 relative  '>
      <div className=' cards   w-[90%]'>
        
     <Categoriescard todoCategories={todoCategories}/>
      </div>
    </main>
    <Modal closeModal={closeModal} title={title} setTitle={setTitle} setTaskData={setTaskData} taskData={taskData} taskArray={taskArray} 
    Addtask={Addtask} addCategoryTodo={addCategoryTodo} submitColor={submitColor}/>
    </>
  );
}

export default App;
