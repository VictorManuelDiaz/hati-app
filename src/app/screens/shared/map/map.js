import React, { Component } from 'react';
import MapView from './map.view';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MapView/>
    );
  }
}

export default Map;
