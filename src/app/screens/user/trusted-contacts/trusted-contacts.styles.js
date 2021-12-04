import { StyleSheet } from 'react-native';

const trustedContactsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
    width: '100%',
    height: '100%'
  },
  addContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  listContainer: {
    paddingBottom: 30
  },
  avatarStyle: {
    backgroundColor: '#00cb82',
    marginRight: 40,
    marginLeft: 30
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70
  },
  itemText: {
    color: '#fff',
    fontSize: 18
  }
});

export default trustedContactsStyles;
