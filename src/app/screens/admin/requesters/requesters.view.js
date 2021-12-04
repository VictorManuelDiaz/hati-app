import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Text, Icon } from 'react-native-elements';
import requestsStyles from './requesters.styles';

const RequestsView = (props) => {
  const styles = requestsStyles;
  const { data, goInfo } = props;

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.infoContainer} onPress={() => goInfo(item)}>
                <Avatar.Image
                  source={{ uri: item.avatar }}
                  size={50}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{`${item.name} ${item.lastName}`}</Text>
                  <Text style={styles.itemSecond}>{item.createdAt}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default RequestsView;
