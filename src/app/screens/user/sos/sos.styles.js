import { StyleSheet } from 'react-native';

const sosStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
  },
  buttonContainer: {
    with: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonFirst: {
    backgroundColor: '#ea2f73',
    height: 150,
    width: 150,
    borderRadius: 75
  },
  buttonSecond: {
    backgroundColor: '#e981a6',
    height: 200,
    width: 200,
    borderRadius: 100
  },
  buttonThird: {
    backgroundColor: '#f2aac2',
    height: 250,
    width: 250,
    borderRadius: 125
  },
  buttonFourth: {
    backgroundColor: '#f9cddc',
    height: 300,
    width: 300,
    borderRadius: 150
  }
});

export default sosStyles;
