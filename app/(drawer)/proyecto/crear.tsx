// app/proyecto/crear.tsx
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { proyectosData } from '@/data/proyectos';
import { Proyecto } from '@/data/proyectos'; // Asegúrate de que Proyecto esté bien tipado

const CrearProyecto = () => {
  const router = useRouter();

  // Definimos los estados para los campos del proyecto
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [region, setRegion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Función para crear un nuevo proyecto
  const handleCrear = () => {
    const nuevoProyecto: Proyecto = {
      id: (proyectosData.length + 1).toString(), // Generar un ID único, aquí estamos usando el tamaño de proyectosData para asegurar que el ID sea único
      nombre,
      ubicacion,
      fecha,
      region,
      descripcion,
      plantas: [], // Aquí puedes agregar las plantas si ya tienes alguna lógica para seleccionar plantas
      estado: 'Pendiente',
    };

    // Agregar el nuevo proyecto al array de proyectos (puedes implementar lógica para almacenar en una base de datos o almacenamiento persistente)
    proyectosData.push(nuevoProyecto);

    // Redirigir a la lista de proyectos

    router.push(`/index/detalles?id=${nuevoProyecto.id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Nuevo Proyecto</Text>

      {/* Nombre del Proyecto */}
      <TextInput
        style={styles.input}
        placeholder="Nombre del Proyecto"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Ubicación */}
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={ubicacion}
        onChangeText={setUbicacion}
      />

      {/* Fecha de Cultivo */}
      <TextInput
        style={styles.input}
        placeholder="Fecha de Cultivo"
        value={fecha}
        onChangeText={setFecha}
      />

      {/* Región */}
      <Picker
        selectedValue={region}
        style={styles.picker}
        onValueChange={(itemValue) => setRegion(itemValue)}
      >
        <Picker.Item label="Loreto" value="Loreto" />
        <Picker.Item label="Cuzco" value="Cuzco" />
        <Picker.Item label="Puno" value="Puno" />
        <Picker.Item label="San Martín" value="San Martín" />
        <Picker.Item label="Madre de Dios" value="Madre de Dios" />
        <Picker.Item label="Amazonas" value="Amazonas" />
      </Picker>

      {/* Descripción */}
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      {/* Botón para crear el proyecto */}
      <Button title="Crear Proyecto" onPress={handleCrear} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
});

export default CrearProyecto;
