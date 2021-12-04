import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import scheduleStyles from './schedule.styles';

const ScheduleView = (props) => {
  const styles = scheduleStyles;
  const { goAdd, data, deleteHandler } = props;

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <TouchableOpacity onPress={goAdd}>
          <Icon name='add-circle' size={50} color='#00cb82' type='ionicon' />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.infoContainer}>
                <Icon name='alarm-outline' size={40} color='#00cb82' type='ionicon' />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{`${item.start} - ${item.end}`}</Text>
                </View>
              </View>
              <TouchableOpacity  onPress={() => deleteHandler(item.id)}>
                <Icon name='trash-outline' size={25} color='#00cb82' type='ionicon' />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default ScheduleView;
