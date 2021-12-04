import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { getMeetingsByUser, deleteMeet } from '../../../../lib/data/meetings-data';
import { setMeetings } from '../../../../store/actions/meetings-actions';
import MyMeetingsView from './my-meetings.view';

class MyMeetings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loadData = async () => {
    const { currentUser, setMeetings } = this.props;
    const meets = await getMeetingsByUser(currentUser.id);
    setMeetings(meets);
  }

  goMeetInfo = (item) => {
    const { navigation } = this.props;
    navigation.navigate('MeetInfo', { info: item });
  }


  deleteHandler = async (id) => {
    await deleteMeet(id).then(() => {
      this.loadData();
      ToastAndroid.show('Cita eliminada', ToastAndroid.SHORT);
    });
  }

  render() {
    const { meetings } = this.props;
    return (
      <MyMeetingsView goMeetInfo={this.goMeetInfo} data={meetings} deleteHandler={this.deleteHandler} />
    );
  }
  componentDidMount() {
    this.loadData();
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  meetings: state.meetings.data,
});

const mapDispatchToProps = dispatch => ({
  setMeetings: meets => dispatch(setMeetings(meets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMeetings);
