import { memo } from 'react';

import Commit from './Commit';
import Intro from './Intro';
import Work from './Work';
import Skill from './Skill';
import Case from './Case';
import Blog from './Blog';
import Activity from './Activity';
import Analysis from './Analysis';

const Content = memo(function Content() {
  return (
    <main className="mb-3 lg:w-[500px]">
      <Commit />
      <Intro />
      <Work />
      <Skill />
      <Case />
      <Blog />
      <Activity />
      <Analysis />
    </main>
  );
});

export default Content;
