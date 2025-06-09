// app/proyecto/detalles.tsx
import React, { useEffect } from 'react';
import { Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { proyectosData } from '@/data/proyectos';
import { getProyectoMarkdown } from '@/utils/markdown';
import { WhatsappShareButton } from '@/components/WhatsappShareButton';
import { ProyectoMap } from '@/components/ProyectoDetalle/ProyectoMap';
import { ProyectoImagenes } from '@/components/ProyectoDetalle/ProyectoImagenes';
import { ProyectoFecha } from '@/components/ProyectoDetalle/ProyectoFecha';

const DetallesProyecto = () => {
  const router = useRouter();
  const { id }: { id: string } = useLocalSearchParams();
  const proyecto = proyectosData.find((p) => p.id === id);
  const viewRef = React.useRef(null);

  const handleEdit = () => {
    if (!proyecto) return;
    router.push(`./detalles?id=${proyecto.id}`);
  };

  useEffect(() => {
    // Eliminar console.log
  }, []);

  if (!proyecto) {
    return <Text>No se encontraron detalles del proyecto.</Text>;
  }

  const markdown = getProyectoMarkdown(proyecto);

  return (
    <ScrollView style={styles.container} ref={viewRef} collapsable={false}>
      <WhatsappShareButton markdown={markdown} style={styles.fabShare} />
      <Text style={styles.title}>{proyecto.nombre}</Text>
      <Text style={styles.details}>{proyecto.descripcion}</Text>
      <Text style={styles.label}>Región: {proyecto.region}</Text>
      {/* Mapa con ubicación */}
      {proyecto.location && <ProyectoMap location={proyecto.location} />}
      {/* Imágenes */}
      <ProyectoImagenes imagenes={proyecto.imagenes || []} />
      {/* Fecha usando calendario */}
      <ProyectoFecha fecha={proyecto.fecha} />
      <Button title="Editar Proyecto" onPress={handleEdit} />
    </ScrollView>
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
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  fabShare: {
    position: 'absolute',
    top: -18,
    right: -18,
    backgroundColor: 'transparent',
    borderRadius: 28,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default DetallesProyecto;
