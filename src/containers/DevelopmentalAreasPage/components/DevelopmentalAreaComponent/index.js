import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { AREAS, COMPLETED } from 'settings/developmentalAreas';

import FontBold from 'components/FontBold';
import FontLight from 'components/FontLight';

import Button from '../styles/DevelopmentalAreaButton';
import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';

import AreaContainer from '../styles/AreaContainer';
import MilestoneListItem from '../MilestoneListItem';
import SkillContainer from '../styles/SkillContainer';
import DevelopmentalAreaContainer from '../styles/DevelopmentalAreaContainer';
import NextAreaButtonContainer from '../styles/NextAreaButtonContainer';

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

  function onSaveMilestonesAswer() {
    if (Object.keys(milestonesAnswer).length > 0) {
      saveMilestonesAnswerAction(milestonesAnswer);
    }
    milestonesAnswer = {};
  }

  function onChangeArea(pressedArea, index) {
    const areaDataToSet = { ...pressedArea, index };
    setActiveArea(areaDataToSet);

    if (!fechedSkills[pressedArea.skillId]) {
      fetchSkillByIdAction(pressedArea.skillId);
    }
  }

  function onClickAreaButton(pressedArea, index) {
    onChangeArea(pressedArea, index);
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

    onSaveMilestonesAswer();
    if (isLastAreaActive) {
      return;
    }
    onChangeArea(nextActiveArea, currentActiveAreaIndex + 1);
    scrollToTop();
  }

  function renderAreaSection() {
    return (
      <AreaContainer activeArea={activeArea.slug}>
        <FontBold id="areasTitle">Areas</FontBold>
        <ButtonListContainer>
          {AREAS.map((area, index) => (
            <Button
              key={area.id}
              area={area.slug}
              buttonsLength={AREAS.length}
              onClick={() => onClickAreaButton(area, index)}
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
    );
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
      {renderAreaSection()}
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
