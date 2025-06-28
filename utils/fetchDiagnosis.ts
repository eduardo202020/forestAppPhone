import axios from 'axios';
import { Diagnosis } from '../app/(drawer)/pasos/index';

// Configuración de la API usando variables de entorno
const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://server-agricultura-db.onrender.com';
const DIAGNOSIS_ENDPOINT = process.env.EXPO_PUBLIC_DIAGNOSIS_ENDPOINT || '/diagnosis';
const QUESTION_ENDPOINT = process.env.EXPO_PUBLIC_QUESTION_ENDPOINT || '/question';

export async function fetchDiagnosis(query: string): Promise<Diagnosis[]> {
  const response = await axios.post(
    `${API_BASE_URL}${DIAGNOSIS_ENDPOINT}?query=${encodeURIComponent(query)}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = response.data;
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error('No se encontraron resultados.');
  }
}

export async function fetchQuestion(
  question: string,
  eventType: string
): Promise<any> {
  const response = await axios.post(
    `${API_BASE_URL}${QUESTION_ENDPOINT}`,
    {
      query: question,
      type: eventType,
      context: `Pregunta sobre ${eventType} en agricultura y método kawasaki`,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = response.data;
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error('No se pudo procesar la pregunta.');
  }
}
