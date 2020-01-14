import React from 'react';
import Helmet from '../../components/Helmet';

import NotFoundTitle from './styles/NotFoundTitle';
import NotFoundContainer from './styles/NotFoundContainer';

function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Helmet title="Kinedu - Page not found" />
      <NotFoundTitle>Page Not Found</NotFoundTitle>
    </NotFoundContainer>
  );
}

export default NotFoundPage;
