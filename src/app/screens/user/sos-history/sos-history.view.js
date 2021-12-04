import React from 'react';
import { Container } from 'native-base';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import sosStyles from './sos-history.styles';

const SosHistoryView = (props) => {
  const styles = sosStyles;
  const { history, currentUser, goDetail, deleteAlert } = props;

  return (
    <Container style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.infoContainer} onPress={() => goDetail(item.location, item.createdAt, item.hour)}>
                <Icon name='alert-circle' size={40} color='#00cb82' type='ionicon' />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{`${currentUser.name} ${currentUser.lastName}`}</Text>
                  <Text style={styles.itemSecond}>{item.createdAt}</Text>
                  <Text style={styles.itemSecond}>{item.hour}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => deleteAlert(item.id)}>
                <Icon name='trash-outline' size={25} color='#00cb82' type='ionicon' />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Container>
  );
}

export default SosHistoryView;
