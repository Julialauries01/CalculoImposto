import { Button } from '@/styles/Button'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface ContainerTableProps{
  active: boolean;

}

export const Main = styled.main`
  margin-top: 100px;

  flex-direction: row;
  display: flex;
  justify-content: center;
    max-width: 900px;
    width: 100%;
    display: flex;
    
  `
  export const Container = styled.div` 
  margin-top: 100px;

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
export const SectionResume = styled.div`
background-color: white;
margin: 20px;
border-radius: 10px 10px 0 0;
width: 20rem;
border-bottom: 1px solid #b9b9b9;
`

export const SectionValue = styled.div`
background-color: white;
padding: 20px 0 0 0 ;
margin: 20px;
margin-top: -20px;
border-radius: 0 0 10px 10px;
width: 20rem;
height: 100px;

`
  export const Subline = styled.h2`
  padding: 10px;
  margin-left: 20px;
  justify-content: space-between;
  font-size: 14px;  
  font-weight: normal;
  display: flex;
  align-items: center;
  max-width: 90%;

  @media (max-width: 500px) {
        font-size: 14px;
        margin-bottom:48px;
      }

`
export const ResumeValue = styled.div`
  display: inline-flex;
`
export const ValorProduto = styled.h3`
  display: inline-flex;
  padding: 10px;
  margin-left: 10rem;
  justify-content: space-around;
  font-size: 14px;  
  font-weight: normal;
  text-align: center;
  display: flex;

  max-width: 80%;

  @media (max-width: 500px) {
        font-size: 14px;
        margin-bottom:48px;
      }
`


export const InfoLine = styled.h2`
  padding: 3px;
  margin-left: 20px;
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

  `
  export const ButtonAbout =  styled(Button)`
    background: #003d7681;
  `

export const SectionInput = styled.div`
background-color: white;
margin: 20px;
border-radius: 10px;
display: flex;
flex-direction: column;



`

export const ListContainer = styled.ul`

padding: 30px 30px 30px 30px;
margin: 0;
display: flex;
flex-direction: column;
gap: 10px;
`

export const ListColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr 4fr 1fr;
  padding: 0;
  margin: 8px;
  font-size: 14px;  
  justify-content: space-between;
  text-align: center;

  :first-child{
    text-align: start;
  }
`

export const ListItem = styled.div`
gap: 15px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
`
export const ContainerTable = styled.li <ContainerTableProps>`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.active ? '#003d767e' : '#f4f4f4' };
  color: ${props => props.active ? '#ffffff' : '#0e0d0d' };
  border: 1px solid grey; 
  border-radius: 8px;
  list-style: none;
  font-size: 14px;  
  font-weight: normal;
  width: 100%;
  height: 25px;

`
  
export const ContainerNome = styled.li`
  margin-left: 5px;
  height: 1rem;

`
export const ContainerCategory = styled.li`
  height: 1rem;

`
export const ContainerPrice = styled.li`
  height: 1rem;

`
export const ButtonsContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 10px;

`

export const IconContainer = styled.div`
display: flex;
justify-content: end;
align-items: end;
color: black;
cursor: pointer;
`
