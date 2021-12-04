import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../../../../store/actions/users-actions';
import { getClients } from '../../../../lib/data/user-data';
import ClientsView from './clients.view';

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loadData = async () => {
    const { setUsers } = this.props;
    const users = await getClients();
    setUsers(users);
  }

  render() {
    const { users } = this.props;

    return (
      <ClientsView data={users} />
    );
  }
  componentDidMount() {
    this.loadData();
  }
}

const mapStateToProps = state => ({
  users: state.users.data
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(setUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
