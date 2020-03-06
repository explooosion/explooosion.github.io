import React from 'react';
import styled from 'styled-components';
import htmlReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { FaPaintBrush } from 'react-icons/fa';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

const skill = `{
  WEB: {
    Front-end: [
      'ES6+',
      'Vanilla',
      'Angular',
      'React',
      'Redux',
      'Webpack',
      'RWD'
      'i18n',
      'GoogleMapAPI',
      'PixiJS',
    ],
    Back-end: [
      'Node.js',
      'Express',
      'Koa2',
      'ASP.NET WebForms',
      'Nginx',
      'Socket',
      'JWT',
    ],
    DevOps: [
      'AWS(S3, EC2)',
      'Cloudflare',
      'Firebase',
      'VMware EXSI',
      'Docker',
      'Travis',
      'Git',
    ],
    DB: [
      'MSSQL',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],
    Desktop: [
      'Electron',
      'C# WinForm',
    ],
    IDE: [
      'VSCode',
    ],
  },
  Computer Science: {
    Data Mining: [
      'Weka',
      'Matlab',
      'SPSS',
    ],
  },
  Signal: {
    Physiological: [
      'Electrocardiography',
      'surface Electromyography',
    ],
  },
}`

function Skill() {
  const { t } = useTranslation();
  const { title, 'sub-title': subTitle } = t('skill');

  return (
    <Section>
      <h2 className='fade-in'>
        <FaPaintBrush />&nbsp; {title}
      </h2>
      <ul className='fade-in'>
        <li>
          <h3>{subTitle}&nbsp; <a href="https://github.com/kamranahmedse/developer-roadmap">(參考地圖)</a></h3>
          <pre>{htmlReactParser(skill)}</pre>
        </li>
      </ul>
    </Section>
  );
}

export default Skill;
