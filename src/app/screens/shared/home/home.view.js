import React from 'react';
import  { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import Slider from '../../../components/slider/slider';
import { ScrollView } from 'react-native-gesture-handler';
import homeStyles from './home.styles';

const HomeView = (props) => {
  const styles = homeStyles;
  const { redirect } = props;

  return (
    <Container style={styles.container}>
      <Slider />
      <ScrollView>
        <Content>
          <TouchableOpacity
            onPress={() => redirect('NewReport')}
          >
            <CardItem style={styles.column}>
              <Text style={styles.title} >Denunciar</Text>
              <Image
                source={require('../../../../assets/images/mega.png')}
                style={styles.image}
              />
            </CardItem>
          </TouchableOpacity>
        </Content>
        <Content>
          <TouchableOpacity
            onPress={() => redirect('Map')}
          >
            <CardItem style={styles.column}>
              <Text style={styles.title} >Lugares Seguro</Text>
              <Image
                source={require('../../../../assets/images/map.png')}
                style={styles.image}
              />
            </CardItem>
          </TouchableOpacity>
        </Content>
        <Content>
          <TouchableOpacity
            onPress={() => redirect('Emergency')}
          >
            <CardItem style={styles.column}>
              <Text style={styles.title} >Numeros de Emergencia</Text>
              <Image
                source={require('../../../../assets/images/phone.png')}
                style={styles.image}
              />
            </CardItem>
          </TouchableOpacity>
        </Content>
      </ScrollView>
    </Container>
  );
}

export default HomeView;
