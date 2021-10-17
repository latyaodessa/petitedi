import React from 'react';
import { FieldProps, getIn } from 'formik';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import moment from 'moment';
import 'moment/locale/ru';
import TextField from '@mui/material/TextField';

type DatePickerProps = {
  dateOnly: boolean;
  caption: string;
  required?: boolean;
};

export const DateTimePickerWithErrorMessage: React.FC<FieldProps & DatePickerProps> = ({
                                                                                  dateOnly,
                                                                                  caption,
                                                                                  required,
                                                                                  field,
                                                                                  form,
                                                                                  ...props
                                                                                }) => {

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const errorText = error && touched ? error : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDateMoment} locale={'ru'}>
      {dateOnly ? (
        <DatePicker
          {...field}
          {...props}
          renderInput={(props) => (
            <TextField
              {...field}
              {...props}
              fullWidth
              margin='dense'
              error={!!errorText}
              helperText={errorText}
              inputProps={{ readOnly: true }}
            />
          )}
          inputFormat='YYYY-MM-DD'
          label={caption ? (required ? caption + ' *' : caption) : undefined}
          onChange={(v) => {
            v === null
              ? form.setFieldValue(field.name, '', true)
              : form.setFieldValue(field.name, moment(v).format('YYYY-MM-DD'), true);
          }}
        />
      ) : (
        <TimePicker
          {...field}
          {...props}
          inputFormat='YYYY-MM-DD HH:mm'
          ampm={false}
          renderInput={(props) => (
            <TextField
              {...props}
              fullWidth
              margin='dense'
              error={!!errorText}
              helperText={errorText}
              inputProps={{ readOnly: true }}
            />
          )}
          label={caption ? (required ? caption + ' *' : caption) : undefined}
          onChange={(v) => {
            v === null
              ? form.setFieldValue(field.name, '', true)
              : form.setFieldValue(field.name, moment(v).utc(true), true);
          }}
        />
      )}
    </LocalizationProvider>
  );
};

