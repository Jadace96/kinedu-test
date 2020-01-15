import React from 'react';
import PropTypes from 'prop-types';

import FontBold from 'components/FontBold';
import FontLight from 'components/FontLight';
import { AREAS } from 'settings/developmentalAreas';

import AreaContainer from '../styles/AreaContainer';
import SkillContainer from '../styles/SkillContainer';
import Button from '../styles/DevelopmentalAreaButton';
import ButtonListContainer from '../styles/DevelopmentalAreaButtonListContainer';

function AreaSectionComponent({ currentSkill, activeArea, onClickAreaButton }) {
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

AreaSectionComponent.propTypes = {
  activeArea: PropTypes.object,
  currentSkill: PropTypes.object,
  onClickAreaButton: PropTypes.func,
};

export default AreaSectionComponent;
