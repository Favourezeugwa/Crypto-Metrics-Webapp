import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import DetailsContainer from '../Components/Details/DetailsContainer';
import store from '../Redux/store';

it('Test DetailsContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailsContainer />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
