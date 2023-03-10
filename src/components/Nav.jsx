import React from 'react'

function Nav({searchData, setSearchData,findData}) {
    return (
       
            <nav className='  flex justify-between px-2 py-3  bg-blue-500'>
       <h1 className='text-white font-BioRhyme md:text-3xl text-xl'> WORKFLOW
       
       </h1>
       <div className=' relative'>
        <input onChange={(e)=>{setSearchData(e.target.value); findData(e.target.value)}} value={searchData} className=" pl-7 px-2 py-2 font-poppins rounded-md"type="text" />
        <i className="absolute left-2 top-3 fas fa-search"></i>
       </div>
    </nav>
       
    )
}

export default Nav
