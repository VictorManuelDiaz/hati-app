import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import viewStyles from '../sign-in.styles';
import { RadioButton } from 'react-native-paper';

const TypeView = (props) => {
  const styles = viewStyles;
  const { userType, userTypeE, handleChange } = props;

  return (
    <View style={styles.stepBody}>
      <View style={styles.optionContainer}>
        <RadioButton
          uncheckedColor='#fff'
          color='#1ec78a'
          value={userType}
          status={userType === 1 ? 'checked' : 'unchecked'}
          onPress={() => handleChange(1, 'userType')}
        />
        <Text style={[{ color: userType === 1 ? '#1ec78a' : '#fff' }, styles.optionText]}>Usuario</Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton
          uncheckedColor='#fff'
          color='#1ec78a'
          value={userType}
          status={userType === 2 ? 'checked' : 'unchecked'}
          onPress={() => handleChange(2, 'userType')}
        />
        <Text style={[{ color: userType === 2 ? '#1ec78a' : '#fff' }, styles.optionText]}>Profesional</Text>
      </View>
      <Animatable.View animation="fadeInLeft" duration={500} style={{marginTop: 20}}>
        <Text style={[{ display: userTypeE ? 'flex' : 'none' }, styles.errorMsg]}>
          Selección obligatoria
        </Text>
      </Animatable.View>
    </View>
  );
};

export default TypeView;
