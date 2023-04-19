import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { AboutUs } from '@pages/AboutUs';
import { DevPage } from '@pages/DevPage';
import { Error404 } from '@pages/Errors/404';
import { Forum } from '@pages/Forum';
import { ForumTheme } from '@pages/Forum/ForumTheme';
import { Game } from '@pages/Game';
import { LeaderboardPage } from '@pages/Leaderboard';
import { Login } from '@pages/Login';
import { Profile } from '@pages/Profile';
import { ChangeAvatar } from '@pages/Profile/ChangeAvatar';
import { ChangePassword } from '@pages/Profile/ChangePassword';
import { ChangeProfile } from '@pages/Profile/ChangeProfile';
import { Register } from '@pages/Register';
import { StartScreen } from '@pages/StartScreen';
import { useAuth } from '@utils/hooks/userAuth';

function RequireAuth() {
  const auth = useAuth();
  if (!auth.isAuth) {
    toast.error('Вы не авторизованы!');
    return <Navigate to='/login' />;
  }
  return <Outlet />;
}

export const Layout = () => {
  return (
    <>
      <div className='left-image'></div>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<StartScreen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/devpage' element={<DevPage />} />
          <Route element={<RequireAuth />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/change-password' element={<ChangePassword />} />
            <Route path='/profile/change-avatar' element={<ChangeAvatar />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/forum/:id' element={<ForumTheme />} />
            <Route path='/rating' element={<LeaderboardPage />} />
            <Route path='/profile/edit' element={<ChangeProfile />} />
            <Route path='/game' element={<Game />} />
          </Route>
          <Route path='/*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
      <div className='right-image'></div>
      <ToastContainer
        theme='dark'
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  );
};
