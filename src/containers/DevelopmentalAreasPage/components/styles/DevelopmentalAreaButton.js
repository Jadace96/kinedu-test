import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';

const activeButtonStyles = css`
  transition: 300ms linear;
  color: ${({ theme, area }) => theme.colors[`${area}PrimaryColor`]};
  background-color: ${({ theme }) => theme.colors.activeButtonAreaBackground};
`;

const DevelopmentalAreaButton = styled(Button).attrs(() => ({
  className: 'DevelopmentalAreaButton',
}))`
  border: none;
  font-size: 0.7rem;
  border-radius: initial;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.prymaryTextColor};
  ${({ isActive }) => isActive && activeButtonStyles}
`;

export default DevelopmentalAreaButton;
