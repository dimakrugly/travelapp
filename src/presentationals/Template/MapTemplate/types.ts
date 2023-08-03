export interface MapTemplateProps {
  onPinAdd: ({})=>void,
  pins: Pin[],
  enableAdd: boolean,
  onPinEnable: ()=>void,
  onPinsRemove: ()=>void,
}

interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  img: undefined | string;
}