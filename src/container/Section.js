import React from 'react'
import { connect } from 'dva'
import styles from './Section.scss'
import { injectIntl, FormattedMessage } from 'react-intl'

import Intro from '../components/Intro';
import Work from '../components/Work';
import Skill from '../components/Skill';
import SideProject from '../components/SideProject';
import Blog from '../components/Blog';
import Activity from '../components/Activity';
import Analysis from '../components/Analysis';

class Section extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.dispatch = props.dispatch
    this.state = {}
  }

  render() {
    const { intl } = this.props

    return (
      <section className={styles.section}>
        <Intro />
        <hr />
        <Work />
        <hr />
        <Skill />
        <hr />
        <SideProject />
        <hr />
        <Blog />
        <hr />
        <Activity />
        <hr />
        <Analysis />
      </section>
    )
  }
}

Section.propTypes = {}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(injectIntl(Section))
