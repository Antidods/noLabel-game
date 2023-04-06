import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { Rating } from '@components/Leaderboard';
import { LogoText } from '@components/LogoText';
import { currentUser } from '@store/selectors';
import classNames from 'classnames';

import './index.scss';
import '@assets/styles/App.scss';

export const StartScreen = () => {
  const navigate = useNavigate();
  const user = useSelector(currentUser);

  return (
    <div className='container-content container-content_main bg-image'>
      <div
        className={classNames('container_center', 'container-start-screen', {
          'colum-8': user.id,
          'colum-12': !user.id,
        })}
        style={{ marginLeft: 0 }}>
        <LogoText />
        <Button
          text='Начать игру'
          onClick={() => navigate('/login')}
          className='button button_primary'
          style={{ margin: 20 }}
        />
        <Link className='plane-link' to='/registration' style={{ marginBottom: 20 }}>
          Нет аккаунта?
        </Link>
      </div>
      {user.id ? (
        <div className='container colum-3' style={{ paddingLeft: 20 }}>
          <Rating />
        </div>
      ) : null}
    </div>
  );
};
