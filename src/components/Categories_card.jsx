import React from 'react'
import TodoItems from './Todo-Items'
import Doneitems from './Done_items'
function Categoriescard({todoCategories}) {
    return (
        <>
        {
              todoCategories.map((categories, index)=>(
          <div key={index} id="Categories" className={'card mt-4    rounded-br-3xl  px-3 py-3 text-white bg-'+categories["color"]+'-400'}>
            
              
            <h3 className="font-bold mb-3 text-xl"> {categories["Title"]}</h3>
          {
            categories["taskDetails"].map((Tasks, index)=>(
             
                   <TodoItems key={index} desc={Tasks["detail"]}/>
               
            ))
          }
           
    
          
           <h4> Accomplished tasks </h4>
           <Doneitems desc="Feed the Dogs"/>
           <Doneitems desc=" Flush the toilet"/>
          
          </div>
            ))
    } 
    </>
    )
}

export default Categoriescard
