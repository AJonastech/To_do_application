import React from 'react'
function TodoItems({edit, setEdit,desc,updateTask, keyid,toggleTaskState,index,todoCategories}) {
  const displayEdit = ()=>{
    for (let i = 0; i < document.getElementsByClassName("edit").length; i++){
      document.getElementsByClassName("edit")[i].classList.add("hidden")
    }
    document.getElementsByClassName("edit")[keyid].classList.remove("hidden")
  }
  const closeEdit = ()=>{
    for (let i = 0; i < document.getElementsByClassName("edit").length; i++){
      document.getElementsByClassName("edit")[i].classList.add("hidden")
    }
  }
    return (
        <>
        
        <div  className='form-group mb-2 flex justify-between text-sm md:text-lg'>
       
           <div>
           <input className='mr-2 ' type="checkbox"onClick={()=>{toggleTaskState(index,keyid)}}/>
      <label>{desc}</label> 
            </div> 

             <div className="md:text-xl">
             
            <button  onClick={()=>{setEdit(todoCategories[index]["taskDetails"][keyid]["detail"]); displayEdit()}}> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> </button>

             </div>
        
      </div>
      <div className='relative hidden edit'>
        
        <input className='  text-gray-500 w-[100%] outline-none rounded-sm py-2 px-2' value=
        { edit} onChange={(e)=>{
          setEdit(e.target.value)
       }} type="text" />
        <button onClick={()=>{updateTask(index,keyid, edit); closeEdit()}} className='text-2xl absolute right-2 top-[4px] text-gray-500'><i class="fa fa fa-check-circle"></i></button>
      </div>
      </>
    )
}

export default TodoItems
