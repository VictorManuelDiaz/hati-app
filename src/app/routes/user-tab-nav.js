import React from 'react';
import { View  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import PoliceReport from '../screens/user/police-reports/police-reports';
import Emergency from '../screens/shared/emergency/emergency';
import Sos from '../screens/user/sos/sos';
import Map from '../screens/shared/map/map';
import ProServices from '../screens/user/pro-services/pro-services';

const Tab = createBottomTabNavigator();

class UserTabNav extends React.Component {

  PoliceReportScreen = ({ route, navigation }) => {
    return (
      <PoliceReport navigation={navigation} route={route}/>
    );
  }

  EmergencyScreen = ({ route, navigation }) => {
    return (
      <Emergency navigation={navigation} route={route}/>
    );
  }

  SosScreen = ({ route, navigation }) => {
    return (
      <Sos navigation={navigation} route={route}/>
    );
  }

  MapScreen = ({ route, navigation }) => {
    return (
      <Map navigation={navigation} route={route}/>
    );
  }

  ProServicesScreen = ({ route, navigation }) => {
    return (
      <ProServices navigation={navigation} route={route}/>
    );
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName='Alert'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'PoliceReport') {
              iconName = 'megaphone'
            }
            else if (route.name === 'Emergency') {
              iconName = 'call'
            }
            else if (route.name === 'Map') {
              iconName = 'map'
            }
            else if (route.name === 'ServicesScreen') {
              iconName = 'people'
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
          name="PoliceReport"
          options={{
            headerShown: false,
            title: "Denuncias",
            unmountOnBlur: true
          }}
          component={this.PoliceReportScreen}
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
          name="Alert"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 70,
                  width: 70,
                  borderRadius: 68,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <MaskedView
                  style={{ flex: 1, flexDirection: 'row', height: 60 }}
                  maskElement={
                    <View
                      style={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name='radio-button-on-outline' color='#fff' size={68} type='ionicon'/>
                    </View>
                  }>
                  <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={['#ec083d', '#ed2da8']}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
              </View>
            )
          }}
          component={this.SosScreen}
        />
        <Tab.Screen
          name="Map"
          options={{
            headerShown: false,
            title: "Lugares"
          }}
          component={this.MapScreen}
        />
        <Tab.Screen
          name="ServicesScreen"
          options={{
            headerShown: false,
            title: "Servicios",
            unmountOnBlur: true
          }}
          component={this.ProServicesScreen}
        />
      </Tab.Navigator>
    );
  }
}

export default UserTabNav;
