import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function HelmetComponent({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

HelmetComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default HelmetComponent;
