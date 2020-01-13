import styled from 'styled-components';
import Container from '../../../../components/Container';

const SkillContainer = styled(Container).attrs(() => ({
  className: 'SkillContainer',
}))`  
  margin: 1.5rem 0;

  #skillTitle {    
    padding: 1.7rem 0 0.8rem;
    font-size: 1.3rem;
    border-top: 1px solid;
  }

  #skillDescription {
    font-size: 0.8rem
  }
`;

export default SkillContainer;
