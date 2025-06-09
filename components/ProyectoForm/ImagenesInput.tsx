import React from 'react';
import {
  View,
  Pressable,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { ImagenesInputProps } from '../../types/ImagenesInput';

const ImagenesInput: React.FC<ImagenesInputProps> = ({
  imagenes,
  setModalVisible,
  modalVisible,
  horizontal = false,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>Imágenes</Text>
    <ScrollView horizontal={horizontal} style={styles.scrollView}>
      {imagenes.map((img, idx) => (
        <Image key={idx} source={{ uri: img }} style={styles.image} />
      ))}
    </ScrollView>
    <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
      <Text style={styles.buttonText}>Agregar Imagen</Text>
    </Pressable>
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Funcionalidad para añadir imágenes próximamente</Text>
          <Text style={styles.modalText}>
            (Próximamente podrás añadir o editar imágenes)
          </Text>
        </View>
      </View>
    </Modal>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  scrollView: {
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    color: '#888',
  },
});

export default ImagenesInput;
