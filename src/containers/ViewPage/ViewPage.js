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
        width: "100vw",
        minHeight: "100vh",
        fontFamily: "cwTeXYen",
        margin: "0.5rem",
    },
});

class ViewPage extends Component {
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
        }
    }

    componentWillMount = () => {
        const id = this.props.match.params.id;
        fetch('/api/get-offer-id/' + id).catch(function (error) {
            window.alert("[Error] " + error);
        }).then(
            res => res.json()
        ).then((data) => {
            if (data) {
                this.setState({
                    OfferData: true,

                    cardID: data.cardID,
                    cardName: data.cardName,

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
                    notes: data.reward.notes,

                    // constraint: this.props.constraint,
                    userIdentity: data.constraint.userIdentity,
                    timingOfConsumption: data.constraint.timingOfConsumption,
                    numberOfConsumption: data.constraint.numberOfConsumption,
                    type: data.constraint.type,
                });
            } else {
                console.log("data not found!");
            }

        }).then(() => {
            this.setState({ loading: false });
        });
    }


    render() {
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
                <div className={classes.root}>Data Not Found!</div>
            );
        }
        else {
            return (
                <div className={classes.root}>
                    <ContentMarkdown
                        title={this.state.offerName}
                        subtitle={`優惠期間: ${this.state.beginDate} - ${this.state.endDate}`}
                        source={this.state.contents}
                        skipHtml='skip'
                        escapeHtml='escape'
                    />
                </div>
            )
        }
    }
}
export default withStyles(useStyles)(ViewPage)