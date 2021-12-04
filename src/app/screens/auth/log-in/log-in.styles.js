import { StyleSheet } from 'react-native';

const logInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000417'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  textPrimary: {
    color: '#f42eab',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center'
  },
  textSecondary: {
    color: '#f42eab',
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center'
  },
  icon: {
    marginLeft: 10
  },
  contentInput: {
    marginTop: 20
  },
  actionText: {
    color: '#afb1c1',
    fontSize: 18,
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
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
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
  button: {
    alignItems: 'center',
    marginTop: 80
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  textSign: {
    fontSize: 16,
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ed2da8'
  },
});

export default logInStyles;
