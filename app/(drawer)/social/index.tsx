import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Proyect from '@/components/Proyect';

import { proyectosData as projects } from '@/data/proyectos';

const index = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {projects.map((project) => (
        <Proyect key={project.id} proyect={project} />
      ))}
    </ScrollView>
  );
};

export default index;
