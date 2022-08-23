import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import classes from './Register.module.css';

export default function Register() {
  const phoneRegExp = /[2-9]{2}\d{8}/;
  const inputStyles = {
    height: '50px',
  };
  const valSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  });
  return (
    <div className={classes.content}>
      <h3>User Registration</h3>
      <section className={classes.formSection}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            country: '',
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
                  id='firstName'
                  label='First Name'
                  variant='filled'
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={classes.error}>{formik.errors.firstName}</div>
                ) : null}
              </div>

              <div className={classes.input}>
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
              </div>

              <div className={classes.input}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='city'
                  label='City'
                  variant='filled'
                  {...formik.getFieldProps('city')}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className={classes.error}>{formik.errors.city}</div>
                ) : null}
              </div>

              <div className={classes.input}>
                <TextField
                  InputProps={{
                    className: classes.textField,
                    style: inputStyles,
                  }}
                  id='country'
                  label='Country'
                  variant='filled'
                  {...formik.getFieldProps('country')}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className={classes.error}>{formik.errors.country}</div>
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
      </section>
    </div>
  );
}
