import styled from 'styled-components';

const MilestoneInfoContainer = styled.div.attrs(() => ({
  className: 'MilestoneInfoContainer',
}))`
  display: flex;
  padding: 0 1rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  .FontLight {
    width: 100%;
    line-height: 1.15rem;
    &:first-child {
      font-weight: 400;
      font-size: 0.9rem;
    }
    &:nth-child(2) {
      font-size: 0.75rem;
    }
  }
`;

export default MilestoneInfoContainer;
