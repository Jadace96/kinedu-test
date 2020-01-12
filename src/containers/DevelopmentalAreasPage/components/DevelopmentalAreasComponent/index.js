import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// import Button from '../../../../components/Button';

import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';
// import DevelopmentalAreaContainer from '../styles/DevelopmentalAreaContainer';
import DevelopmentalAreaButton from '../styles/DevelopmentalAreaButton';
import AreaContainer from '../styles/AreaContainer';
import Container from '../../../../components/Container';

const AREAS = [
  {
    id: 1,
    name: 'Physical',
    area: 'physical',
  },
  {
    id: 4,
    area: 'socialEmotional',
    name: 'Social & Emotional',
  },
];

function DevelopmentalAreas({ fechedSkills, fetchSkillByIdAction }) {
  const [activeArea, setActiveArea] = useState(1);

  useEffect(() => {
    if (!fechedSkills) {
      fetchSkillByIdAction();
    }
  }, []);

  return (
    <Container>
      <Helmet title="Kinedu - Developmental areas" />
      <AreaContainer activeArea={activeArea}>
        <h1>Areas</h1>
        <ButtonListContainer>
          {AREAS.map(({ id, name, area }) => (
            <DevelopmentalAreaButton
              key={id}
              area={area}
              isActive={activeArea === id}
              onClick={() => setActiveArea(area)}
            >
              {name}
            </DevelopmentalAreaButton>
          ))}
        </ButtonListContainer>
      </AreaContainer>
    </Container>
  );
}

DevelopmentalAreas.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
};

export default DevelopmentalAreas;
