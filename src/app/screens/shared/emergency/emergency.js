import React, { Component } from 'react';
import { getEmergencies } from '../../../../lib/data/emergency-data';
import EmergencyView from './emergency.view';

class Emergency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
      data: []
    }
  }

  handleActive = (value) => {
    this.setState({active: value});
  }

  filtering = () => {
    const { active } = this.state;
    return (x) => {
      return (x.location.includes(active)) || false;
    }
  }


  render() {
    const { data, active } = this.state;

    return (
      <EmergencyView data={data} active={active} filtering={this.filtering} handleActive={this.handleActive} />
    );
  }
  async componentDidMount () {
    const emergencies = await getEmergencies();
    this.setState({data: emergencies});
  }
}

export default Emergency;
