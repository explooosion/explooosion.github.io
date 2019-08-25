/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Footer.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <footer id='footer'>
        <p>
          <small>
            Hosted on GitHub Pages
            <br />
            &mdash; Base Theme by
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/orderedlist">orderedlist</a>
            <br />
            &mdash; Base Design by
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/lulalachen">lulalachen</a>
          </small>
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Footer));
