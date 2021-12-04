import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import prosStyles from './professions.styles';

const ProsView = (props) => {
  const { data, active, handleActive } = props;
  const styles = prosStyles;

  return (
    <View style={styles.categoriesContainer}>
      <ScrollView horizontal={true}>
        <View key={0}>
          <TouchableOpacity
            style={active === '' ? styles.categoriesActive : styles.categories}
            onPress={() => handleActive('')}
          >
            <Text style={active === '' ? styles.textActive : styles.text}>
              Todos
            </Text>
          </TouchableOpacity>
        </View>
        {
          data && data.map((item) => (
            <View key={item.value}>
              <TouchableOpacity
                style={active === item.value ? styles.categoriesActive : styles.categories}
                onPress={() => handleActive(item.value)}
              >
                <Text style={active === item.value ? styles.textActive : styles.text}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

export default ProsView;
