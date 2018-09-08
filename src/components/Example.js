import React from 'react'
import { connect } from 'dva'
import { injectIntl, FormattedMessage } from 'react-intl'
import styles from './Example.scss'

class Example extends React.Component {
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
      <div>
        <h1>React i18n Example</h1>
        <select value={locale} onChange={(e) => this.changeLocale(e)}>
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
        <div className={styles.form}>
          <p>{intl.formatMessage({ id: 'intl.lang' })} - <span>{locale}</span></p>
          <p>{intl.formatMessage({ id: 'intl.hello' })}</p>
          <p>{intl.formatMessage({ id: 'intl.name' }, { name: this.state.name })}</p>
        </div>
      </div >
    )
  }
}

Example.propTypes = {}

function mapStateToProps(state) {
  return {
    key: state.language.key,
    locale: state.language.locale,
    messages: state.language.messages,
    lans: state.language.lans,
  }
}

export default connect(mapStateToProps)(injectIntl(Example))
