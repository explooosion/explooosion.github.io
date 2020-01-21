import React from 'react';
import styled from 'styled-components';
import htmlReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

function Intro() {
  const { t } = useTranslation();

  return (
    <Section>
      <hr />
      <h1 className='tracking-in-contract-bck'>Hi !</h1>
      <p>{htmlReactParser(t('intro'))}</p>
    </Section>
  );
}

export default Intro;
