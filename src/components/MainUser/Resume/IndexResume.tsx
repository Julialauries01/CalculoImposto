import React, { use, useContext, useEffect, useState } from 'react'
import {
   Container,
   InfoLine,
   SectionResume,
   Subline,
   SectionValue,
   ResumeValue,
   ValorProduto,
 } from "../styles";
import { ProductContext } from '@/contexts/productcontext';
import axios from 'axios';
import { IProductsDTO } from '@/dtos/IProductsDTO';

 interface ResumeProps {
  selectedProduct: string
  selectedState: string
  selectedCategory: string
}



export const IndexResume = ({selectedProduct,selectedState,selectedCategory}:ResumeProps) => {

  const {product, category} = useContext(ProductContext)

  const stateNumber = category ==="sp" ? "1" : "0"

  const [ currentProduct, setCurrentProduct ] = useState<IProductsDTO>({} as IProductsDTO)

  async function getICMS( ) {

    try {
     const res = await axios.put(`/api/${selectedCategory}/editar/${stateNumber}`,product).then(res =>  res.data)
      if (res){
        setCurrentProduct(res)
      }
    }catch(error){
      console.log(error)
    
    
  }
}
  useEffect(() => {
     const fetch = async () =>  {
      try {
        const res = await getICMS()
        if(res) {
          console.log('retorno fetch')
        }
      }
      catch(error){
        console.log(error)
      }
     }

    fetch()
    
  },[product, category]) 

  return (
    <Container>
      <SectionResume>
        <Subline>Resumo</Subline>
        <ResumeValue>
        <InfoLine>Preço</InfoLine>

        <ValorProduto>R$ {currentProduct.preco}</ValorProduto>
        </ResumeValue>

        <ResumeValue>
        <InfoLine>ICMS</InfoLine>

        <ValorProduto>R$ {Math.round(currentProduct.imposto)} </ValorProduto>
        </ResumeValue>
      </SectionResume>

      <SectionValue>
      <ResumeValue>
        <InfoLine>Total</InfoLine>

        <ValorProduto>R$ {currentProduct.total}</ValorProduto>
        </ResumeValue>        </SectionValue>
    </Container>
   )
}
