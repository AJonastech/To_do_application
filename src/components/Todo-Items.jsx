import React from 'react'

function TodoItems({desc, keyid,toggleTaskState,index}) {
    return (
        <p  className='form-group mb-2 text-sm md:text-lg'>
       
            <input className='mr-2 ' type="checkbox"onClick={()=>{toggleTaskState(index,keyid)}}/>
      <label>{desc}</label>  
            
        
      </p>
    )
}

export default TodoItems
