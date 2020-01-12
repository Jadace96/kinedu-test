import styled from 'styled-components';

const ButtonListContainer = styled.div.attrs(() => ({
  className: 'DevelopmentalAreasButtonListContainer',
}))`
  width: 70%;
  display: flex;
  overflow: hidden;
  border: 1px solid;
  margin-bottom: 2rem;
  border-radius: 2rem;
`;

export default ButtonListContainer;
