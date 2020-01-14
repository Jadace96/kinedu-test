import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { AREAS, COMPLETED } from 'settings/developmentalAreas';

import FontLight from 'components/FontLight';
import FontBold from 'components/FontBold';

import Button from '../styles/DevelopmentalAreaButton';
import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';

import SkillContainer from '../styles/SkillContainer';
import AreaContainer from '../styles/AreaContainer';
import MilestoneListItem from '../MilestoneListItem';
import DevelopmentalAreaContainer from '../styles/DevelopmentalAreaContainer';
import NextAreaButtonContainer from '../styles/NextAreaButtonContainer';

let milestonesAnswer = {};
function DevelopmentalArea({ fechedSkills, fetchSkillByIdAction, saveMilestonesAnswerAction }) {
  const [activeArea, setActiveArea] = useState(AREAS[0]);
  const currentSkill = fechedSkills && fechedSkills[activeArea.skillId];
  const isLastAreaActive = activeArea.index === AREAS.length - 1;
  const areThereMilestonesToShow = currentSkill && Object.keys(currentSkill.milestones).length > 0;

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

  function onClickMilestoneButton(milestone, milestoneStatus) {
    if (!milestonesAnswer[milestone.id]) {
      milestonesAnswer[milestone.id] = {
        ...milestone,
        answer: milestoneStatus,
      };
      return;
    }
    milestonesAnswer[milestone.id].answer = milestoneStatus;
  }

  function onClickNextAreaButton() {
    const currentActiveAreaIndex = activeArea.index || 0;
    const nextActiveArea = AREAS[currentActiveAreaIndex + 1];

    if (Object.keys(milestonesAnswer).length > 0) {
      saveMilestonesAnswerAction(milestonesAnswer);
    }
    milestonesAnswer = {};
    if (isLastAreaActive) {
      alert('Your progress has been saved');
      onClickArea(AREAS[0], 0);
      return;
    }
    onClickArea(nextActiveArea, currentActiveAreaIndex + 1);
  }

  return (
    <DevelopmentalAreaContainer>
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
        && Object.values(currentSkill.milestones).map((milestone) => (
          <MilestoneListItem
            key={milestone.id}
            milestone={milestone}
            onClickMilestoneButton={onClickMilestoneButton}
          />
        ))}
      <NextAreaButtonContainer>
        <Button
          defaultButton
          milestoneStatus={COMPLETED}
          onClick={onClickNextAreaButton}
        >
          {isLastAreaActive ? 'Finish assessment' : 'Next'}
        </Button>
      </NextAreaButtonContainer>
    </DevelopmentalAreaContainer>
  );
}

DevelopmentalArea.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
  saveMilestonesAnswerAction: PropTypes.func,
};

export default DevelopmentalArea;
