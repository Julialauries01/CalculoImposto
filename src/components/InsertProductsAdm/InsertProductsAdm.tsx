import { Button } from "@/styles/Button";
import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'


import {
  Container,
  Main,
  OptionSection,
  Subline,
  ButtonCancel,
  SectionButs,
  ButtonEditar,
  ContainerInput,
  Input,
} from "./styles";

import { addProduct } from "@/api/teste";
import { IProductsDTO } from "@/dtos/IProductsDTO";

interface EditMainProps {
  title: string;
}

const InsertProductsAdm = ({ title }: EditMainProps) => {
  const { register, handleSubmit } = useForm();

  const router = useRouter()


  async function onSubmit(data: IProductsDTO) {
    let obj;

    if (data.categoria === "livros") {
      obj = {
        nome: data.nome,
        preco: data.preco,
        categoria: data.categoria,
        genero: data.tipo,
      };
    } else {
      obj = {
        nome: data.nome,
        preco: data.preco,
        categoria: data.categoria,
        marca: data.tipo,
      };
    }

    console.log(obj);

    if (obj) {
      try {
        const res = await addProduct(obj).then((res) =>

        router.push("/AdmPage")
        );
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <Main>
      <Container>
        <OptionSection>
          <Subline>
            Escolha a categoria do seu Produto
            <select {...register("categoria")}>
              <option value="livros">Livros</option>
              <option value="celulares">Celulares</option>
            </select>
          </Subline>

          <ContainerInput onSubmit={handleSubmit(onSubmit)} id="forms">
            <Input type="text" {...register("nome")} />
            <Input type="text" {...register("tipo")} />
            <Input type="text" {...register("preco")} />
          </ContainerInput>

          <SectionButs>
            <ButtonEditar type="submit" form="forms">
              Salvar
            </ButtonEditar>

            <Link href={"/AdmPage/"}>
            <ButtonCancel>
              Cancelar
            </ButtonCancel>
            </Link>
          </SectionButs>
        </OptionSection>
      </Container>
    </Main>
  );
};

export default InsertProductsAdm;
