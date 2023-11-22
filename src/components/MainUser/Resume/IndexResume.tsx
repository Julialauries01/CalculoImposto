import React, { use, useContext, useEffect } from 'react'
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

 interface ResumeProps {selectedProduct: string

}

export const IndexResume = ({selectedProduct}:ResumeProps) => {

  const {product} = useContext(ProductContext)


  return (
    <Container>
      <SectionResume>
        <Subline>Resumo</Subline>
        <ResumeValue>
        <InfoLine>Preço</InfoLine>

        <ValorProduto>R$ {product.price}</ValorProduto>
        </ResumeValue>

        <ResumeValue>
        <InfoLine>ICMS</InfoLine>

        <ValorProduto>R$ {product.price * 18 / 100} </ValorProduto>
        </ResumeValue>
      </SectionResume>

      <SectionValue>
      <ResumeValue>
        <InfoLine>Total</InfoLine>

        <ValorProduto>R$ { product.price + (product.price * 18 / 100)} </ValorProduto>
        </ResumeValue>        </SectionValue>
    </Container>
   )
}
