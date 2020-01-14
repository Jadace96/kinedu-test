import styled from 'styled-components';
import Container from 'components/Container';

const DevelopmentalAreaContainer = styled(Container).attrs(() => ({
  className: 'DevelopmentalAreaContainer',
}))`
  background-color: ${({ theme }) => theme.colors.developmentalAreaBackground};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 2rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    padding: 3rem;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 60%;
    margin: 0 auto;
  }
`;

export default DevelopmentalAreaContainer;
