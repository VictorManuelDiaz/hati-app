import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/shared/splash/splash';
import LogIn from '../screens/auth/log-in/log-in';
import SignIn from '../screens/auth/sign-in/sign-in';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 100,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const StackNavigator = createStackNavigator();

class RootStackNav extends React.Component {
  state = {
  }

  LogInScreen = ({ route, navigation }) => {
    return (
      <LogIn
        navigation={navigation}
        route={route}
      />
    );
  }

  SignInScreen = ({ route, navigation }) => {
    return (
      <SignIn
        navigation={navigation}
        route={route}
      />
    );
  }

  SplashScreen = ({ route, navigation }) => {
    return (
      <Splash
        navigation={navigation}
        route={route}
      />
    );
  }

  render() {
    return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name="Splash"
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
            title: 'Presentación',
          }}
          component={this.SplashScreen}
        />
        <StackNavigator.Screen
          name="LogIn"
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
            title: 'Inicio de sesión',
          }}
          component={this.LogInScreen}
        />
        <StackNavigator.Screen
          name="SignIn"
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
            title: 'Registro',
          }}
          component={this.SignInScreen}
        />
      </StackNavigator.Navigator>
    );
  }
}

export default RootStackNav;
