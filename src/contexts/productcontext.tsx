'use client'
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import fakeData  from "@/utils/products.json"
import { IProductsDTO } from '@/dtos/IProductsDTO'


interface ContextProps {
   children: React.ReactNode
}

interface ProductProps {
   user : string
   getProduct: (category:string) => void
   category: string
   product : IProductsDTO
   handleSetProduct: (product : any) => void
}

export const ProductContext = createContext<ProductProps>({
} as ProductProps)


export function ProductContextComponent ({ children }:ContextProps) {

   const [user,setUser] = useState('Julia')
   const [ category, setCategory ] = useState('')
   const [ product, setProduct ] = useState<IProductsDTO>( {} as IProductsDTO)

 
   function getProduct(category:string){
      console.log(category)
   }

   function handleSetProduct(product : IProductsDTO ){
      setProduct(product)
   }

  return (
      <ProductContext.Provider value={ {  user,getProduct ,category , product, handleSetProduct} }>
         {
            children
         }
      </ProductContext.Provider>
   )
}
