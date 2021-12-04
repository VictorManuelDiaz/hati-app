import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import OccurrenceStyles from '../new-report.styles';
import MaskInput, { Masks } from 'react-native-mask-input';
import * as Animatable from 'react-native-animatable';
import { Picker as SelectPicker } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OccurrenceView = (props) => {
  const styles = OccurrenceStyles;
  const {
    date,
    hour,
    department,
    municipality,
    neighbor,
    place,
    address,
    handleChange,
    handleChangeDepartment,
    locations,
    departments,
    municipalities,
    dateError,
    hourError,
    departmentError,
    municipalityError,
    neighborError,
    placeError,
    addressError
  } = props;

  return (
    <View style={styles.stepBody}>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Fecha</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="calendar-outline"
                color='#afb1c1'
                size={20}
              />
              <MaskInput
                style={styles.textInput}
                value={date}
                onChangeText={(masked) => handleChange(masked, 'date')}
                mask={Masks.DATE_DDMMYYYY}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: dateError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Hora</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="time-outline"
                color='#afb1c1'
                size={20}
              />
              <MaskInput
                style={styles.textInput}
                value={hour}
                onChangeText={(masked) => handleChange(masked, 'hour')}
                mask={[/\d/, /\d/, ':', /\d/, /\d/]}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: hourError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Departamento</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="locate-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={department}
                onValueChange={(itemValue, itemIndex) => handleChangeDepartment(itemValue)}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  departments && departments.map(item => {
                    return (
                      <SelectPicker.Item key={item.id} label={item.departmentName} value={item.departmentName} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: departmentError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Municipio</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="locate-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={municipality}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'municipality')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  municipalities && municipalities.map((item, index) => {
                    return (
                      <SelectPicker.Item key={index} label={item.municipalityName} value={item.municipalityName} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: municipalityError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Barrio</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="location-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                value={neighbor}
                onChangeText={(text) => handleChange(text, 'neighbor')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: neighborError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Lugar</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="location-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={place}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'place')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  locations && locations.map((item, index) => {
                    return (
                      <SelectPicker.Item key={index} label={item.locationName} value={item.locationName} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: placeError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Dirección</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="map-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                value={address}
                onChangeText={(text) => handleChange(text, 'address')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: addressError ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OccurrenceView;
