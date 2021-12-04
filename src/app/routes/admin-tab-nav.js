import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Clients from '../screens/admin/clients/clients';
import { MembersStack as Members } from './app-stacks';
import { RequestersStack as Requesters } from './app-stacks';
import Stats from '../screens/admin/stats/stats';
import Emergency from '../screens/shared/emergency/emergency';

const Tab = createBottomTabNavigator();

class AdminTabNav extends React.Component {

  MembersScreen = ({ route, navigation }) => {
    return (
      <Members navigation={navigation} route={route} />
    );
  }

  RequestersScreen = ({ route, navigation }) => {
    return (
      <Requesters navigation={navigation} route={route} />
    );
  }

  StatsScreen = ({ route, navigation }) => {
    return (
      <Stats navigation={navigation} route={route} />
    );
  }

  ClientsScreen = ({ route, navigation }) => {
    return (
      <Clients navigation={navigation} route={route} />
    );
  }

  EmergencyScreen = ({ route, navigation }) => {
    return (
      <Emergency navigation={navigation} route={route} />
    );
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Stats') {
              iconName = 'stats-chart'
            }
            else if (route.name === 'Emergency') {
              iconName = 'megaphone'
            }
            else if (route.name === 'Clients') {
              iconName = 'people'
            }
            else if (route.name === 'MembersStack') {
              iconName = 'star'
            }
            else if (route.name === 'Requests') {
              iconName = 'person-add'
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
          name="Stats"
          options={{
            headerShown: false,
            title: "Estadísticas",
            unmountOnBlur: true
          }}
          component={this.StatsScreen}
        />
        <Tab.Screen
          name="Emergency"
          options={{
            headerShown: false,
            title: "Emergencias"
          }}
          component={this.EmergencyScreen}
        />
        <Tab.Screen
          name="Clients"
          options={{
            headerShown: false,
            title: "Usuarios"
          }}
          component={this.ClientsScreen}
        />
        <Tab.Screen
          name="MembersStack"
          options={{
            headerShown: false,
            title: "Miembros",
            unmountOnBlur: true
          }}
          component={this.MembersScreen}
        />
        <Tab.Screen
          name="Requests"
          options={{
            headerShown: false,
            title: "Solicitudes",
            unmountOnBlur: true
          }}
          component={this.RequestersScreen}
        />
      </Tab.Navigator>
    );
  }
}

export default AdminTabNav;
