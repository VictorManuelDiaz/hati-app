import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Picker as SelectPicker, ListItem, Content } from 'native-base';
import { CheckBox } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import viewStyles from '../sign-in.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfessionView = (props) => {
  const styles = viewStyles;
  const {
    profession,
    attentionCenter,
    location,
    attentionDays,
    professionE,
    attentionCenterE,
    locationE,
    attentionDaysE,
    proArray,
    daysArray,
    selectDays,
    imgSource,
    chooseFile,
    handleChange,
    handleLocation,
    isLoading
  } = props;

  return (
    <View style={styles.stepBody}>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Foto de perfil</Text>
            <View style={styles.imgContainer}>
              <Image style={styles.uploadImage} source={{ uri: imgSource }} />
              <View style={styles.imgActionContainer} >
                <TouchableOpacity style={styles.imgAction} title={isLoading ? 'Subiendo....' : 'Subir imagen'} onPress={chooseFile}>
                  <Text style={{ color: '#00cb82' }}>{isLoading ? 'SUBIENDO....' : 'SUBIR IMAGEN'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Profesión</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="school-outline"
                color='#afb1c1'
                size={20}
              />
              <SelectPicker
                style={styles.textInput}
                selectedValue={profession}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue, 'profession')}
              >
                <SelectPicker.Item label='- Seleccione -' value='' />
                {
                  proArray && proArray.map(item => {
                    return (
                      <SelectPicker.Item key={item.value} label={item.label} value={item.value} />
                    )
                  })
                }
              </SelectPicker>
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: professionE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Lugar de atención</Text>
            <View style={styles.action}>
              <Ionicons
                style={styles.icon}
                name="business-outline"
                color='#afb1c1'
                size={20}
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                value={attentionCenter}
                onChangeText={(text) => handleChange(text, 'attentionCenter')}
              />
            </View>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: attentionCenterE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Ubicación</Text>
            <TouchableOpacity style={styles.action} onPress={handleLocation}>
              <Ionicons
                style={styles.icon}
                name="location-outline"
                color='#afb1c1'
                size={20}
              />
              <Text>{!location == `` && `${location.altitude}, ${location.longitude}`}</Text>
            </TouchableOpacity>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: locationE ? 'flex' : 'none' }, styles.errorMsg]}>
                Campo obligatorio
              </Text>
            </Animatable.View>
          </View>
          <View style={styles.contentInput}>
            <Text style={styles.actionText}>Días de atención</Text>
            <Content style={{marginBottom: 10}}>
              {
                daysArray && daysArray.map((item) => {
                  return (
                    <ListItem style={styles.list} key={item.value}>
                      <CheckBox
                        uncheckedColor="#00cb82"
                        checkedColor="#00cb82"
                        style={styles.check}
                        onPress={() => selectDays(item.label)}
                        checked={attentionDays.includes(item.label)}
                      />
                      <Text style={styles.item}>
                        {item.label}
                      </Text>
                    </ListItem>
                  );
                })
              }
            </Content>
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={[{ display: attentionDaysE ? 'flex' : 'none' }, styles.errorMsg]}>
                Selección obligatoria
              </Text>
            </Animatable.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfessionView;
