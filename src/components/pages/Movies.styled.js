import styled from "styled-components";



  export const SearchForm = styled.form`
       display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
     
      
  `;

   export const InputStyle = styled.input`
       display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid #e7e9fc;
        border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
  font-family: 'Roboto', 'sans-serif';
        color: #d2d4e5;
}
     
  `;

    export const ButtonForm = styled.button`
    display: inline-block;
    font: inherit;
  font-size: 18px;
  width: 48px;
  height: 48px;
  border: 0;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
  opacity: 1;
}
      
  `;
