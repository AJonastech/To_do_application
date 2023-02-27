import React from 'react'

function Modal({closeModal,msg,setMsg, submitColor, title, setTitle,setTaskData,taskData,taskArray,Addtask,addCategoryTodo}) {
      
  return (
        
    <section className=' hidden flex items-center justify-center' id="modal">
    <main  id="modal-container" className='relative px-4 py-5 w-[300px] bg-white '>
    <button className='bg-white' onClick={ closeModal} id="custom-btn1">
<i className="text-2xl text-blue-500 fas fa-times"></i>
  </button>
      <div>
      
     <input placeholder='Title' value={title} onChange={(e)=>{
      
        setTitle(e.target.value);
        msg[0]=""
        setMsg(msg)
      
     }} className=' font-bold w-[100%] outline-none border-b-2 border-gray-200' type="text"/>
      <p className='text-red-500 text-lg '>{msg[0]}</p>
      </div>
      <br/>
      <div className='mb-1'>
        <input  onChange={(e)=>{

            setTaskData(e.target.value);
            msg[1]="";
            setMsg(msg)
           
        }} value={taskData} className='w-[100%] outline-none border-b-2 border-gray-200' placeholder='Enter the task here' type="text"/>
         <p className='text-red-500 text-lg '>{msg[1]}</p>
      </div>
  
      <div>
       {
        taskArray.map((value, index)=>(
          <p className="text-gray-500 text-sm"key={index}>{value}</p>
        ))
        }
      </div>
      <div>
         
     <button onClick = {Addtask}><i className='fas mr-1 fa-plus'></i> Add task</button>
      </div>
      <br/>
      <div  className='flex '>
       
        <p className='relative mx-1 w-[20px] h-[20px]'>
        <input className='bg-orange-400' type="radio" name="colorSelector" onClick={()=>{submitColor("orange")}} />
        </p>
        <p className='relative mx-1 w-[20px] h-[20px]'>
        <input className='bg-green-400' type="radio" name="colorSelector" onClick={()=>{submitColor("green")}} />
        </p>
        <p className='relative mx-1 w-[20px] h-[20px]'>
         
        <input className='bg-blue-400' type="radio" name="colorSelector" onClick={()=>{submitColor("blue")}} />
        </p>
         <p className='relative mx-1 w-[20px] h-[20px]'>
         <input className='bg-red-400' type="radio" name='colorSelector' onClick={()=>{submitColor("red")}} />
         </p>
      
      
        
      </div>
      <div>
      <br/>
     <button onClick={addCategoryTodo} className='bg-blue-500 text-white px-5 py-1'>Save</button>
      </div>
     
    </main>
</section>
    )
}

export default Modal
