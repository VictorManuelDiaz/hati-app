import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import sliderStyles from './slider.styles';


const SliderView = (props) => {
  const { images, active, change } = props;
  const styles = sliderStyles;

  return (
    <View styles={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {
          images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.image}
            />
          ))
        }
      </ScrollView>
      <View style={styles.pagination}>
        {
          images.map((i, k) => (
            <Text key={k} style={k == active ? styles.imageActiveBotton : styles.imageBotton}>⬤</Text>
          ))
        }
      </View>
    </View>
  );
}

export default SliderView;
