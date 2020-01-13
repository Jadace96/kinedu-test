import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
  className: 'Button',
}))`
  width: 50%;
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.8rem 0;
  font-size: 0.8rem;
  font-weight: bold;
  align-items: center;
  border-radius: 2rem;
  justify-content: center;
  
  :disabled {
    opacity: 0.5;
  }
`;

export default Button;
