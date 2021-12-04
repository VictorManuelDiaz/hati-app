import React from 'react';
import { Alert } from 'react-native';
import LogInView from './log-in.view';
import { signIn } from '../../../../lib/data/user-data';

const initialState = {
  email: '',
  password: '',
  emailError: false,
  passwordError: false,
  loginError: false,
  isLogging: false,
  secureTextEntry: true
};

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  goApp = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  }

  goSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  validateFields = () => {
    const { email, password } = this.state;

    let emailError = 0;
    let passwordError = 0;

    if (email === '') emailError = 1;
    else if (!email.includes('@') || !email.includes('.')) emailError = 2;
    else emailError = 0;

    if (password === '') passwordError = 1;
    else if (password.length < 6) passwordError = 2;
    else passwordError = 0;

    if (emailError === 0 && passwordError === 0) {
      this.setState({ emailError, passwordError });
      return false;
    }
    else {
      this.setState({ emailError, passwordError });
      return true;
    }
  }

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  handleChange = (text, name) => {
    this.setState({ [name]: text });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const error = this.validateFields();
    if (!error) {
      this.setState({ isLogging: true });
      signIn(email, password).then(() => {
        Alert.alert('Bienvenido!', 'Disfruta de nuestras funcionalidades.', [], { cancelable: true });
        this.setState(initialState);
      }).catch((e) => {
        this.setState({ isLogging: false });
        Alert.alert('Error!', 'Usuario inválido', [{ text: 'Okay' }]);
      });
    }
  }

  render() {
    const { email, password, emailError, passwordError, loginError, secureTextEntry, isLogging } = this.state;
    return (
      <LogInView
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}
        secureTextEntry={secureTextEntry}
        updateSecureTextEntry={this.updateSecureTextEntry}
        email={email}
        password={password}
        isLogging={isLogging}
        emailError={emailError}
        passwordError={passwordError}
        goSignIn={this.goSignIn}
      />
    );
  }
}

export default LogIn;
