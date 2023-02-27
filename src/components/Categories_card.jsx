/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect,useRef } from 'react';
import TodoItems from './Todo-Items'
import Doneitems from './Done_items'
import Nosearch from './Nosearch';
function Categoriescard({updateTask, todoCategories,setTodoCategories, edit, setEdit, deleteCategory,searchData, toggleTaskState}) {
  const refOne = useRef(null);
useEffect(()=>{
  document.addEventListener("click",handleClickOutside, true)},
  [])

const handleClickOutside = (e)=>{
if(!refOne.current.contains(e.target)){
var elementList =document.getElementsByClassName("settings");
for (let i= 0; i< elementList.length; i++){
  elementList[i].classList.add("hidden");
}

}
}
const displaySettings = (index)=>{
  document.getElementsByClassName("settings")[index].classList.remove("hidden");
}
var test =0;

    return (
        <>
        {
               todoCategories.filter((post) => {
                if (searchData === '') {
                  return post;
                } else if (post.Title.toLowerCase().includes(searchData.toLowerCase())) {
                  return post;
                }else{
                  test =1;
                }
              }).map((categories, index)=>(
          <div key={index} id="Categories" className={'relative card mt-4    rounded-br-3xl  px-3 py-3 text-white bg-'+categories["color"]+'-400'}>
            
              
            <h3 className="font-bold flex justify-between mb-3 text-xl"> {categories["Title"]}
            <button onClick={()=>{ displaySettings(index)}}><i className="fas fa-ellipsis-v"></i></button>
            </h3>
            <div  ref={refOne} className='hidden settings absolute z-10 border-t-2 border-r-2 border-gray-100 top-[-10px] right-[-10px] w-[80%] bg-white text-xl p-4 text-gray-500'>
            
              <p className='border-b-2 border-gray-100 mb-2'>
              <button onClick={()=>{deleteCategory(index)}} >Delete Category</button>
              </p>
              <p className='border-b-2 border-gray-100 mb-2'>

              
              <button>Add new tasks</button>
              </p>
            </div>
          {
            // eslint-disable-next-line array-callback-return
            categories["taskDetails"].map(function(Tasks, id) {if (Tasks["status"]===true){
              
                   return (<TodoItems updateTask={updateTask} edit={edit} setEdit={setEdit} todoCategories={todoCategories} toggleTaskState={toggleTaskState} key={id} keyid={id} index={index} desc={Tasks["detail"]}/>)
                }
               
          })
          }
           
    
          
           <h4> Accomplished tasks </h4>
           {
            // eslint-disable-next-line array-callback-return
            categories["taskDetails"].map(function(Tasks, id) {if (Tasks["status"]===false){
              
                   return (<Doneitems key={id} toggleTaskState={toggleTaskState} keyid={id} index={index}  desc={Tasks["detail"]}/>)
                }
               
          })
          }
          
          
          </div>
          
            ))
         
    } 
   
    </>
    )
}

export default Categoriescard
