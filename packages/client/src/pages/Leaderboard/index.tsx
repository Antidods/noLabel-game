import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchLeaderboard } from '@components/Leaderboard/slice';
import { Title } from '@components/Title';
import { getDataForLeaderBoard, getLeaderboard, getLeaderboardIsLoading } from '@store/selectors';
import { LeaderboardType } from '@typings/app.typings';
import { Loader } from '@ui/Loader';
import { uuid } from '@utils/generateId';
import { useAppDispatch } from '@utils/hooks/reduxHooks';
import classNames from 'classnames';

import './index.scss';

export const LeaderboardPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  const leaderboardList = useSelector(getLeaderboard) as LeaderboardType;
  const isLoading = useSelector(getLeaderboardIsLoading);

  const currUser = useSelector(getDataForLeaderBoard);
  // Минимальное и максимальная ширина в % отдельного столбца в гистограмме рейтинга пользователей
  const minWidth = 20;
  const maxWidth = 100;

  // Переменные для хранения мин и макс значений в рейтинге пользователей
  const maxValue = leaderboardList[0].towerDefenceScore;

  // Коэффициент для конвертации очков рейтинга юзеров в высоту столбца гистограммы
  const correction = maxWidth / maxValue;

  const ratingList = leaderboardList.map((user) => {
    // Ограничиваем минимальную ширину столбца гистограммы
    const width = Math.floor(
      user.towerDefenceScore * correction > minWidth
        ? user.towerDefenceScore * correction
        : minWidth
    );

    // Класс leaderboard__user_current служит для выделения очков залогиненного юзера
    return (
      <li
        key={uuid()}
        className={classNames('leaderboard__user', {
          leaderboard__user_current: user.id === currUser.id,
        })}
        style={{ width: `${width}%` }}>
        <span className='leaderboard__user-text'>
          {`${user.order}.  ${user.first_name} ${user.second_name}  ${user.towerDefenceScore}`}
        </span>
      </li>
    );
  });
  return (
    <div className='container-content bg-image_login container_start'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='container_center colum-7'>
          <Title text='Рейтинг игроков' />
          <div className='leaderboard__user-container'>{ratingList}</div>
        </div>
      )}
    </div>
  );
};
