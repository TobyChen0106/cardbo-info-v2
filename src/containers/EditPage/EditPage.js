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
import { NavLink, BrowserRouter } from "react-router-dom";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import "./InfoCard.css"
import ReactLoading from 'react-loading';

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
    },
    saveButton: {
        '&:hover': {
            backgroundColor: "#0058a3",
            color: '#fff'
        },
        backgroundColor: '#C13828',
        color: '#fff',
        width: '30vw'
    },
    deleteButton: {
        '&:hover': {
            backgroundColor: "#0058a3",
            color: '#fff'
        },
        backgroundColor: '#C13828',
        color: '#fff'
    },
});

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            loading: false,
            OfferData: false,

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
            numSearch: undefined,
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
            channels: undefined,
            amounts: undefined,
            others: undefined,
        }
    }

    componentWillMount = () => {
        const id = this.props.match.params.id;
        console.log(id);
        // this.setState({
        //     offerID: "mghgjedadihsogj515",
        //     offerName: "優惠 - 2",
        //     cardID: "tryurydhvbiuhb23123",
        //     cardName: "卡片名稱",

        //     beginDate: "From now on",
        //     endDate: "End of the year",

        //     offerAbstract: "優惠摘要",
        //     category: "國內一般消費",
        //     tags: "停車",
        //     numSearch: 10,

        //     contents: "詳細優惠內容",
        //     limits: "Unlimited",
        //     timingToOffer: "何時可以使用優惠",
        //     places: ["何地可以使用優惠"],
        //     notes: "其他備註",


        //     userIdentity: "持卡人身份",
        //     timingOfConsumption: "必須在何時有消費",
        //     channels: ["必須在何地有消費"],
        //     amounts: ["必須消費多少金額"],
        //     numberOfConsumption: 0,
        //     type: "必須以何種消費類型",
        //     others: ["其他限制條件"],

        // })
        fetch('/api/get-offer-id/' + id).catch(function (error) {
            window.alert("[Error] " + error);
        }).then(
            res => res.json()
        ).then((data) => {
            if (data) {
                this.setState({
                    OfferData: true,

                    cardID: data.cardInfo[0].cardID,
                    cardName: data.cardInfo[0].cardName,

                    // expiration: this.props.expiration,
                    beginDate: data.expiration.beginDate,
                    endDate: data.expiration.endDate,

                    offerName: data.offerName,
                    offerID: data.offerID,
                    offerAbstract: data.offerAbstract,
                    category: data.category,
                    tags: data.tags,
                    numSearch: data.numSearch,

                    // reward: this.props.reward,
                    timingToOffer: data.reward.timingToOffer,
                    limits: data.reward.limits,
                    contents: data.reward.contents,
                    notes: data.reward.notes.sentences,

                    // constraint: this.props.constraint,
                    userIdentity: data.constraint.userIdentity,
                    timingOfConsumption: data.constraint.timingOfConsumption,
                    numberOfConsumption: data.constraint.numberOfConsumption,
                    type: data.constraint.type,
                    channels: data.constraint.channels,
                    amounts: data.constraint.amounts,
                    others: data.constraint.others,
                });
            } else {
                console.log("data not found!");
            }

        }).then(() => {
            this.setState({ loading: false });
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
        const newData = {
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
            channels: this.state.channels,
            amounts: this.state.amounts,
            others: this.state.others,
        };
        console.log(newData)
        fetch('/api/save-one-offer', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).catch(function (error) {
            window.alert("[Error] " + error);
        }).then(
            res => res.json()
        ).then(
            // this.setState({
            //     loading: true,
            // })
        )
        // .then(() => {
        //     // const getOfferId = { offerID: newData.offerID };
        //     fetch('/api/get-offer-id', {
        //         method: 'POST',
        //         body: JSON.stringify({ offerID: newData.offerID }),
        //         headers: new Headers({
        //             'Content-Type': 'application/json'
        //         })
        //     }).catch(function (error) {
        //         window.alert("[Error] " + error);
        //     }).then(
        //         res => res.json()
        //     ).then((data) => {
        //         console.log(data);
        //         var updateIndex = this.state.allOfferList.findIndex(element => element.offerID === data.offerID);

        //         this.setState(prevState => ({
        //             allOfferList: prevState.allOfferList.splice(updateIndex, 1, data)
        //         }));
        //         console.log(updateIndex);
        //     }).then(() => {
        //         this.setState({
        //             loading: false
        //         });
        //     });
        // });
        this.setState({
            loading: false
        });
    }
    onDelete = () => {
        fetch('/api/delete-offer-id/' + this.state.offerID).catch(function (error) {
            window.alert("[Error] " + error);
        }).then(
            res => res.json()
        ).then(
            setTimeout(() => {
                this.props.history.push('/offers')
            }, 500)
        )
    }
    render() {
        console.log(this.state.offerID);
        console.log(this.state.offerName);
        const { classes } = this.props;
        if (this.state.loading) {
            return (
                <div className="my-loading">
                    <ReactLoading type={'spinningBubbles'} color={'#0058a3'} height={'5rem'} width={'5rem'} />
                </div>
            );
        }
        else if (!this.state.OfferData) {
            return (
                <div>Data Not Found!</div>
            );
        }
        else {
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
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`channels`}
                                    defaultValue={this.state.channels}
                                    onChange={(e) => this.handleTextareaChange({ channels: e.target.value })}
                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`amounts`}
                                    defaultValue={this.state.amounts}
                                    onChange={(e) => this.handleTextareaChange({ amounts: e.target.value })}
                                />
                                <TextField
                                    className={classes.basicData}
                                    id="outlined-helperText"
                                    label={`others`}
                                    defaultValue={this.state.others}
                                    onChange={(e) => this.handleTextareaChange({ others: e.target.value })}
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
                            <Button className={clsx(classes.cardButton, classes.saveButton)} size="small" onClick={this.onSave}>
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
                            <Button className={classes.cardButton} size="small" onClick={() => { if (window.confirm('Are you sure you wish to delete this Offer?')) this.onDelete() }}>
                                Delete
                            </Button>
                        </ButtonGroup>

                    </div>
                </div >
            )
        }
    }
}
export default withStyles(useStyles)(EditPage)