
'use client'

import React,{useState} from 'react'

const page = () => {
    const [data,setData] = useState({name:"",email:""})

    return (
        <div className='p-10'>
            <form action="" onSubmit={handleSubmit}>
                <div className='font-bold mb-3'>Login</div> <br/>

                <input value={data.email} onChange={e=>setData({...data,email:e.target.value})} type="email" placeholder='email' className='p-2 border bg-slate-200 mb-4' /> <br/>
                <input value={data.password} onChange={e=>setData({...data,password:e.target.value})} type="password" placeholder='password' className='p-2 border bg-slate-200 mb-4'  /> <br/>
                <button type="submit" className='px-5 bg-purple-300 '>Login</button>
                
            </form>

        </div>
    )
}

export default page
