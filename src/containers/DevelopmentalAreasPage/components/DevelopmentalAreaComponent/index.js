import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';
import DevelopmentalAreaButton from '../styles/DevelopmentalAreaButton';
import AreaContainer from '../styles/AreaContainer';
import Container from '../../../../components/Container';

/* Areas to show */
const AREAS = {
  physical: {
    id: 1,
    skillId: 23,
    name: 'Physical',
    slug: 'physical',
  },
  socialEmotional: {
    id: 4,
    skillId: 2,
    slug: 'socialEmotional',
    name: 'Social & Emotional',
  },
};

function DevelopmentalArea({ fechedSkills, fetchSkillByIdAction }) {
  const [activeArea, setActiveArea] = useState('physical');
  const currentSkill = fechedSkills && fechedSkills[AREAS[activeArea].skillId];

  useEffect(() => {
    if (!fechedSkills) {
      fetchSkillByIdAction();
    }
  }, []);

  function onClickArea(pressedArea, skillId) {
    setActiveArea(pressedArea);
    if (!fechedSkills[skillId]) {
      fetchSkillByIdAction(skillId);
    }
  }

  return (
    <Container>
      <Helmet title="Kinedu - Developmental areas" />
      <AreaContainer activeArea={activeArea}>
        <h3>Areas</h3>
        <ButtonListContainer>
          {Object.values(AREAS).map(({
            id, name, slug, skillId,
          }) => (
            <DevelopmentalAreaButton
              key={id}
              area={slug}
              isActive={activeArea === slug}
              onClick={() => onClickArea(slug, skillId)}
            >
              {name}
            </DevelopmentalAreaButton>
          ))}
        </ButtonListContainer>
        <h2>{currentSkill.title}</h2>
        <p>{currentSkill.description}</p>
      </AreaContainer>
      {currentSkill.milestones.map(({ title }) => (
        <>
          <h5>{title}</h5>
          <h6>Usually achieved by: 2-4 months</h6>
        </>
      ))}
    </Container>
  );
}

DevelopmentalArea.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
};

export default DevelopmentalArea;
