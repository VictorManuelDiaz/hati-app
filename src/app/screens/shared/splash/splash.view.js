import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import splashStyles from './splash.styles';

const SplashView = (props) => {
  const styles = splashStyles;
  const {  goLogIn, goSignIn } = props;

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#0D0D0D' barStyle="light-content"/>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => goLogIn()}>
          <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={['#ec083d', '#ed2da8']}
            style={styles.btnLogIn}
          >
            <Text style={styles.btnLogInText}>INICIO</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignIn} onPress={() => goSignIn()}>
          <Text style={styles.btnSignInText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashView;
