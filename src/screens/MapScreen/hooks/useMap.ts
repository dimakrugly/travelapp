import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../store/store';
import {
  addPin,
  clearPins,
  setCurrent,
} from '../../../store/reducers/pins/pinsReducer';
import {selectPins} from '../../../store/reducers/pins/selector';
import {useCallback, useState} from 'react';

export const useMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pins = useSelector(selectPins);
  const [enableAdd, setEnableAdd] = useState(false);

  const onPinAdd = useCallback(
    (event: any) => {
      const {
        nativeEvent: {coordinate},
      } = event;

      if (enableAdd) {
        const newPin = {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          id: (coordinate.latitude * coordinate.longitude)
            .toString()
            .replace('.', '')
            .slice(0, 10),
          img: undefined,
          name: undefined,
          description: undefined,
        };

        dispatch(addPin(newPin));
        setEnableAdd(false);
        console.log(pins);
      }
    },
    [dispatch, enableAdd, pins],
  );

  const onPinEnable = useCallback(() => {
    setEnableAdd(true);
  }, []);

  const onPinsRemove = useCallback(() => {
    dispatch(clearPins());
  }, [dispatch]);

  const onSetCurrent = useCallback(
    (pinId: string) => {
      dispatch(setCurrent({id: pinId}));
    },
    [dispatch],
  );

  return {
    onPinAdd,
    pins,
    enableAdd,
    onPinEnable,
    onPinsRemove,
    onSetCurrent,
  };
};
