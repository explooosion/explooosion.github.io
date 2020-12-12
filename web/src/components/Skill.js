import React from 'react';
import styled from 'styled-components';
import htmlReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { FaPaintBrush } from 'react-icons/fa';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

function Skill() {
  const { t } = useTranslation();
  const { title, 'sub-title': subTitle, content } = t('skill');
  return (
    <Section>
      <h2 className='fade-in'>
        <FaPaintBrush />&nbsp; {title}
      </h2>
      <ul className='fade-in'>
        <li>
          <h3>{subTitle}&nbsp; <a href="https://github.com/kamranahmedse/developer-roadmap">(參考地圖)</a></h3>
          <pre>{htmlReactParser(content)}</pre>
        </li>
      </ul>
    </Section>
  );
}

export default Skill;
