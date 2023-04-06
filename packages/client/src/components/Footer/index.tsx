import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Spacer } from '@ui/Spacer';

import { FooterProps } from './Footer.typings';

import './index.scss';

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <>
      <Spacer />
      <div className='footer'>
        <div className='footer__logo'></div>
        <div className='footer__children-container'>{children}</div>
        <div className='footer__link-container'>
          <Link to={'/about'} className='custom-link'>
            О нас
          </Link>
        </div>
      </div>
    </>
  );
};
