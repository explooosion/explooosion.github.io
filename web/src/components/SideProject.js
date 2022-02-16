import React from 'react';
import styled from 'styled-components';
import htmlReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { FaBoxOpen } from 'react-icons/fa';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

const works = `{
  WEB: [
    <a href="https://github.com/explooosion/browndust-share" target="_blank">'Brown Dust Formation Sharing'</a>,
    <a href="https://github.com/explooosion/poe-hideout-sharing" target="_blank">'POE Hideout Sharing'</a>,
    <a href="https://github.com/explooosion/Taiwan-AIRMap" target="_blank">'Taiwan-AIRMap'</a>,
    <a href="https://github.com/EtherealCSS/etherealcss" target="_blank">'EtherealCSS'</a>,
    <a href="https://github.com/explooosion/NobuMD" target="_blank">'Dota2 信長的野望'</a>,
  ],
  APPLICATION: [
    <a href="https://github.com/explooosion/electron-alarm-clock" target="_blank">'Electron Alarm Clock'</a>,
    <a href="https://github.com/explooosion/ElswordVoice" target="_blank">'ElswordVoice'</a>,
  ],
  DOC: [
    <a href="https://github.com/explooosion/Agm-Direction-Docs" target="_blank">'Agm-Direction-Docs'</a>,
    <a href="https://remakeaonteam.github.io/AON-Developer-Guide/" target="_blank">'AON-Developer-Guide'</a>,
  ],
}`

const packages = `{
  NPM PACKAGES: [
    <a href="https://www.npmjs.com/package/agm-direction" target="_blank">'Agm-Direction'</a>,
    <a href="https://www.npmjs.com/package/etherealcss" target="_blank">'etherealcss'</a>,
  ],
  VSCODE EXTENSIONS: [
    <a href="https://marketplace.visualstudio.com/items?itemName=robby.poe-hideout-syntax" target="_blank">'POE Hideout Syntax'</a>,
    <a href="https://marketplace.visualstudio.com/items?itemName=robby.poe-filter" target="_blank">'POE Filter Syntax'</a>,
  ],
}`

function SideProject() {
  const { t } = useTranslation();

  return (
    <Section>
      <h2 className='face-in'><FaBoxOpen />&nbsp; {t('side-project')}</h2>
      <ul className='face-in'>
        <li>
          <h3>{t('side-project.works')}</h3>
          <pre>{htmlReactParser(works)}</pre>
        </li>
        <li>
          <h3>{t('side-project.packages')}</h3>
          <pre>{htmlReactParser(packages)}</pre>
        </li>
      </ul>
    </Section>
  );
}

export default SideProject;
