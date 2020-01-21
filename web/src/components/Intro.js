import React from 'react';
import { useTranslation } from 'react-i18next';

function Intro() {
  const { t } = useTranslation();
  console.log(t('intro'));
  return (
    <div id='intro'>
      <p>
        <a rel='noopener noreferrer' target='_blank' href='https://github.com/2016rshah/githubchart-api'>
          <img src='https://ghchart.rshah.org/409ba5/explooosion' alt={`Robby's Github chart`} title={`Robby's Github chart`} />
        </a>
      </p>
      <hr />
      <h1 className='tracking-in-contract-bck'>Hi !</h1>
      <p dangerouslySetInnerHTML={{ __html: t('intro') }}></p>
    </div>
  );
}

export default Intro;
