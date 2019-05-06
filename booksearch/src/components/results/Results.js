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
  let results = props.books.map( (x, i) => {
  return (<div key={i}>
    <h1>{x.volumeInfo.title}</h1>
    <p>{x.volumeInfo.authors === undefined ? 'author unknown' : 'by: ' + x.volumeInfo.authors}</p>
    {/* might be better to grab searchinfo if no description listed */}
    <p>{x.volumeInfo.description === undefined ? 'no description available' : x.volumeInfo.description}</p>
    <button id={i} onClick={props.Favorite}>favorite</button>
    </div>
  )
  })
    return(
        <div>
            <Grid container spacing={24} justify='center'>
                <Grid item xs='10'>
                    <Paper className='paper'>results:</Paper>
                    {results}
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Jumbotron);