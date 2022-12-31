import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';
import HearderLive from '~/layouts/components/HeaderLive'
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import ProfileSearch from '~/pages/ProfileSearch';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Chưa Đăng Nhập
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live, layout: HearderLive},
  { path: config.routes.profileSearch, component: ProfileSearch },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];
//Đã Đăng Nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
