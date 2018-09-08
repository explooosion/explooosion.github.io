import React from 'react'
import { connect } from 'dva'
import styles from './Section.scss'
import { injectIntl, FormattedMessage } from 'react-intl'

class Section extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <section className={styles.section}>
        <p>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/2016rshah/githubchart-api">
            <img src="https://ghchart.rshah.org/409ba5/explooosion" alt="Robby's Github chart" title="Robby's Github chart" />
          </a>
        </p>
        <hr />
        <h1 className="tracking-in-contract-bck">Hi !</h1>
        <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'intl.intro' }) }}></p>

        <hr />

        <h2 className="fade-in"><i className="fa fa-paper-plane"></i>&nbsp; 經歷</h2>
        <ul className="fade-in">
          <li>
            <h3 style={{ 'lineHeight': '25px' }}>格 <i className="fa fa-circle-o"></i> <i className="fa fa-circle-o"></i> <i className="fa fa-circle-o"></i>
              <i className="fa fa-circle-o"></i> <i className="fa fa-circle-o"></i> 有限公司&nbsp;
              <br /><tt className="chinese">前端工程師</tt>
            </h3>
            <p>參與敏捷開發，撰寫網頁遊戲入口平台，使用 AngularJS 以及 ASP.NET MVC。 由設計師提供版面，協助同事切版或套版。</p>
          </li>
          <li>
            <h3 style={{ 'lineHeight': '25px' }}>雍 <i className="fa fa-circle-o"></i> 科技股份有限公司&nbsp;
              <br /><tt className="chinese">軟體工程師</tt>
            </h3>
            <p>參與政府招標或是 SBIR 計劃案，產品為 GIS 地理資訊平台導向。<br />負責網站開發或維護，使用 ASP.NET Web Forms 以 C# 或 VB 進行撰寫，進行圖層套疊。空間資料庫使用 MSSQL、PostGIS，並以 Google Map API、OpenLayers、MapGuide，進行圖資展示</p>
          </li>
          <li>
            <h3 style={{ 'lineHeight': '25px' }}>開 <i className="fa fa-circle-o"></i> <i className="fa fa-circle-o"></i> <i className="fa fa-circle-o"></i> 股份有限公司&nbsp; <br /><tt className="chinese">助理工程師</tt>
            </h3>
            <p>資訊部門助理，協助主管撰寫IT部門 SOP 文件，以及資產管理、電腦維護、採購等。參與公司 ERP 維護，使用語言為 PHP。</p>
          </li>
        </ul>
        <hr />
        <h2 className="fade-in"><i className="fa fa-paint-brush"></i>&nbsp; 技能樹</h2>
        <ul className="fade-in">
          <li>
            <h3>網頁開發<a href="https://github.com/kamranahmedse/developer-roadmap">(參考地圖)</a></h3>
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
        <hr />
        <h2 className="fade-in"><i className="fa fa-picture-o"></i>&nbsp; Side Project</h2>
        <ul className="fade-in">
          <li>
            <h3>相關作品</h3>
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
            <h3>套件開發</h3>
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
        <hr />
        <h2 className="fade-in"><i className="fa fa-paperclip"></i>&nbsp; 近期文章</h2>
        <ul className="fade-in">
          <li>
            <h3>點部落</h3>
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
        <hr />
        <h2 className="fade-in"><i className="fa fa-paperclip"></i>&nbsp; 活動參與</h2>
        <ul className="fade-in">
          <li>
            <h3>學術研討會</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  2018: [
   <a href="http://ibac-conference.org/bai/" target="_blank">'BAI Conference || Seoul, Korea'</a>,
  ],
}`
            }}></pre>
          </li>
          <li>
            <h3>技術研討會</h3>
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
            <h3>活動比賽</h3>
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
        <hr />
        <h2 className="fade-in"><i className="fa fa-pie-chart"></i>&nbsp; 綜合分析</h2>
        <ul className="fade-in">
          <li>
            <h3><a href="https://github-profile-summary.com/user/explooosion" target="_blank" rel="noopener noreferrer">github-profile-summary</a>
              <small>&mdash; Web by <a rel="noopener noreferrer" target="_blank" href="https://github.com/IonicaBizau/github-profile-languages">tipsy</a></small></h3>
          </li>
          <li>
            <h3>擅長語言 <small>&mdash; Char by <a rel="noopener noreferrer" target="_blank" href="https://github.com/IonicaBizau/github-profile-languages">IonicaBizau</a></small></h3>
            <pre><iframe title="profile" width="500" height="500" src="https://ionicabizau.github.io/github-profile-languages/api.html?explooosion" frameBorder="0" scrolling="no"></iframe></pre>
          </li>
        </ul>
      </section>
    )
  }
}

Section.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Section))