import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signOut } from '../../lib/data/user-data';

const DrawerContent = (props) => {
  const { currentUser } = props;

  return (
    <View style={{ flex: 1, backgroundColor: '#212642' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{ uri: currentUser.avatar }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>{`${currentUser.name} ${currentUser.lastName}`}</Title>
                <Caption style={styles.caption}>{currentUser.email}</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section title="Menú" theme={{ colors: { text: '#fff' } }} style={styles.drawerSection}>
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="home-outline"
                  color='#fff'
                  size={size}
                />
              )}
              labelStyle={{ color: '#fff' }}
              label="Inicio"
              onPress={() => { props.navigation.navigate('Hati') }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="account-outline"
                  color='#fff'
                  size={size}
                />
              )}
              labelStyle={{ color: '#fff' }}
              label="Perfil"
              onPress={() => { props.navigation.navigate('Profile') }}
            />
            {currentUser.type == 1 &&
              <DrawerItem
                icon={({ size }) => (
                  <Icon
                    name="cellphone-android"
                    color='#fff'
                    size={size}
                  />
                )}
                labelStyle={{ color: '#fff' }}
                label="Contactos"
                onPress={() => { props.navigation.navigate('ContactsStack') }}
              />
            }
            {currentUser.type == 1 &&
              <DrawerItem
                icon={({ size }) => (
                  <Icon
                    name="clock-time-five-outline"
                    color='#fff'
                    size={size}
                  />
                )}
                labelStyle={{ color: '#fff' }}
                label="Citas"
                onPress={() => { props.navigation.navigate('MyMeetings') }}
              />
            }
            {currentUser.type == 1 &&
              <DrawerItem
                icon={({ size }) => (
                  <Icon
                    name="file-document-outline"
                    color='#fff'
                    size={size}
                  />
                )}
                labelStyle={{ color: '#fff' }}
                label="Denuncias"
                onPress={() => { props.navigation.navigate('Reports') }}
              />
            }
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="tools"
                  color='#fff'
                  size={size}
                />
              )}
              labelStyle={{ color: '#fff' }}
              label="Configuraciones"
              onPress={() => { props.navigation.navigate('Settings') }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name="help-circle-outline"
                  color='#fff'
                  size={size}
                />
              )}
              labelStyle={{ color: '#fff' }}
              label="Soporte"
              onPress={() => { props.navigation.navigate('Support') }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferencias" theme={{ colors: { text: '#fff' } }} >
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon
              name="exit-to-app"
              color='#fff'
              size={size}
            />
          )}
          labelStyle={{ color: '#fff' }}
          label="Salir"
          onPress={() => { signOut() }}
        />
      </Drawer.Section>
    </View>
  );
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});


export default connect(mapStateToProps, null)(DrawerContent);


const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
