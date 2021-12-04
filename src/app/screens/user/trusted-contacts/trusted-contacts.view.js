import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Icon, Avatar, Text } from 'react-native-elements';
import contactsStyles from './trusted-contacts.styles';

const TrustedContactsView = (props) => {
  const styles = contactsStyles;
  const { goAddContacts, contacts } = props;

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <TouchableOpacity onPress={goAddContacts}>
          <Icon name='sync-circle' size={50} color='#00cb82' type='ionicon' />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Avatar
                rounded title={item.displayName[0]}
                containerStyle={styles.avatarStyle}
              />
              <Text style={styles.itemText}>{item.displayName}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default TrustedContactsView;
