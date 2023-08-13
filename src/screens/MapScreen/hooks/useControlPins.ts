import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectActivePin,
  selectPins,
} from '../../../store/reducers/pins/selector';
import {updatePins} from '../../../store/reducers/pins/pinsReducer';

export const useControlPins = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const pins = useSelector(selectPins);

  const activePin = useSelector(selectActivePin);

  const onChangeName = useCallback((name: string) => {
    setName(name);
  }, []);

  const onChangeDescription = useCallback((description: string) => {
    setDescription(description);
  }, []);

  const dispatch = useDispatch();

  const onSavePinChanges = useCallback(() => {
    const newActivePin = {...activePin, name: name, description: description};

    const newPins = pins.map(item => {
      if (item.id === newActivePin.id) {
        return newActivePin;
      }
      return item;
    });

    // dispatch(updatePins(newPins));
    console.log(newActivePin, 'NEW');
    console.log(newPins, 'OLD');
  }, [activePin, description, name, pins]);

  return {
    name,
    description,
    onChangeName,
    onChangeDescription,
    onSavePinChanges,
  };
};
