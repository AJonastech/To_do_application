import React from 'react'
import TodoItems from './Todo-Items'
import Doneitems from './Done_items'
function Categoriescard({todoCategories, toggleTaskState}) {
    return (
        <>
        {
              todoCategories.map((categories, index)=>(
          <div key={index} id="Categories" className={'card mt-4    rounded-br-3xl  px-3 py-3 text-white bg-'+categories["color"]+'-400'}>
            
              
            <h3 className="font-bold flex justify-between mb-3 text-xl"> {categories["Title"]}
            <button><i class="fas fa-ellipsis-v"></i></button>
            </h3>
          {
            // eslint-disable-next-line array-callback-return
            categories["taskDetails"].map(function(Tasks, id) {if (Tasks["status"]===true){
              
                   return (<TodoItems toggleTaskState={toggleTaskState} key={id} keyid={id} index={index} desc={Tasks["detail"]}/>)
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
