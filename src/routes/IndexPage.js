import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'

import styles from './IndexPage.scss'
import Header from '../container/Header';
import Section from '../container/Section';
import Footer from '../container/Footer';

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {
      name: 'Robby',
    }
  }

  changeLocale(e) {
    const lan = this.props.lans.find(lan => lan.locale === e.target.value)
    this.dispatch({
      type: 'language/update',
      payload: {
        locale: lan.locale,
        key: lan.locale,
        messages: lan.messages
      },
    })
  }

  render() {
    const { intl, locale, lans } = this.props
    return (
      <div className={styles.wrapper}>
        <select className={styles['sel-lang']} value={locale} onChange={(e) => this.changeLocale(e)}>
          {
            lans.map((lan, index) => {
              return (
                <option
                  key={`lan-${index}`}
                  value={lan.locale}
                >
                  {intl.formatMessage({ id: `intl.lang.${lan.locale}` })}
                </option>
              )
            })
          }
        </select>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {}

function mapStateToProps(state) {
  return {
    key: state.language.key,
    locale: state.language.locale,
    messages: state.language.messages,
    lans: state.language.lans,
  }
}

export default connect(mapStateToProps)(injectIntl(IndexPage))
