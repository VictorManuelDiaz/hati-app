import React, { Component } from 'react';
import MeetInfoVIew from './meeting-info.view';

class MeetInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const { route } = this.props;

    return (
      <MeetInfoVIew profile={route.params.info} />
    );
  }
}

export default MeetInfo;
