
export function currentDate() {
  const newDate = new Date();
  const opciones = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: "2-digit",
    minute: '2-digit',
    hour12: true,
  };

  return new Date(newDate).toLocaleString("es-ES", opciones as any);
}

export function formatDate(date: string) {
  const dataParts = date.split('-');
  if (dataParts.length !== 3) {
    return 'Fecha inválida';
  }

  const [year, month, day] = dataParts;
  return `${day}/${month}/${year}`;
}

export function formatTime(time: string) {
  const timesParts = time.split(':');
  
  if (timesParts.length === 2) {
    let hours = parseInt(timesParts[0], 10);
    const mins = timesParts[1];
    let ampm = 'a. m.';

    if (hours === 12) {
      ampm = 'p. m.';
    } else if (hours > 12) {
      ampm = 'p. m.';
      hours -= 12;
    }
    
    return `${hours}:${mins} ${ampm}`;
  }
}