import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@components/Avatar';
import { fetchLeaderboard } from '@components/Leaderboard/slice';
import { Theme } from '@components/Theme';
import { Title } from '@components/Title';
import { currentUser } from '@store/selectors';
import { useAppDispatch } from '@utils/hooks/reduxHooks';

import { UserKeys } from './Profile.typings';

import './index.scss';

export const Profile = () => {
  const user = useSelector(currentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userData = [
    { Логин: user.login },
    { Имя: user.first_name },
    { Фамилия: user.second_name },
    { Почта: user.email },
    { Телефон: user.phone },
  ];

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  return (
    <div className='container-content container-content_main bg-image_login '>
      <div className='colum-6 container_center'>
        <Title text='Данные вашего Профиля' />
        <Avatar
          src={user.avatar ? user.avatar : undefined}
          size='default'
          onClick={() => navigate('./change-avatar')}
          isLink={true}
          title='Изменить аватар'
        />
        <div className='profile__container'>
          <div className=''>
            {userData.map((items, index) =>
              Object.keys(items).map((key: string) => (
                <Fragment key={index}>
                  <div className='profile__item-container'>
                    <div className='profile__item'>{key}</div>
                    <div className='profile__item profile__item-value'>
                      {items[key as UserKeys]}
                    </div>
                  </div>
                </Fragment>
              ))
            )}
          </div>
          <Theme />
        </div>
        <Link className='plane-link' to={'./edit'}>
          Изменить данные профиля
        </Link>
        <Link className='plane-link' to={'./change-password'}>
          Изменить пароль
        </Link>
      </div>
    </div>
  );
};
