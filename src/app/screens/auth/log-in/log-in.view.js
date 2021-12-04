import React from 'react';
import {
  View, Text, TouchableOpacity, TextInput, StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import logInStyles from './log-in.styles';

const SignInScreen = (props) => {
  const styles = logInStyles;

  const {
    email, password, emailError,
    passwordError, isLogging,
    handleChange, updateSecureTextEntry,
    secureTextEntry, handleLogin, goSignIn
  } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#0D0D0D' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textSecondary}>Bienvenidos a</Text>
        <Text style={styles.textPrimary}>HATI APP</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: "#090c22"
        }]}
      >
        <View style={styles.contentInput}>
          <Text style={styles.actionText}>Correo electrónico</Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="envelope-o"
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
        </View>
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            {
              emailError === 1
                ? 'Campo obligatorio'
                :
                emailError === 2
                  ?
                  'Introduzca una dirección de correo válida'
                  :
                  null
            }
          </Text>
        </Animatable.View>
        <View style={styles.contentInput}>
          <Text style={styles.actionText}>Contraseña</Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="lock"
              color='#afb1c1'
              size={20}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={secureTextEntry ? true : false}
              value={password}
              onChangeText={(text) => handleChange(text, 'password')}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {secureTextEntry ?
                <Feather
                  style={{ marginRight: 10 }}
                  name="eye-off"
                  color="#f8c30c"
                  size={20}
                />
                :
                <Feather
                  style={{ marginRight: 10 }}
                  name="eye"
                  color="#f8c30c"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>
        </View>
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            {
              passwordError === 1
                ?
                'Campo obligatorio'
                :
                passwordError === 2
                  ?
                  'El texto debe contener al menos 6 caracteres'
                  :
                  null
            }
          </Text>
        </Animatable.View>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: '#fff', marginTop: 30 }}>¿Olvidaste la contraseña?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => { handleLogin() }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#ec083d', '#ed2da8']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>{isLogging ? 'ENTRANDO...' : 'ENTRAR'}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { goSignIn() }}
            style={[styles.signUp, {
              marginTop: 30
            }]}
          >
            <Text style={[styles.textSign, { color: '#ed2da8' }]}>¿Ya tienes una cuenta? Registrate</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

