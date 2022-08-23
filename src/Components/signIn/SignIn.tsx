import React from 'react';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import classes from './SignIn.module.css';

export default function SignIn() {
  const inputStyles = {
    height: '50px',
  };
  const valSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });
  return (
    <div className={classes.content}>
      <h3>Sign In</h3>
      <section className={classes.formSection}>
        <Formik
          initialValues={{
            email: '',
            password: '',
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
          Not yet registered? Click <NavLink to='/register'>here</NavLink> to
          register.
        </footer>
      </section>
    </div>
  );
}
