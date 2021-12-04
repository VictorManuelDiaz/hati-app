import React, { Component } from 'react';
import ProfessionView from './profession.view';
import { uploadImage } from '../../../../../lib/data/upload-image';
import { launchImageLibrary } from 'react-native-image-picker';

class Profession extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chooseFile = () => {
    const { handleChange } = this.props;
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        let path = response.assets[0].uri
        let fileName = this.getFileName(response.assets[0].fileName, path);
        handleChange(true, 'isLoading');
        this.handleUpload(path, fileName);
      }
    });
  };

  getFileName(name, path) {
    if (name != null) { return name; }

    if (Platform.OS === "ios") {
      path = "~" + path.substring(path.indexOf("/Documents"));
    }
    return path.split("/").pop();
  }

  handleUpload = (path, name) => {
    const { handleChange } = this.props;
    uploadImage(path, name, handleChange);
  }


  render() {
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
      isLoading,
      handleChange,
      handleLocation
    } = this.props;

    return (
      <ProfessionView
        profession={profession}
        attentionCenter={attentionCenter}
        location={location}
        attentionDays={attentionDays}
        professionE={professionE}
        attentionCenterE={attentionCenterE}
        locationE={locationE}
        attentionDaysE={attentionDaysE}
        proArray={proArray}
        daysArray={daysArray}
        selectDays={selectDays}
        imgSource={imgSource}
        chooseFile={this.chooseFile}
        handleChange={handleChange}
        handleLocation={handleLocation}
        isLoading={isLoading}
      />
    );
  }
}

export default Profession;
