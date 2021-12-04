import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TrustedContacts from '../screens/user/trusted-contacts/trusted-contacts';
import AddContacts from '../screens/user/add-contacts/add-contacts';
import SosHistory from '../screens/user/sos-history/sos-history';
import SosDetail from '../screens/user/sos-detail/sos-detail';
import NewMeeting from '../screens/user/new-meeting/new-meeting';
import Members from '../screens/admin/members/members';
import MembersInfo from '../screens/admin/members-info/members-info';
import Requesters from '../screens/admin/requesters/requesters';
import Schedule from '../screens/professional/schedule/schedule';
import AddTime from '../screens/professional/add-time/add-time';
import MyMeetings from '../screens/user/my-meetings/my-meetings';
import MeetingInfo from '../screens/shared/meeting-info/meeting-info';

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

const ContactsStack = () => {
  const ContactsScreen = ({ route, navigation }) => {
    return (
      <TrustedContacts navigation={navigation} route={route} />
    );
  }

  const AddScreen = ({ route, navigation }) => {
    return (
      <AddContacts navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='Contacts'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="Contacts"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Contactos'
        }}
        component={ContactsScreen}
      />
      <StackNavigator.Screen
        name="AddContacts"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Seleccionar',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={AddScreen}
      />
    </StackNavigator.Navigator>
  );
}

const SosStack = () => {
  const SosHistoryScreen = ({ route, navigation }) => {
    return (
      <SosHistory navigation={navigation} route={route} />
    );
  }

  const SosDetailScreen = ({ route, navigation }) => {
    return (
      <SosDetail navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='SosHistory'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="SosHistory"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Historial de alertas'
        }}
        component={SosHistoryScreen}
      />
      <StackNavigator.Screen
        name="SosDetail"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Ubicación',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={SosDetailScreen}
      />
    </StackNavigator.Navigator>
  );
}


const MembersStack = () => {
  const MembersScreen = ({ route, navigation }) => {
    return (
      <Members navigation={navigation} route={route} />
    );
  }

  const MembersInfoScreen = ({ route, navigation }) => {
    return (
      <MembersInfo navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='Members'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="Members"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Miembros'
        }}
        component={MembersScreen}
      />
      <StackNavigator.Screen
        name="MembersInfo"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: '',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={MembersInfoScreen}
      />
    </StackNavigator.Navigator>
  );
}

const RequestersStack = () => {
  const RequestersScreen = ({ route, navigation }) => {
    return (
      <Requesters navigation={navigation} route={route} />
    );
  }

  const MembersInfoScreen = ({ route, navigation }) => {
    return (
      <MembersInfo navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='Requesters'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="Requesters"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Solicitudes'
        }}
        component={RequestersScreen}
      />
      <StackNavigator.Screen
        name="RequestersInfo"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: '',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={MembersInfoScreen}
      />
    </StackNavigator.Navigator>
  );
}


const ProServicesStack = () => {

  const MembersInfoScreen = ({ route, navigation }) => {
    return (
      <MembersInfo navigation={navigation} route={route} />
    );
  }

  const NewMeetingScreen = ({ route, navigation }) => {
    return (
      <NewMeeting navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='ProInfo'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="ProInfo"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: ''
        }}
        component={MembersInfoScreen}
      />
      <StackNavigator.Screen
        name="NewMeeting"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: '',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={NewMeetingScreen}
      />
    </StackNavigator.Navigator>
  );
}

const ScheduleStack = () => {

  const ScheduleScreen = ({ route, navigation }) => {
    return (
      <Schedule navigation={navigation} route={route} />
    );
  }

  const AddTimeScreen = ({ route, navigation }) => {
    return (
      <AddTime navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='ScheduleList'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="ScheduleList"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: ''
        }}
        component={ScheduleScreen}
      />
      <StackNavigator.Screen
        name="AddTime"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: '',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={AddTimeScreen}
      />
    </StackNavigator.Navigator>
  );
}

const ClientMeetStack = () => {

  const MyMeetScreen = ({ route, navigation }) => {
    return (
      <MyMeetings navigation={navigation} route={route} />
    );
  }

  const MeetInfoScreen = ({ route, navigation }) => {
    return (
      <MeetingInfo navigation={navigation} route={route} />
    );
  }

  return (
    <StackNavigator.Navigator
      initialRouteName='MyMeet'
      screenOptions={{
        gestureEnabled: false
      }}
    >
      <StackNavigator.Screen
        name="MyMeet"
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: ''
        }}
        component={MyMeetScreen}
      />
      <StackNavigator.Screen
        name="MeetInfo"
        options={{
          headerShown: true,
          transitionSpec: {
            open: config,
            close: config,
          },
          title: '',
          headerTintColor: '#fff',
          headerStyle: styles.header
        }}
        component={MeetInfoScreen}
      />
    </StackNavigator.Navigator>
  );
}


const styles = StyleSheet.create({
  header: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    backgroundColor: '#000417',
  }
});

export { ContactsStack, SosStack, MembersStack, RequestersStack, ProServicesStack, ScheduleStack, ClientMeetStack };
