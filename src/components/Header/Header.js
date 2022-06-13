import React, {useContext} from 'react'
import bg_video from '../../assets/video/bg_video.mp4'
import Content from './ContentHeader/ContentHeader'
import CloudImage from './CloudImage/CloudImage'
import './Header.css'
import '../Landing/Landing.css'
import {headerData} from "../../data/headerData";
import {Button} from "@material-ui/core";
import {NavHashLink as NavLink} from "react-router-hash-link";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeContext} from "../../contexts/ThemeContext";

const Header = () => {

    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
            margin: '4px'
        },
    }));

    const classes = useStyles();
    return (
        <div className='heroBGVideoWrapper'>
            <video autoPlay loop muted className='heroBGVideo' src={bg_video} />
            <CloudImage />
            <Content />
            <div className='button-content'>
                <div className='lcr-buttonContainer'>
                    <NavLink
                        to='/#about'
                        smooth={true}
                        spy='true'
                        duration={2000}
                    >
                        <Button className={classes.contactBtn}>
                            About
                        </Button>
                    </NavLink>
                    <NavLink
                        to='/#skills'
                        smooth={true}
                        spy='true'
                        duration={2000}
                    >
                        <Button className={classes.contactBtn}>
                            Skill
                        </Button>
                    </NavLink>
                    <NavLink
                        to='/#education'
                        smooth={true}
                        spy='true'
                        duration={2000}
                    >
                        <Button className={classes.contactBtn}>
                            Education
                        </Button>
                    </NavLink>
                    <NavLink
                        to='/#projects'
                        smooth={true}
                        spy='true'
                        duration={2000}
                    >
                        <Button className={classes.contactBtn}>
                            Project
                        </Button>
                    </NavLink>
                    <NavLink
                        to='/#contacts'
                        smooth={true}
                        spy='true'
                        duration={2000}
                    >
                        <Button className={classes.contactBtn}>
                            Contact
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Header