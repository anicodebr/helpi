import React from 'react'
import InputMask from 'react-input-mask'

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const IbmrTextField = withStyles(theme => ({
    root: {
        '& .MuiFilledInput-underline:before': {
            borderBottomColor: '#038148',
        },
    },
  }))(TextField);

export default function IMask({...props}){
    return(
        <>
            <InputMask
                {...props}
            >
            {() => <IbmrTextField {...props}/>}
            </InputMask>
        </>
    )
}