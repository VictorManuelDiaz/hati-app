import { StyleSheet } from 'react-native';

const PoliceReportStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000417',
  },
  text: {
    fontSize: 16,
    color: '#2b2b2b',
    textAlign: 'center',
  },
  body: {
    width: '100%',
    height: '100%'
  },
  progressBar:{
    width: 360,
    height: 65,
    marginTop: 10
  },
  stepsContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    zIndex: 20
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 20
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
  }
});

export default PoliceReportStyles;
