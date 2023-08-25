import styled from "styled-components";
import {devices} from "../index";

export const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${require('../../images/bg_img.jpg')});
  background-position: center;
  background-size: cover;
  max-height: 50vh;
  padding: 40px 0;
  @media only screen and ${devices.sm} {
    max-height: 90vh;
  }
  
`;
export const StyledFrom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 40vw;
  @media only screen and ${devices.md} {
    min-width: 60vw;
  }
  @media only screen and ${devices.sm} {
    min-width: 80vw;
  }
`;
export const StyledHeaderTextOfForm = styled.h1`
  color: white;
  text-align: center;
`;
export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;
export const StyledInput = styled.input`
  border: none;
  outline: none;
  
`;
export const StyledExtraInfoOfForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  @media only screen and ${devices.md} {
    flex-direction: column;
  }
`;
export const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: white;
`;
export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s ease;
  outline: none;
  @media only screen and ${devices.md} {
    min-width: 40vw;
  }
  @media only screen and ${devices.sm} {
    min-width: 60vw;
  }
  :focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  ::-ms-expand {
    display: none;
  }
  option {
    background-color: #fff;
    color: #333;
  }
  option:hover {
    background-color: #f0f0f0;
  }
`;
export const StyledEachSelectAndLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;