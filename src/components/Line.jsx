import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Token from './Token';
import { isEmpty, capitalize } from '../Utils.js';

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
      token.symbol ? <Token key={`$${token.symbol || token.word}${index}`} symbol={token.symbol} /> : <Token syllables={token.word} entity={annotations.entities[index]} />
    ))
    const hasEnjambment = !isEmpty(annotations.enjambment);
    const enjambment = hasEnjambment ? (<Tooltip title={capitalize(annotations.enjambment.type)} placement="top">
      <IconButton
        color="inherit"
        aria-label="Enjambment"
        className={classes.enjambment}
      >
        <KeyboardReturnIcon />
      </IconButton>
    </Tooltip>) : "";
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
