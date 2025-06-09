// types.ts

export interface Profile {
  id: string; // UUID → igual a auth.users.id
  updated_at: string | null;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
}

export interface Proyecto {
  id: string;
  user_id: string;
  nombre: string;
  descripcion?: string | null;
  region?: string | null;
  fecha?: string | null; // 'YYYY-MM-DD'
  location?: SupabasePoint; // geography(Point, 4326)
  imagenes: string[];
  creado_en: string;
  actualizado_en: string;
  favoritos: string[]; // UUIDs de usuarios
  likes: number;
}

export interface Planta {
  id: string;
  region: string;
  nombre_cientifico: string;
  nombre_comun?: string | null;
  caracteristicas?: string | null;
  zona?: string | null;
  tipo?: string | null;
  img: string[];
  creado_en: string;
}

export interface ProyectoPlanta {
  id: string;
  proyecto_id: string;
  planta_id: string;
  creado_en: string;
}

export interface ProyectoConPlantas extends Proyecto {
  proyecto_plantas: {
    plantas: Planta;
  }[];
}

export interface PlantaConProyectos extends Planta {
  proyecto_plantas: {
    proyectos: Proyecto;
  }[];
}

export interface SupabasePoint {
  type: 'Point';
  coordinates: [number, number]; // [lng, lat]
}
