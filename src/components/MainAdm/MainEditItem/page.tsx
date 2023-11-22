'use client'
import { Button } from "@/styles/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ButtonExperiment,
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
} from "./styles"
import { IProductsDTO } from '@/dtos/IProductsDTO'
import server from "@/api/config";
import { fetchProductData } from "@/api/teste";

interface EditMainProps {
  title: string
}


const EditMain = async ( {id,categoria,nome,marca,genero,preco}:IProductsDTO ) => {

//const [product, setProduct] = useState<IProductsDTO>(fetchProductData(categoria,id)) 
  
  return (
    <Main>
      <Container>
        <OptionSection>
          <Subline>

            </Subline>

            {
              id ? 
              <ContainerInput>
              <Input type="text" value={nome}/>
              <Input type="text" value={genero ? genero  : marca }/>
              <Input type="text" value={preco}/>
              </ContainerInput> : 
              <ContainerInput>
              <Input type="text" value={nome} onChange={e => e.target.value }/>
              <Input type="text" value={genero ? genero  : marca } onChange={e => e.target.value }/>
              <Input type="text" value={preco} onChange={e => e.target.value }/>
              </ContainerInput>
            }

             <SectionButs>
            <ButtonEditar>Editar</ButtonEditar>

            <ButtonCancel>Cancelar</ButtonCancel>
            </SectionButs>

        </OptionSection>

      </Container>

     
    </Main>
  );
};

export default EditMain;
