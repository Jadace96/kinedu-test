import styled from 'styled-components';
import Container from '../../../../components/Container';

const AreaContainer = styled(Container).attrs(() => ({
  className: 'AreaContainer',
}))`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.3px;
  transition: 300ms linear;
  color: ${({ theme }) => theme.colors.prymaryTextColor};
  background-color: ${({ theme, activeArea }) => theme.colors[`${activeArea}PrimaryColor`]};

  #areasTitle {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.5rem;
  }
`;

export default AreaContainer;
