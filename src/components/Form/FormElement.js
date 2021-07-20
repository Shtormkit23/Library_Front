import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

const FormElement = ({name, label, value, onChange, required, error, type, select, options, multiline, rows}) => {
    let inputChildren = null;
    if(options) {
        inputChildren = options.map((option) => (
            <MenuItem key={option._id} value={option._id} id={option.title ? option.title : option.name} >
                {option.title ? option.title : option.name}
            </MenuItem>
        ))
    }
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                fullWidth
                select={select}
                required={required}
                error={!!error}
                helperText={error}
                id={name}
                label={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete={name}
                multiline={multiline}
                rows={rows}
            >
                {inputChildren}
            </TextField>
        </Grid>
    );
};

export default FormElement;