import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ProgressBar, Card, List } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

import { Picker } from '@react-native-picker/picker';

import { plantas as plantasPorRegion } from '@/plantas';
import { renderPlanta } from '@/components/RenderPlanta';

import { userProyect } from '@/data/userProyect';
import { useRouter } from 'expo-router';

const UserScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  ); // Fecha en formato YYYY-MM-DD
  const [projects] = useState(userProyect.projects);
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar el acordeón
  const [selectedRegion, setSelectedRegion] = useState('Loreto');

  const router = useRouter();

  const CrearProyecto = () => {
    router.push('/proyecto/crear');
  };

  const EditarProyecto = (id: string) => {
    console.log(`Editar proyecto con ID: ${id}`);
    router.push(`/proyecto/editar?id=${id}`);
  };
  const VerDetalles = (id: string) => {
    router.push(`/proyecto/detalles?id=${id}`);
  };

  // Marcadores para fechas importantes
  const markedDates = {
    [selectedDate]: { selected: true, marked: true, selectedColor: '#2ecc71' },
    ['2025-03-28']: { selected: true, marked: true, selectedColor: '#2ecc71' },
    ['2025-04-15']: { selected: true, marked: true, selectedColor: '#2ecc71' },
  };

  return (
    <ScrollView style={styles.container}>
      {/* Sección de Perfil */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: userProyect.photo }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{userProyect.name}</Text>
          <TouchableOpacity>
            <Text style={styles.editProfileText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botones adicionales */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.newProjectButton}
          onPress={() => CrearProyecto()}
        >
          <Text style={styles.newProjectButtonText}>Crear Proyecto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.newProjectButton}
          onPress={() => EditarProyecto('1')}
        >
          <Text style={styles.newProjectButtonText}>Editar Proyecto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.newProjectButton}
          onPress={() => VerDetalles('1')}
        >
          <Text style={styles.newProjectButtonText}>Ver Detalles</Text>
        </TouchableOpacity>
      </View>

      {/* Selector de Región */}
      <Text style={styles.sectionTitle}>Selecciona una Región</Text>
      <Picker
        selectedValue={selectedRegion}
        onValueChange={(itemValue) => setSelectedRegion(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Loreto" value="Loreto" />
        <Picker.Item label="Cusco" value="Cusco" />
        <Picker.Item label="Puno" value="Puno" />
        <Picker.Item label="Madre de Dios" value="Madre de Dios" />
        <Picker.Item label="Amazonas" value="Amazonas" />
        <Picker.Item label="San Martín" value="San Martín" />
      </Picker>

      {/* Proyectos Activos */}
      {projects.map((project) => (
        <Card key={project.id} style={styles.projectCard}>
          <Card.Title
            title={project.name}
            titleStyle={{ fontSize: 20 }}
            subtitle={`Iniciado el ${project.startDate}`}
            subtitleStyle={{ fontSize: 14, fontWeight: 'bold' }}
          />
          <Card.Content style={{ flexDirection: 'column', gap: 10 }}>
            <ProgressBar progress={project.progress / 100} color="#2ecc71" />
            <Text style={styles.projectText}>Área: {project.area} m²</Text>
            <Text style={styles.projectText}>
              Densidad: {project.density} plantas/m²
            </Text>
            <Card.Cover
              source={{ uri: project.img[0] }}
              style={styles.plantImage}
            />
            <Card.Cover
              source={{ uri: project.img[1] }}
              style={styles.plantImage}
            />
          </Card.Content>

          <Card.Actions>
            <TouchableOpacity>
              <Text style={styles.detailsText}>Ver detalles</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      ))}

      <View style={styles.containerCalendar}>
        <List.Accordion
          title="Calendario"
          titleStyle={isExpanded ? { color: '#2ecc71' } : {}}
          expanded={isExpanded}
          onPress={() => setIsExpanded(!isExpanded)} // Alternar entre expandido y contraído
          left={(props) => (
            <List.Icon
              {...props}
              icon="calendar"
              color={isExpanded ? '#2ecc71' : ''}
            />
          )} // Ícono del acordeón
        >
          {/* Calendario Completo */}
          <Calendar
            current={selectedDate}
            onDayPress={(day: any) => setSelectedDate(day.dateString)}
            markedDates={markedDates}
            theme={{
              calendarBackground: '#ffffff',
              selectedDayBackgroundColor: '#2ecc71',
              todayTextColor: '#2ecc71',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
            }}
          />
        </List.Accordion>
      </View>

      {/* Mapa de Ubicación */}
      <Text style={styles.sectionTitle}>Ubicación</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: projects[0].location.latitude,
          longitude: projects[0].location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={projects[0].location} title={projects[0].name} />
      </MapView>

      {/* Botón para Nuevo Proyecto */}
      <TouchableOpacity style={styles.newProjectButton}>
        <Text style={styles.newProjectButtonText}>Crear Nuevo Proyecto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 16,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  plantCard: {
    width: 250, // Ancho reducido
    marginRight: 10, // Espacio entre tarjetas
    margin: 4,
    paddingBottom: 0,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  plantImage: {
    width: '100%',

    height: 100, // Altura reducida
    borderRadius: 10,
    marginTop: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editProfileText: {
    color: '#2ecc71',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  projectCard: {
    marginBottom: 10,
  },
  projectText: {
    fontSize: 14,
  },
  detailsText: {
    color: '#2ecc71',
    fontSize: 14,
  },
  map: {
    height: 200,
    borderRadius: 10,
  },
  flatListContent: {
    paddingHorizontal: 10, // Espaciado horizontal en el FlatList
    paddingLeft: 0,
  },
  newProjectButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  newProjectButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  regionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  containerCalendar: {
    width: '100%',
  },
});

export default UserScreen;
