import { Timestamp } from "@firebase/firestore";

export function formatDate(date: Timestamp) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }

  const miliseconds = date.seconds * 1000 + date.nanoseconds / 1000000;
  return new Date(miliseconds).toLocaleString("es-ES", options);
}

export function checkDate(date: Timestamp) {
  const miliseconds = date.seconds * 1000 + date.nanoseconds / 1000000;
  const _date = new Date(miliseconds);
  const _currentDate = new Date();
  if(_currentDate.getTime() > _date.getTime() ) return true;
  return false;
}