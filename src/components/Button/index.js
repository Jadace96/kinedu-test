import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
  className: 'Button',
}))`  
  border: none;
  display: flex;
  outline: none;
  height: 2.5rem;
  cursor: pointer;
  max-width: 11rem;
  font-weight: bold;
  align-items: center;
  border-radius: 2rem;
  min-width: fit-content;
  justify-content: center;

  :disabled {
    opacity: 0.5;
  }
`;

export default Button;
