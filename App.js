/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { setCurrentUser } from './src/store/actions/auth-actions';
import { onAuthChanged, selectUser } from './src/lib/data/user-data';
import { View } from 'react-native';
import DrawerContent from './src/app/routes/drawer-content';
import UserTabNav from './src/app/routes/user-tab-nav';
import ProTabNav from './src/app/routes/pro-tab-nav';
import AdminTabNav from './src/app/routes/admin-tab-nav';
import RootStackNav from './src/app/routes/root-stack-nav';
import { ContactsStack } from './src/app/routes/app-stacks';
import Profile from './src/app/screens/auth/profile/profile';
import PoliceReports from './src/app/screens/user/police-reports/police-reports';
import Settings from './src/app/screens/shared/settings/settings';
import Support from './src/app/screens/shared/support/support';
import NewReport from './src/app/screens/user/new-report/new-report';
import { SosStack, ProServicesStack } from './src/app/routes/app-stacks';
import { ClientMeetStack } from './src/app/routes/app-stacks';


const Drawer = createDrawerNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  async handleUserDetail(user) {
    const { setCurrentUser } = this.props;
    try {
      const userDetail = await selectUser(user.uid);
      setCurrentUser(userDetail);
    }
    catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  listenAuthentication = () => {
    const { setCurrentUser } = this.props;
    onAuthChanged((user) => {
      if (user) {
        this.handleUserDetail(user);
      }
      else {
        setCurrentUser(undefined);
        this.setState({ loading: false });
      }
    });
  };

  render() {
    const { loading } = this.state;
    const { currentUser } = this.props;

    if (loading)
      return <View />
    else {
      if (currentUser === undefined)
        return <NavigationContainer><RootStackNav /></NavigationContainer>
      else
        return (
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#090c22',
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
              drawerContent={props => <DrawerContent {...props} />}
            >
              <Drawer.Screen
                name="Hati" options={{ title: 'Hati App' }}
                component={currentUser.type == 1 ? UserTabNav : ( currentUser.type == 2 ? ProTabNav : AdminTabNav)}
              />
              <Drawer.Screen name="Profile" options={{ title: 'Perfil' }} component={Profile} />
              <Drawer.Screen name="ContactsStack" options={{ title: 'Contactos' }} component={ContactsStack} />
              <Drawer.Screen name="Reports" options={{ title: 'Denuncias' }} component={PoliceReports} />
              <Drawer.Screen name="Support" options={{ title: 'Soporte' }} component={Support} />
              <Drawer.Screen name="Settings" options={{ title: 'Configuraciones' }} component={Settings} />
              {/***************************************** CONTENT SCREENS *****************************************/}
              <Drawer.Screen name="NewReport" options={{ title: 'Denuncia' }} component={NewReport} />
              <Drawer.Screen name="ProStack" options={{ title: 'Servicios Profesionales' }} component={ProServicesStack} />
              <Drawer.Screen name="SosStack" options={{ title: 'Historial de alertas' }} component={SosStack} />
              <Drawer.Screen name="MyMeetings" options={{ title: 'Citas' }} component={ClientMeetStack} />
            </Drawer.Navigator>
          </NavigationContainer>
        );
    }
  }
  componentDidMount() {
    this.listenAuthentication();
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
