import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import * as Yup from 'yup';
import { regFormInputType } from '../Types';
import classes from './Register.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Register() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inputStyles = {
    height: '40px',
  };
  const valSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
        <h3>User Registration</h3>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={valSchema}
          onSubmit={(
            values: regFormInputType,
            { setSubmitting, resetForm }
          ) => {
            let userExists = false;
            let existingUsers: string | null = localStorage.getItem('users');
            let regUsers: regFormInputType[] = JSON.parse(`${existingUsers}`);
            regUsers.every(function (user) {
              if (user.email === values.email) {
                userExists = true;
                setError('User already exists');
                return false;
              }
              return true;
            });
            if (!userExists) {
              let obj = { ...values };
              delete obj.confirmPassword;
              localStorage.setItem(
                'users',
                JSON.stringify([...regUsers, { ...obj }])
              );
              setTimeout(() => {
                alert('User Registered Successfully!!');
                resetForm({});
                navigate('/signIn');
                setSubmitting(true);
              }, 400);
            }
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className={classes.input}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='name'
                  label='Name'
                  variant='filled'
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className={classes.error}>{formik.errors.name}</div>
                ) : null}
              </div>

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

              <div className={classes.input}>
                <TextField
                  type='password'
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='confirmPassword'
                  label='Confirm Password'
                  variant='filled'
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className={classes.error}>
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              {!!error.length && <p className={classes.errorMsg}>{error}</p>}
              <section className={classes.buttons}>
                <Button variant='contained' color='success' type='submit'>
                  Register
                </Button>
                <Button
                  style={{
                    color: 'white',
                    border: 'none',
                    backgroundColor: 'gray',
                  }}
                  variant='outlined'
                  onClick={() => {
                    formik.resetForm({});
                    setError('');
                  }}
                >
                  Cancel
                </Button>
              </section>
            </form>
          )}
        </Formik>
        <footer>
          Already registered? SignIn <NavLink to='/signIn'>here</NavLink>
        </footer>
      </section>
    </div>
  );
}
