import React from 'react';
import { FormControlLabel, FormGroup, FormHelperText, Switch } from '@mui/material';
import { get } from 'lodash';
import FormControl from '@mui/material/FormControl';
import { FieldProps } from 'formik';

export interface SwitchProps {
  caption: string;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (event: React.SyntheticEvent<EventTarget>) => void;
}

export const SwitchWithErrorMessage: React.FC<FieldProps & SwitchProps> = ({
                                                                      field,
                                                                      required,
                                                                      readOnly,
                                                                      caption,
                                                                      children,
                                                                      onChange,
                                                                      ...props
                                                                    }) => {
  const errorText: string = get(props.form.errors, field.name) as any;

  return (
    <FormControl margin='dense' required={!!required} fullWidth error={!!errorText} {...props}>
      <FormGroup aria-label={caption}>
        <FormControlLabel
          control={
            <Switch
              color='primary'
              checked={!!field.value}
              onChange={(event) => {
                const { checked } = event.target;
                props.form.setFieldValue(field.name, checked);

                if (onChange) {
                  onChange(event);
                }
              }}
            />
          }
          label={caption}
        />
      </FormGroup>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

