import { useState } from 'react';
import './App.css';
import Doneitems from './components/Done_items.jsx';
import Nav from './components/Nav';
import TodoItems from './components/Todo-Items';

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
      {
        todoCategories.map((categories, index)=>(
      <div id="Categories" className='mt-3 w-[300px] rounded-br-3xl  px-3 py-3 text-white bg-green-500'>
        
          
        <h3 className="font-bold mb-3 text-xl"> {categories["Title"]}</h3>
      {
        categories["Tasks"].map((Tasks, index)=>(
               <TodoItems key={index} desc={Tasks}/>
        ))
      }
       

      
       <h4> Accomplished tasks</h4>
       <Doneitems desc="Feed the Dogs"/>
       <Doneitems desc=" Flush the toilet"/>
      
      </div>
        ))
} 
    </main>
    <section className=' hidden flex items-center justify-center' id="modal">
        <main  id="modal-container" className='relative px-4 py-5 w-[300px] bg-white '>
        <button className='bg-white' onClick={ closeModal} id="custom-btn1">
    <i className="text-2xl text-blue-500 fas fa-times"></i>
      </button>
          <div>
          
         <input placeholder='Title' value={title} onChange={(e)=>{
            setTitle(e.target.value)
         }} className=' font-bold w-[100%] outline-none border-b-2 border-gray-200' type="text"/>
          </div>
          <br/>
          <div className='mb-1'>
            <input  onChange={(e)=>{
  
                setTaskData(e.target.value)
               
                console.log(taskData)
            }} value={taskData} className='w-[100%] outline-none border-b-2 border-gray-200' placeholder='Enter the task here' type="text"/>
          </div>
      
          <div>
           {
            taskArray.map((value, index)=>(
              <p className="text-gray-500 text-sm"key={index}>{value}</p>
            ))
            }
          </div>
          <div>
             
         <button onClick = {
          ()=>{
            //taskArrayManager.push(taskData);
            setTaskArray([...taskArray, taskData]);
            setTaskData("");
            console.log(taskArray);
          }
         }><i className='fas mr-1 fa-plus'></i> Add task</button>
          </div>
          <div>
          <br/>
         <button onClick={addCategoryTodo} className='bg-blue-500 text-white px-5 py-1'>Save</button>
          </div>
         
        </main>
    </section>
    </>
  );
}

export default App;
