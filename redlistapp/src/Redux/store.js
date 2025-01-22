import { createStore } from 'redux';
import speciesReducer from './reducers/speciesReducer';

const store = createStore(speciesReducer);

export default store;
