import React from 'react'
import { connect } from 'dva'
import styles from './Footer.scss'

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    return (
      <footer className={styles.footer}>
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
    )
  }
}

Footer.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Footer)
