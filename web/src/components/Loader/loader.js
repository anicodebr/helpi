import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const HelpiLoader = withStyles({
    root: {
      color: '#449947',
    },
  })(CircularProgress);

export default function Loader({...props}) {
    return(
        <>
            <HelpiLoader size={props.size?props.size:50} />
        </>
    );
}