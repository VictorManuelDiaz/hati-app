import React from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import { mapStyles } from '../../shared/map/map.styles';
import membersStyles from './members-info.styles';

const MembersInfoView = (props) => {
  const styles = membersStyles;

  const { profile, handleApprove, goNewMeet } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          source={{ uri: profile.avatar }}
          style={{ alignSelf: 'center' }}
          size={150}
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {
          backgroundColor: "#212642"
        }]}
      >
        <Text style={styles.textPrimary}>{`${profile.name} ${profile.lastName}`}</Text>
        <Text style={styles.textSecondary}>{profile.profession == 0 ? 'Médico' : (profile.profession == 1 ? 'Psicólogo' : 'Abogado')}</Text>
        <Text style={styles.textTertiary}>{profile.attentionCenter}</Text>
        <Text style={[styles.textSecondary, { color: '#fff' }]}>Días de atención</Text>
        <Text style={styles.textTertiary}>{profile.attentionDays.join(", ")}</Text>
        <Text style={[styles.textSecondary, { color: '#fff' }]}>Ubicación</Text>
        <View style={{ flex: 1 }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: profile.location.latitude,
              longitude: profile.location.longitude,
              latitudeDelta: 0.0100,
              longitudeDelta: 0.0100,
            }}
            customMapStyle={mapStyles}
          >
            <Marker
              draggable
              coordinate={{
                latitude: profile.location.latitude,
                longitude: profile.location.longitude
              }}
              onDragEnd={
                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
              }
              title={'Atención'}
              description={profile.attentionCenter}
            />
          </MapView>
        </View>
        {
          profile.hasMeeting ?
            <TouchableOpacity
              onPress={() => { goNewMeet(profile.proId) }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#ec083d', '#ed2da8']}
                style={styles.approve}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>AGENDAR CITA</Text>
              </LinearGradient>
            </TouchableOpacity>
            :
            <TouchableOpacity
              onPress={() => { handleApprove(profile.proId, profile.state == 0 ? 1 : 0) }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#ec083d', '#ed2da8']}
                style={styles.approve}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>{profile.state == 0 ? 'ACTIVAR' : 'DESACTIVAR'}</Text>
              </LinearGradient>
            </TouchableOpacity>
        }
      </Animatable.View>
    </View>
  );
};

export default MembersInfoView;
