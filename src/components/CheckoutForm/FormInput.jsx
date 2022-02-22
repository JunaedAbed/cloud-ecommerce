import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            error={isError}
            required
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
