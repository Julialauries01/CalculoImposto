import { Button } from '@/styles/Button'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export const Main = styled.main`

  flex-direction: row;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 50px;

  `
  export const Container = styled.div` 
  margin: 30px;
  background-color:#E0E0E0;
  border-radius: 10px;
  justify-content: space-around;
  `


export const OptionSection =  styled.div`
background-color: white;
margin: 20px;
border-radius: 10px;
width: 35rem;
`

  export const Subline = styled.h2`

  align-items: center;
  justify-content: center;
  text-align: center;
 

  padding: 10px;
  justify-content: space-around;
  font-size: 14px;  
  font-weight: normal;


  @media (max-width: 500px) {
        font-size: 14px;
        margin-bottom:48px;
      }

`

  export const ButtonExperiment = styled(Button)`
    margin-right: 7.5px;
    background: #003d7681;

  `
export const SectionButs = styled.div`
margin-left: 25.4rem;
display: flex;
`

export const ButtonEditar = styled(Button)`
display: flex;
background: #007635;
margin: 15px;
`

export const ButtonCancel = styled(Button)`
display: flex;
background: #990202;
margin: 15px;
`

export const SectionInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
margin: 20px;
border-radius: 10px;
width: 45rem;
`

export const ContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;

&:focus-within {
  border-color: #000;
}
`

export const Input = styled.input`
padding: 0.5rem 4rem;
border-radius:3px;
margin: 10px;

background-color: #F4F4F4;
border-color: #7778785b;
margin-left: 30px;
`
