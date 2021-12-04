import React from 'react';
import OccurrenceView from './occurrence.view';

class Occurrence extends React.Component {
  constructor(props) {
    super(props);
    this.state = { municipalities: [] };
  }

  render() {
    const {
      date,
      hour,
      department,
      municipality,
      neighbor,
      place,
      address,
      handleChange,
      handleChangeDepartment,
      locations,
      departments,
      municipalities,
      dateError,
      hourError,
      departmentError,
      municipalityError,
      neighborError,
      placeError,
      addressError
    } = this.props;
    return (
      <OccurrenceView
        date={date}
        hour={hour}
        department={department}
        municipality={municipality}
        neighbor={neighbor}
        place={place}
        address={address}
        handleChange={handleChange}
        handleChangeDepartment={handleChangeDepartment}
        locations={locations}
        departments={departments}
        municipalities={municipalities}
        dateError={dateError}
        hourError={hourError}
        departmentError={departmentError}
        municipalityError={municipalityError}
        neighborError={neighborError}
        placeError={placeError}
        addressError={addressError}
      />
    );
  }
}

export default Occurrence;
