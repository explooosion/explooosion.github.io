import React from 'react';
import styled from 'styled-components';

import Intro from '../components/Intro';
import Work from '../components/Work';
import Skill from '../components/Skill';
import SideProject from '../components/SideProject';
import Blog from '../components/Blog';
import Activity from '../components/Activity';
import Analysis from '../components/Analysis';

const Main = styled.main`
  width: 500px;
  float: right;
  padding-bottom: 50px;

  @media print, screen and (max-width: ${p => p.screenLg}) {
    float: none;
    position: static;
    width: auto;
    border: 1px solid #e5e5e5;
    border-width: 1px 0;
    padding: 20px 0;
    margin: 0 0 20px;
  }
`;

function Section() {
  return (
    <Main>
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
