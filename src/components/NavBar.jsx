import React from 'react'
import {makeStyles } from '@material-ui/core/styles'
import { Toolbar, Typography } from '@material-ui/core'
import CustomBtn from './CustomButton'


const styles = makeStyles({
    bar:{
        paddingTop: "1 rem",
        
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1.1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function Navbar() {
    const classes =styles()
    return (
        <Toolbar position='sticky' color="rgba(0,0,0,0.87)" className={classes.bar}>
            <h1 className={classes.logo}>Tinhat.tech</h1> 
            <Typography variant="h6" className={classes.menuItem}>About</Typography>
            <Typography variant="h6" className={classes.menuItem}>Engineers</Typography>
            <Typography variant="h6" className={classes.menuItem}>Projects</Typography>
            <CustomBtn  txt='Contact us' />
        </Toolbar>
    )
}

export default Navbar
