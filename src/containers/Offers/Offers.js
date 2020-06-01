import Container from '@material-ui/core/Container';

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";
import InfoCard from "../../components/InfoCard";
import { NavLink, BrowserRouter } from "react-router-dom";
import Link from '@material-ui/core/Link';
import ReactLoading from 'react-loading';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Offers.css'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Cardbo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = (theme) => ({
    root: {
        display: 'flex',

    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    dataListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    addButton: {
        width: '100px',
        height: '100px',
        position: 'absolute',
        right: "50px",
        bottom: "50px",
        border: "solid 10px #0058a3",
    },
    addButtonIcon: {

        width: '100px',
        height: '100px',
        fill: "#fff",
    },
});

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allOfferList: [
            //     {
            //         offerID: "asdfsdihsogj515",
            //         offerName: "優惠 - 1",
            //         cardID: "xcihvbiuhb23123",
            //         cardName: "卡片名稱",
            //         expiration: {
            //             beginDate: "From now on",
            //             endDate: "End of the year",
            //         },
            //         offerAbstract: "優惠摘要",
            //         category: "國內一般消費",
            //         tags: "停車",
            //         numSearch: 10,
            //         reward: {
            //             contents: "詳細優惠內容",
            //             limits: "Unlimited",
            //             timingToOffer: "何時可以使用優惠",
            //             places: ["何地可以使用優惠"],
            //             notes: "其他備註"
            //         },
            //         constraint: {

            //             userIdentity: "持卡人身份",
            //             timingOfConsumption: "必須在何時有消費",
            //             channels: ["必須在何地有消費"],
            //             amounts: ["必須消費多少金額"],
            //             numberOfConsumption: 0,
            //             type: "必須以何種消費類型",
            //             others: ["其他限制條件"]

            //         }
            //     },
            //     {
            //         offerID: "mghgjedadihsogj515",
            //         offerName: "優惠 - 2",
            //         cardID: "tryurydhvbiuhb23123",
            //         cardName: "卡片名稱",
            //         expiration: {
            //             beginDate: "From now on",
            //             endDate: "End of the year",
            //         },
            //         offerAbstract: "優惠摘要",
            //         category: "國內一般消費",
            //         tags: "停車",
            //         numSearch: 10,
            //         reward: {
            //             contents: "詳細優惠內容",
            //             limits: "Unlimited",
            //             timingToOffer: "何時可以使用優惠",
            //             places: ["何地可以使用優惠"],
            //             notes: "其他備註"
            //         },
            //         constraint: {
            //             userIdentity: "持卡人身份",
            //             timingOfConsumption: "必須在何時有消費",
            //             channels: ["必須在何地有消費"],
            //             amounts: ["必須消費多少金額"],
            //             numberOfConsumption: 0,
            //             type: "必須以何種消費類型",
            //             others: ["其他限制條件"]
            //         }
            //     },
            ],
            loading: true,
        }
    }
    componentDidMount() {
        fetch('/api/all-offer-list').catch(function (error) {
            window.alert("[Error] " + error);
        }).then(
            res => res.json()
        ).then((data) => {
            // console.log(data);
            this.setState({
                allOfferList: data
            });
        }).then(() => {
            this.setState({
                loading: false
            });
        });
        // this.setState({
        //     loading: false
        // });
    }
    onSavePassWord = () => {

    }
    handleNewOffer = () => {

    }
    render() {
        const { classes } = this.props;
        const dataList = this.state.allOfferList.map((i, index) => (
            <div className="offer-card-holder" key={`allOfferList-${index}`}>
                <NavLink to={"/edit/" + i.offerID} className="offer-card-link" style={{ textDecoration: 'none' }} target="_blank">
                    <InfoCard
                        key={`offer-card-key-${index}`}
                        id={`offer-card-id-${index}`}
                        offerID={i.offerID}
                        offerName={i.offerName}
                        cardID={i.cardInfo[0].cardID}
                        cardName={i.cardInfo[0].cardName}
                        expiration={i.expiration}
                        offerAbstract={i.offerAbstract}
                        category={i.category}
                        tags={i.tags}
                        numSearch={i.numSearch}
                        reward={i.reward}
                        constraint={i.constraint}
                    />
                </NavLink>
            </div>
        ));
        if (this.state.loading) {
            // if (true) {
            return (
                <div className="my-loading">
                    <ReactLoading type={'spinningBubbles'} color={'#0058a3'} height={'5rem'} width={'5rem'} />
                </div>);
        }
        else {
            return (
                <div className={classes.dataListContainer}>
                    {dataList}
                    <NavLink to={"/newoffer"} style={{ textDecoration: 'none' }} target="_blank">
                        <IconButton
                            onClick={this.handleNewOffer}
                            className={classes.addButton}
                        >
                            <AddCircleIcon className={classes.addButtonIcon} />
                        </IconButton>
                    </NavLink>
                </div >
            );
        }
    }
}

export default withStyles(useStyles)(Offers)
