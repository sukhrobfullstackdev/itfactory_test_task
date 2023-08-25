import styled from "styled-components";
import React from "react";
import {devices} from "../index";
export const StyledCirclesLoader = styled.div`
  margin: 20px 0;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;
export const StyledBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 200px;
  @media only screen and ${devices.md} {
    padding: 20px 100px;
  }
  @media only screen and ${devices.md} {
    padding: 10px 50px;
  }
`;
export const StyledBooksCount = styled.h4`
  text-align: center;
  @media only screen and ${devices.sm} {
    font-size: 16px;
  }
`;
export const StyledBooks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media only screen and ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const StyledLoadMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: black;
`;
export const StyledButton = styled.button`
  background-color: white;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`;