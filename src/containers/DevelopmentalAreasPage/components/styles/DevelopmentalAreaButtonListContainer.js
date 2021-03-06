import styled from 'styled-components';

const ButtonListContainer = styled.div.attrs(() => ({
  className: 'DevelopmentalAreasButtonListContainer',
}))`
  width: 80%;
  display: flex;
  max-width: 25rem;
  overflow: hidden;
  border: 1px solid;  
  border-radius: 2rem;
`;

export default ButtonListContainer;
