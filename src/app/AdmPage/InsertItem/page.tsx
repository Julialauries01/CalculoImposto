'use client'
import React from 'react'
import Nav from '../../../components/Nav/page';
import InsertProductsAdm from '../../../components/InsertProductsAdm/InsertProductsAdm';


const index = () => {
  return (
   <>
   <Nav name='Julia' type='Admin'/>

   <InsertProductsAdm title='Livro'/>  
  </>
)
}

export default index