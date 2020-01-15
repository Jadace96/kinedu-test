import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { AREAS, COMPLETED } from 'settings/developmentalAreas';

import Button from '../styles/DevelopmentalAreaButton';
import MilestoneListItem from '../MilestoneListItem';
import NextAreaButtonContainer from '../styles/NextAreaButtonContainer';
import DevelopmentalAreaContainer from '../styles/DevelopmentalAreaContainer';
import AreaSectionComponent from '../AreaSectionComponent';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

let milestonesAnswer = {};
function DevelopmentalArea({
  fechedSkills,
  fetchSkillByIdAction,
  saveMilestonesAnswerAction,
}) {
  const [activeArea, setActiveArea] = useState({ ...AREAS[0], index: 0 });
  const currentSkill = fechedSkills && fechedSkills[activeArea.skillId];
  const isLastAreaActive = activeArea.index === AREAS.length - 1;
  const areThereMilestonesToShow = currentSkill && Object.keys(currentSkill.milestones).length > 0;

  useEffect(() => {
    if (!fechedSkills || !fechedSkills[activeArea.skillId]) {
      fetchSkillByIdAction(activeArea.skillId);
    }
  }, []);

  function onChangeArea(pressedArea, index) {
    const areaDataToSet = { ...pressedArea, index };
    setActiveArea(areaDataToSet);
    milestonesAnswer = {};
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

  /* Button at the bottom of the view */
  function onClickNextAreaButton() {
    const currentActiveAreaIndex = activeArea.index || 0;
    const nextActiveArea = AREAS[currentActiveAreaIndex + 1];
    saveMilestonesAnswerAction(milestonesAnswer);
    milestonesAnswer = {};
    scrollToTop();
    if (isLastAreaActive) {
      return;
    }
    onChangeArea(nextActiveArea, currentActiveAreaIndex + 1);
  }

  function renderMilestoneListSection() {
    return Object.values(currentSkill.milestones).map((milestone) => (
      <MilestoneListItem
        key={milestone.id}
        milestone={milestone}
        onClickMilestoneButton={onClickMilestoneButton}
      />
    ));
  }

  function renderNextButton() {
    return (
      <NextAreaButtonContainer>
        <Button
          defaultButton
          milestoneStatus={COMPLETED}
          onClick={onClickNextAreaButton}
        >
          {isLastAreaActive ? 'Finish assessment' : 'Next'}
        </Button>
      </NextAreaButtonContainer>
    );
  }

  return (
    <DevelopmentalAreaContainer>
      <Helmet title="Kinedu - Developmental Areas" />
      <AreaSectionComponent
        activeArea={activeArea}
        currentSkill={currentSkill}
        onClickAreaButton={onChangeArea}
      />
      {areThereMilestonesToShow && renderMilestoneListSection()}
      {renderNextButton()}
    </DevelopmentalAreaContainer>
  );
}

DevelopmentalArea.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
  saveMilestonesAnswerAction: PropTypes.func,
};

export default DevelopmentalArea;
