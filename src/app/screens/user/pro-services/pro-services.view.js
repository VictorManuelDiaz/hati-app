import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import Professions from '../../../components/professions/professions';
import { Icon, SearchBar } from 'react-native-elements';
import proServStyles from './pro-services.styles';

const ProServicesView = (props) => {
  const styles = proServStyles;
  const { goProInfo, data, handleSearch, search, filtering, active, handleActive } = props;

  return (
    <Container style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Buscar..."
          placeholderTextColor="#868AA6"
          underlineColorAndroid="#868AA6"
          lightTheme={true}
          inputStyle={{
            backgroundColor: '#090c22',
            fontSize: 14,
            color: '#fff'
          }}
          searchIcon={{ size: 25, color: '#f8c30c' }}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.search}
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <Professions active={active} handleActive={handleActive}/>
      <Content >
        {
          data && data.filter(filtering()).map((item) => {
            return (
              <TouchableOpacity onPress={() => goProInfo(item)} key={item.id} style={styles.card}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.image}
                />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{`${item.name} ${item.lastName}`}</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='ribbon' size={25} color='#f8c30c' type='ionicon' />
                    <Text style={styles.subTitle}>{item.profession == 0 ? 'Médico' : (item.profession == 1 ? 'Psicólogo' : 'Abogado')}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </Content>
    </Container>
  );
}

export default ProServicesView;
