import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPros } from '../../../../store/actions/pros-actions';
import { getProfessionals } from '../../../../lib/data/professional-data';
import ProServicesView from './pro-services.view';

class ProServices extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', active: '' };
  }

  handleSearch = (search) => {
    this.setState({ search });
  };

  handleActive = (value) => {
    this.setState({active: value});
  }

  goProInfo = (item) => {
    const { navigation } = this.props;
    navigation.navigate('ProStack', { screen: 'ProInfo', params: { info: { ...item, hasMeeting: true } } });
  }

  loadPros = async () => {
    const { setPros } = this.props;
    const pros = await getProfessionals(1);
    setPros(pros);
  }

  filtering = () => {
    const { search, active } = this.state;
    return (x) => {
      return (x.profession.toString().includes(active.toString()) && x.name.toLowerCase().includes(search.toLowerCase())) ||
        (x.profession.toString().includes(active.toString()) && x.lastName.toLowerCase().includes(search.toLowerCase())) || false;
    }
  }

  render() {
    const { members } = this.props;
    const { search, active } = this.state;
    return (
      <ProServicesView
        goProInfo={this.goProInfo}
        data={members}
        search={search}
        handleSearch={this.handleSearch}
        filtering={this.filtering}
        active={active}
        handleActive={this.handleActive}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProServices);

