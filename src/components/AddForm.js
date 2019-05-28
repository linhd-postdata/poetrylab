import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Config from '../Config';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  fab: {
    margin: theme.spacing.unit,
    position: 'absolute',
    float: 'right',
    bottom: theme.spacing.unit,
    right: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  textarea: {
    width: "50em",
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddForm extends React.Component {
  state = {
    open: false,
    poemTitle: Config.POEM_TITLE,
    poemText: Config.POEM_TEXT,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.poemTitle, this.state.poemText);
    this.handleClose();
  };

  handleTextChange = (event, field) => {
    this.setState({
      [[field]]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab color="primary" variant="extended" aria-label="Add" className={classes.fab}  onClick={this.handleClickOpen}>
            <AddIcon />
            Add Poem
        </Fab>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Add Poem
              </Typography>
              <Button color="inherit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <TextField
                required
                label="Title"
                margin="normal"
                value={this.state.poemTitle}
                onChange={event => this.handleTextChange(event, "poemTitle")}
              />
            </ListItem>
            <ListItem button>
              <TextField
                required
                className={classes.textarea}
                label="Enter your poem text"
                multiline
                margin="normal"
                variant="filled"
                helperText="You can use multiline"
                value={this.state.poemText}
                onChange={event => this.handleTextChange(event, "poemText")}
              />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

AddForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddForm);