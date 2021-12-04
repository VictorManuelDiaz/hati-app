import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPros } from '../../../../store/actions/pros-actions';
import { getProfessionals } from '../../../../lib/data/professional-data';
import MembersView from './members.view';

class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loadPros = async () => {
    const { setPros } = this.props;
    const pros = await getProfessionals(1);
    setPros(pros);
  }

  goInfo = (item) => {
    const { navigation } = this.props;
    navigation.navigate('MembersInfo', { info: { ...item } });
  }

  render() {
    const { members } = this.props;

    return (
      <MembersView data={members} goInfo={this.goInfo} />
    );
  }
  componentDidMount() {
    this.loadPros();
  }
}

const mapStateToProps = state => ({
  members: state.pros.data
});

const mapDispatchToProps = dispatch => ({
  setPros: pros => dispatch(setPros(pros)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
