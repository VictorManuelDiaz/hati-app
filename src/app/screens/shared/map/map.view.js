import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header, Text, Container, } from 'native-base';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import { mainStyles, mapStyles } from './map.styles';

const MapViewC = () => {
  const styles = mainStyles;
  return (
    <Container>
      <Header style={styles.hola}>
        <Text style={styles.titulo}>Lugares Seguros</Text>
      </Header>
    </Container>,
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyles}
          initialRegion={{
            latitude: 12.10039,
            longitude: -85.37976,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100,
          }}
          customMapStyle={mapStyles}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'El Esfuerzo Trae Sus Frutos'}
            description={'Vamos Adelante Gladeadores del Olimpo'}
          />
          <Marker
            draggable
            coordinate={{
              latitude: 12.099743507687046,
              longitude: -85.37874834579695,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          />
          <Marker
            draggable
            coordinate={{
              latitude: 12.09716289163202,
              longitude: -85.37062449398461,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          />
          <Marker
            draggable
            coordinate={{
              latitude: 12.106380327410992,
              longitude: -85.35732109263523,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          /><Marker
            draggable
            coordinate={{
              latitude: 12.09599352170491,
              longitude: -85.36120639235959,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          /><Marker
            draggable
            coordinate={{
              latitude: 12.096374026276512,
              longitude: -85.36417919789137,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          /><Marker
            draggable
            coordinate={{
              latitude: 12.112482070021624,
              longitude: -85.37257192572206,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapViewC;
