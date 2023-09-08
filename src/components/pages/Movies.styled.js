import styled from "styled-components";



  export const SearchForm = styled.form`
       display: flex;
       justify-content: flex-start;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 16px;
     
      
  `;

   export const InputStyle = styled.input`
       display: inline-block;
      
    width: 100%;
  font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.04em;
  border: 1px solid #e7e9fc;
        border-radius: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 20px;
  &::placeholder {
  font-family: inherit;
        color: #d2d4e5;
        font-weight: 400;
}
     
  `;

    export const ButtonForm = styled.button`
    padding: 5px 16px;
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
        letter-spacing: 0.04em;
        color: #4d5ae5;
        border: 1px solid #e7e9fc;
        border-radius: 4px;
        background-color: #f4f4fd;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
          background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
          border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
          box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
          &:hover,
          &:focus {
        color: #ffffff;
        background-color: #404bbf;
        border-color: transparent;
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
          0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
      }
      
  `;
