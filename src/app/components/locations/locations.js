import React from 'react';
import { getLocations } from '../../../lib/data/emergency-data';
import LocationsView from './locations.view';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: []
    }
  }

  render() {
    const { locations } = this.state;
    const { active, handleActive } = this.props;
    return(
      <LocationsView locations={locations} active={active} handleActive={handleActive} />
    );
  }
  async componentDidMount() {
    const data = await getLocations();
    this.setState({locations: data});
  }
}

export default Locations;
