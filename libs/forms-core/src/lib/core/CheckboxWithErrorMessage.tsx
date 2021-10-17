import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { getIn } from 'formik';

export const CheckBoxWithErrorMessage: React.VFC<any> = ({
                                                           field,
                                                           readOnly,
                                                           caption,
                                                           required,
                                                           form
                                                         }) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const errorText = error && touched ? error : null;

  return (
    <FormControl required error={!!errorText} component='fieldset' fullWidth>
      <FormControlLabel
        disabled={readOnly}
        control={
          <Checkbox
            required={required}
            color={'primary'}
            name={field.name}
            checked={field.value}
            onChange={(event) => {
              const { checked } = event.target;
              form.setFieldValue(field.name, checked, true);
            }}
          />
        }
        label={caption}
      />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

