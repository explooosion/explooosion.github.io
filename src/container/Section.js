import React, { Component } from 'react';
import './Section.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Intro from '../components/Intro';
import Work from '../components/Work';
import Skill from '../components/Skill';
import SideProject from '../components/SideProject';
import Blog from '../components/Blog';
import Activity from '../components/Activity';
import Analysis from '../components/Analysis';

class Section extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  render() {
    return (
      <section id='section'>
        <Intro /><hr />
        <Work /><hr />
        <Skill /><hr />
        <SideProject /><hr />
        <Blog /><hr />
        <Activity /><hr />
        <Analysis />
      </section>
    );
  }
}

Section.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Section));
