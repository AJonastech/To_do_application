import React from 'react'

function Doneitems(item) {
    return (
       <p className='mb-2'>
        <input type="checkbox" checked/>
        <s>{item.desc}</s>
       </p>
    )
}

export default Doneitems
