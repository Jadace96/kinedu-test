import styled from 'styled-components';

const Container = styled.div.attrs(() => ({
  className: 'Container',
}))`
  width: auto;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
`;

export default Container;
