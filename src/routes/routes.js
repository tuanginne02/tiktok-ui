import routesConfig from '~/config/routes';

//Layout
import { HeaderOnly } from '~/components/Layouts';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import ProfileSearch from '~/pages/ProfileSearch';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Chưa Đăng Nhập
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profileSearch, component: ProfileSearch },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];
//Đã Đăng Nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
