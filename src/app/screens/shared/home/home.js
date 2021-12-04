import React from 'react';
import HomeView from './home.view';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  redirect = (route) => {
    const { navigation } = this.props;
    navigation.navigate(route);
  }

  render() {
    return (
      <HomeView redirect={this.redirect} />
    );
  }
}

export default Home;
