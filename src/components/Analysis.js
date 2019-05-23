import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  textarea: {
    width: "50em",
  },
});

class Analysis extends React.Component {

  render() {
    const { poem } = this.props;
    const stanzas = poem.text.split("\n\n").map((stanza, index) => (
      <Typography key={index} paragraph>{stanza}</Typography>
    ))
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