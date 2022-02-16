import React from 'react';
import styled from 'styled-components';
import htmlReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane } from 'react-icons/fa';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

function Work() {
  const { t } = useTranslation();
  const { title, items } = t('work');

  const renderWork = (work, index) => {
    const { name, job } = work;
    return (
      <li key={index}>
        <h3
          style={{ 'lineHeight': '25px' }}
        >
          {htmlReactParser(name)}
        </h3>
        <h3><tt className='chinese'>{htmlReactParser(job)}</tt></h3>
      </li>
    )
  }

  return (
    <Section>
      <h2 className='fade-in'>
        <FaPaperPlane />&nbsp;
        {title}
      </h2>
      <ul className='fade-in'>
        {items.map((work, index) => renderWork(work, index))}
      </ul>
    </Section>
  );
}

export default Work;
