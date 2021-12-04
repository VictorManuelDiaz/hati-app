import { StyleSheet } from 'react-native';

const meetStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
    width: '100%',
    height: '100%'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  stateContainer:{
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  stateLabel: {
    marginLeft: 10,
    color: '#ed2da8',
    fontWeight: 'bold',
    fontSize: 16
  },
  textPrimary: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },
  textSecondary: {
    color: '#9596a1',
    fontSize: 20,
    marginBottom: 5
  },
  textTertiary: {
    color: '#9596a1',
    fontSize: 15,
    marginBottom: 15
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export default meetStyles;
