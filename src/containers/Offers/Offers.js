import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";
import InfoCard from "../../components/InfoCard";
import { NavLink, BrowserRouter } from "react-router-dom";
import ReactLoading from 'react-loading';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

const useStyles = makeStyles((theme) => ({
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
}));

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allOfferList: [
                // {
                //     offerID: "asdfsdihsogj515",
                //     offerName: "優惠 - 1",
                //     cardID: "xcihvbiuhb23123",
                //     cardName: "卡片名稱",
                //     expiration: {
                //         beginDate: "From now on",
                //         endDate: "End of the year",
                //     },
                //     offerAbstract: "優惠摘要",
                //     category: "國內一般消費",
                //     tags: "停車",
                //     numSearch: 10,
                //     reward: {
                //         contents: "詳細優惠內容",
                //         limits: "Unlimited",
                //         timingToOffer: "何時可以使用優惠",
                //         places: ["何地可以使用優惠"],
                //         notes: "其他備註"
                //     },
                //     constraint: {

                //         userIdentity: "持卡人身份",
                //         timingOfConsumption: "必須在何時有消費",
                //         channels: ["必須在何地有消費"],
                //         amounts: ["必須消費多少金額"],
                //         numberOfConsumption: 0,
                //         type: "必須以何種消費類型",
                //         others: ["其他限制條件"]

                //     }
                // },
                // {
                //     offerID: "mghgjedadihsogj515",
                //     offerName: "優惠 - 2",
                //     cardID: "tryurydhvbiuhb23123",
                //     cardName: "卡片名稱",
                //     expiration: {
                //         beginDate: "From now on",
                //         endDate: "End of the year",
                //     },
                //     offerAbstract: "優惠摘要",
                //     category: "國內一般消費",
                //     tags: "停車",
                //     numSearch: 10,
                //     reward: {
                //         contents: "詳細優惠內容",
                //         limits: "Unlimited",
                //         timingToOffer: "何時可以使用優惠",
                //         places: ["何地可以使用優惠"],
                //         notes: "其他備註"
                //     },
                //     constraint: {
                //         userIdentity: "持卡人身份",
                //         timingOfConsumption: "必須在何時有消費",
                //         channels: ["必須在何地有消費"],
                //         amounts: ["必須消費多少金額"],
                //         numberOfConsumption: 0,
                //         type: "必須以何種消費類型",
                //         others: ["其他限制條件"]
                //     }
                // }
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
        this.setState({
            loading: false
        });
    }
    onSavePassWord = () => {
    }
    onSave = (newData) => {
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
    render() {
        const { classes } = this.props;
        const dataList = this.state.allOfferList.map((i, index) => (
            <div className="offer-card-holder" key={`allOfferList-${index}`}>
                {/* <NavLink to={"/offers/edit/" + i.offerID} className="offer-card-link" style={{ textDecoration: 'none' }}> */}
                <InfoCard
                    key={`offer-card-key-${index}`}
                    id={`offer-card-id-${index}`}
                    offerID={i.offerID}
                    offerName={i.offerName}
                    cardID={i.cardID}
                    cardName={i.cardName}
                    expiration={i.expiration}
                    offerAbstract={i.offerAbstract}
                    category={i.category}
                    tags={i.tags}
                    numSearch={i.numSearch}
                    reward={i.reward}
                    constraint={i.constraint}
                    onSave={this.onSave}
                />
                {/* </NavLink> */}
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
                <div>
                    {dataList}
                </div>
            );
        }
    }
}

export default withStyles(useStyles)(Offers)
