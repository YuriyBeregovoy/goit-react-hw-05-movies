import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const HeaderStyles = styled.header`
       
 top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content:center;

  
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 16px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      
  `;

export const LinkStyles = styled(NavLink)`
gap: 20px;
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:focus, &:hover {
   
    background-color: orangered;
  }

`;

export const LinkNav = styled.nav`
        max-width: 1158px;

`;