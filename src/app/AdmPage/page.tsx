import React from 'react';
import MainAdm from "../../components/MainAdm"
import Nav from '@/components/Nav/page';
import { ProductContextComponent } from '@/contexts/productcontext';


export default function index () {
  return (
    <>
      <Nav name='Julia' type='Admin'/>
      <MainAdm/>

</>
  )
}
