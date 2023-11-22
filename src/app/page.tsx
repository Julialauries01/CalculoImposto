'use client'

import { PageContainer } from './styles'
import Nav from '@/components/Nav/page'
import MainUser from '@/components/MainUser'
import Users from '../utils/user.json'
import React, { useEffect, useState } from "react"
import { ProductContextComponent } from '@/contexts/productcontext'


export interface UserProps {
  name: string
  type: string
}

export default function Home() {

  const [type, setType ] = useState('Livro')
  const [user, setUser] = useState<UserProps>({} as UserProps)
  useEffect(() => {
     setUser(Users.users[0])
  }, [])


  return (
    <ProductContextComponent>
        <PageContainer>
        <Nav name={user.name} type={user.type}/>

      
      {/*<EditMain title={type} />*/}
      <MainUser containerResume={true} containerPlus={false} sublineState={true} isAdmUser={false} />

      </PageContainer>
    </ProductContextComponent>
      )
}
