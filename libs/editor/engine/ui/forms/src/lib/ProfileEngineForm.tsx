import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Grid } from '@mui/material';
import { TextNumberFieldWithErrorMessage } from '@petitedi/forms-core';
//
// const locationValidation = Yup.object({
//   id: Yup.number(),
//   title: Yup.string()
// });
//
// const socialNetworkValidation = (t) =>
//   Yup.string()
//   .nullable()
//   .min(3, t('errors.min', { number: 3 }))
//   .max(255, t('errors.max', { number: 255 }));
//
// const alphaNumericStringValidation = (t) =>
//   Yup.string()
//   .nullable()
//   .min(3, t('errors.min', { number: 3 }))
//   .max(255, t('errors.max', { number: 255 }))
//   .matches(/^[a-zA-Z0-9_-]*$/, t('errors.alphanumeric'));
// const validationSchema = (t) => {
//   return Yup.object().shape({
//     firstName: Yup.string()
//     .min(3, t('errors.min', { number: 3 }))
//     .max(255, t('errors.max', { number: 255 }))
//     .required('errors.required'),
//     lastName: Yup.string()
//     .min(3, t('errors.min', { number: 3 }))
//     .max(255, t('errors.max', { number: 255 }))
//     .required('errors.required'),
//     country: locationValidation.nullable(),
//     city: locationValidation.nullable(),
//     displayName: alphaNumericStringValidation(t),
//     instagram: socialNetworkValidation(t),
//     facebook: socialNetworkValidation(t),
//     twitter: socialNetworkValidation(t),
//     site: Yup.string()
//     .nullable()
//     .url('errors.url')
//     .min(3, t('errors.min', { number: 3 }))
//     .max(255, t('errors.max', { number: 255 })),
//     hidden: Yup.boolean().nullable()
//   });
// };

export const ProfileEngineForm: React.VFC<any> = ({}) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      // validationSchema={validationSchema(t)}
      onSubmit={(values, formikHelpers) => {
        // formikHelpers.setSubmitting(true);
        // yfUserApi
        // .editUserProfile(values)
        // .then(() => {
        //   enqueueSnackbar(t('saved'), {
        //     variant: 'info',
        //     preventDuplicate: true
        //   });
        //   reload();
        // })
        // .finally(() => {
        //   formikHelpers.setSubmitting(false);
        // });
      }}
    >
      {({ isSubmitting, values, errors }) => {
        return (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/*<TitleBarText title={t('user.change')} />*/}
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextNumberFieldWithErrorMessage}
                  name={`firstName`}
                  caption={'user.first-name'}
                  variant="outlined"
                  required={true}
                />
              </Grid>
            </Grid>

          </Form>
        );
      }}
    </Formik>
  );
};

