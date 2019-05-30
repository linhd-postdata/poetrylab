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
  enjambment: {
    padding: 0,
  }
});

class Line extends React.Component {

  render() {
    const { classes, tokens, annotations } = this.props;
    const line = tokens.map((token, index) => (
      token.symbol ? <Token key={`$${token.symbol || token.word}${index}`} symbol={token.symbol} /> : <Token syllables={token.word} />
    ))
    const hasEnjambment = (
      annotations.enjambment && annotations.enjambment.length !== 0
    );
    const enjambment = hasEnjambment ? (<IconButton
      color="inherit"
      aria-label="Enjambment"
      className={classes.enjambment}
    >
      <KeyboardReturnIcon />
    </IconButton>) : "";
    return (
      <div className={classes.line}>
        <span>{ line }</span><span>{ enjambment }</span>
      </div>
    );
  }
}

Line.propTypes = {
  tokens: PropTypes.array.isRequired,
  annotations: PropTypes.object
};

export default withStyles(styles)(Line);