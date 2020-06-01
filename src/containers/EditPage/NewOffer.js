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
import { emptyOffer, emptyOfferList, offerList2Offer, offer2OfferList } from '../../components/objects/emtyOffer';
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
            bankName: undefined,
            cardInfo_cardID: undefined,
            cardInfo_cardName: undefined,
            expiration_beginDate: undefined,
            expiration_endDate: undefined,
            offerAbstract: undefined,
            category: undefined,
            tags: [undefined],
            numSearch: undefined,
            reward_contents: undefined,
            reward_limits: undefined,
            reward_timingToOffer: undefined,
            reward_places: undefined,
            reward_notes_value: undefined,
            reward_notes_sentences: undefined,
            reward_notes_time: undefined,
            constraint_userIdentity: undefined,
            constraint_timingOfConsumption: undefined,
            constraint_channels: undefined,
            constraint_amounts: undefined,
            constraint_numberOfConsumption: undefined,
            constraint_type: undefined,
            constraint_others: undefined,
            link: undefined,
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
        var new_data = offerList2Offer(this.state);
        console.log(new_data)

        fetch('/api/save-new-offer', {
            method: 'POST',
            body: JSON.stringify(new_data),
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
                                defaultValue={this.state.cardInfo_cardName}
                                onChange={(e) => this.handleTextareaChange({ cardInfo_cardName: e.target.value })}

                            />
                            <TextField
                                className={classes.basicData}
                                id="outlined-helperText"
                                label={`信用卡ID cardID`}
                                defaultValue={this.state.cardInfo_cardID}
                                onChange={(e) => this.handleTextareaChange({ cardInfo_cardID: e.target.value })}

                            />
                            <TextField
                                className={classes.basicData}
                                id="outlined-helperText"
                                label={`開始時間 beginDate`}
                                defaultValue={this.state.expiration_beginDate}
                                onChange={(e) => this.handleTextareaChange({ expiration_beginDate: e.target.value })}

                            />
                            <TextField
                                className={classes.basicData}
                                id="outlined-helperText"
                                label={`結束時間 endDate`}
                                defaultValue={this.state.expiration_endDate}
                                onChange={(e) => this.handleTextareaChange({ expiration_endDate: e.target.value })}

                            />
                            <TextField
                                className={classes.basicData}
                                id="outlined-helperText"
                                label={`時機 timingToOffer`}
                                defaultValue={this.state.reward_timingToOffer}
                                onChange={(e) => this.handleTextareaChange({ reward_timingToOffer: e.target.value })}

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