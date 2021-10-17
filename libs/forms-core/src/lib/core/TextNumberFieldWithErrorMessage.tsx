import React from 'react';
import TextField from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';

export interface TextFieldProps {
  caption: string;
  readOnly?: boolean;
  required?: boolean;
  emptyValue?: string;
}

const TextNumberFieldWithErrorMessage: React.VFC<FieldProps & TextFieldProps> = ({
                                                                                   field,
                                                                                   form,
                                                                                   readOnly,
                                                                                   caption,
                                                                                   required,
                                                                                   emptyValue,
                                                                                   ...props
                                                                                 }) => {

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const errorText = error && touched ? error : null;

  const value = field.value || (field.value === 0 ? field.value : '');

  return (
    <TextField
      disabled={readOnly}
      {...field}
      {...props}
      onChange={(event) => {
        const { value } = event.target;
        form.setFieldValue(field.name, value, true);
      }}
      value={value}
      label={emptyValue && !value ? emptyValue : caption}
      required={required}
      fullWidth
      margin='none'
      error={!!errorText}
      helperText={errorText}
    />
  );
};

export default TextNumberFieldWithErrorMessage;
