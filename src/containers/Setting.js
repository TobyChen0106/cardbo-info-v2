import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import React from 'react';
import ReactDOM from "react-dom";
const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}));

function Setting() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            Setting
        </Container>
    );
}

export default Setting;

