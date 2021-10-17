import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import { FieldProps, getIn } from 'formik';

type ComboboxSelectProps = {
  caption: string;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (event: any) => void;
};

export const ComboboxWithErrorMessage: React.FC<FieldProps & ComboboxSelectProps> = ({
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
    <FormControl margin='dense' required={!!required} fullWidth error={!!errorText} {...props}>
      <InputLabel htmlFor={caption}>{caption}</InputLabel>
      <Select
        defaultValue=''
        disabled={readOnly}
        value={field.value}
        onChange={(event) => {
          form.setFieldValue(field.name, event.target.value, true);
          if (onChange) {
            onChange(event);
          }
        }}
        label={caption ? (required ? caption + ' *' : caption) : undefined}
        name={field.name}
        inputProps={{
          id: caption
        }}
      >
        {children}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

