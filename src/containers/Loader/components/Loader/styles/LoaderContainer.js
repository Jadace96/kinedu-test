import styled from 'styled-components';
import Container from 'components/Container';

const LoaderContainer = styled(Container).attrs(() => ({
  className: 'LoaderContainer',
}))` 
  width: 100%;
  height: 100%;  
  position: fixed;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.loaderBackground};

  .FontBold {
    font-size: 1.1rem;
    text-align: center;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme.colors.prymaryTextColor};
  }
`;

export default LoaderContainer;
