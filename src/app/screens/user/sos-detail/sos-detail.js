import React, { Component } from 'react';
import SosDetailView from './sos-detail.view';

class SosDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { date, hour, long, lat } = this.props.route.params;

    return (
      <SosDetailView date={date} hour={hour} long={long} lat={lat}/>
    );
  }
}


export default SosDetail;
