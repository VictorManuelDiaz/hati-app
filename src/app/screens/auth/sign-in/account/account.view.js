import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import viewStyles from '../sign-in.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountView = (props) => {
  const styles = viewStyles;
  const {
    email,
    password,
    passConfirm,
    emailE,
    passwordE,
    passConfirmE,
    handleChange
  } = props;

  return (
    <View style={styles.stepBody}>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Correo electrónico</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="mail-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => handleChange(text, 'email')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: emailE == 1 ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
              <Text style={[{ display: emailE == 2 ? 'flex' : 'none' }, styles.errorMsg]}>
                El correo es inválido
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Contraseña</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="lock-closed-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => handleChange(text, 'password')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: passwordE == 1 ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
              <Text style={[{ display: passwordE == 2 ? 'flex' : 'none' }, styles.errorMsg]}>
                Las contraseña es muy corta
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Confirmar contraseña</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="lock-closed-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                secureTextEntry={true}
                value={passConfirm}
                onChangeText={(text) => handleChange(text, 'passConfirm')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: passConfirmE == 1 ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
              <Text style={[{ display: passConfirmE == 2 ? 'flex' : 'none' }, styles.errorMsg]}>
                Las contraseñas no coinciden
              </Text>
            </Animatable.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountView;
