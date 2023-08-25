import styled from "styled-components";

export const StyledBookCard = styled.div`
  background-color: #f3f2f2;
  padding: 10px;
  max-height: 450px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledImageOfBook = styled.img`
  max-width: 60%;
  height: auto;
  margin: 10px auto;
  -webkit-box-shadow: 5px 12px 20px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 12px 20px -8px rgba(0,0,0,0.75);
  box-shadow: 5px 12px 20px -8px rgba(0,0,0,0.75);
`;
export const StyledBookCategory = styled.a`
  color: #ccc;
`;
export const StyledTitleOfBook = styled.h3`
  color: black;
`;
export const StyledAuthorsOfBook = styled.p`
  color: #ccc;
`;