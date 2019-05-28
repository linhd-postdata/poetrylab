import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Token from './Token';

const styles = theme => ({
  line: {
    display: "inline-block",
    width: "100%",
    margin: "0.25em",
  },
  enjabment: {
    padding: 0,
  }
});

class Line extends React.Component {

  render() {
    const { classes, tokens, annotations } = this.props;
    const line = tokens.map(token => (
      token.symbol ? <Token symbol={token.symbol} /> : <Token syllables={token.word} />
    ))
    const enjambment = (<IconButton
      color="inherit"
      aria-label="Enjambment"
      className={classes.enjabment}
    >
      <KeyboardReturnIcon />
    </IconButton>);
    return (
      <div className={classes.line}>
        { [line, annotations.enjabment ? enjambment : ""] }
      </div>
    );
  }
}

Line.propTypes = {
  tokens: PropTypes.arrayOf.isRequired,
  annotations: PropTypes.object
};

export default withStyles(styles)(Line);