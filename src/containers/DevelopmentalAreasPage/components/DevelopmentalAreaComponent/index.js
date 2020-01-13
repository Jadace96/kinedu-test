import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import {
  AREAS, COMPLETED, UNCOMPLETED, NOT_ANSWERED,
} from 'settings/developmentalAreas';

import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';
import Button from '../styles/DevelopmentalAreaButton';
import MilestoneItemContainer from '../styles/MilestoneItemContainer';
import MilestoneInfoContainer from '../styles/MilestoneInfoContainer';
import SkillContainer from '../styles/SkillContainer';
import AreaContainer from '../styles/AreaContainer';

import Container from '../../../../components/Container';
import FontLight from '../../../../components/FontLight';
import FontBold from '../../../../components/FontBold';


function DevelopmentalArea({ fechedSkills, fetchSkillByIdAction }) {
  const [activeArea, setActiveArea] = useState('physical');
  const [milestoneStatus, setMilestoneStatus] = useState(NOT_ANSWERED);
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

  function onClickMilestoneButton() {
    if (milestoneStatus === NOT_ANSWERED || milestoneStatus === UNCOMPLETED) {
      setMilestoneStatus(COMPLETED);
    } else {
      setMilestoneStatus(UNCOMPLETED);
    }
    // currentSkill.milestones.answer = status;
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
            <Button
              key={id}
              area={slug}
              buttonsLength={Object.keys(AREAS).length}
              isActive={activeArea === slug}
              onClick={() => onClickArea(slug, skillId)}
            >
              {name}
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
          <MilestoneItemContainer>
            <MilestoneInfoContainer>
              <FontLight>{milestone.title}</FontLight>
              <FontLight>Usually achieved by: 2-4 months</FontLight>
            </MilestoneInfoContainer>
            <Button
              defaultButton
              onClick={() => onClickMilestoneButton()}
              milestoneStatus={milestoneStatus}
            >
              {milestone.answer || milestoneStatus}
            </Button>
          </MilestoneItemContainer>
        ))}
    </Container>
  );
}

DevelopmentalArea.propTypes = {
  fechedSkills: PropTypes.object,
  fetchSkillByIdAction: PropTypes.func,
};

export default DevelopmentalArea;
