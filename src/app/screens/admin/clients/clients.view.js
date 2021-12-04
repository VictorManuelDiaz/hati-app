import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Text, Icon } from 'react-native-elements';
import requestsStyles from './clients.styles';

const ClientsView = (props) => {
  const styles = requestsStyles;
  const { data } = props;

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.infoContainer}>
                <Avatar.Image
                  source={{ uri: item.avatar }}
                  size={50}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{`${item.name} ${item.lastName}`}</Text>
                  <Text style={styles.itemSecond}>{item.cellphone}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default ClientsView;

