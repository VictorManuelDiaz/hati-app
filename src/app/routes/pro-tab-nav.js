import React from 'react';
import { connect } from 'react-redux';
import { setProUser } from '../../store/actions/auth-actions';
import { getAProfessional } from '../../lib/data/professional-data';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Meetings from '../screens/professional/meetings/meetings';
import Location from '../screens/professional/location/location';
import Profile from '../screens/professional/profile/profile';
import Clients from '../screens/professional/clients/clients';
import { ScheduleStack } from './app-stacks';

const Tab = createBottomTabNavigator();

class ProTabNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  MeetingsScreen = ({ route, navigation }) => {
    return (
      <Meetings navigation={navigation} route={route} />
    );
  }

  LocationScreen = ({ route, navigation }) => {
    return (
      <Location navigation={navigation} route={route} />
    );
  }

  ProfileScreen = ({ route, navigation }) => {
    return (
      <Profile navigation={navigation} route={route} />
    );
  }

  ClientsScreen = ({ route, navigation }) => {
    return (
      <Clients navigation={navigation} route={route} />
    );
  }

  ScheduleScreen = ({ route, navigation }) => {
    return (
      <ScheduleStack navigation={navigation} route={route} />
    );
  }

  listenProfile = async () => {
    const { setProUser, currentUser } = this.props;
    const profile = await getAProfessional(currentUser.id);
    setProUser(profile);
  };

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Meetings') {
              iconName = 'calendar'
            }
            else if (route.name === 'Schedule') {
              iconName = 'time'
            }
            else if (route.name === 'Clients') {
              iconName = 'people'
            }
            else if (route.name === 'Location') {
              iconName = 'business'
            }
            else if (route.name === 'WProfile') {
              iconName = 'person'
            }
            return <Icon name={iconName} size={size} color={color} type='ionicon' />;
          },
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: '#000417',
            paddingTop: 3,
            paddingBottom: 4,
            height: 60
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#212542'
        })}
      >
        <Tab.Screen
          name="Meetings"
          options={{
            headerShown: false,
            title: "Citas",
            unmountOnBlur: true
          }}
          component={this.MeetingsScreen}
        />
        <Tab.Screen
          name="Schedule"
          options={{
            headerShown: false,
            title: "Horarios",
            unmountOnBlur: true
          }}
          component={this.ScheduleScreen}
        />
        <Tab.Screen
          name="Location"
          options={{
            headerShown: false,
            title: "Atención"
          }}
          component={this.LocationScreen}
        />
        <Tab.Screen
          name="Clients"
          options={{
            headerShown: false,
            title: "Clientes"
          }}
          component={this.ClientsScreen}
        />
        <Tab.Screen
          name="WProfile"
          options={{
            headerShown: false,
            title: "Perfil"
          }}
          component={this.ProfileScreen}
        />
      </Tab.Navigator>
    );
  }
  componentDidMount(){
    this.listenProfile();
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setProUser: pro => dispatch(setProUser(pro))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProTabNav);
