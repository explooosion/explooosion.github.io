import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Blog.scss'

import _ from 'lodash'

class Blog extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <div>
        <h2 className={styles['fade-in']}><i className="fa fa-paperclip"></i>&nbsp; {intl.formatMessage({ id: 'intl.blog' })}</h2>
        <ul className={styles['fade-in']}>
          <li>
            <h3>{intl.formatMessage({ id: 'intl.blog.dotblog' })}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  articles: [
    <a href="https://dotblogs.com.tw/explooosion/2018/07/29/172031" target="_blank">'BlockChain - 私有鏈建立 ( Geth & Node.js )'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/07/22/141435" target="_blank">'Rust - 純白體驗只因你靠得住'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/03/25/181604" target="_blank">'Electron - 新手入門 - 做一個鬧鐘吧'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/01/27/170320" target="_blank">'Node.js - Express + MongoDB + Socket.IO (以聊天室為範例)'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/01/21/040728" target="_blank">'MongoDB - 詳細到讓人牙起來的安裝教學'</a>,
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

Blog.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Blog))
