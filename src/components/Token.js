import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import Entity from './Entity';

const styles = theme => ({
  token: {
    display: "inline-block",
  },
  stressed: {
      backgroundColor: "red",
  },
  synalepha: {
    padding: 0,
  }
});

class Token extends React.Component {

  render() {
    const { classes, symbol, syllables, entity } = this.props;
    const synalepha = (<IconButton
      color="inherit"
      aria-label="Synalepha"
      className={classes.synalepha}
    >
      <SpaceBarIcon />
    </IconButton>);
    let grid;
    if (syllables) {
      grid = syllables.map((syllable, index) => (
        [<Chip
          key={`$${syllable}${index}`}
          color={syllable.is_stressed ? "primary" : "default"}
          label={ syllable.syllable } />,
          syllable.has_synalepha ? synalepha : "",
        ]
      ))
    } else {
      grid = <Chip variant="outlined" label={ symbol } />
    }
    return (
      <div className={classes.token}>
        {[
          entity ? <Entity {...entity} children={grid.flat()} /> : grid,
          <span style={{ marginRight: "0.75em" }} />
        ]}
      </div>
    );
  }
}

Token.propTypes = {
  symbol: PropTypes.string,
  syllables: PropTypes.array,
  entity: PropTypes.object,
};

export default withStyles(styles)(Token);
