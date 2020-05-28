import React, { Component } from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ContentMarkdown from './ContentMarkdown';
import { NavLink, BrowserRouter } from "react-router-dom";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import "./InfoCard.css"


const useStyles = (theme) => ({

    root: {
        maxWidth: "100vw",
        fontFamily: "cwTeXYen",
        margin: "0.5rem",
    },
    avatar: {
        backgroundColor: "#0058a3"
    },
    content: {
        paddingTop: 0,
        paddingBottom: 0,
        display: 'flex',
        fontFamily: "cwTeXYen",
    },
    mainInfo: {
        width: '50%',
    },
    subInfo: {
        width: '50%',
    },
    cardActions: {
        display: 'flex',
        alignItems: 'right',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    collapse: {
        display: 'flex',
        width: "100%"
    },
    modifyArea: {
        padding: '0 2.5%',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
    },
    subModifyArea: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    mainModifyArea: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    textArea: {
        width: '90%',
        fontSize: 15,
        backgroundColor: '#001b30',
        color: '#FFFFFF',
        padding: '0.5rem',
    },
    previewArea: {
        width: '40%',
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
    basicData: {
        margin: '0.5rem',
        width: '10rem',
    },
    cardButton: {
        color: '#0058a3'
    }
});

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            setExpanded: false,
            offerID: this.props.offerID,
            offerName: this.props.offerName,
            cardID: this.props.cardID,
            cardName: this.props.cardName,
            // expiration: this.props.expiration,
            beginDate: this.props.expiration.beginDate,
            endDate: this.props.expiration.endDate,

            offerAbstract: this.props.offerAbstract,
            category: this.props.category,
            tags: this.props.tags,
            numSearch: this.props.numSearch,
            // reward: this.props.reward,
            timingToOffer: this.props.reward.timingToOffer,
            limits: this.props.reward.limits,
            contents: this.props.reward.contents,
            notes: this.props.reward.notes,

            // constraint: this.props.constraint,
            userIdentity: this.props.constraint.userIdentity,
            timingOfConsumption: this.props.constraint.timingOfConsumption,
            numberOfConsumption: this.props.constraint.numberOfConsumption,
            type: this.props.constraint.type,
        }
    }

    handleExpandClick = () => {
        this.setState((preState) => ({ expanded: !preState.expanded }));
        // setExpanded(!expanded);
    };

    handleTextareaChange = (changedState) => {
        this.setState(changedState);
    }
    onSave = () => {
        this.props.onSave(
            {
                offerID: this.state.offerID,
                offerName: this.state.offerName,
                cardID: this.state.cardID,
                cardName: this.state.cardName,

                beginDate: this.state.beginDate,
                endDate: this.state.endDate,

                offerAbstract: this.state.offerAbstract,
                category: this.state.category,
                tags: this.state.tags,
                numSearch: this.state.numSearch,

                contents: this.state.contents,
                limits: this.state.limits,
                timingToOffer: this.state.timingToOffer,
                notes: this.state.notes,


                userIdentity: this.state.constraint,
                timingOfConsumption: this.state.timingOfConsumption,
                numberOfConsumption: this.state.numberOfConsumption,
                type: this.state.type,

            }
        );
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root} >
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar} src="./logo.png" />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: 'h5' }}
                    title={this.props.offerName}
                    subheaderTypographyProps={{ variant: 'h6' }}
                    subheader={this.props.offerAbstract}
                />
                <CardContent className={classes.content}>
                    <div className={classes.mainInfo}>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {`ID: ${this.props.offerID}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {`優惠信用卡: ${this.props.cardName} ${this.props.cardID}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {`優惠期間: ${this.props.expiration.beginDate} - ${this.props.expiration.endDate}`}
                        </Typography>
                    </div>
                    <div className={classes.subInfo}>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {`搜尋次數: ${this.props.numSearch}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {`類別: ${this.props.category}`}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <div className={classes.collapse} >
                        <div className={classes.modifyArea}>
                            <div className={classes.subModifyArea}>
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label="優惠ID offerID"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    defaultValue={this.state.offerID}
                                    onChange={(e) => this.handleTextareaChange({ offerID: e.target.value })}
                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label="搜尋次數 numSearch"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    defaultValue={this.state.numSearch}
                                    onChange={(e) => this.handleTextareaChange({ numSearch: e.target.value })}

                                />
                                <FormControl className={classes.basicData}>
                                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                        {`優惠類別 category`}
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-placeholder-label-label"
                                        id="demo-simple-select-placeholder-label"
                                        value={this.state.category}
                                        onChange={(e) => this.handleTextareaChange({ category: e.target.value })}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="其他">其他</MenuItem>
                                        <MenuItem value="國內一般消費">國內一般消費</MenuItem>
                                        <MenuItem value="國外一般消費">國外一般消費</MenuItem>
                                        <MenuItem value="交通">交通</MenuItem>
                                        <MenuItem value="食宿">食宿</MenuItem>
                                        <MenuItem value="娛樂">娛樂</MenuItem>
                                        <MenuItem value="保險">保險</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`信用卡 cardName`}
                                    defaultValue={this.state.cardName}
                                    onChange={(e) => this.handleTextareaChange({ cardName: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`信用卡ID cardID`}
                                    defaultValue={this.state.cardID}
                                    onChange={(e) => this.handleTextareaChange({ cardID: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`開始時間 beginDate`}
                                    defaultValue={this.state.beginDate}
                                    onChange={(e) => this.handleTextareaChange({ beginDate: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`結束時間 endDate`}
                                    defaultValue={this.state.endDate}
                                    onChange={(e) => this.handleTextareaChange({ endDate: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`時機 timingToOffer`}
                                    defaultValue={this.state.timingToOffer}
                                    onChange={(e) => this.handleTextareaChange({ timingToOffer: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`限制 limits`}
                                    defaultValue={this.state.limits}
                                    onChange={(e) => this.handleTextareaChange({ limits: e.target.value })}
                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`身份 userIdentity`}
                                    defaultValue={this.state.userIdentity}
                                    onChange={(e) => this.handleTextareaChange({ userIdentity: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`timingOfConsumption`}
                                    defaultValue={this.state.timingOfConsumption}
                                    onChange={(e) => this.handleTextareaChange({ timingOfConsumption: e.target.value })}

                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`numberOfConsumption`}
                                    defaultValue={this.state.numberOfConsumption}
                                    onChange={(e) => this.handleTextareaChange({ numberOfConsumption: e.target.value })}
                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`消費種類 type`}
                                    defaultValue={this.state.type}
                                    onChange={(e) => this.handleTextareaChange({ type: e.target.value })}
                                />
                            </div>
                            <div className={classes.mainModifyArea}>

                                {`優惠名稱 offerName`}
                                <TextareaAutosize
                                    className={classes.textArea}
                                    rowsMin={1}
                                    defaultValue={this.state.offerName}
                                    onChange={(e) => this.handleTextareaChange({ offerName: e.target.value })}
                                />
                                {`摘要 offerAbstract`}
                                <TextareaAutosize
                                    className={classes.textArea}
                                    rowsMin={2}
                                    defaultValue={this.state.offerAbstract}
                                    onChange={(e) => this.handleTextareaChange({ offerAbstract: e.target.value })}
                                />
                                {`詳細內容 contents`}
                                <TextareaAutosize
                                    className={classes.textArea}
                                    rowsMin={8}
                                    defaultValue={this.state.contents}
                                    onChange={(e) => this.handleTextareaChange({ contents: e.target.value })}
                                />
                                {`筆記 notes`}
                                <TextareaAutosize
                                    className={classes.textArea}
                                    rowsMin={1}
                                    defaultValue={this.state.notes}
                                    onChange={(e) => this.handleTextareaChange({ notes: e.target.value })}
                                />
                            </div>
                        </div>


                        <div className={classes.previewArea}>
                            <ContentMarkdown
                                title={this.state.offerName}
                                subtitle={`優惠期間: ${this.state.beginDate} - ${this.state.endDate}`}
                                source={this.state.contents}
                                skipHtml='skip'
                                escapeHtml='escape'
                            />
                        </div>
                    </div>
                    <CardActions className={classes.cardActions}>
                        <Button className={classes.cardButton} size="small" onClick={this.onSave}>
                            Save
                        </Button>
                        <Button className={classes.cardButton} size="small" >
                            <NavLink to={`/view/${this.props.offerID}`} className={classes.cardButton} target="_blank" style={{ textDecoration: 'none' }}>
                                View mode
                            </NavLink>
                        </Button>
                        <Button className={classes.cardButton} size="small" >
                            Comments
                        </Button>
                    </CardActions>
                </Collapse>
            </Card>
        )
    }
}
export default withStyles(useStyles)(InfoCard)