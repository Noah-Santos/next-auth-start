import React from 'react'
import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from 'next/navigation'

export default async function Profile() {
  const authSession = await getServerAuthSession();

  if(!authSession?.user){
    redirect('/');
  }

  return (
    <div>
      {authSession?.user && <UserInfo user={authSession?.user} />}
    </div>
  )
}