import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import MaskInput from 'react-native-mask-input';
import * as Animatable from 'react-native-animatable';
import viewStyles from '../sign-in.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonalView = (props) => {
  const styles = viewStyles;
  const {
    idCard,
    name,
    lastName,
    cellphone,
    idCardE,
    nameE,
    lastNameE,
    cellphoneE,
    handleChange
  } = props;

  return (
    <View style={styles.stepBody}>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Cédula</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="card-outline"
                color='#afb1c1'
                size={20}
              />
              <MaskInput
                style={styles.textInput}
                value={idCard}
                onChangeText={(masked) => handleChange(masked, 'idCard')}
                mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\b/]}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: idCardE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
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
                style={styles.textInput}
                autoCapitalize="none"
                value={name}
                onChangeText={(text) => handleChange(text, 'name')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: nameE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
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
                style={styles.textInput}
                autoCapitalize="none"
                value={lastName}
                onChangeText={(text) => handleChange(text, 'lastName')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: lastNameE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
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
              <MaskInput
                style={styles.textInput}
                value={cellphone}
                onChangeText={(masked) => handleChange(masked, 'cellphone')}
                mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: cellphoneE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalView;
