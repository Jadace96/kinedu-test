import styled from 'styled-components';
import Container from 'components/Container';

const MilestoneItemContainer = styled(Container).attrs(() => ({
  className: 'MilestoneItemContainer',
}))`  
  padding: 1.5rem 0;
  letter-spacing: 0.3px;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.notAnsweredButtonBackground};
`;

export default MilestoneItemContainer;
