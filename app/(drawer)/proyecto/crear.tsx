// app/proyecto/crear.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { proyectosData, Proyecto } from '@/data/proyectos';
import ProyectoForm from '@/components/ProyectoForm';

const CrearProyecto = () => {
  const router = useRouter();

  // Definimos los estados para los campos del proyecto
  const [nombre, setNombre] = useState('');
  const [region, setRegion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para errores de validación
  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  // Validación de campos
  const validarCampos = () => {
    const nuevosErrores: { [key: string]: string } = {};
    if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!region) nuevosErrores.region = 'La región es obligatoria.';
    if (!descripcion.trim())
      nuevosErrores.descripcion = 'La descripción es obligatoria.';
    return nuevosErrores;
  };

  // Función para crear un nuevo proyecto
  // Al crear un proyecto, se debe crear con la estructura completa de Proyecto
  // Por ahora, plantas será un array vacío, pero compatible con la interfaz
  const handleCrear = () => {
    const nuevosErrores = validarCampos();
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;
    const nuevoProyecto: Proyecto = {
      id: (proyectosData.length + 1).toString(),
      nombre,
      ubicacion: '',
      fecha: '',
      region,
      descripcion,
      plantas: [], // Aquí podrías permitir agregar plantas reales en el futuro
      imagenes: [
        'https://placehold.co/200x200?text=Imagen+1',
        'https://placehold.co/200x200?text=Imagen+2',
        'https://placehold.co/200x200?text=Imagen+3',
        'https://placehold.co/200x200?text=Imagen+4',
        'https://placehold.co/200x200?text=Imagen+5',
      ],
    };
    proyectosData.push(nuevoProyecto);
    router.push(`/proyecto/detalles?id=${nuevoProyecto.id}`);
  };

  return (
    <ScrollView style={styles.container}>
      <ProyectoForm
        nombre={nombre}
        setNombre={setNombre}
        region={region}
        setRegion={setRegion}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        selectedDate={''}
        setSelectedDate={() => {}}
        selectedLocation={null}
        imagenes={[]}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        errores={errores}
      />
      <Button title="Crear Proyecto" onPress={handleCrear} color="#2ecc71" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default CrearProyecto;
