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

function SearchBox(props) {

    return(
        <div>
            <Grid container spacing={24} justify='center'>
                <Grid item xs='10'>
                    <Paper className='paper'>
                      <h3>search for books</h3>
                        <form onSubmit={props.handleClick(props.searchTerm)}>
                        <input name='searchTerm' type='text' onChange={props.handleChange}/>
                        <button onClick={props.handleClick(props.searchTerm)}>search</button>
                        </form>
                        {/* add margin */}
                        <br />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SearchBox);