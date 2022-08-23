import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import classes from './Register.module.css';
import { NavLink } from 'react-router-dom';

export default function Register() {
  //   const phoneRegExp = /[2-9]{2}\d{8}/;
  const inputStyles = {
    height: '40px',
  };
  const valSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    // phone: Yup.string()
    //   .matches(phoneRegExp, 'Invalid phone number')
    //   .required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });
  return (
    <div className={classes.content}>
      <h3>User Registration</h3>
      <section className={classes.formSection}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            // phone: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={valSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            //   setUsers([...users, { id: users.length + 1, ...values }]);
            setTimeout(() => {
              alert(JSON.stringify(values));
              // resetForm({
              //   firstName: '',
              //   lastName: '',
              //   email: '',
              //   phone: '',
              //   city: '',
              //   country: '',
              // });
              setSubmitting(false);
            }, 400);
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

              {/* <div className={classes.input}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='lastName'
                  label='Last Name'
                  variant='filled'
                  {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className={classes.error}>{formik.errors.lastName}</div>
                ) : null}
              </div> */}

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

              {/* <div className={classes.input}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='phone'
                  label='Phone'
                  variant='filled'
                  {...formik.getFieldProps('phone')}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={classes.error}>{formik.errors.phone}</div>
                ) : null}
              </div> */}

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
                  onClick={
                    () => {}
                    // formik.resetForm({
                    //   firstName: '',
                    //   lastName: '',
                    //   email: '',
                    //   phone: '',
                    //   city: '',
                    //   country: '',
                    // })
                  }
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
