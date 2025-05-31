// utils/markdown.ts
// Utilidad para generar el texto Markdown de un proyecto
import { Proyecto } from '@/data/proyectos';

export function getProyectoMarkdown(proyecto: Proyecto): string {
  let markdown = `# ${proyecto.nombre}\n\n`;
  markdown += `| Campo         | Valor |\n|--------------|-------|\n`;
  markdown += `| **Descripción** | ${proyecto.descripcion} |\n`;
  markdown += `| **Región**      | ${proyecto.region} |\n`;
  if (proyecto.location) {
    markdown += `| **Ubicación**  | (${proyecto.location.latitude}, ${proyecto.location.longitude}) |\n`;
  }
  markdown += `| **Fecha de Cultivo** | ${proyecto.fecha} |\n`;
  if (proyecto.imagenes && proyecto.imagenes.length > 0) {
    markdown += `\n**Imágenes:**\n`;
    markdown += proyecto.imagenes.map((img) => `![](${img})`).join(' ');
    markdown += '\n';
  }
  return markdown;
}
