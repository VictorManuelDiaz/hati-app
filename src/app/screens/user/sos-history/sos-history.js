import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import { getHistory, deleteAlert } from '../../../../lib/data/sos-data';
import { setSos } from '../../../../store/actions/sos-actions';
import SosHistoryView from './sos-history.view';

class SosHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loadData = async () => {
    const { setSos, currentUser } = this.props;
    const history = await getHistory(currentUser.id);
    setSos(history);
  }

  goDetail = (location, date, hour) => {
    const { navigation } = this.props;
    navigation.navigate('SosDetail',{ lat: location.latitude, long: location.longitude, date, hour });
  }

  deleteHandler = async (id) => {
    await deleteAlert(id).then(() => {
      this.loadData();
      ToastAndroid.show('Alerta eliminada del historial', ToastAndroid.SHORT);
    });
  }

  render() {
    const { history, currentUser } = this.props;
    return (
      <SosHistoryView history={history} currentUser={currentUser} goDetail={this.goDetail} deleteAlert={this.deleteHandler} />
    );
  }
  componentDidMount() {
    this.loadData();
  }
}

const mapStateToProps = state => ({
  history: state.sos.history,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setSos: history => dispatch(setSos(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SosHistory);
