import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSubmitLogin, loginWithToken } from '@components/Autification/slice';
import { Button } from '@components/Button';
import { InputValidate } from '@components/InputValidate';
import { useLoading } from '@components/LoaderComponent';
import { Title } from '@components/Title';
import { Loader } from '@ui/Loader';
import { useAppDispatch } from '@utils/hooks/reduxHooks';
import classNames from 'classnames';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import './index.scss';

const SigninSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Слишком короткий!')
    .max(10, 'Слишком длинный!')
    .matches(/^[a-z0-9_-]{2,19}$/, 'Поле зполнено некорректно')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Слишком короткий!')
    .max(10, 'Слишком длинный!')
    .matches(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g, 'Поле заполнено некорректно')
    .required('Required'),
});

export const Login = () => {
  const navigate = useNavigate();
  const [fieldError, setFieldError] = useState(null);
  const { loading } = useLoading();
  const dispatch = useAppDispatch();

  const oAuth = () => {
    dispatch(loginWithToken());
  };

  return (
    <div className={classNames('container-content', 'container-content_main', 'bg-image_login')}>
      {loading && <Loader />}
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          dispatch(
            handleSubmitLogin({ navigate: navigate, values: values, setFieldError: setFieldError })
          );
        }}>
        {({ errors, values, handleChange }) => (
          <Form className={classNames('colum-5', 'container__login-form')}>
            <Title text='ВХОД' />
            <InputValidate
              handleChange={handleChange}
              name='login'
              type='text'
              label='Логин'
              value={values.login}
              error={errors.login}
            />
            <InputValidate
              handleChange={handleChange}
              name='password'
              type='password'
              label='Пароль'
              value={values.password}
              error={errors.password}
            />
            <Button text='Вход' type='submit' className='custom-button' />
            <Button
              text='Войти с помощью Яндекс.ID'
              type='button'
              className='custom-button'
              onClick={() => oAuth()}
            />
            <Link className='plane-link' to='/registration'>
              Нет аккаунта?
            </Link>
            <div className='input__error-message'>{fieldError}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
