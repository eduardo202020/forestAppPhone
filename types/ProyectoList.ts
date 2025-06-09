/* eslint-disable no-unused-vars */
import { Proyecto } from '@/data/proyectos';

export interface ProyectoListProps {
  proyectos: Proyecto[];
  onVerDetalles: (id: string) => void;
  esFavorito: (id: string) => boolean;
  toggleFavorito: (id: string) => void;
}
