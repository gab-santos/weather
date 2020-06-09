import { fromUnixTime, format } from "date-fns";
import { ptBR } from "date-fns/locale";

function getDate(dateInMiliseconds) {
  return format(fromUnixTime(dateInMiliseconds), "EEEE (dd/MM/uuuu)", {
    locale: ptBR,
  });
}

function getHour(dateInMiliseconds) {
  return format(fromUnixTime(dateInMiliseconds), "HH:mm");
}

export default { getDate, getHour };
