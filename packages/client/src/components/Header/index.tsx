import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut, removeUser } from '@components/Autification/slice';
import { Button } from '@components/Button';
import { clearLeaderboard } from '@components/Leaderboard/slice';
import { UserCard } from '@components/UserCard';
import { currentUser } from '@store/selectors';
import { Spacer } from '@ui/Spacer';
import { useAppDispatch } from '@utils/hooks/reduxHooks';

import './index.scss';

export const Header = () => {
  const user = useSelector(currentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(removeUser());
    dispatch(clearLeaderboard());
    navigate('/');
  };

  return (
    <>
      <div className='header'>
        <div className='header__logo'></div>
        <div className='header__container header__container_link-autch'>
          <div className='header__container header__container_link'>
            <Link to={'/'} className='custom-link'>
              Главная
            </Link>
            <Link to={'/game'} className='custom-link'>
              Игра
            </Link>
            <Link to={'/rating'} className='custom-link'>
              Рейтинг
            </Link>
            <Link to={'/forum'} className='custom-link'>
              Форум
            </Link>
          </div>
          {!user.login ? (
            <div className='header__container header__container_autch'>
              <Button text={'ВХОД'} onClick={() => navigate('/login')} />
            </div>
          ) : (
            <div style={{ cursor: 'pointer' }}>
              <UserCard
                avatarUrl={user.avatar ? user.avatar : undefined}
                variant='header'
                userName={user.login ?? 'Игрок'}
                clickCard={() => navigate('/profile')}
                clickButton={handleLogOut}
              />
            </div>
          )}
        </div>
      </div>
      <Spacer />
    </>
  );
};
