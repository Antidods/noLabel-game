import { Avatar } from '@components/Avatar';
import { LeaderboardUserType } from '@typings/app.typings';

import './index.scss';

export const LeaderboardView = (props: LeaderboardUserType) => {
  return (
    <div className='player'>
      <div className='player__number'>{props.order}</div>
      <div className='player__profile'>
        <Avatar src={props.avatar || ''} className={'player__image'} size='small' />
        <div className='player__name'>{`${props.first_name}  ${props.second_name}`}</div>
      </div>
      <div className='player__score'>{props.towerDefenceScore}</div>
    </div>
  );
};
