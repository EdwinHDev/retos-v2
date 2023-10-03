import { DocumentData } from "firebase/firestore";

export function orderRanking(users: DocumentData[] | undefined) {
  return users?.sort((a, b) => {
    // Ordenar por score descendente
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    // Si tienen el mismo score, priorizar retos.failed menor o igual a 0
    if (a.retos.failed === 0 && b.retos.failed !== 0) {
      return -1;
    }
    if (a.retos.failed !== 0 && b.retos.failed === 0) {
      return 1;
    }

    // Si tienen el mismo score y retos.failed, priorizar retos.failed más bajos
    if (a.retos.failed !== b.retos.failed) {
      return a.retos.failed - b.retos.failed;
    }

    // Si tienen el mismo score, retos.failed y retos.failed igual a 0, ordenar alfabéticamente por nombre
    const nombreA = a.displayName.toLowerCase();
    const nombreB = b.displayName.toLowerCase();
    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }

    return 0;
  });
}
