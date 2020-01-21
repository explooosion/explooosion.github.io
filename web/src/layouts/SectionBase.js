
import styled from 'styled-components';
import { rgba } from 'polished';

export default styled.section`

  position: relative;

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    h2 {
      position: sticky;
      top: 0;
      padding: 1rem 0;
      background-color: ${rgba('#fff', .6)};
      backdrop-filter: blur(5px);
      z-index: 999;
    }
  }

`;
