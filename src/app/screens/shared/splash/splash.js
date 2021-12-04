import React from 'react';
import SplashView from './splash.view';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  goLogIn = () => {
    const { navigation } = this.props;
    navigation.navigate('LogIn');
  }

  goSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  render() {

    return (
      <SplashView goLogIn={this.goLogIn} goSignIn={this.goSignIn} />
    );
  }
}

export default Splash;
