import axios from 'axios';
import { Diagnosis } from '../app/(drawer)/pasos/index';

export async function fetchDiagnosis(query: string): Promise<Diagnosis[]> {
  const response = await axios.post(
    `https://server-agricultura-db.onrender.com/diagnosis?query=${encodeURIComponent(query)}`,
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
    `https://server-agricultura-db.onrender.com/question?query=${encodeURIComponent(question)}&type=${encodeURIComponent(eventType)}`,
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
    throw new Error('No se pudo procesar la pregunta.');
  }
}
