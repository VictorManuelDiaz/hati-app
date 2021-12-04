import { Dimensions, StyleSheet } from 'react-native';
const {height} = Dimensions.get("screen");
const height_logo = height * 0.27;

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000417'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnLogIn: {
    width: 333,
    height: 57,
    borderRadius: 50,
    marginBottom:30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLogInText: {
    color: '#fff',
    fontSize: 18
  },
  btnSignIn: {
    width: 333,
    height: 57,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ed2da8',
    marginBottom:30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSignInText: {
    color: '#ed2da8',
    fontSize: 18
  }
});

export default splashStyles;
