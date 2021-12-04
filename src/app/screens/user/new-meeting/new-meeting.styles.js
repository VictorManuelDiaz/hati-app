import { StyleSheet } from 'react-native';

const newMeetStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 1,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#212642',
    borderColor: '#212642',
    margin: 15
  },
  reserv: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 90
  },
  textReserv: {
    fontSize: 18,
  },
  icon: {
    marginLeft: 10
  },
  contentInput: {
    width: '90%',
    marginTop: 20
  },
  actionText: {
    color: '#afb1c1',
    marginLeft: 15
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    padding: 5,
    height: 55,
    backgroundColor: '#212642',
    borderRadius: 10
  },
  areaAction: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    padding: 5,
    height: 90,
    backgroundColor: '#212642',
    borderRadius: 10
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#fff'
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
  }
});

export default newMeetStyles;
