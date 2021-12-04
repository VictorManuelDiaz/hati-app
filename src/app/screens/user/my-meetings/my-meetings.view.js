import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Container } from 'native-base';
import myStyles from './my-meetings.styles';

const MyMeetingsView = (props) => {
  const styles = myStyles;
  const { data, deleteHandler, goMeetInfo } = props;

  return (
    <Container style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.meetingId}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.infoContainer} onPress={() => goMeetInfo(item)}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{`${item.name} ${item.lastName}`}</Text>
                  <Text style={styles.itemSecond}>{`Fecha: ${item.defaultDate}`}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => deleteHandler(item.meetingId)}>
                  <Icon name='trash-outline' size={25} color='#00cb82' type='ionicon' />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
}

export default MyMeetingsView;
