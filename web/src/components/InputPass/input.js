import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';

const FiveTextField = withStyles(theme => ({
  root: {
    // '& label.Mui-focused': {
    //   color: theme.palette.primary.main,
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: theme.palette.primary.main,
    // },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: '#038148',
    },
    // '& .MuiOutlineInput-underline:after': {
    //   borderBottomColor: theme.palette.primary.main,
    // },
  },
}))(FormControl);

function InputPass({ ...props }) {

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <FiveTextField
        className={props.className}
        error={props.error ? props.error : false}
        fullWidth
        variant="filled">
        <InputLabel htmlFor="standard-adornment-password">{props.label ? props.label : 'Password'}</InputLabel>
        <FilledInput
          id="standard-adornment-password"
          name={props.name}
          type={values.showPassword ? 'text' : 'password'}
          onChange={props.onChange ? props.onChange : null}
          value={props.value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FiveTextField>
    </>
  )
}

InputPass.propTypes = {
  /**
   * Set Label inside input
   */
  label: PropTypes.string,
  /**
   * Set Name of the Input
   */
  name: PropTypes.string,
  /**
   * Send Function OnChange for the input
   */
  onChange: PropTypes.func,
}

InputPass.defaultProps = {
  label: 'Password',
}

export default InputPass