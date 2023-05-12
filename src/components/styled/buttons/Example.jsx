import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`

export function Example() {
  return (<StyledButton>I use local styles</StyledButton>)
}