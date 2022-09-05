import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import classes from './SignIn.module.css';
import { RegFormInputType } from '../Types';
import customAxios from '../../Axios';

export default function SignIn() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inputStyles = {
    height: '50px',
  };
  const valSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });
  return (
    <div className={classes.content}>
      <section className={classes.formSection}>
        <div className={classes.buttonContainer}>
          <NavLink to='/'>
            <Button
              variant='outlined'
              style={{
                color: 'black',
                border: 'none',
                paddingLeft: '0px',
              }}
            >
              <ChevronLeftIcon />
              Home
            </Button>
          </NavLink>
        </div>
        <h4>Sign In</h4>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={valSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            customAxios
              .post('/auth/login', {
                email: values.email,
                password: values.password,
              })
              .then((resp) => {
                console.log('resp data', resp);
                if (resp?.data?.status === 'Success') {
                  localStorage.setItem('access_token', resp.data.token);
                  localStorage.setItem('refresh_token', resp.data.refreshToken);
                  resetForm({});
                  navigate('/dashboard/home');
                  // window.location.pathname = '/dashboard/home';
                } else {
                  alert('Login failed');
                  setError(resp?.data?.Message);
                  setSubmitting(false);
                }
              })
              .catch((err) => console.error(err.message));
            // let userAuth = false;
            // let existingUsers: string | null = localStorage.getItem('users');
            // let regUsers: RegFormInputType[] = JSON.parse(`${existingUsers}`);
            // regUsers.every(function (user) {
            //   if (
            //     user.email === values.email &&
            //     user.password === values.password
            //   ) {
            //     userAuth = true;
            //     localStorage.setItem(
            //       'userDetail',
            //       JSON.stringify({ name: user.name, email: user.email })
            //     );
            //     return false;
            //   }
            //   return true;
            // });
            // if (!userAuth) {
            //   setError('Invalid usernme or password');
            //   setSubmitting(false);
            // } else {
            //   resetForm({});
            //   window.location.pathname = '/dashboard/home';
            // }
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} data-testid='signin-form'>
              <div className={classes.input}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='email'
                  label='Email'
                  variant='filled'
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={classes.error}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={classes.input}>
                <TextField
                  type='password'
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='password'
                  label='Password'
                  variant='filled'
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={classes.error}>{formik.errors.password}</div>
                ) : null}
              </div>
              {!!error?.length && <p className={classes.errorMsg}>{error}</p>}
              <section className={classes.buttons}>
                <Button variant='contained' color='success' type='submit'>
                  Sign In
                </Button>
                <Button
                  style={{
                    color: 'white',
                    border: 'none',
                    backgroundColor: 'gray',
                  }}
                  variant='outlined'
                  onClick={() => {
                    setError('');
                    formik.resetForm({});
                  }}
                >
                  Cancel
                </Button>
              </section>
            </form>
          )}
        </Formik>
        <footer>
          Not yet registered? Click <NavLink to='/register'>here</NavLink> to
          register.
        </footer>
      </section>
    </div>
  );
}
