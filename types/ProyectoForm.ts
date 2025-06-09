export interface ProyectoFormProps {
  nombre: string;
  setNombre: (_: string) => void;
  region: string;
  setRegion: (_: string) => void;
  descripcion: string;
  setDescripcion: (_: string) => void;
  selectedDate: string;
  setSelectedDate: (_: string) => void;
  selectedLocation: { latitude: number; longitude: number } | null;
  imagenes: string[];
  setModalVisible: (_: boolean) => void;
  modalVisible: boolean;
  errores?: { [key: string]: string };
}
