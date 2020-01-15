import React from 'react';
import PropTypes from 'prop-types';

import FontBold from 'components/FontBold';

import LoaderImage from './styles/LoaderImage';
import LoaderContainer from './styles/LoaderContainer';

function LoaderComponent({ showLoader }) {
  if (showLoader) {
    return (
      <LoaderContainer>
        <LoaderImage />
        <FontBold>Loading...</FontBold>
      </LoaderContainer>
    );
  } return null;
}

LoaderComponent.propTypes = {
  showLoader: PropTypes.bool,
};

export default LoaderComponent;
