import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Activity.scss'

import _ from 'lodash'

class Activity extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <div>
        <h2 className={styles['fade-in']}><i className="fa fa-paperclip"></i>&nbsp; {intl.formatMessage({ id: 'intl.activity' })}</h2>
        <ul className={styles['fade-in']}>
          <li>
            <h3>{intl.formatMessage({ id: 'intl.activity.academic' })}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  2018: [
    <a href="http://ibac-conference.org/bai/" target="_blank">'BAI Conference || Seoul, Korea'</a>,
  ],
}`
            }}></pre>
          </li>
          <li>
            <h3>{intl.formatMessage({ id: 'intl.activity.technical' })}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  2018: [
    <a href="https://taichung-frontend.kktix.cc/events/180728-blockchain" target="_blank">'台中前端社群 7/28 徹底瞭解區塊鏈 從私有鏈出發 @夢森林'</a>,
    <a href="https://modernweb.tw/" target="_blank">'ModernWeb 2018'</a>,
    <a href="https://f2e.kktix.cc/events/fedc-2018" target="_blank">'Front-End x Design Conference 2018'</a>,
    <a href="https://gonsakon-7655f2.kktix.cc/events/a5791ac5-f60f9c-cc9dec-eb381d-6b57e9-3a5710-61e623-17b85b-3ac7a7-8f8c6c-3a422e-e7994a-15adf0-copy-1" target="_blank">'Solidity & web3.js DApp 工作坊'</a>,
  ],
  2017: [
    <a href="https://jsdc-tw.kktix.cc/events/jsdc2017" target="_blank">'JSDC 2017'</a>,
    <a href="http://modernweb.tw/" target="_blank">'Modern Web 2017'</a>,
    <a href="https://study4-tw.kktix.cc/events/jun-2017-taichung-1aa2bc" target="_blank">'Study4.TW -Jun-2017'</a>,
    <a href="https://uxui-taichung.kktix.cc/events/4cbabfed" target="_blank">'UX/UI台中聚-UX起手式'</a>,
  ],
  2016:[
    <a href="https://taichung-frontend.kktix.cc/events/161008" target="_blank">'台中前端社群 10/08'</a>,
    <a href="https://jsdc-tw.kktix.cc/events/jsdc2016" target="_blank">'JSDC 2016'</a>,
    <a href="https://ithometw.kktix.cc/events/mw2016-student-program" target="_blank">'Modern Web 2016'</a>,
    <a href="https://ntust-coding-club.kktix.cc/events/the-darkness-of-javascript" target="_blank">'JavaScript的黑暗時代</a>,
  ],
  2015:[
    <a href="https://study4-tw.kktix.cc/events/nvo-2015" target="_blank">'Study4.TW－November 2015'</a>,
    <a href="https://taichung-frontend.kktix.cc/events/151119" target="_blank">'Javascript三代同堂'</a>,
  ],
}`
            }}></pre>
          </li>
          <li>
            <h3>{intl.formatMessage({ id: 'intl.activity.event' })}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  2017: [
    <a href="https://www.accupass.com/event/1710260630563716620400" target="_blank">'2017 新竹黑客松'</a> - <a href="https://github.com/explooosion/HsinchuHackathon" target="_blank">GitHub</a>,
    <a href="https://www.accupass.com/event/1704140234301547836531" target="_blank">'2017 嘉義黑蚵松'</a> - <a href="https://github.com/explooosion/ChiayiHackathon" target="_blank">GitHub</a>,
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

Activity.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Activity))
