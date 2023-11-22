import styled from "styled-components"

export const Button = styled.button`
  
  display: flex;
  align-items:center;
  justify-content: center;

  min-height: 25px;
  min-width: 90px;

  padding: 0 15px;

  border: none;
  outline: none;
  cursor: pointer;
  font: inherit;

  font-size: 12px;
  color: white;
  transition: 0.5s;
   
  border-radius: 3px;

  &:hover
{
  background: #ccc;
  font-weight: bold;
}  
  `
