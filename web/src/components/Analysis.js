import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaChartPie } from 'react-icons/fa';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

function Analysis() {
  const { t } = useTranslation();

  return (
    <Section>
      <h2 className='face-in'>
        <FaChartPie />&nbsp; {t('analysis')}
      </h2>
      <ul className='face-in'>
        <li>
          <h3>
            <a href="https://github-profile-summary.com/user/explooosion" target="_blank" rel="noopener noreferrer">github-profile-summary</a>
            <small>&mdash; Web by <a rel="noopener noreferrer" target="_blank" href="https://github.com/IonicaBizau/github-profile-languages">tipsy</a></small>
          </h3>
        </li>
        <li>
          <h3>{t('analysis.lan')} <small>&mdash; Char by <a rel="noopener noreferrer" target="_blank" href="https://github.com/IonicaBizau/github-profile-languages">IonicaBizau</a></small></h3>
          <pre><iframe title="profile" width="500" height="500" src="https://ionicabizau.github.io/github-profile-languages/api.html?explooosion" frameBorder="0" scrolling="no"></iframe></pre>
        </li>
      </ul>
    </Section>
  );
}

export default Analysis;
