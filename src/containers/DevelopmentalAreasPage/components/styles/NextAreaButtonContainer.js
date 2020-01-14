import styled from 'styled-components';
import Container from 'components/Container';

const NextAreaButtonContainer = styled(Container).attrs(() => ({
  className: 'NextAreaButtonContainer',
}))`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.milestonItemBackground};
  
  .DevelopmentalAreaButton {
    width: 70%;
    margin-bottom: 3rem;
  }
  
  @media ${({ theme }) => theme.device.tablet} {
    .DevelopmentalAreaButton {
      min-width: 45%;
      font-size: 1.1rem;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    .DevelopmentalAreaButton {
      min-width: 35%;      
    }
  }
`;

export default NextAreaButtonContainer;
