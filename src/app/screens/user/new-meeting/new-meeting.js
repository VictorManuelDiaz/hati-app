import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProSchedule } from '../../../../lib/data/schedule-data';
import { createMeeting, getMeetingsByUser } from '../../../../lib/data/meetings-data';
import { setMeetings } from '../../../../store/actions/meetings-actions';
import NewMeetingView from './new-meeting.view';

class NewMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [], date: '', timeRange: '', dateE: false, timeRangeE: false };
  }

  getSchedule = async () => {
    const { route } = this.props;
    const schedule = await getProSchedule(route.params.proId);
    this.setState({ schedule });
  }

  loadMeets = async () => {
    const { currentUser, setMeetings } = this.props;
    const meets = await getMeetingsByUser(currentUser.id);
    setMeetings(meets);
  }


  handleDate = (value) => {
    this.setState({ date: value });
  }

  handleTimeRange = (value) => {
    this.setState({ timeRange: value });
  }

  validateFields = () => {
    const { date, timeRange } = this.state;
    let dateE = false;
    let timeRangeE = false;

    if (date === '') dateE = true;
    else dateE = false;

    if (timeRange === '') timeRangeE = true;
    else timeRangeE = false;

    this.setState({ dateE, timeRangeE });

    if (!dateE && !timeRangeE) return false;
    else return true;
  }

  handleSave = () => {
    const { date, timeRange } = this.state;
    const { route, currentUser, navigation } = this.props;
    let timestamp = new Date(date.substring(6,10), parseInt(date.substring(3,5))-1, date.substring(0,2));
    const error = this.validateFields();
    if(!error){
      createMeeting({profession: route.params.proId, date: timestamp, timeRange, user: currentUser.id}).then(() => {
        this.loadMeets();
        navigation.navigate('MyMeetings');
      });
    }
  }

  render() {
    const { schedule, date, timeRange, dateE, timeRangeE } = this.state;
    const { currentUser } = this.props;
    return (
      <NewMeetingView
        schedule={schedule}
        user={currentUser}
        date={date}
        timeRange={timeRange}
        handleDate={this.handleDate}
        handleTimeRange={this.handleTimeRange}
        handleSave={this.handleSave}
        dateE={dateE}
        timeRangeE={timeRangeE}
      />
    );
  }
  componentDidMount() {
    this.getSchedule();
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  meetings: state.meetings.data,
});

const mapDispatchToProps = dispatch => ({
  setMeetings: meets => dispatch(setMeetings(meets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMeeting);
