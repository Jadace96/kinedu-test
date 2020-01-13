import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';
import DevelopmentalAreaButton from '../styles/DevelopmentalAreaButton';
import AreaContainer from '../styles/AreaContainer';

import Container from '../../../../components/Container';
import FontBold from '../../../../components/FontBold';
import FontLight from '../../../../components/FontLight';
import SkillContainer from '../styles/SkillContainer';

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
  const areThereMilestonesToShow = currentSkill && currentSkill.milestones.length > 0;

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
        <FontBold id="areasTitle">Areas</FontBold>
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
        {currentSkill && (
          <SkillContainer>
            <FontBold id="skillTitle">
              Skill: {currentSkill.title}
            </FontBold>
            <FontLight id="skillDescription">{currentSkill.description}</FontLight>
          </SkillContainer>
        )}
      </AreaContainer>
      {areThereMilestonesToShow
        && currentSkill.milestones.map(({ title }) => (
          <Container>
            <div>{title}</div>
            <small>Usually achieved by: 2-4 months</small>
          </Container>
        ))}
    </Container>
  );
}

DevelopmentalArea.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
};

export default DevelopmentalArea;
