import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { addPin, clearPins } from '../../../store/reducers/pins/pinsReducer';
import { selectPins } from '../../../store/reducers/pins/selector';
import { useState } from 'react';

export const useMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pins = useSelector(selectPins);

  const [enableAdd, setEnableAdd] = useState(false);

  const onPinAdd = (pin: any) =>{
    if (enableAdd) {
      const newPin = {
        latitude: pin.latitude,
        longitude: pin.longitude,
        id: (pin.latitude * pin.longitude).toString().replace('.', '').slice(0, 10),
        img: undefined,
      };

      dispatch(addPin(newPin));
      setEnableAdd(false);
      console.log(pins);
    }
  };

  const onPinEnable = () => {
    setEnableAdd(true);
  };

  const onPinsRemove = () => {
    dispatch(clearPins());
  };

  return {
    onPinAdd,
    pins,
    enableAdd,
    onPinEnable,
    onPinsRemove };
};