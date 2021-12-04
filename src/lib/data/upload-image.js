import storage from '@react-native-firebase/storage';

export const uploadImage = (path, name, handleUpload) => {
  let uploadTask = storage().ref(name).putFile(path);
  uploadTask.on('state_changed',
    (snapShot) => {
      console.log(snapShot);
    }, (err) => {
      console.log(err);
    }, () => {
      storage().ref()
        .child(name)
        .getDownloadURL()
        .then(response => {
          console.log('Imagen subida exitosamente!');
          handleUpload(response, 'imgSource');
          handleUpload(false, 'isLoading');
        }).catch((e) => {
          console.log('Error subiendo la imagen => ', e);
        });
    });
}