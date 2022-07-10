import { TextField } from '@mui/material'
import React from 'react'

function RegularField({
    id,
    name,
    ref,
    label = 'Label',
    type = 'text',
    inputProps,
    inputSize,
    isRequired = false,
    multiline = false,
    shrink,
    rows,
    width = 'w-[100%]',
    customStyle = 'border-2 border-violet-500'
}) {

    return (
        <TextField
            id={id}
            label={label}
            name={name}
            type={type}
            inputProps={inputProps}
            ref={ref}
            variant="outlined"
            autoFocus={true}
            color='primary'
            InputLabelProps={{
                shrink: shrink,
            }}
            rows={rows}
            size={inputSize}
            multiline={multiline}
            required={isRequired}
            className={`${customStyle} ${width}`}
        />
    )
}

export default RegularField
