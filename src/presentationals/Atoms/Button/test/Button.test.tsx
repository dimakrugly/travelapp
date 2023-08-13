import {render} from '@testing-library/react-native';
import {AppButton} from '../Button';

describe('AppButton', () => {
  it('Match snapshot', () => {
    const tree = render(<AppButton title={'title'} onPress={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
