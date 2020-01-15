import styled from 'styled-components';

const LoaderItem = styled.div.attrs(() => ({
  className: 'LoaderItem',
}))`
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.prymaryTextColor};
`;

export default LoaderItem;
