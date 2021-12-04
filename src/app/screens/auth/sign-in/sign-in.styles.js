import { StyleSheet } from 'react-native';

const signInStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417'
  },
  body: {
    width: '100%',
    height: '100%'
  },
  step: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    padding: 20
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  navButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 20
  },
  /***************  Steps styles  ***************/
  icon: {
    marginLeft: 10
  },
  stepBody: {
    width: '100%',
    height: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroll: {
    width: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
  },
  optionContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  optionText: {
    marginLeft: 15,
    fontSize: 20
  },
  list: {
    borderColor: '#464b67',
  },
  check: {
    marginRight: 30,
    backgroundColor: 'red'
  },
  item: {
    color: '#fff'
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgActionContainer: {
    width: '50%',
    marginTop: 30,
  },
  imgAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00cb82',
    width: '100%',
    height: 40,
  },
  uploadImage: {
    marginTop: 30,
    width: 120,
    borderRadius: 60,
    height: 120,
  }
});

export default signInStyles;
