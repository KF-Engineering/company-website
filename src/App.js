import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';


import './App.css';
import { ClassNames } from '@emotion/react';
import { Typography } from '@material-ui/core';


//Files
import Navbar from './components/NavBar';
import Grid from './components/Grid'
import Footer from './components/Footer'



import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import { width } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


const styles = makeStyles({

  navbarcontainter:{
    position: 'absolute',
    top: 0,
    lef: 0
  },
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },

  mediumSapce:{
    marginTop: "3.75rem",
  },

  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function App() {
  const classes = styles();


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <div><Navbar/></div>
      

      <div className={classes.wrapper}>
      <Typography variant='h3' className={classes.bigSpace} color="primary">
        get a bang for your bug.
      </Typography>

      <Typography variant='h4' className={classes.mediumSapce} color="primary">
        at bitbang we are passionate about software and integrated development
      </Typography>

      <Typography variant='h4' className={classes.littleSpace} color="primary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
      </div>

      
      
      

        <div className={classes.bigSpace}>
          <Footer/>
        </div>

      
      </ThemeProvider>
     
    </div>
  );
}

export default App;
