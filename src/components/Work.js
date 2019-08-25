/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Work.scss';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FaPaperPlane } from 'react-icons/fa';
import _ from 'lodash';

class Work extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
    this.i18n = this.props.i18n;
  }

  render() {
    return (
      <div id='work'>
        <h2 className='fade-in'>
          <FaPaperPlane />&nbsp;
          {this.t('work').title}
        </h2>
        <ul className='fade-in'>
          {
            _.map(this.t('work').items, (item, index) => {
              return (
                <li key={index}>
                  <h3
                    style={{ 'lineHeight': '25px' }}
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  >
                  </h3>
                  <h3><tt className='chinese'>{item.job}</tt></h3>
                  <p>{item.description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

Work.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Work));
