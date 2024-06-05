
'use client'

import { redirect } from 'next/navigation'
import { useSession, signOut } from "next-auth/react";
import React from 'react'

const Dashboard = () => {
  const {data:session,status} = useSession()

  if(!session) redirect('/login')
  console.log(session)

  const handleLogout = ()=>{ signOut() }

  return (
    <div className="p-20">
        <p className='text-3xl mb-6'>Dashboard</p>
        <p className='text-sm'>{session?.user?.name}</p>

        <button onClick={handleLogout} className="bg-black p-3 text-white"> Logout </button>
    </div>
  )
}

export default Dashboard
