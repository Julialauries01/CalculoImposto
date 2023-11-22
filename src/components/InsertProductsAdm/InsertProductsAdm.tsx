import { Button } from "@/styles/Button";
import React from "react";
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
} from "./styles";

import * as S from "./styles";

interface EditMainProps {
  title: string
}

const InsertProductsAdm = ( { title }: EditMainProps) => {
  return (
    <Main>
      <Container>
        <OptionSection>
          <Subline>
            {title}
            </Subline>


            <S.ContainerInput>
            <S.Input type="text"/>
            <S.Input type="text"/>
            <S.Input type="text"/>
            </S.ContainerInput>


             <SectionButs>
            <ButtonEditar>Editar</ButtonEditar>

            <S.ButtonCancel>Cancelar</S.ButtonCancel>
            </SectionButs>

        </OptionSection>

      </Container>

     
    </Main>
  );
};

export default InsertProductsAdm;
