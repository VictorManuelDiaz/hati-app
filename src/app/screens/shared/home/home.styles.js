import  { StyleSheet } from 'react-native';

const homeStyles =  StyleSheet.create({
  container: {
    backgroundColor: '#090c22',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  column: {
    margin: 10,
    height: 150,
    borderRadius:15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#212642'
  },
  image: {
    width:100,
    height: 100
  }
});

export default homeStyles;