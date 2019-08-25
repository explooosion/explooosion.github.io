/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Skill.scss';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FaPaintBrush } from 'react-icons/fa';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <div id='skill'>
        <h2 className='fade-in'><FaPaintBrush />&nbsp; {this.t('skill').title}</h2>
        <ul className='fade-in'>
          <li>
            <h3>{this.t('skill')['sub-title']}<a href="https://github.com/kamranahmedse/developer-roadmap">(參考地圖)</a></h3>
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
}

Skill.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Skill));
