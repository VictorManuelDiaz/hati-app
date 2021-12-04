import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setReqs } from '../../../../store/actions/pros-actions';
import { getProfessionals } from '../../../../lib/data/professional-data';
import RequestsView from './requesters.view';

class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goInfo = (item) => {
    const { navigation } = this.props;
    navigation.navigate('RequestersInfo', { info: { ...item } });
  }

  loadPros = async () => {
    const { setReqs } = this.props;
    const pros = await getProfessionals(0);
    setReqs(pros);
  }

  render() {
    const { requests } = this.props;

    return (
      <RequestsView data={requests} goInfo={this.goInfo} />
    );
  }
  componentDidMount() {
    this.loadPros();
  }
}

const mapStateToProps = state => ({
  requests: state.reqs.data
});

const mapDispatchToProps = dispatch => ({
  setReqs: reqs => dispatch(setReqs(reqs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
