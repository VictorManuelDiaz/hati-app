import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import policeReportStyles from './new-report.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PersonalView from './personal/personal';
import OccurrenceView from './occurrence/occurrence';
import ReportView from './report/report';


const PoliceReportView = (props) => {
  const styles = policeReportStyles;
  const {
    steps,
    currentStep,
    goBack,
    goNext,
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
    handleChange,
    handleChangeDepartment,
    locations,
    departments,
    municipalities,
    crimes,
    transports,
    means,
    affectations,
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
    affectedError,
    finishHandler
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.progressBar}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ height: 2, backgroundColor: '#00cb82', width: 250, position: 'absolute', top: 20, zIndex: 10 }} />
          </View>
          <View style={styles.stepsContainer}>
            {steps.map((label, i) =>
              <View key={i} style={{ alignItems: 'center', width: 130 }}>
                {i > currentStep && i != currentStep && /* Not selected */
                  <View style={[{ backgroundColor: '#000417', borderColor: '#00cb82' }, styles.step]}>
                    <Text style={{ fontSize: 15, color: '#00cb82' }}>{i + 1}</Text>
                  </View>
                }
                {i < currentStep && /* Checked */
                  <View style={[{ backgroundColor: '#00cb82', borderColor: '#00cb82' }, styles.step]}>
                    <Ionicons name="md-checkmark" size={20} color="#fff" />
                  </View>
                }
                {i == currentStep && /* Selected */
                  <View style={[{ backgroundColor: '#00cb82', borderColor: '#00cb82' }, styles.step]}>
                    <Text style={{ fontSize: 13, color: '#000417' }}>{i + 1}</Text>
                  </View>
                }
                <Text style={{ fontSize: 16 }}>{label}</Text>
              </View>
            )}
          </View>
        </View>
        <View>
          {currentStep == 0 &&
            <PersonalView
              idCard={idCard}
              name={name}
              email={email}
              phone={phone}
              cellphone={cellphone}
              handleChange={handleChange}
              idCardError={idCardError}
              nameError={nameError}
              emailError={emailError}
              phoneError={phoneError}
              cellphoneError={cellphoneError}
            />
          }
          {currentStep == 1 &&
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
          }
          {currentStep == 2 &&
            <ReportView
              crime={crime}
              occurrence={occurrence}
              suspects={suspects}
              transport={transport}
              meansUsed={meansUsed}
              affected={affected}
              handleChange={handleChange}
              crimes={crimes}
              transports={transports}
              means={means}
              affectations={affectations}
              crimeError={crimeError}
              occurrenceError={occurrenceError}
              suspectsError={suspectsError}
              transportError={transportError}
              meansUsedError={meansUsedError}
              affectedError={affectedError}
            />
          }
          <View style={styles.navContainer}>
            {currentStep > 0 ?
              <TouchableOpacity onPress={() => {
                if (currentStep > 0) {
                  goBack();
                }
              }}>
                <LinearGradient
                  style={styles.navButton}
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['#ec083d', '#ed2da8']}
                >
                  <Text style={{ color: '#fff' }}>ATRÁS</Text>
                </LinearGradient>
              </TouchableOpacity>
              : <Text> </Text>
            }
            {(currentStep + 1) < steps.length /* add other conditions here */ &&
              <TouchableOpacity style={styles.navButton} onPress={() => {
                if ((currentStep + 1) < steps.length) {
                  goNext();
                }
              }}>
                <LinearGradient
                  style={styles.navButton}
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['#ec083d', '#ed2da8']}
                >
                  <Text style={{ color: '#fff' }}>SIGUIENTE</Text>
                </LinearGradient>
              </TouchableOpacity>
            }
            {(currentStep + 1) == steps.length /* add other conditions here */ &&
              <TouchableOpacity style={styles.navButton} onPress={() => {finishHandler();}}>
                <LinearGradient
                  style={styles.navButton}
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['#ec083d', '#ed2da8']}
                >
                  <Text style={{ color: '#fff' }}>FINALIZAR</Text>
                </LinearGradient>
              </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    </View>
  );
};

export default PoliceReportView;
