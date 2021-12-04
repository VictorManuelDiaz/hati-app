import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { getProSchedule, deleteSchedule } from '../../../../lib/data/schedule-data';
import { connect } from 'react-redux';
import ScheduleView from './schedule.view';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  goAdd = () => {
    const { navigation } = this.props;
    navigation.navigate('AddTime');
  }

  getSchedule = async () => {
    const { proUser } = this.props;
    const data = await getProSchedule(proUser.id);
    this.setState({ data });
  }

  deleteHandler = async (id) => {
    await deleteSchedule(id).then(() => {
      this.getSchedule();
      ToastAndroid.show('Horario eliminado', ToastAndroid.SHORT);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <ScheduleView deleteHandler={this.deleteHandler} data={data} goAdd={this.goAdd} />
    );
  }
  componentDidMount() {
    this.getSchedule();
  }
}

const mapStateToProps = state => ({
  proUser: state.proUser.currentPro,
});

export default connect(mapStateToProps, null)(Schedule);
