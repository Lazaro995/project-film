export interface Contract {
  receiver: string;
  packageWeight: number;
  address: string;
  coordinates: { lat: number; lng: number };
  type: DeliveryTypes;
  premiumUser: boolean;
  dueDate: string;
  availableTime: Times[];
}

interface Times {
  from?: number; // En horas del día
  to?: number;
}

export enum DeliveryTypes {
  EXPRESS = "express",
  CASUAL = "casual",
  LATE = "late delivery"
}
const DIAS = [{ from: 4, to: 12 }, {}, { from: 4, to: 8 }]; //Ejemplo
