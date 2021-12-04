import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { mapStyles } from '../../shared/map/map.styles';
import meetStyles from './meeting-info.styles';

const MembersInfoView = (props) => {
  const styles = meetStyles;

  const { profile } = props;

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
        <View style={styles.stateContainer}>
          <Icon name='pricetag-outline' size={20} color='#ed2da8' type='ionicon' />
          <Text style={styles.stateLabel}>{profile.stateLabel}</Text>
        </View>
        <Text style={styles.textPrimary}>{`${profile.name} ${profile.lastName}`}</Text>
        <Text style={styles.textSecondary}>{profile.profession == 0 ? 'Médico' : (profile.profession == 1 ? 'Psicólogo' : 'Abogado')}</Text>
        <Text style={styles.textTertiary}>{profile.attentionCenter}</Text>
        <Text style={[styles.textSecondary, { color: '#fff' }]}>Fecha</Text>
        <Text style={styles.textTertiary}>{profile.defaultDate}</Text>
        <Text style={[styles.textSecondary, { color: '#fff' }]}>Horario</Text>
        <Text style={styles.textTertiary}>{profile.timeRange}</Text>
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
      </Animatable.View>
    </View>
  );
};

export default MembersInfoView;
