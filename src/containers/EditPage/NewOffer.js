import React, { Component } from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ContentMarkdown from '../../components/ContentMarkdown';
import { NavLink, BrowserRouter, withRouter } from "react-router-dom";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import "./InfoCard.css"
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
var short = require('short-uuid');

const useStyles = (theme) => ({
    editorContainer: {

    },
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
        padding: '2.5% 2.5%',
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
        '&:hover': {
            backgroundColor: "#0058a3",
            color: '#fff'
        },
        backgroundColor: '#fff',
        color: '#000'
    }
});

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offerID: undefined,
            offerName: undefined,
            cardID: undefined,
            cardName: undefined,
            // expiration: this.props.expiration,
            beginDate: undefined,
            endDate: undefined,

            offerAbstract: undefined,
            category: undefined,
            tags: undefined,
            numSearch: 0,
            // reward: this.props.reward,
            timingToOffer: undefined,
            limits: undefined,
            contents: undefined,
            notes: undefined,

            // constraint: this.props.constraint,
            userIdentity: undefined,
            timingOfConsumption: undefined,
            numberOfConsumption: undefined,
            type: undefined,
        }
    }

    componentWillMount = () => {
        var translator = short();
        const id = translator.new();
        this.setState({
            offerID: id,
        });
    }

    handleExpandClick = () => {
        this.setState((preState) => ({ expanded: !preState.expanded }));
        // setExpanded(!expanded);
    };

    handleTextareaChange = (changedState) => {
        this.setState(changedState);
    }
    onSave = () => {
        var newData = { offerID: this.state.offerID };
        if (this.state.offerName) { newData.offerName = this.state.offerName; }
        if (this.state.cardID) { newData.cardID = this.state.cardID; }
        if (this.state.cardName) { newData.cardName = this.state.cardName; }
        if (this.state.beginDate) { newData.beginDate = this.state.beginDate; }
        if (this.state.endDate) { newData.endDate = this.state.endDate; }
        if (this.state.offerAbstract) { newData.offerAbstract = this.state.offerAbstract; }
        if (this.state.category) { newData.category = this.state.category; }
        if (this.state.tags) { newData.tags = this.state.tags; }
        // if(this.state.numSearch)newData.append({numSearch= this.state.numSearch;
        if (this.state.contents) { newData.contents = this.state.contents; }
        if (this.state.limits) { newData.limits = this.state.limits; }
        if (this.state.timingToOffer) { newData.timingToOffer = this.state.timingToOffer; }
        if (this.state.notes) { newData.notes = this.state.notes; }
        if (this.state.userIdentity) { newData.userIdentity = this.state.userIdentity; }
        if (this.state.timingOfConsumption) { newData.timingOfConsumption = this.state.timingOfConsumption; }
        if (this.state.numberOfConsumption) { newData.numberOfConsumption = this.state.numberOfConsumption; }
        if (this.state.type) { newData.type = this.state.type; }

        console.log(newData)
        fetch('/api/save-new-offer', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).catch(function (error) {
            window.alert("[Error] " + error);
        }).then(() => {
            // res => res.json()
            setTimeout(() => {
                this.props.history.push('/edit/' + this.state.offerID)
            }, 500);
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.editorContainer}>
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
                <div className={classes.cardActions} align="center">
                    <ButtonGroup size="large" variant="contained" color="primary">
                        <Button className={classes.cardButton} size="small" onClick={this.onSave}>
                            Save
                            </Button>
                        <Button className={classes.cardButton} size="small" >
                            <NavLink to={`/view/${this.props.offerID}`} target="_blank" style={{ textDecoration: 'none', color: '#000' }}>
                                View mode
                                </NavLink>
                        </Button>
                        <Button className={classes.cardButton} size="small" >
                            Comments
                            </Button>
                    </ButtonGroup>

                </div>
            </div >
        )
    }
}
export default withRouter(withStyles(useStyles)(EditPage))