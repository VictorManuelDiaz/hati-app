import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { createReport, getMyReports } from '../../../../lib/data/reports-data';
import { setReports } from '../../../../store/actions/reports-actions';
import PoliceReportView from './new-report.view';

const initialState = {
  currentStep: 0, /* using index 0 as starting point */
  steps: ['Personal', 'Ocurrencia', 'Denuncia'],
  idCard: '',
  idCardError: false,
  name: '',
  nameError: false,
  email: '',
  emailError: false,
  phone: '',
  phoneError: false,
  cellphone: '',
  cellphoneError: false,
  date: '',
  dateError: false,
  hour: '',
  hourError: false,
  department: '',
  departmentError: false,
  municipality: '',
  municipalityError: false,
  neighbor: '',
  neighborError: false,
  place: '',
  placeError: false,
  address: '',
  addressError: false,
  crime: '',
  crimeError: false,
  occurrence: '',
  occurrenceError: false,
  suspects: '',
  suspectsError: false,
  transport: '',
  transportError: false,
  meansUsed: '',
  meansUsedError: false,
  affected: '',
  affectedError: false,
  user: '',
  municipalities: []
};

class PoliceReport extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  goNext = () => {
    const { currentStep } = this.state;
    let error = currentStep == 0 ?
      this.validatePersonalFields()
      :
      this.validateOccurrenceFields();
    if (!error) this.setState({ currentStep: currentStep + 1 });
  }

  finishHandler = () => {
    const {
      user, idCard, name, email,
      phone, cellphone, date,
      hour, department, municipality,
      neighbor, place, address,
      crime, occurrence, suspects,
      transport, meansUsed,
      affected
    } = this.state;
    const { navigation } = this.props;
    let error = this.validateReportFields();
    if (!error) {
      let timestamp = new Date(date.substring(6,10), parseInt(date.substring(3,5))-1, date.substring(0,2));
      Alert.alert('Felicidades!', 'Su denuncia se ha regitrado con éxito.', [], {cancelable: true});
      createReport({
        user, idCard, phone, cellphone, date: timestamp,
        hour, department, municipality,
        neighbor, place, address,
        crime, occurrence, suspects,
        transport, meansUsed, affected
      }).then(() => {
        this.loadReports();
        this.setState(initialState);
        navigation.navigate('PoliceReport');
      })
        .catch((e) => {
          Alert.alert('Error!', 'Se ha producido un error inesperado.', [], {cancelable: true});
        });
    }
  }

  goBack = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1 });
  }

  handleChange = (text, name) => {
    this.setState({ [name]: text });
  };

  handleChangeDepartment = (text) => {
    this.setState({ department: text });
    this.getMunicipalities(text);
  };

  getMunicipalities = (text) => {
    const { municipalities, departments } = this.props;
    let department = departments.find(obj => obj.departmentName == text);
    let filter = text == '' ? [] : municipalities.filter(x => x.department == department.id);
    this.setState({ municipalities: filter, municipality: '' });
  }

  validatePersonalFields = () => {
    const {
      idCard,
      name,
      email,
      phone,
      cellphone,
    } = this.state;

    let idCardError = false;
    let nameError = false;
    let emailError = false;
    let phoneError = false;
    let cellphoneError = false;

    if (idCard === '') idCardError = true;
    else idCardError = false;

    if (name === '') nameError = true;
    else nameError = false;

    if (email === '') emailError = true;
    else emailError = false;

    if (phone === '') phoneError = true;
    else phoneError = false;

    if (cellphone === '') cellphoneError = true;
    else cellphoneError = false;

    this.setState({ idCardError, nameError, emailError, phoneError, cellphoneError });

    if (!idCardError && !nameError && !emailError && !phoneError && !cellphoneError) return false;
    else return true;
  }

  validateOccurrenceFields = () => {
    const {
      date,
      hour,
      department,
      municipality,
      neighbor,
      place,
      address
    } = this.state;

    let dateError = false;
    let hourError = false;
    let departmentError = false;
    let municipalityError = false;
    let neighborError = false;
    let placeError = false;
    let addressError = false;

    if (date === '') dateError = true;
    else dateError = false;

    if (hour === '') hourError = true;
    else hourError = false;

    if (department === '') departmentError = true;
    else departmentError = false;

    if (municipality === '') municipalityError = true;
    else municipalityError = false;

    if (neighbor === '') neighborError = true;
    else neighborError = false;

    if (place === '') placeError = true;
    else placeError = false;

    if (address === '') addressError = true;
    else addressError = false;

    this.setState({
      dateError,
      hourError,
      departmentError,
      municipalityError,
      neighborError,
      placeError,
      addressError
    });

    if (
      !dateError && !hourError && !departmentError && !municipalityError &&
      !neighborError && !placeError && !addressError
    ) return false;
    else return true;
  }

  validateReportFields = () => {
    const { crime, occurrence, suspects, transport, meansUsed, affected } = this.state;

    let crimeError = false;
    let occurrenceError = false;
    let suspectsError = false;
    let transportError = false;
    let meansUsedError = false;
    let affectedError = false;

    if (crime === '') crimeError = true;
    else crimeError = false;

    if (occurrence === '') occurrenceError = true;
    else occurrenceError = false;

    if (suspects === '') suspectsError = true;
    else suspectsError = false;

    if (transport === '') transportError = true;
    else transportError = false;

    if (meansUsed === '') meansUsedError = true;
    else meansUsedError = false;

    if (affected === '') affectedError = true;
    else affectedError = false;

    this.setState({ crimeError, occurrenceError, suspectsError, transportError, meansUsedError, affectedError });

    if (
      !crimeError && !occurrenceError && !suspectsError && !transportError && !meansUsedError && !affectedError
    ) return false;
    else return true;
  }

  loadReports = async () => {
    const { currentUser, setReports } = this.props;
    const reports = await getMyReports(currentUser.id);
    setReports(reports);
  }

  render() {
    const {
      steps,
      currentStep,
      idCard,
      name,
      email,
      phone,
      cellphone,
      date,
      hour,
      department,
      municipality,
      neighbor,
      place,
      address,
      crime,
      occurrence,
      suspects,
      transport,
      meansUsed,
      affected,
      municipalities,
      idCardError,
      nameError,
      emailError,
      phoneError,
      cellphoneError,
      dateError,
      hourError,
      departmentError,
      municipalityError,
      neighborError,
      placeError,
      addressError,
      crimeError,
      occurrenceError,
      suspectsError,
      transportError,
      meansUsedError,
      affectedError
    } = this.state;
    const { locations, departments, crimes, transports, means, affectations } = this.props;

    return (
      <PoliceReportView
        steps={steps}
        currentStep={currentStep}
        goBack={this.goBack}
        goNext={this.goNext}
        idCard={idCard}
        name={name}
        email={email}
        phone={phone}
        cellphone={cellphone}
        date={date}
        hour={hour}
        department={department}
        municipality={municipality}
        neighbor={neighbor}
        place={place}
        address={address}
        crime={crime}
        occurrence={occurrence}
        suspects={suspects}
        transport={transport}
        meansUsed={meansUsed}
        affected={affected}
        handleChange={this.handleChange}
        handleChangeDepartment={this.handleChangeDepartment}
        locations={locations}
        departments={departments}
        municipalities={municipalities}
        crimes={crimes}
        transports={transports}
        means={means}
        affectations={affectations}
        idCardError={idCardError}
        nameError={nameError}
        emailError={emailError}
        phoneError={phoneError}
        cellphoneError={cellphoneError}
        dateError={dateError}
        hourError={hourError}
        departmentError={departmentError}
        municipalityError={municipalityError}
        neighborError={neighborError}
        placeError={placeError}
        addressError={addressError}
        crimeError={crimeError}
        occurrenceError={occurrenceError}
        suspectsError={suspectsError}
        transportError={transportError}
        meansUsedError={meansUsedError}
        affectedError={affectedError}
        finishHandler={this.finishHandler}
      />
    );
  }
  componentDidMount() {
    const { currentUser } = this.props;
    this.setState({
      name: `${currentUser.name} ${currentUser.lastName}`,
      email: currentUser.email,
      user: currentUser.id
    });
  }
}

const mapStateToProps = state => ({
  locations: state.locations.data,
  departments: state.departments.data,
  municipalities: state.municipalities.data,
  crimes: state.crime.data,
  transports: state.transport.data,
  means: state.means.data,
  affectations: state.affected.data,
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  setReports: reports => dispatch(setReports(reports)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoliceReport);
