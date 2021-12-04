import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeetingsByPro } from '../../../../lib/data/meetings-data';
import MeetingsView from './meetings.view';

class Meetings extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  loadData = async () => {
    const { proUser } = this.props;
    const meets = await getMeetingsByPro(proUser.id);
    this.setState({data: meets});
  }

  render() {
    const { data } = this.state;

    return (
      <MeetingsView data={data} />
    );
  }
}


const mapStateToProps = state => ({
  proUser: state.proUser.currentPro,
});

export default connect(mapStateToProps, null)(Meetings);
