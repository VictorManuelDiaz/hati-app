import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Container } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import sosStyles from './sos-detail.styles';
import { mapStyles } from '../../shared/map/map.styles';

const SosDetailView = (props) => {
  const styles = sosStyles;
  const { date, hour, long, lat } = props;

  return (
    <Container style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0100,
              longitudeDelta: 0.0100,
            }}
            customMapStyle={mapStyles}
          >
            <Marker
              draggable
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
              onDragEnd={
                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
              }
              title={'Alerta SOS'}
              description={`${date} ${hour}`}
            />
          </MapView>
        </View>
      </SafeAreaView>
    </Container>
  );
}

export default SosDetailView;
