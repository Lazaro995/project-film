import { DeliveryTypes } from "./interface";

export const DEFAULT_BODY = {
  receiver: "", // text
  packageWeight: 0,   // number
  address: "", // text - asistido
  coordinates: {
    lat: 0, // dos inputs distintos
    lng: 0,
  },
  type: DeliveryTypes.CASUAL, // select
  premiumUser: false, // checkbox input
  dueDate: String(Date.now()), // date input
  availableTime: [{ from: 0, to: 0 }], // El orden del array determina los días
};
