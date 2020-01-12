import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';

const activeButtonStyles = css`
  transition: 500ms linear;
  color: ${({ theme, area }) => theme.colors[`${area}PrimaryColor`]};
  background-color: ${({ theme }) => theme.colors.activeButtonAreaBackground};
`;

const DevelopmentalAreaButton = styled(Button).attrs(() => ({
  className: 'DevelopmentalAreaButton',
}))`
  border: none;
  font-size: 0.7rem;
  border-radius: initial;
  color: ${({ theme }) => theme.colors.prymaryTextColor};
  ${({ isActive }) => isActive && activeButtonStyles}
  /* border: 1px solid ${({ theme }) => theme.colors.darkGray}; */
`;

export default DevelopmentalAreaButton;
