import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { setReports } from '../../../../store/actions/reports-actions';
import { getMyReports, deleteReport } from '../../../../lib/data/reports-data';
import PoliceReportsView from './police-reports.view';

class PoliceReports extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goNewReport = () => {
    const { navigation } = this.props;
    navigation.navigate('NewReport');
  }

  deleteHandler = async (id) => {
    await deleteReport(id).then(() => {
      this.loadReports();
      ToastAndroid.show('Denuncia eliminada', ToastAndroid.SHORT);
    });
  }

  loadReports = async () => {
    const { currentUser, setReports } = this.props;
    const reports = await getMyReports(currentUser.id);
    setReports(reports);
    console.log('Loading...')
  }

  render() {
    const { reports } = this.props;
    return (
      <PoliceReportsView goNewReport={this.goNewReport} reports={reports} deleteReport={this.deleteHandler} />
    );
  }
  componentDidMount() {
    this.loadReports();
  }
}

const mapStateToProps = state => ({
  reports: state.reports.data,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setReports: reports => dispatch(setReports(reports)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoliceReports);
