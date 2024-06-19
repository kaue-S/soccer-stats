import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function ajustarHorario(horario) {
  // Divide a string de horário em horas e minutos
  let [horas, minutos] = horario.split(':').map(Number);

  // Cria um novo objeto Date com a hora atual
  let data = new Date();
  data.setHours(horas);
  data.setMinutes(minutos);

  // Subtrai 5 horas (5 * 60 * 60 * 1000 milissegundos)
  data.setTime(data.getTime() - 5 * 60 * 60 * 1000);

  // Extrai as novas horas e minutos
  let novasHoras = data.getHours().toString().padStart(2, '0');
  let novosMinutos = data.getMinutes().toString().padStart(2, '0');

  // Retorna o novo horário no formato "HH:MM"
  return `${novasHoras}:${novosMinutos}`;
}

export function ajustarData(dataString) {
  // Converte a string de data para um objeto Date
  let dataOriginal = new Date(dataString);

  // Define a diferença de fuso horário entre Londres (UTC+0) e Brasília (UTC-3)
  const diferencaFusoHorario = -5; // Horas

  // Ajusta o fuso horário da data
  dataOriginal.setHours(dataOriginal.getHours() + diferencaFusoHorario);

  // Formata a data para o formato desejado
  const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = dataOriginal.toLocaleDateString('pt-BR', opcoes);

  return dataFormatada;
}











