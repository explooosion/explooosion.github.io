import React from 'react';
import styled from 'styled-components';

import Commit from '../components/Commit';
import Intro from '../components/Intro';
import Work from '../components/Work';
import Skill from '../components/Skill';
import SideProject from '../components/SideProject';
import Blog from '../components/Blog';
import Activity from '../components/Activity';
import Analysis from '../components/Analysis';

const Main = styled.main`

  width: 500px;

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    width: 100%;
  }
`;

function Section() {
  return (
    <Main>
      <Commit />
      <Intro /><hr />
      <Work /><hr />
      <Skill /><hr />
      <SideProject /><hr />
      <Blog /><hr />
      <Activity /><hr />
      <Analysis />
    </Main>
  );
}

export default Section;
