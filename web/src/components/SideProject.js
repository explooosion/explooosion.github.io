/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './SideProject.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FaBoxOpen } from 'react-icons/fa';

class SideProject extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <div id='side-project'>
        <h2 className='face-in'><FaBoxOpen />&nbsp; {this.t('side-project')}</h2>
        <ul className='face-in'>
          <li>
            <h3>{this.t('side-project.works')}</h3>
            <pre
              dangerouslySetInnerHTML={{
                __html:
                  `{
  WEB: [
    <a href="https://github.com/explooosion/browndust-share" target="_blank">'Brown Dust Formation Sharing'</a>,
    <a href="https://github.com/explooosion/poe-hideout-sharing" target="_blank">'POE Hideout Sharing'</a>,
    <a href="https://github.com/explooosion/Taiwan-AIRMap" target="_blank">'Taiwan-AIRMap'</a>,
    <a href="https://github.com/EtherealCSS/etherealcss" target="_blank">'EtherealCSS'</a>,
    <a href="https://github.com/explooosion/NobuMD" target="_blank">'Dota2 信長的野望'</a>,
  ],
  BOT: [
    <a href="https://github.com/explooosion/PipDiscordBOT" target="_blank">'PipDiscordBOT'</a>,
  ],
  APPLICATION: [
    <a href="https://github.com/explooosion/electron-alarm-clock" target="_blank">'Electron Alarm Clock'</a>,
    <a href="https://els.robby570.tw/" target="_blank">'ElswordVoice'</a>,
    <a href="https://github.com/explooosion/Evo" target="_blank">'Evo'</a>,
  ],
  DOC: [
    <a href="https://github.com/explooosion/Agm-Direction-Docs" target="_blank">'Agm-Direction-Docs'</a>,
    <a href="https://remakeaonteam.github.io/AON-Developer-Guide/" target="_blank">'AON-Developer-Guide'</a>,
  ],
}`,
              }}
            >
            </pre>
          </li>
          <li>
            <h3>{this.t('side-project.packages')}</h3>
            <pre dangerouslySetInnerHTML={{
              __html: `{
  NPM PACKAGES: [
    <a href="https://www.npmjs.com/package/agm-direction" target="_blank">'Agm-Direction'</a>,
    <a href="https://www.npmjs.com/package/etherealcss" target="_blank">'etherealcss'</a>,
    <a href="https://www.npmjs.com/package/koa-deploy" target="_blank">'koa-deploy'</a>,
    ],
  VSCODE EXTENSIONS: [
    <a href="https://marketplace.visualstudio.com/items?itemName=robby.poe-hideout-syntax" target="_blank">'POE Hideout Syntax'</a>,
    <a href="https://marketplace.visualstudio.com/items?itemName=robby.poe-filter" target="_blank">'POE Filter Syntax'</a>,
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

SideProject.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(SideProject));