// Detalles para el tab de social/destacados (idéntico a detalles de proyecto, pero stack propio)
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { proyectosData } from '@/data/proyectos';
import { getProyectoMarkdown } from '@/utils/markdown';
import { WhatsappShareButton } from '@/components/WhatsappShareButton';
import { ProyectoMap } from '@/components/ProyectoDetalle/ProyectoMap';
import ProyectoImagenesList from '@/components/ProyectoDetalle/ProyectoImagenesList';
import { ProyectoFecha } from '@/components/ProyectoDetalle/ProyectoFecha';

const DetallesDestacados = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const proyecto = proyectosData.find((p) => p.id === id);
  const viewRef = React.useRef(null);

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
      {proyecto.location && <ProyectoMap location={proyecto.location} />}
      <ProyectoImagenesList imagenes={proyecto.imagenes || []} />
      <ProyectoFecha fecha={proyecto.fecha} />
      <View style={styles.spacer} />
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
  spacer: {
    height: 32,
  },
});

export default DetallesDestacados;
