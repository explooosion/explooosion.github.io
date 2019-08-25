/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Blog.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FaPaperclip } from 'react-icons/fa';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <div id='blog'>
        <h2 className='face-in'><FaPaperclip />&nbsp; {this.t('blog')}</h2>
        <ul className='face-in'>
          <li>
            <h3>{this.t('blog.dotblog')}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  ARTICLES: [
    <a href="https://dotblogs.com.tw/explooosion/2018/11/10/212333" target="_blank">'Docker - 在 Mac 上安裝 MSSQL 的搖光吧！'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/09/30/141005" target="_blank">'CSS - 運用 Stylelint 養成好習慣'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/08/12/022247" target="_blank">'BlockChain - React Native - 2018 Android 環境安裝(Win)'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/07/29/172031" target="_blank">'BlockChain - 私有鏈建立 ( Geth & Node.js )'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/03/25/181604" target="_blank">'Electron - 新手入門 - 做一個鬧鐘吧'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/01/27/170320" target="_blank">'Node.js - Express + MongoDB + Socket.IO (以聊天室為範例)'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/01/21/040728" target="_blank">'MongoDB - 詳細到讓人牙起來的安裝教學'</a>,
  ],
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

Blog.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Blog));
