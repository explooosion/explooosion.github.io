/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Analysis.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FaChartPie } from 'react-icons/fa';

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <div id='analysis'>
        <h2 className='face-in'><FaChartPie />&nbsp; {this.t('analysis')}</h2>
        <ul className='face-in'>
          <li>
            <h3>
              <a href="https://github-profile-summary.com/user/explooosion" target="_blank" rel="noopener noreferrer">github-profile-summary</a>
              <small>&mdash; Web by <a rel="noopener noreferrer" target="_blank" href="https://github.com/IonicaBizau/github-profile-languages">tipsy</a></small>
            </h3>
          </li>
          <li>
            <h3>{this.t('analysis.lan')} <small>&mdash; Char by <a rel="noopener noreferrer" target="_blank" href="https://github.com/IonicaBizau/github-profile-languages">IonicaBizau</a></small></h3>
            <pre><iframe title="profile" width="500" height="500" src="https://ionicabizau.github.io/github-profile-languages/api.html?explooosion" frameBorder="0" scrolling="no"></iframe></pre>
          </li>
        </ul>
      </div>
    );
  }
}

Analysis.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Analysis));
