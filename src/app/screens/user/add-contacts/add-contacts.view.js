import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Content, ListItem, Text } from 'native-base';
import { CheckBox } from 'react-native-elements';
import contactsStyles from './add-contacts.styles';

const AddContactsView = (props) => {
  const { contacts, selection, selectContact, saveHandler, isSaving } = props;
  const styles = contactsStyles;

  return (
    <View style={styles.container}>
      <Content style={styles.content}>
        {
          contacts && contacts.map((item) => {
            return (
              <ListItem style={styles.list} key={item.recordID}>
                <CheckBox
                  uncheckedColor="#00cb82"
                  checkedColor="#00cb82"
                  style={styles.check}
                  onPress={() => selectContact(item.recordID)}
                  checked={selection.includes(item.recordID)}
                />
                <Text style={styles.item}>
                  {item.displayName}
                </Text>
              </ListItem>
            );
          })
        }
      </Content>
      <TouchableOpacity
        style={{ margin: 15, width: '90%' }}
        onPress={() => { saveHandler() }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#ec083d', '#ed2da8']}
          style={styles.button}
        >
          <Text style={styles.textButton}>{isSaving ? 'GUARDANDO...' : 'GUARDAR'}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default AddContactsView;
