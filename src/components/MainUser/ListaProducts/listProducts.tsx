import React, { useContext } from 'react';
import { FaPencil } from 'react-icons/fa6'
import { FaTrash } from 'react-icons/fa6'
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
import { deleteItem } from '@/api/teste';
import { IProductsDTO } from '@/dtos/IProductsDTO';

interface ListProductProps {
  id: string;
  categoria: string;
  nome: string;
  preco: number;
  imposto: number;
  marca?: string;
  genero?: string;
  total: number;
  editButton: boolean;
  productItem: IProductsDTO
  setSelectedProduct: (id: string) => void;
}

export  function ListProducts({
  categoria,
  id,
  nome,
  preco,
  genero,
  marca,
  setSelectedProduct,
  editButton,
  productItem,
}: ListProductProps) {

  const { product , getProduct, handleSetProduct } = useContext(ProductContext);

  async function teste() {
    try {
      const res  = await deleteItem(categoria,id)
      console.log(res)
    }catch (error) {
      console.log('error na requisicao')
    }
  }

  return (
    <ListItem key={id} onClick={() => handleSetProduct(productItem)}>
      <ContainerTable active={product?.id === id}>
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

      {editButton && (
        <ButtonsContainer>
          <Link href={`/AdmPage/EditItem/${categoria}/${id}`}>
            <FaPencil color="#000" />
          </Link>
          <FaTrash onClick={ () =>  teste()} />
        </ButtonsContainer>
      )}
    </ListItem>
  );
}
