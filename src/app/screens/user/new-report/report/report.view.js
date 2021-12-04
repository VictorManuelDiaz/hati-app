import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import { Picker as SelectPicker } from 'native-base';
import * as Animatable from 'react-native-animatable';
import ReportStyles from '../new-report.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReportView = (props) => {
  const styles = ReportStyles;
  const {
    crime,
    occurrence,
    suspects,
    transport,
    meansUsed,
    affected,
    handleChange,
    crimes,
    transports,
    means,
    affectations,
    crimeError,
    occurrenceError,
    suspectsError,
    transportError,
    meansUsedError,
    affectedError
  } = props;

  return (
    <View style={styles.stepBody}>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Delito</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="albums-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={crime}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'crime')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  crimes && crimes.map((element, index) => {
                    return (
                      <SelectPicker.Item key={index} label={element.item} value={element.item} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: crimeError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>¿Qué sucedió?</Text>
            <View style={styles.areaAction}>
              <TextInput
                multiline
                style={styles.textInput}
                autoCapitalize="none"
                value={occurrence}
                onChangeText={(text) => handleChange(text, 'occurrence')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: occurrenceError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>¿Quiénes son los sospechosos?</Text>
            <View style={styles.areaAction}>
              <TextInput
                multiline
                style={styles.textInput}
                autoCapitalize="none"
                value={suspects}
                onChangeText={(text) => handleChange(text, 'suspects')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: suspectsError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>¿En qué se desplazaba?</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="albums-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={transport}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'transport')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  transports && transports.map((element, index) => {
                    return (
                      <SelectPicker.Item key={index} label={element.item} value={element.item} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: transportError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>¿Cuáles son los medios utilizados?</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="albums-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={meansUsed}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'meansUsed')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  means && means.map((element, index) => {
                    return (
                      <SelectPicker.Item key={index} label={element.item} value={element.item} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: meansUsedError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>¿Qué es lo afectado?</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="albums-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={affected}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'affected')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  affectations && affectations.map((element, index) => {
                    return (
                      <SelectPicker.Item key={index} label={element.item} value={element.item} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: affectedError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportView;
