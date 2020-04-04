import React from 'react'
import InputMask from 'react-input-mask'

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export default function IMask({...props}){
    return(
        <>
            <InputMask
                {...props}
            >
            {() => <TextField {...props}/>}
            </InputMask>
        </>
    )
}