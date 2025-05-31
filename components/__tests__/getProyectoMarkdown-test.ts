import { getProyectoMarkdown } from '../utils/markdown';

describe('getProyectoMarkdown', () => {
  it('genera markdown correctamente con todos los campos', () => {
    const proyecto = {
      nombre: 'Bosque Demo',
      descripcion: 'Un bosque de prueba',
      region: 'Amazonas',
      location: { latitude: 1.23, longitude: 4.56 },
      fecha: '2025-05-31',
      imagenes: ['https://img.com/1.png', 'https://img.com/2.png'],
    };
    const md = getProyectoMarkdown(proyecto);
    expect(md).toContain('# Bosque Demo');
    expect(md).toContain('**Descripción**');
    expect(md).toContain('Amazonas');
    expect(md).toContain('(1.23, 4.56)');
    expect(md).toContain('2025-05-31');
    expect(md).toContain('![](https://img.com/1.png)');
    expect(md).toContain('![](https://img.com/2.png)');
  });

  it('genera markdown sin ubicación ni imágenes', () => {
    const proyecto = {
      nombre: 'Sin Ubicación',
      descripcion: 'Solo texto',
      region: 'Costa',
      fecha: '2025-05-31',
      imagenes: [],
    };
    const md = getProyectoMarkdown(proyecto);
    expect(md).not.toContain('Ubicación');
    expect(md).not.toContain('![](');
  });
});
