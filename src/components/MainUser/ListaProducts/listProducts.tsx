import React, { useContext } from 'react'
import { FaPencil } from 'react-icons/fa6'
import { FaTrash } from 'react-icons/fa6'
import { IconType } from 'react-icons';
import server from '@/api/config';

import {
   ListItem,
   ContainerTable,
   ContainerNome,
   ContainerCategory,
   ContainerPrice,
   ButtonsContainer
 } from "../styles";
import Link from 'next/link';
import { ProductContext } from '@/contexts/productcontext';

interface listProductProps {
   id: string,
   categoria: string,
   nome: string,
   preco: number,
   imposto: number,
   marca?: string,
   genero?: string,
   total: number,
   editButton: boolean,
   setSelectedProduct: (id: string) => void 
}

export function ListProducts  ({categoria ,id,nome,preco,genero,marca,setSelectedProduct,editButton}:listProductProps) {

  const {product,getProduct , handleSetProduct} = useContext(ProductContext)
  

  return (

   <ListItem key={id} onClick={() => getProduct(categoria)}>
                    <ContainerTable active={product?.id == id} >

                    <ContainerNome>
                    <span>{nome}</span>
                    </ContainerNome>
                    <ContainerCategory>
                    <span>{genero} {marca}</span>
                    </ContainerCategory>
                    <ContainerPrice>
                    <span>{preco}</span>
                    </ContainerPrice>

                    </ContainerTable>

                    { editButton &&
                      <ButtonsContainer>
                    <Link href={`/AdmPage/EditItem/${categoria}/${id}`} >
                      <FaPencil color={"#000"} />  
                    </Link>
                    <FaTrash/>
                    </ButtonsContainer>
                    }

                  </ListItem>
  )
}
