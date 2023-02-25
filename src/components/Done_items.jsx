import React from 'react'

function Doneitems({desc,toggleTaskState, index,keyid}) {
    return (
       <p className='mb-2'>
        <input type="checkbox" onClick={()=>{toggleTaskState(index,keyid)}}defaultChecked/>
        <s>{desc}</s>
       </p>
    )
}

export default Doneitems
