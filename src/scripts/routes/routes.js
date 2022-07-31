import Home from '../views/pages/home';
import Explore from '../views/pages/explore';
import Favorite from '../views/pages/favorite';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';
import Genre from '../views/pages/genre';
import Publis from '../views/pages/publis';

const routes = {
  '/': Home,
  '/home': Home,
  '/explore': Explore,
  '/genre/:id': Genre,
  '/detail/:id': Detail,
  '/publis': Publis,
  '/favorite': Favorite,
  '/about': About,
};

export default routes;
