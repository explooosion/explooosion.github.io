import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Intro.scss'

import _ from 'lodash'

class Intro extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <div>
        <p>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/2016rshah/githubchart-api">
            <img src="https://ghchart.rshah.org/409ba5/explooosion" alt="Robby's Github chart" title="Robby's Github chart" />
          </a>
        </p>
        <hr />
        <h1 className="tracking-in-contract-bck">Hi !</h1>
        <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'intl.intro' }) }}></p>
      </div>
    )
  }
}

Intro.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Intro))
