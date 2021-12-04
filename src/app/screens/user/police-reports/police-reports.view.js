import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Container } from 'native-base';
import policeReportsStyles from './police-reports.styles';

const PoliceReportsView = (props) => {
  const styles = policeReportsStyles;
  const { goNewReport, reports, deleteReport } = props;

  return (
    <Container style={styles.container}>
      <TouchableOpacity onPress={() => goNewReport()} style={{ alignSelf: 'flex-end', padding: 10 }}>
        <Icon name='duplicate-outline' size={30} color='#00cb82' type='ionicon' />
      </TouchableOpacity>
      <View style={styles.listContainer}>
        <FlatList
          data={reports}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.infoContainer}>
                <Icon name='shield-star-outline' size={40} color='#00cb82' type='material-community' />
                <View style={styles.textContainer}>
                  <Text style={styles.itemText}>{`${item.crime.substring(0, 18)}...`}</Text>
                  <Text style={styles.itemSecond}>{item.createdAt}</Text>
                  <Text style={styles.itemSecond}>{item.hour}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => deleteReport(item.id)}>
                  <Icon name='trash-outline' size={25} color='#00cb82' type='ionicon' />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name='download-outline' size={25} color='#00cb82' type='ionicon' />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
}

export default PoliceReportsView;
