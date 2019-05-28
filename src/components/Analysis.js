import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Line from './Line';
import { isEmpty } from '../Utils.js';

const styles = theme => ({
  textarea: {
    width: "50em",
  },
});

class Analysis extends React.Component {

  render() {
    const { poem } = this.props;
    let stanzas
    if (isEmpty(poem.analysis)) {
      stanzas = poem.text.split(/[\n]+/).map((stanza, index) => (
        <Typography key={index} paragraph>{stanza}</Typography>
      ))
    } else {
      stanzas = poem.analysis.scansion.map((line, index) => (
        <Line
          tokens={line.tokens}
          annotations={{enjambment: poem.analysis.enjambment[index]}}
        />
      ));
    }
    return (
      <div>
        {stanzas}
      </div>
    );
  }
}

Analysis.propTypes = {
  poem: PropTypes.object.isRequired,
};

export default withStyles(styles)(Analysis);