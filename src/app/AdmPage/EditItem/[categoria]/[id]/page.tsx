'use client '
import React, { useContext, useEffect } from 'react'
import MainEditItem from '../../../../../components/MainAdm/MainEditItem/page';
import Nav from '../../../../../components/Nav/page';
import { IProductsDTO } from '@/dtos/IProductsDTO'
import {
  Container,
  Main,
  OptionSection,
  SectionInput,
  Subline,
  ButtonCancel,
  SectionButs,
  ButtonEditar,
  ContainerInput,
  Input,
} from "@/components/MainAdm/MainEditItem/styles"
import { fetchProductData } from '@/api/teste';


const index =  async ({params }: {params: { categoria: string ,id:string}}) => {

const product : IProductsDTO = await fetchProductData(params.categoria, params.id)


  return (
  
  <>
   < Nav name='Julia' type='Admin'/>

    <MainEditItem id={product.id} categoria={product.categoria}  imposto={product.imposto} nome={product.nome} preco={product.preco} total={product.total} genero={product.genero} marca={product.marca}/>
   </>
   
)
}

export default index