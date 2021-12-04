import { StyleSheet } from 'react-native';

const scheduleStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
    width: '100%',
    height: '100%'
  },
  listContainer: {
    padding: 15
  },
  addContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212642',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  },
});

export default scheduleStyles;
