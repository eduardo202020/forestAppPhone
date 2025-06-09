/* eslint-disable no-unused-vars */
import { Proyecto } from '@/data/proyectos';

export interface ProyectoCardProps {
  proyecto: Proyecto;
  onVerDetalles: () => void;
  esFavorito: () => boolean;
  toggleFavorito: () => void;
}
