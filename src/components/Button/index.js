import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
  className: 'Button',
}))`  
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.7rem;  
  font-weight: bold;
  align-items: center;
  border-radius: 2rem;
  justify-content: center;
`;

export default Button;
