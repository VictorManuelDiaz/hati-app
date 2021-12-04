import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSchedule } from '../../../../lib/data/schedule-data';
import AddTimeView from './add-time.view';

class AddTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: '',
      end: '',
      startError: false,
      endError: false
    };
  }

  validateFields = () => {
    const { start, end } = this.state;
    let startError = false;
    let endError = false;

    if (start === '') startError = true;
    else startError = false;

    if (end === '') endError = true;
    else endError = false;

    this.setState({ startError, endError });

    if (!startError && !endError) return false;
    else return true;
  }

  handleSave = () => {
    const { proUser, navigation } = this.props;
    const { start, end } = this.state;
    const error = this.validateFields();
    if(!error) {
      createSchedule({profession: proUser.id, start, end}).then(() => {
        navigation.goBack();
      });
    }
  }

  handleChange = (text, name) => {
    this.setState({ [name]: text });
  };

  render() {
    const { start, end, startError, endError } = this.state;

    return (
      <AddTimeView
        start={start}
        end={end}
        startError={startError}
        endError={endError}
        handleChange={this.handleChange}
        handleSave={this.handleSave}
      />
    );
  }
}

const mapStateToProps = state => ({
  proUser: state.proUser.currentPro,
});

export default connect(mapStateToProps, null)(AddTime);
