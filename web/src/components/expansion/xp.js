import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel({...props}) {
    const classes = useStyles();
    const [abre, setAbre] = useState(false);

    const handleOpen = () => {
        setAbre(!abre)
    }

  return (
    <div className={classes.root}>
      <ExpansionPanel elevation={0} expanded={abre} onClick={handleOpen}>
        <ExpansionPanelSummary
          style={{backgroundColor: "#66BB6A"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Identidade Verso</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{padding:0}}>
            <Box p={1.5} display='flex' justifyContent="center" alignItems="center">
                <img style={{width: 'auto', height: 260}} src={`data:image/jpeg;base64,${props.rg_tras}`} alt="foto do entregador" />
            </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel elevation={0} expanded={!abre} onClick={handleOpen}>
        <ExpansionPanelSummary
          style={{backgroundColor: "#66BB6A"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Identidade Frente</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{padding:0}}>
            <Box p={1.5} display='flex' justifyContent="center" alignItems="center">
                <img style={{width: 'auto', height: 260}} src={`data:image/jpeg;base64,${props.rg_frente}`} alt="foto do entregador" />
            </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}