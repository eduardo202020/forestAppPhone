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

interface ImagenesInputProps {
  imagenes: string[];
  setModalVisible: (v: boolean) => void;
  modalVisible: boolean;
  horizontal?: boolean;
}

const ImagenesInput: React.FC<ImagenesInputProps> = ({
  imagenes,
  setModalVisible,
  modalVisible,
  horizontal = false,
}) => (
  <>
    <Text style={styles.label}>Imágenes</Text>
    {horizontal ? (
      <ScrollView horizontal style={styles.imagesRow}>
        {imagenes.map((img, idx) => (
          <Pressable
            key={idx}
            style={styles.imageBox}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={{ uri: img }}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </Pressable>
        ))}
      </ScrollView>
    ) : (
      <View style={styles.imagesRow}>
        {imagenes.map((img, idx) => (
          <Pressable
            key={idx}
            style={styles.imageBox}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: '#888', textAlign: 'center' }}>
              Imagen {idx + 1}
            </Text>
          </Pressable>
        ))}
      </View>
    )}
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Funcionalidad para añadir imágenes próximamente</Text>
          <Text style={{ marginTop: 10, color: '#888' }}>
            (Próximamente podrás añadir o editar imágenes)
          </Text>
        </View>
      </View>
    </Modal>
  </>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  imagesRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  imageBox: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 16,
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
});

export default ImagenesInput;
