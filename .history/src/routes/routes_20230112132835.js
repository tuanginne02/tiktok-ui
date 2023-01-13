import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import ProfileSearch from '~/pages/ProfileSearch';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import GetCoin from '~/pages/GetCoin';
import Setting from '~/pages/Setting';
import KeyBoard from '~/components/Popper/PopperOnclick/Keyboard/KeyBoard';
import FeedBack from '~/components/FeedBack';
//Chưa Đăng Nhập
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.profileSearch, component: ProfileSearch },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.getcoin, component: GetCoin, layout: HeaderOnly },
  { path: config.routes.setting, component: Setting, layout: HeaderOnly },
  { path: config.routes.logout, component: KeyBoard, layout: null },
  { path: config.routes.feedback, component: FeedBack, layout: HeaderOnly },

];
//Đã Đăng Nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
