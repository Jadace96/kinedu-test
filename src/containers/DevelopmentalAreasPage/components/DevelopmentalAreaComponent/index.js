/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { AREAS, COMPLETED } from 'settings/developmentalAreas';

import Container from 'components/Container';
import FontLight from 'components/FontLight';
import FontBold from 'components/FontBold';

import Button from '../styles/DevelopmentalAreaButton';
import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';

import SkillContainer from '../styles/SkillContainer';
import AreaContainer from '../styles/AreaContainer';
import MilestoneListItem from '../MilestoneListItem';

const milestonesAnswer = {};
function DevelopmentalArea({ fechedSkills, fetchSkillByIdAction }) {
  const [activeArea, setActiveArea] = useState(AREAS[0]);
  const currentSkill = fechedSkills && fechedSkills[activeArea.skillId];

  const areThereMilestonesToShow = currentSkill && currentSkill.milestones.length > 0;

  useEffect(() => {
    if (!fechedSkills) {
      fetchSkillByIdAction();
    }
  }, []);

  function onClickArea(pressedArea, index) {
    const areaDataToSet = { ...pressedArea, index };
    setActiveArea(areaDataToSet);

    if (!fechedSkills[pressedArea.skillId]) {
      fetchSkillByIdAction(pressedArea.skillId);
    }
  }

  function onMilestoneButtonPressed(milestone, milestoneStatus) {
    if (!milestonesAnswer[milestone.id]) {
      milestonesAnswer[milestone.id] = {};
    }
    milestonesAnswer[milestone.id].answer = milestoneStatus;

    console.log('milestonesAnswer: ', milestonesAnswer);
    // currentSkill.milestones.answer = status;
  }

  return (
    <Container>
      <Helmet title="Kinedu - Developmental areas" />
      <AreaContainer activeArea={activeArea.slug}>
        <FontBold id="areasTitle">Areas</FontBold>
        <ButtonListContainer>
          {AREAS.map((area, index) => (
            <Button
              key={area.id}
              area={area.slug}
              buttonsLength={AREAS.length}
              onClick={() => onClickArea(area, index)}
              isActive={activeArea.slug === area.slug}
            >
              {area.name}
            </Button>
          ))}
        </ButtonListContainer>
        {currentSkill && (
          <SkillContainer>
            <FontBold>Skill: {currentSkill.title}</FontBold>
            <FontLight>{currentSkill.description}</FontLight>
          </SkillContainer>
        )}
      </AreaContainer>
      {areThereMilestonesToShow
        && currentSkill.milestones.map((milestone) => (
          <MilestoneListItem
            key={milestone.id}
            milestone={milestone}
            onMilestoneButtonPressed={onMilestoneButtonPressed}
          />
        ))}
      <Button
        defaultButton
        milestoneStatus={COMPLETED}
        onClick={() => {
          const currentActiveAreaIndex = activeArea.index || 0;
          const nextActiveArea = AREAS[currentActiveAreaIndex + 1];
          onClickArea(nextActiveArea, currentActiveAreaIndex + 1);
        }}
      >
        {activeArea.index === AREAS.length - 1 ? 'Finish assessment' : 'Next'}
      </Button>
    </Container>
  );
}

DevelopmentalArea.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
};

export default DevelopmentalArea;
