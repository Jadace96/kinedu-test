import styled from 'styled-components';
import Container from 'components/Container';

const MilestoneItemContainer = styled(Container).attrs(() => ({
  className: 'MilestoneItemContainer',
}))`
  width: 100%;
  padding: 1.5rem 0;
  margin-top: 0.1rem;
  text-align: center;
  letter-spacing: 0.3px;
  background-color: ${({ theme }) => theme.colors.milestonItemBackground};

  @media ${({ theme }) => theme.device.tablet} {
    text-align: left;
    flex-direction: row;
    padding: 1.5rem 2rem;
    width: -webkit-fill-available;
    justify-content: space-between;

    .DevelopmentalAreaButton {
      margin: 0;
      width: 30%;
    }
  }
`;

export default MilestoneItemContainer;
