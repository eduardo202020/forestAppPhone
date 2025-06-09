import React from 'react';
import NombreInput from './ProyectoForm/NombreInput';
import RegionPicker from './ProyectoForm/RegionPicker';
import MapaUbicacion from './ProyectoForm/MapaUbicacion';
import FechaCultivo from './ProyectoForm/FechaCultivo';
import DescripcionInput from './ProyectoForm/DescripcionInput';
import ImagenesInput from './ProyectoForm/ImagenesInput';
import { ProyectoFormProps } from '../types/ProyectoForm';

const ProyectoForm: React.FC<ProyectoFormProps> = ({
  nombre,
  setNombre,
  region,
  setRegion,
  descripcion,
  setDescripcion,
  selectedDate,
  setSelectedDate,
  selectedLocation,
  imagenes,
  setModalVisible,
  modalVisible,
  errores = {},
}) => {
  return (
    <>
      <NombreInput value={nombre} onChange={setNombre} error={errores.nombre} />
      <RegionPicker
        value={region}
        onChange={setRegion}
        error={errores.region}
      />
      <MapaUbicacion
        selectedLocation={selectedLocation}
        error={errores.ubicacion}
      />
      <FechaCultivo
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        error={errores.fecha}
      />
      <DescripcionInput
        value={descripcion}
        onChange={setDescripcion}
        error={errores.descripcion}
      />
      <ImagenesInput
        imagenes={imagenes}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </>
  );
};

export default ProyectoForm;
