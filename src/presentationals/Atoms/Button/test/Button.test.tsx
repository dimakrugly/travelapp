import {render} from '@testing-library/react-native';
import {Button} from '../Button';

describe('Button', () => {
  it('Match snapshot', () => {
    const tree = render(<Button title={'title'} onPress={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
