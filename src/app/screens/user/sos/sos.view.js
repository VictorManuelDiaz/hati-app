import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container } from 'native-base';
import sosStyles from './sos.styles';

const SosView = (props) => {
  const styles = sosStyles;
  const { handleSOS, goHistory } = props;

  return (
    <Container style={styles.container}>
      <TouchableOpacity onPress={() => goHistory()} style={{alignSelf: 'flex-end', padding: 10}}>
        <Icon name='list-outline' size={30} color='#f42eab' type='ionicon' />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleSOS()}>
          <View style={[styles.buttonCenter, styles.buttonFourth]}>
            <View style={[styles.buttonCenter, styles.buttonThird]}>
              <View style={[styles.buttonCenter, styles.buttonSecond]}>
                <View style={[styles.buttonCenter, styles.buttonFirst]}>
                  <Text style={styles.buttonText}>SOS</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default SosView;
