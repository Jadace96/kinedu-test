import styled from 'styled-components';
import Container from '../../../../components/Container';

const SkillContainer = styled(Container).attrs(() => ({
  className: 'SkillContainer',
}))`
  margin: 1.5rem 0;

  .FontBold {
    font-size: 1.3rem;
    padding: 1.7rem 0 0.8rem;
    border-top: 1px solid;
  }

  .FontLight {
    line-height: 1rem;
    font-size: 0.8rem;
  }
`;

export default SkillContainer;
