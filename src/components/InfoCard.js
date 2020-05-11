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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ContentMarkdown from './ContentMarkdown';
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
        display: 'flex'
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
        width: '60%',
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
});

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            setExpanded: false,
            category: '其他',
        }
    }

    handleExpandClick = () => {
        this.setState((preState) => ({ expanded: !preState.expanded }));
        // setExpanded(!expanded);
    };

    handleChange = (event) => {
        this.setState({ category: event.target.value })
    };
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root} >
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            C
                            </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    titleTypographyProps={{ variant: 'h4' }}
                    title={this.props.offerName}
                    subheaderTypographyProps={{ variant: 'h6' }}
                    subheader={this.props.offerAbstract}
                />
                <CardContent className={classes.content}>
                    <div className={classes.mainInfo}>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {`ID: ${this.props.offerID}`}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {`優惠信用卡: ${this.props.cardName} ${this.props.cardID}`}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {`優惠期間: ${this.props.expiration.beginDate} - ${this.props.expiration.endDate}`}
                        </Typography>
                    </div>
                    <div className={classes.subInfo}>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {`被搜尋次數: ${this.props.numSearch}`}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {`類別: ${this.props.category}`}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {`標籤: `}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {/* <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button> */}
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
                            {/* // offerID = { i.offerID }
                            // offerName = { i.offerName }
                            // cardID = { i.cardID }
                            // cardName = { i.cardName }
                            // expiration = { i.expiration }

                            // offerAbstract = { i.offerAbstract }
                            // category = { i.category }
                            // tags = { i.tags }
                            // numSearch = { i.numSearch }
                            // reward = { i.reward }
                            // category = { i.category }
                            // constraint = { i.constraint }
                            // const[expanded, setExpanded] = React.useState(false); */}
                            <TextField
                                id="outlined-helperText"
                                label="優惠名稱 offerName"
                                defaultValue="Default Value"
                            />
                            {/* <TextField
                                id="outlined-helperText"
                                label="優惠ID offerID"
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue="Default Value"
                            /> */}
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                    {`優惠類別 category`}
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value={this.state.category}
                                    onChange={this.handleChange}
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
                                id="outlined-helperText"
                                label="摘要 offerAbstract"
                                defaultValue="Default Value"
                            />

                            <TextField
                                id="outlined-helperText"
                                label="信用卡ID cardID"
                                defaultValue="Default Value"
                            />
                            <TextField
                                id="outlined-helperText"
                                label="信用卡名稱 cardName"
                                defaultValue="Default Value"
                            />
                            <TextField
                                id="outlined-helperText"
                                label="開始時間 expiration.beginDate"
                                defaultValue="Default Value"
                            />
                            <TextField
                                id="outlined-helperText"
                                label="結束時間 expiration.endDate"
                                defaultValue="Default Value"
                            />
                            <TextField
                                id="outlined-helperText"
                                label="類別 category"
                                defaultValue="Default Value"
                            />
                            <TextField
                                id="outlined-helperText"
                                label="結束時間 expiration.endDate"
                                defaultValue="Default Value"
                            />
                        </div>
                        <div className={classes.previewArea}>
                            <ContentMarkdown
                                title={this.props.offerName}
                                subtitle={`優惠期間: ${this.props.expiration.beginDate} - ${this.props.expiration.endDate}`}
                                source="asdas  
                                asdasd  
                                asdads  
                                asd  "
                                skipHtml='skip'
                                escapeHtml='escape'
                            />
                        </div>
                    </div>
                    <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary">
                            Save
                        </Button>
                        <Button size="small" color="primary">
                            Learn more
                        </Button>
                        <Button size="small" color="primary">
                            Comments
                        </Button>
                    </CardActions>
                </Collapse>
            </Card>
        )
    }
}
export default withStyles(useStyles)(InfoCard)