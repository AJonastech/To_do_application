import { useState } from 'react';
import './App.css';
import Categoriescard from './components/Categories_card';
import Modal from './components/Modal';
import Nav from './components/Nav';

function App() {
  const [todoCategories, setTodoCategories] = useState([]);
  const [taskData, setTaskData]= useState("");
  const [title, setTitle]=useState("");
  const [taskArray, setTaskArray]=useState([]);
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
      emptyObject["color"] = "green"
      setTodoCategories([...todoCategories, emptyObject]);
      setTitle("");
      setTaskArray([]);
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
    <main className='font-poppins flex-wrap justify-around px-3 py-3 relative flex '>
     <Categoriescard todoCategories={todoCategories}/>
    </main>
    <Modal closeModal={closeModal} title={title} setTitle={setTitle} setTaskData={setTaskData} taskData={taskData} taskArray={taskArray} 
    Addtask={Addtask} addCategoryTodo={addCategoryTodo}/>
    </>
  );
}

export default App;
