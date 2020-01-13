import styled from 'styled-components';
import Container from 'components/Container';

const DevelopmentalAreaContainer = styled(Container).attrs(() => ({
  className: 'DevelopmentalAreaContainer',
}))`
  align-items: center;
  flex-direction: column;
`;

export default DevelopmentalAreaContainer;
