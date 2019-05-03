import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

function Jumbotron(props) {
    const classes = { props }
    return(
        <div>
            <Grid container spacing={24} justify='center'>
                <Grid item xs='10'>
                    <Paper className='paper'>hello</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Jumbotron);