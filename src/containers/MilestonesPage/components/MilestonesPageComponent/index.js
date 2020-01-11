import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

function AreasPage({ skills, fetchSkillByIdAction }) {
  useEffect(() => {
    if (!skills) {
      fetchSkillByIdAction();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Kinedu - Areas</title>
      </Helmet>
      <h1>Area page</h1>
    </div>
  );
}

AreasPage.propTypes = {
  skills: PropTypes.shape({}),
  fetchSkillByIdAction: PropTypes.func,
};

export default AreasPage;
