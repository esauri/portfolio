import { Route as ReactRoute } from 'react-router-dom';
import addLocation from './addLocation';

const Route = addLocation(ReactRoute);

export default Route;
