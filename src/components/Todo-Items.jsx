import React from 'react'

function TodoItems(item,key) {
    return (
        <p key={key}className='form-group mb-2 text-sm md:text-lg'>
          
            <input className='mr-2 ' type="checkbox"/>
      <label>{item.desc}</label>  
            
        
      </p>
    )
}

export default TodoItems
