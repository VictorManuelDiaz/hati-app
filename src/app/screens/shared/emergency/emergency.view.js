import React from 'react';
import { Image, Linking, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Content, CardItem, Text, Button } from 'native-base';
import Locations from '../../../components/locations/locations';
import emergencyStyles from './emergency.styles';

const EmergencyView = (props) => {
  const { handleActive, active, filtering, data } = props;
  const styles = emergencyStyles;

  return (
    <Container style={styles.container}>
      <Locations active={active} handleActive={handleActive}></Locations>
      <Content>
        {
          data && data.filter(filtering()).map((item) => {
            return (
              <CardItem style={styles.card} key={item.id}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel: ${item.number}`)} style={styles.button}
                >
                  <Icon name='call' size={35} color='#f42eab' type='ionicon' />
                </TouchableOpacity>
              </CardItem>
            );
          })
        }
      </Content>
    </Container>
  );
}

export default EmergencyView;
