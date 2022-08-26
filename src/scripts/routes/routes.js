import Home from '../views/pages/home';
import Explore from '../views/pages/explore';
import Favorite from '../views/pages/favorite';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';
import Kategori from '../views/pages/kategori';
import Kontak from '../views/pages/kontak';
import Thankyou from '../views/pages/thankyou';

const routes = {
  '/': Home,
  '/home': Home,
  '/explore': Explore,
  '/kategori/:id': Kategori,
  '/detail/:id': Detail,
  '/kontak': Kontak,
  '/favorite': Favorite,
  '/about': About,
  '/thankyou': Thankyou,
};

export default routes;
