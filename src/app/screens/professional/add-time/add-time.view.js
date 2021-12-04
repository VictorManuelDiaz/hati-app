import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaskInput, { Masks } from 'react-native-mask-input';
import * as Animatable from 'react-native-animatable';
import timeStyles from './add-time.styles';

const AddTimeView = (props) => {
  const styles = timeStyles;
  const { start, end, startError, endError, handleChange, handleSave } = props;

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.contentInput}>
          <Text style={styles.actionText}>Hora Inicio</Text>
          <View style={styles.action}>
            <Ionicons
              style={styles.icon}
              name="time-outline"
              color='#afb1c1'
              size={20}
            />
            <MaskInput
              style={styles.textInput}
              autoCapitalize='characters'
              value={start}
              onChangeText={(masked) => handleChange(masked, 'start')}
              mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /\b/, /\b/]}
            />
          </View>
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={[{ display: startError ? 'flex' : 'none' }, styles.errorMsg]}>
              Campo obligatorio
            </Text>
          </Animatable.View>
        </View>
        <View style={styles.contentInput}>
          <Text style={styles.actionText}>Hora Fin</Text>
          <View style={styles.action}>
            <Ionicons
              style={styles.icon}
              name="time-outline"
              color='#afb1c1'
              size={20}
            />
            <MaskInput
              style={styles.textInput}
              autoCapitalize='characters'
              value={end}
              onChangeText={(masked) => handleChange(masked, 'end')}
              mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /\b/, /\b/]}
            />
          </View>
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={[{ display: endError ? 'flex' : 'none' }, styles.errorMsg]}>
              Campo obligatorio
            </Text>
          </Animatable.View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSave()}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#ec083d', '#ed2da8']}
            style={styles.button}
          >
            <Text style={[styles.textButton, {
              color: '#fff'
            }]}>GUARDAR</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddTimeView;
