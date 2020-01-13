import styled from 'styled-components';
import Container from '../../../../components/Container';

const MilestoneItemContainer = styled(Container).attrs(() => ({
  className: 'MilestoneItemContainer',
}))`  
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.notAnsweredButtonBackground};
  
  .Button {
    width: 35%;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    background-color: ${({ theme }) => theme.colors.notAnsweredButtonBackground};
  }
`;

export default MilestoneItemContainer;
