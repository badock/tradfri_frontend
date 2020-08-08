export interface Bulb {
  id: number;
  name: string;
  dimmer: number;
  state: boolean;
}

export interface Ambiance {
  id: number;
  name: string;
}

export interface Room {
  id: number;
  name: string;
  bulbs: Bulb[];
  ambiances: Ambiance[];
  ambiance_active: number;
}

export interface Home {
  rooms: Room[];
}
