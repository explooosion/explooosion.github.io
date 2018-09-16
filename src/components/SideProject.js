import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './SideProject.scss'

import _ from 'lodash'

class SideProject extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <div>
        <h2 className={styles['fade-in']}><i className="fa fa-picture-o"></i>&nbsp; {intl.formatMessage({ id: 'intl.side-project' })}</h2>
        <ul className={styles['fade-in']}>
          <li>
            <h3>{intl.formatMessage({ id: 'intl.side-project.works' })}</h3>
            <pre
              dangerouslySetInnerHTML={{
                __html:
                  `{
  web: [
    <a href="https://github.com/EtherealCSS/etherealcss" target="_blank">'EtherealCSS'</a>,
    <a href="http://robby570.tw/css-wish-card/" target="_blank">'CSS-Wish-Card'</a>,
    <a href="https://github.com/explooosion/NobuMD" target="_blank">'NobuMD'</a>,
    <a href="https://chat.robby570.tw/" target="_blank">'FirebaseChat'</a>,
  ],
  bot: [
    <a href="https://github.com/explooosion/PipDiscordBOT" target="_blank">'PipDiscordBOT'</a>,
  ],
  exe: [
    <a href="https://els.robby570.tw/" target="_blank">'ElswordVoice'</a>,
    <a href="https://github.com/explooosion/Evo" target="_blank">'Evo'</a>,
  ],
  doc: [
    <a href="https://remakeaonteam.github.io/AON-Developer-Guide/" target="_blank">'AON-Developer-Guide'</a>,
  ],
}`
              }}>
            </pre>
          </li>
          <li>
            <h3>{intl.formatMessage({ id: 'intl.side-project.packages' })}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  npm: [
  <a href="https://www.npmjs.com/package/etherealcss" target="_blank">'etherealcss'</a>,
  <a href="https://www.npmjs.com/package/natpp" target="_blank">'natpp'</a>,
  <a href="https://www.npmjs.com/package/agm-direction" target="_blank">'Agm-Direction'</a>,
  <a href="https://www.npmjs.com/package/koa-deploy" target="_blank">'koa-deploy'</a>,
    ],
  vscode: [
  <a href="https://marketplace.visualstudio.com/items?itemName=robby.poe-filter" target="_blank">'POE Filter Syntax'</a>,
  ],
}`
            }}>
            </pre>
          </li>
        </ul>
      </div>
    )
  }
}

SideProject.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(SideProject))
