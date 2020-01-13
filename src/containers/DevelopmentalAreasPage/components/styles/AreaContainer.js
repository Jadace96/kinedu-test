import styled from 'styled-components';
import Container from '../../../../components/Container';

const AreaContainer = styled(Container).attrs(() => ({
  className: 'AreaContainer',
}))`
  width: 100%;
  text-align: center;
  transition: 300ms linear;
  color: ${({ theme }) => theme.colors.prymaryTextColor};
  background-color: ${({ theme, activeArea }) => theme.colors[`${activeArea}PrimaryColor`]};
`;

export default AreaContainer;