import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
} from "@material-ui/core";

export default function Select(props) {
  const { label, name, value, onChange, option } = props;
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        name={name}
        value={value}
        onChange={onChange}
        option={option}
        label={label}
      >
        <MenuItem value="">None</MenuItem>
      </MuiSelect>
    </FormControl>
  );
}
