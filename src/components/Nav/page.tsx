'use client'

import Link from 'next/link'
import React from 'react'
import { ButtonNav, Logo, NavBar } from './styles'
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { UserProps } from '@/app/page';


const Nav = ({ name, type}:UserProps) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
   <NavBar>
    <Link href={'/'}>
      <Logo>
        Framework de Software
    </Logo>   
    </Link>
   
   <h2>Bem-vindo, {name}.</h2>
   { type ===  'Admin' ?
    <Link href={"/AdmPage/"}>
        <ButtonNav>
            MENU
      </ButtonNav>
    </Link> : ''
   }

</NavBar>  )
}

export default Nav