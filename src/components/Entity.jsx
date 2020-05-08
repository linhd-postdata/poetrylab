import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from "../Utils";

const styles = theme => ({
  entity: {
    borderBottom: "1px dashed",
    display: "inline-block",
    padding: "0.25em",
  },
});

class Entity extends React.Component {

  render() {
    const { classes, uri, geo, type, mode, gazetteer, children } = this.props;
    const types = {
      CN: "common name",
      PN: "proper name",
      RNA: "royal name",
      PPN: "proposed proper name",
      STN: "saint name",
      PSTN: "proposed saint name",
      APN: "ambiguous proper name",
      ACN: "ambiguous common name",
      PLN: "place name",
      PPLN: "proposed place name",
      APLN: "ambiguous place name",
      UN: "unidentified",
    }
    const modes = {
      AT: "ambiguous",
      FT: "found",
      GENT: "generated",
      INI: "unidentified",
      PPT: "proposed",
    };
    const title = <React.Fragment>
      <div>{`${capitalize(types[type])} (${modes[mode]})`}</div>
      { gazetteer ? <em>{`${gazetteer} Gazetteer`}</em> : "" }
    </React.Fragment>
    return (
      <div className={classes.entity}>
        <Tooltip title={title} placement="top">
          <div>
          { uri ? <a href={uri} title={geo}>{children}</a> : children }
          </div>
        </Tooltip>
      </div>
    );
  }
}

Entity.propTypes = {
  children: PropTypes.any,
  term: PropTypes.string,
  type: PropTypes.string,
  mode: PropTypes.string,
  uri: PropTypes.string,
  gazetteer: PropTypes.string,
  geo: PropTypes.string,
};

export default withStyles(styles)(Entity);
