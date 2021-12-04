import { StyleSheet } from 'react-native';

const timeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
    width: '100%',
    height: '100%'
  },
  contentInput: {
    width: '90%',
    marginTop: 20
  },
  actionText: {
    color: '#afb1c1',
    marginLeft: 15
  },
  icon: {
    marginLeft: 10
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
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#fff'
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 20,
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  textButton: {
    fontSize: 16,
  },
});

export default timeStyles;
