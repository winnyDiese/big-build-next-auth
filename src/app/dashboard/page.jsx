

import { redirect } from 'next/navigation'
import { useSession, signOut } from "next-auth/react";
import React from 'react'

const Dashboard = () => {
  const {data:session,status} = useSession()

  if(!session) redirect('/login')

  return (
    <div className="p-20">
        <p className='text-3xl'>Dashboard</p>
    </div>
  )
}

export default Dashboard
