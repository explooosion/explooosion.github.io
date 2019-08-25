/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Intro.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <div id='intro'>
        <p>
          <a rel='noopener noreferrer' target='_blank' href='https://github.com/2016rshah/githubchart-api'>
            <img src='https://ghchart.rshah.org/409ba5/explooosion' alt={`Robby's Github chart`} title={`Robby's Github chart`} />
          </a>
        </p>
        <hr />
        <h1 className='tracking-in-contract-bck'>Hi !</h1>
        <p dangerouslySetInnerHTML={{ __html: this.t('intro') }}></p>
      </div>
    );
  }
}

Intro.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Intro));
