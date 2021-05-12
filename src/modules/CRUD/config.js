import { generateURIFactory } from '../../utils/routes';

const MapPlayground = () => import('./views/MapPlayground');

const routes = [
  {
    path: '/map/:layer?/:id?/:section?/:category?',
    import: MapPlayground,
    name: 'layer',
  },
];

export const generateURI = generateURIFactory(routes);

export default {
  title: 'CRUD.project',
  path: '/',
  routes,
};
