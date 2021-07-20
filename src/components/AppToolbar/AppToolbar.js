import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import background from '../../images/background.jpg';
import BookSearchForm from "../BookSearchForm/BookSearchForm";

const useStyles = makeStyles(theme => ({
  mainLink: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "inherit"
    },
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    fontSize: '30px'
  },
  staticToolbar: {
    marginBottom: 200
  },
  title: {
    flexGrow: 1
  },
  container: {
    display: "flex"
  },
  main: {
    backgroundImage: `url(${background})`,
    height: 200
  }
}));

const AppToolbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.main}>
        <Toolbar>
          <Container>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.mainLink}>Search For Books</Link>
            </Typography>
            <BookSearchForm/>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar}/>
    </>
  );
};

export default AppToolbar;