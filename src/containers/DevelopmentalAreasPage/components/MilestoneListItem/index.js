import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FontLight from 'components/FontLight';

import {
  COMPLETED,
  UNCOMPLETED,
  NOT_ANSWERED,
} from 'settings/developmentalAreas';

import Button from '../styles/DevelopmentalAreaButton';
import MilestoneItemContainer from '../styles/MilestoneItemContainer';
import MilestoneInfoContainer from '../styles/MilestoneInfoContainer';

function MilestoneListItem({ milestone, onClickMilestoneButton }) {
  const [milestoneStatus, setMilestoneStatus] = useState(milestone.answer || NOT_ANSWERED);

  function onClickButton() {
    let newMilestoneStatus;
    if (milestoneStatus === NOT_ANSWERED || milestoneStatus === UNCOMPLETED) {
      newMilestoneStatus = COMPLETED;
    } else {
      newMilestoneStatus = UNCOMPLETED;
    }
    if (onClickMilestoneButton) {
      onClickMilestoneButton(milestone, newMilestoneStatus);
    }
    setMilestoneStatus(newMilestoneStatus);
  }

  return (
    <MilestoneItemContainer>
      <MilestoneInfoContainer>
        <FontLight>{milestone.title}</FontLight>
        <FontLight>Usually achieved by: {milestone.age} months</FontLight>
      </MilestoneInfoContainer>
      <Button
        defaultButton
        onClick={onClickButton}
        milestoneStatus={milestoneStatus}
      >
        {milestone.answer || milestoneStatus}
      </Button>
    </MilestoneItemContainer>
  );
}

MilestoneListItem.propTypes = {
  milestone: PropTypes.object,
  onClickMilestoneButton: PropTypes.func,
};

export default MilestoneListItem;
