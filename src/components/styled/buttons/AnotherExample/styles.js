import styled, { keyframes } from "styled-components";

// Define keyframes for the radiating effect
const radiate = keyframes`
  0% {
    box-shadow: 0 0 0 0 yellow;
  }
  100% {
    box-shadow: 0 0 0 10px rgba(255, 255, 0, 0);
  }
`;

export const StyledButton = styled.button`
  background: black;
  border: 0.5em dashed yellow;
  color: white;
  transition: all 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
  margin: 5rem;

  &:hover {
    background: yellow;
    border-color: black;
    color: black;
    animation: ${radiate} 0.8s infinite;
    transform: scale(1.5);
    transform: rotate(${props => props.rotate}deg);
  }
`;
