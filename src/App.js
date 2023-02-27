/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import './App.css';
import Categoriescard from './components/Categories_card';
import Modal from './components/Modal';
import Nav from './components/Nav';
import product from "./components/images/product.png";

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
  const [color,setColor]= useState("blue");
  const [searchData, setSearchData]= useState("");
  const [edit, setEdit] =useState("");
  const [msg,setMsg] = useState(["",""])
 
  const updateTask =(index,keyid,data)=>{
    todoCategories[index]["taskDetails"][keyid]["detail"]=data;
    console.log("test")
    setTodoCategories([...todoCategories]);
    console.log(todoCategories);
  
  }
  const findData = (catTitle)=>{
    catTitle.toLowerCase();
     todoCategories.map((category)=>{
       
     })
  }
  const deleteCategory = (index)=>{
    const filterData = todoCategories.filter((arr, id)=>{
      if (index !== id){
         return arr;
      }
    });
    setTodoCategories([...filterData]);
 }
const toggletaskState = (Category, task)=>{
 if (todoCategories[Category]["taskDetails"][task]["status"]==true){

  todoCategories[Category]["taskDetails"][task]["status"]=false;

setTodoCategories([...todoCategories]);
 }else{

  todoCategories[Category]["taskDetails"][task]["status"]=true;

setTodoCategories([...todoCategories]);
 }
}

  const submitColor = (color)=>{
     
       setColor(color);
 
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
    if (taskData===""){
      msg[1]="This input cannot be empty";
      setMsg([...msg])
    }else if(taskArray.length>3){
      msg[1]="You can only have 4 tasks per category."
      setMsg([...msg]);
      }else{
      setTaskArray([...taskArray, taskData]);
      setTaskData("");
    }
    
    
  }
  const addCategoryTodo = ()=>{
    if (title === ""){
      msg[0]="This input cannot be empty.";
      console.log(msg);
   setMsg([...msg]);
    }else if(taskArray.length===0 ){
   msg[1]="Please create at least one task.";
   setMsg([...msg]);
    }else{
      const emptyObject = {};
      emptyObject['Title'] = title;
      emptyObject["taskDetails"] = taskArray.map((tasks)=>{
             return {"detail": tasks, "status":true}
      });
      emptyObject["color"] = color;
      
      setTodoCategories([...todoCategories, emptyObject]);
      setTitle("");
      setTaskArray([]);
      setColor("");
      const element = document.getElementById("modal");
      element.classList.add("hidden");
  }}
  function noTask(){
  if (todoCategories.length===0){
    console.log("hello");
    return (<div className=' md:w-[450px] mx-auto w-[80%] mt-10 '>
       
    <img className="w-[100%] "src={product}/>
    
    <h2 className='text-center text-gray-500 text-2xl'>Click the plus icon to add a task category</h2>
  </div>);
  
  }
}
  return (
    <>
    
    <Nav searchData={searchData} findData={findData}setSearchData={setSearchData}/>
    {noTask()}
    <button onClick={ displayModal}id="custom-btn">
    <i className="text-2xl text-blue-500 fas fa-plus"></i>
      </button>
    <main className='font-poppins flex justify-center px-3 py-3 relative  '>
      <div className=' cards   w-[90%]'>
        
     <Categoriescard updateTask={updateTask} edit={edit} setEdit={setEdit} searchData={searchData} todoCategories={todoCategories} deleteCategory={deleteCategory} toggleTaskState={toggletaskState}/>
      </div>
    </main>
    <Modal msg={msg} setMsg={setMsg} closeModal={closeModal} title={title} setTitle={setTitle} setTaskData={setTaskData} taskData={taskData} taskArray={taskArray} 
    Addtask={Addtask} addCategoryTodo={addCategoryTodo} submitColor={submitColor}/>
    </>
  );
}

export default App;
