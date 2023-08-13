export interface PinsTypes {
  pins: Pin[];
  activePin?: Pin;
}

export interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  img?: string;
  name?: string;
  description?: string;
}
