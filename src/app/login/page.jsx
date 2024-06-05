
'use client'

import React,{useState} from 'react'

const page = () => {
    const [data,setData] = useState({name:"",email:""})

    return (
        <div className='p-10'>
            <form action="" onSubmit={handleSubmit}>
                <div className='font-bold mb-3'>Login</div> <br/>

                <input type="text" placeholder='email' className='p-2 border bg-slate-200 mb-4' /> <br/>
                <input type="password" placeholder='password' className='p-2 border bg-slate-200 mb-4'  /> <br/>
                <button type="submit" className='px-5 bg-purple-300 '>Login</button>
            </form>

        </div>
    )
}

export default page
