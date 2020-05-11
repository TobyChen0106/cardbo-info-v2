import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';

import ReactMarkdown from 'react-markdown';
import "./InfoCard.css"


const useStyles = (theme) => ({
    previewHolder: {
        width: "90%",
        maxWidth: "100vw",
        margin: "5%",
        borderStyle: "solid",
        borderWidth: "0.1rem",
        borderRadius: "0.5rem",
        borderColor: "#58a8d7",
    },
    root: {
        width:"100%",
        height:"100%",
        maxWidth: "100vw",
        fontFamily: "cwTeXYen",
    },
    avatar: {
        backgroundColor: "#0058a3"
    },
    content: {
        wordWrap: "break-word",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    mainInfo: {
        width: '50%',
    },
    subInfo: {
        width: '50%',
    },
});

class ContentMarkdown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.previewHolder}>
                <div className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar} src="./logo.png" />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        titleTypographyProps={{ variant: 'h6' }}
                        title={this.props.title}
                        subheaderTypographyProps={{ variant: 'h8' }}
                        subheader={this.props.subtitle}
                    />
                    <ReactMarkdown
                        className={classes.content}
                        source={this.props.source}
                        skipHtml={this.props.htmlMode === 'skip'}
                        escapeHtml={this.props.htmlMode === 'escape'}
                        unwrapDisallowed={true}
                    />
                </div>
            </div>
        )
    }
}
export default withStyles(useStyles)(ContentMarkdown)