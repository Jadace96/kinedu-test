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

function MilestoneListItem({ milestone, onMilestoneButtonPressed }) {
  const [milestoneStatus, setMilestoneStatus] = useState(NOT_ANSWERED);

  function onClickMilestoneButton() {
    let newMilestoneStatus;
    if (milestoneStatus === NOT_ANSWERED || milestoneStatus === UNCOMPLETED) {
      newMilestoneStatus = COMPLETED;
    } else {
      newMilestoneStatus = UNCOMPLETED;
    }
    if (onMilestoneButtonPressed) {
      onMilestoneButtonPressed(milestone, newMilestoneStatus);
    }
    setMilestoneStatus(newMilestoneStatus);
  }

  return (
    <MilestoneItemContainer>
      <MilestoneInfoContainer>
        <FontLight>{milestone.title}</FontLight>
        <FontLight>Usually achieved by: 2-4 months</FontLight>
      </MilestoneInfoContainer>
      <Button
        defaultButton
        onClick={onClickMilestoneButton}
        milestoneStatus={milestoneStatus}
      >
        {milestone.answer || milestoneStatus}
      </Button>
    </MilestoneItemContainer>
  );
}

MilestoneListItem.propTypes = {
  milestone: PropTypes.object,
  onMilestoneButtonPressed: PropTypes.func,
};

export default MilestoneListItem;
