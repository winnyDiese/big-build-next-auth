
'use client'

import { signIn } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import React,{useState} from 'react'

const Login = () => {
    const [data,setData] = useState({name:"",email:""})
    const router = useRouter()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await signIn('credentials',{
            ...data,
            redirect:false
        })
        
        // router.push('/dashboard')
    }

    const {data:session} = useSession()
    if(session) router.push("/dashboard")

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

export default Login
