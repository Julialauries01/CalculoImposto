"use client";
import { Button } from "@/styles/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  Main,
  OptionSection,
  ButtonCancel,
  SectionButs,
  ButtonEditar,
  ContainerInput,
  Input,
} from "./styles";
import { IProductsDTO } from "@/dtos/IProductsDTO";
import { editProduct, fetchProductData } from "@/api/teste";
import { useRouter } from "next/navigation";

interface EditMainProps {
  title: string;
}

const EditMain = async ({
  id,
  categoria,
  nome,
  marca,
  genero,
  preco,
}: IProductsDTO) => {
  //const [product, setProduct] = useState<IProductsDTO>(fetchProductData(categoria,id))

  const { register, handleSubmit } = useForm();
  const router = useRouter()


  async function teste(body: object) {
    try {
      const res = await editProduct(body)

      if(res){
        router.push("/AdmPage")
      }      
     

    } catch (error) {
      console.log("caiu 1 erro");
    }
  }

  const onSubmit: SubmitHandler<any> = async (data) => {
    
    const body = {
      id: id,
      categoria,
      nome: data.nome,
      preco: data.preco,
      marca: data.tipo,
      genero: data.tipo

    } 
    console.log(data)
  

    if (body) {
      await teste(body).then(res => console.log('éstranha'));
    }
  };

  return (
    <Main>
      <Container>
        <OptionSection>

          {id ? (
            <ContainerInput id="Forms" onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder={nome}
                {...register("nome")}
                required
              />
              <Input
                type="text"
                placeholder={genero ? genero : marca}
                {...register("tipo")}
                required
              />
              <Input
                type="text"
                placeholder={preco}
                {...register("preco")}
                required
              />
            </ContainerInput>
          ) : (
            <ContainerInput id="Forms">
              <Input id="nome" type="text" onChange={(e) => e.target.value} />
              <Input
                id="tipo"
                type="text"
                value={genero ? genero : marca}
                onChange={(e) => e.target.value}
              />
              <Input
                id="preco"
                type="text"
                value={preco}
                onChange={(e) => e.target.value}
              />
            </ContainerInput>
          )}
          <SectionButs>
            <ButtonEditar type="submit" form="Forms">
              Editar
            </ButtonEditar>
            <Link href={"/AdmPage/"}>
              <ButtonCancel>Cancelar</ButtonCancel>
            </Link>{" "}
          </SectionButs>
        </OptionSection>
      </Container>
    </Main>
  );
};

export default EditMain;
