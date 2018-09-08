import React from 'react'
import { connect } from 'dva'
import styles from './Header.scss'
import { injectIntl, FormattedMessage } from 'react-intl'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <header className={styles.header}>
        <img className={styles['jello-horizontal']} src="assets/img/avatar.png" alt="Hi" title="Hi" /><br /><br />
        <h1>Robby</h1>
        <h4>ta7382@gmail.com</h4>
        <hr />
        <p>{intl.formatMessage({ id: 'intl.title' })}</p>
        <p>{intl.formatMessage({ id: 'intl.edu' })}
          <a rel="noopener noreferrer" target="_blank" href="http://im.nutc.edu.tw/bin/home.php">
            <i className="fa fa-link"></i>
          </a>
        </p>
        <div className={styles.headerIcons}>
          <a rel="noopener noreferrer" target="_blank" href="https://fb.me/qi.lian.56">
            <i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a rel="noopener noreferrer" target="_blank" href="https://dotblogs.com.tw/explooosion">
            <i className="fa fa-2x fa-rss-square" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/robby-wu-2b26b510a/">
            <i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/explooosion">
            <i className="fa fa-2x fa-github" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a rel="noopener noreferrer" target="_blank" href="https://gitlab.com/explooosion">
            <i className="fa fa-2x fa-gitlab" aria-hidden="true"></i>
          </a>
          &nbsp;
          <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/ta7382/">
            <i className="fa fa-2x fa-codepen" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    )
  }
}

Header.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Header))
