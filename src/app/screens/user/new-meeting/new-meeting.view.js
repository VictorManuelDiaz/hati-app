import React from 'react';
import { Text, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaskInput, { Masks } from 'react-native-mask-input';
import * as Animatable from 'react-native-animatable';
import { Picker as SelectPicker } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import newMeetStyles from './new-meeting.styles';

const NewMeetingView = (props) => {
  const styles = newMeetStyles;
  const { schedule, user, date, timeRange, handleDate, handleTimeRange, handleSave, dateE, timeRangeE } = props;

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.card}>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Nombre</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="person-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                editable={false}
                style={styles.textInput}
                value={user.name}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Apellidos</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="person-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                editable={false}
                style={styles.textInput}
                value={user.lastName}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Cédula</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="card-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                editable={false}
                style={styles.textInput}
                value={user.idCard}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Celular</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="phone-portrait-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                editable={false}
                style={styles.textInput}
                value={user.cellphone}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Horario</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="time-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={timeRange}
                onValueChange={(itemValue, itemIndex) => handleTimeRange(itemValue)}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  schedule && schedule.map(item => {
                    return (
                      <SelectPicker.Item key={item.id} label={`${item.start} - ${item.end}`} value={`${item.start} - ${item.end}`} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500} style={{ marginTop: 20 }}>
              <Text style={[{ display: timeRangeE ? 'flex' : 'none' }, styles.errorMsg]}>
                Selección obligatoria
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Fecha cita</Text>
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
                onChangeText={(masked) => handleDate(masked)}
                mask={Masks.DATE_DDMMYYYY}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500} style={{ marginTop: 20 }}>
              <Text style={[{ display: dateE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <TouchableOpacity
            style={{ marginRight: 15, marginLeft: 15, marginTop: 15, width: '90%' }}
            onPress={handleSave}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#ec083d', '#ed2da8']}
              style={styles.reserv}
            >
              <Text style={[styles.textReserv, {
                color: '#fff'
              }]}>GUARDAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default NewMeetingView;
