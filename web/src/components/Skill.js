import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPaintBrush } from 'react-icons/fa';

function Skill() {
  const { t } = useTranslation();

  return (
    <div id='skill'>
      <h2 className='fade-in'><FaPaintBrush />&nbsp; {t('skill').title}</h2>
      <ul className='fade-in'>
        <li>
          <h3>{t('skill')['sub-title']}<a href="https://github.com/kamranahmedse/developer-roadmap">(參考地圖)</a></h3>
          <pre dangerouslySetInnerHTML={{
            __html:
              `{
WEB: {
  Front-end: [
    'ES6+',
    'Vanilla',
    'Angular',
    'React',
    'Redux',
    'RWD'
    'i18n',
    'GoogleMapAPI',
  ],
  Back-end: [
    'Node.js',
    'Express',
    'Koa2',
    'ASP.NET WebForms',
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
}`,
          }}
          >
          </pre>
        </li>
      </ul>
    </div>
  );
}

export default Skill;
