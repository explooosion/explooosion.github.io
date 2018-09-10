import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Work.scss'

import _ from 'lodash'

class Work extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <div>
        <h2 className="fade-in">
          <i className="fa fa-paper-plane"></i>&nbsp;
          {intl.messages['intl.work']['title']}
        </h2>
        <ul className="fade-in">
          {
            _.map(intl.messages['intl.work']['items'], (item, index) => {
              return (
                <li key={index}>
                  <h3
                    style={{ 'lineHeight': '25px' }}
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  >
                  </h3>
                  <h3><tt className="chinese">{item.job}</tt></h3>
                  <p>{item.description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

Work.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Work))
