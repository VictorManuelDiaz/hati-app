import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import signInStyles from './sign-in.styles';
import TypeView from './type/type';
import PersonalView from './personal/personal';
import ProfessionView from './profession/profession';
import AccountView from './account/account';

const SignInView = (props) => {
  const styles = signInStyles;
  const {
    steps,
    currentStep,
    proArray,
    daysArray,
    userType,
    idCard,
    name,
    lastName,
    cellphone,
    profession,
    attentionCenter,
    location,
    attentionDays,
    email,
    password,
    passConfirm,
    userTypeE,
    idCardE,
    nameE,
    lastNameE,
    cellphoneE,
    professionE,
    attentionCenterE,
    locationE,
    attentionDaysE,
    emailE,
    passwordE,
    passConfirmE,
    goNext,
    goBack,
    handleChange,
    finishHandler,
    redirectBack,
    selectDays,
    imgSource,
    isLoading,
    handleLocation
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.step}>{steps[currentStep]}</Text>
        <View>
          {currentStep == 0 &&
            <TypeView
              userType={userType}
              userTypeE={userTypeE}
              handleChange={handleChange}
            />
          }
          {currentStep == 1 &&
            <PersonalView
              idCard={idCard}
              name={name}
              lastName={lastName}
              cellphone={cellphone}
              idCardE={idCardE}
              nameE={nameE}
              lastNameE={lastNameE}
              cellphoneE={cellphoneE}
              handleChange={handleChange}
            />
          }
          {currentStep == 2 &&
            <ProfessionView
              profession={profession}
              attentionCenter={attentionCenter}
              location={location}
              attentionDays={attentionDays}
              professionE={professionE}
              attentionCenterE={attentionCenterE}
              locationE={locationE}
              attentionDaysE={attentionDaysE}
              proArray={proArray}
              daysArray={daysArray}
              selectDays={selectDays}
              imgSource={imgSource}
              isLoading={isLoading}
              handleChange={handleChange}
              handleLocation={handleLocation}
            />
          }
          {currentStep == 3 &&
            <AccountView
              email={email}
              password={password}
              passConfirm={passConfirm}
              emailE={emailE}
              passwordE={passwordE}
              passConfirmE={passConfirmE}
              handleChange={handleChange}
            />
          }
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => { currentStep > 0 ? goBack() : redirectBack() }}>
              <LinearGradient
                style={styles.navButton}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#ec083d', '#ed2da8']}
              >
                <Text style={{ color: '#fff' }}>ATRÁS</Text>
              </LinearGradient>
            </TouchableOpacity>
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
              <TouchableOpacity style={styles.navButton} onPress={() => { finishHandler(); }}>
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

export default SignInView;
