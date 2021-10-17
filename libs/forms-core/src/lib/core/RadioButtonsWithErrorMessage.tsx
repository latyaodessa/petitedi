import React from 'react';
import { FormHelperText, FormLabel } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { FieldProps, getIn } from 'formik';

export interface RadioButtonsProps {
  caption: string;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (event: React.SyntheticEvent<EventTarget>) => void;
}

export const RadioButtonsWithErrorMessage: React.FC<FieldProps & RadioButtonsProps> = ({
                                                                                  field,
                                                                                  required,
                                                                                  readOnly,
                                                                                  caption,
                                                                                  children,
                                                                                  onChange,
                                                                                  form,
                                                                                  ...props
                                                                                }) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const errorText = error && touched ? error : null;

  return (
    <FormControl required={!!required} fullWidth error={!!errorText} {...props}>
      <FormLabel component='legend'>{caption}</FormLabel>

      <RadioGroup
        aria-label={caption}
        name={caption}
        value={field.value}
        onChange={(event) => {
          const { value } = event.target;
          form.setFieldValue(field.name, value, true);
        }}
        row
      >
        {children}
      </RadioGroup>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

