import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane } from 'react-icons/fa';
import _ from 'lodash';

function Work() {
  const t = useTranslation();
  return (
    <div id='work'>
      <h2 className='fade-in'>
        <FaPaperPlane />&nbsp;
        {t('work').title}
      </h2>
      <ul className='fade-in'>
        {
          _.map(t('work').items, (item, index) => {
            return (
              <li key={index}>
                <h3
                  style={{ 'lineHeight': '25px' }}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                >
                </h3>
                <h3><tt className='chinese'>{item.job}</tt></h3>
                <p>{item.description}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Work;
