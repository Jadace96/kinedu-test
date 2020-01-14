import styled from 'styled-components';

import Container from 'components/Container';

const NotFoundContainer = styled(Container).attrs(() => ({
  className: 'NotFoundContainer',
}))`    
  text-align: center;
`;

export default NotFoundContainer;
