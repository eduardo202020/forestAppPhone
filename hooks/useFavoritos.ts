import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventEmitter } from 'events';

const STORAGE_KEY = 'favoritos_proyectos';
const favoritosEmitter = new EventEmitter();

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<string[]>([]);

  // Cargar favoritos desde AsyncStorage al montar
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((data) => {
      if (data) setFavoritos(JSON.parse(data));
    });
    // Suscribirse a cambios globales
    const handler = (nuevos: string[]) => setFavoritos(nuevos);
    favoritosEmitter.on('cambioFavoritos', handler);
    return () => {
      favoritosEmitter.off('cambioFavoritos', handler);
    };
  }, []);

  // Guardar favoritos en AsyncStorage cuando cambian
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
  }, [favoritos]);

  const esFavorito = useCallback(
    (id: string) => favoritos.includes(id),
    [favoritos]
  );

  const toggleFavorito = useCallback((id: string) => {
    setFavoritos((prev) => {
      const nuevos = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];
      favoritosEmitter.emit('cambioFavoritos', nuevos);
      return nuevos;
    });
  }, []);

  return { favoritos, esFavorito, toggleFavorito };
}
