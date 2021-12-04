import React, { Component } from 'react';
import MembersInfoView from './members-info.view';
import { updateProState } from '../../../../lib/data/professional-data';

class MembersInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleApprove = (id, value) => {
    const { navigation } = this.props;
    updateProState(id, value).then(() => {
      navigation.goBack();
    });
  }

  goNewMeet = (id) => {
    const { navigation } = this.props;
    navigation.navigate('NewMeeting', {proId: id});
  }

  render() {
    const { route } = this.props;

    return (
      <MembersInfoView profile={route.params.info} goNewMeet={this.goNewMeet} handleApprove={this.handleApprove} />
    );
  }
}

export default MembersInfo;
