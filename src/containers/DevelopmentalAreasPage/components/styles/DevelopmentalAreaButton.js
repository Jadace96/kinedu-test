import styled, { css } from 'styled-components';
import { COMPLETED, UNCOMPLETED } from 'settings/developmentalAreas';

import Button from 'components/Button';

const activeButtonStyles = css`
  color: ${({ theme, area }) => theme.colors[`${area}PrimaryColor`]};
  background-color: ${({ theme }) => theme.colors.activeButtonAreaBackground};
`;

const buttonAreaStyles = css`
  font-size: 0.8rem;
  border-radius: initial;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.prymaryTextColor};
  min-width: calc(100% / ${({ buttonsLength }) => buttonsLength});
`;

const defaultButtonStyles = css`  
  margin-top: 1rem;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.notAnsweredButtonBackground};
`;

const milestoneButtonStyles = {
  [COMPLETED]: css`
    color: ${({ theme }) => theme.colors.prymaryTextColor};
    background-color: ${({ theme }) => theme.colors.completedButtonBackground};
  `,
  [UNCOMPLETED]: css`
    color: ${({ theme }) => theme.colors.completedButtonBackground};
    background-color: ${({ theme }) => theme.colors.uncompletedButtonBackground};
  `,
};

const DevelopmentalAreaButton = styled(Button).attrs(() => ({
  className: 'DevelopmentalAreaButton',
}))`
  transition: 300ms linear;
  ${({ defaultButton }) => (defaultButton ? defaultButtonStyles : buttonAreaStyles)}
  ${({ milestoneStatus }) => (milestoneStatus && milestoneButtonStyles[milestoneStatus])}
  ${({ isActive }) => isActive && activeButtonStyles}
`;

export default DevelopmentalAreaButton;
