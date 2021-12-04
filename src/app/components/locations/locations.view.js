import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import locationsStyles from './locations.styles';

const LocationsView = (props) => {
  const { locations, active, handleActive } = props;
  const styles = locationsStyles;

  return (
    <View style={styles.categoriesContainer}>
      <ScrollView horizontal={true}>
        {
          locations && locations.map((item) => (
            <View key={item.id}>
              <TouchableOpacity
                style={active === item.id ? styles.categoriesActive : styles.categories}
                onPress={() => handleActive(item.id)}
              >
                <Text style={active === item.id ? styles.textActive : styles.text}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );

}

export default LocationsView;
