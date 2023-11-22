'use client'
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Container,
  Main,
  OptionSection,
  SectionInput,
  Subline,
  ListContainer,
  ListColumnContainer,
  IconContainer,
} from "./styles";
import { IProductsDTO } from "@/dtos/IProductsDTO";
import { ListProducts } from "./ListaProducts/listProducts";
import fakeData from '../../utils/products.json'
import { IndexResume } from "./Resume/IndexResume";
import { ProductContext } from "@/contexts/productcontext";
import { FaPlus } from 'react-icons/fa6'
import Link from 'next/link';
import { getItems } from "@/api/teste";
import axios from "axios";

interface MainUserProps {
  containerResume: boolean,
  containerPlus: boolean,
  sublineState: boolean,
  isAdmUser: boolean 
}

type CategoryProps = {
  categoria: 'livros'|'celulares'
}


export function  MainUser ({containerResume,containerPlus,sublineState,isAdmUser}:MainUserProps) {
  const [products, setProducts] = useState<IProductsDTO[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedState, setSelectedState] = useState('')

  const {  user } = useContext(ProductContext)

  async function Teste(category : string) {
    try {
      const res = await axios.get(`/api/${category}`)
      if (res) {
        console.log(res.data)
        setProducts(res.data)
        setSelectedCategory(category)
      }
    } catch(error) {
      console.log(error)
    }
  }

 

  return (
    <Main>
      <Container>
        <OptionSection>
          <Subline>
            Escolha o Produto
            <select onChange={(e) => Teste(e.target.value)}>
              <option value="" >Selecione o produto</option>
              <option value="celulares" >Celulares</option>
              <option value="livros" >Livros</option>
              </select>   
   
          </Subline>

          {sublineState && <Subline>
            Escolha o Estado
            <select onChange={(e) => setSelectedState(e.target.value)}>
              <option value="0" disabled >Selecione o estado</option>
              <option value="sp">São Paulo</option>
              <option value="sc">Santa Catarina</option>
            </select>   

          </Subline>}
        </OptionSection>
        <SectionInput>{/*
          <Subline>{selectedCategory}</Subline>
          
          <h1>{selectedProduct}</h1>*/}
          <ListContainer >
            {!selectedCategory && (
              <h1>Lista vazia</h1>
            )}
            {selectedCategory && (
              <>
                <ListColumnContainer >
                  <span>Nome</span>

                  <span>{ 'livro'=== 'livro' ? 'Gênero': 'Validade'}</span>

                  <span>Preço</span>
                  { containerPlus &&

                  <IconContainer>
                  <Link href='/AdmPage/InsertItem' >
                  <FaPlus size={20}
                  /> 
                    </Link>

                  </IconContainer>
}

                </ListColumnContainer>
                {products.length!== 0 && products.map(item => 
                
                  <ListProducts key={item.id} categoria={item.categoria} id={item.id} marca={item.marca} genero={item.genero} nome={item.nome} preco={item.preco} imposto={item.imposto} total={item.total} setSelectedProduct={() => setSelectedProduct(item.id)} editButton={isAdmUser} />  

                )}

              </>
            )}
       
          </ListContainer>
        </SectionInput>
      </Container>
{ containerResume &&
    <IndexResume selectedProduct={selectedProduct}/>
}
    </Main>
  );
};

export default MainUser;
