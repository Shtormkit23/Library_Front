import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import Routes from "./Routes";

const App = () => {
  return(
      <>
        <CssBaseline />
        <AppToolbar/>
        <main>
          <Container>
              <Routes/>
          </Container>
        </main>
      </>
  )};

export default App;
