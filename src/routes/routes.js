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
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: ProfileSearch },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
//Đã Đăng Nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
