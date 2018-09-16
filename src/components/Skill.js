import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Skill.scss'

import _ from 'lodash'

class Skill extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <div>
        <h2 className={styles['fade-in']}><i className="fa fa-paint-brush"></i>&nbsp; {intl.messages['intl.skill']['title']}</h2>
        <ul className={styles['fade-in']}>
          <li>
            <h3>{intl.messages['intl.skill']['sub-title']}<a href="https://github.com/kamranahmedse/developer-roadmap">(參考地圖)</a></h3>
            <pre dangerouslySetInnerHTML={{
              __html:
                `{
  web: {
    Front-end: [
      'ES6',
      'Angular',
      'SCSS',
      'GoogleMapAPI',
    ],
    Back-end: [
      'Node.js',
      'ASP.NET WebForms',
    ],
    DevOps: [
      'AWS(S3, EC2)',
      'Cloudflare',
      'Firebase',
    ],
    Desktop: [
      'Electron',
      'C# WinForm',
    ],
  },
}`
            }}></pre>
          </li>
        </ul>
      </div>
    )
  }
}

Skill.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Skill))
