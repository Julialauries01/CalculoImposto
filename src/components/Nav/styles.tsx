import { Button } from "@/styles/Button";
import styled from "styled-components";



export const NavBar = styled.div`
  margin: -8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
    max-width: 100rem;
    width: 100%;
    height: 10vh;
    background-color: #003D76;
    font-family: "Montserrat", sans-serif;

    

  `
  export const Logo = styled.p`
  display: flex;

  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  cursor: pointer;
  color: white;
  
  `
    export const ButtonNav = styled(Button)`
      background: #003d7681;
`
