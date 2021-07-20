import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import imageNotAvailable from "../../images/download.png";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        marginTop: '80px',
        position: "relative",
    },
    media: {
        height: "300px",
        width: "220px",
        margin: 20
    },
    info: {
        position: 'absolute',
        top: 5,
        left: 270
    },
    title: {
        flexGrow: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },
    category: {
        fontSize: 15,
        color: "grey",
        textDecoration: 'underline'
    },
    description: {
        fontSize: 15
    }
}));

const FullBookInformationCard = (props) => {
    const classes = useStyles();

    let bookImage;
    if (props.image.imageLinks) {
        bookImage = props.image.imageLinks.smallThumbnail;
    } else {
        bookImage = imageNotAvailable;
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={bookImage}
            />
            <CardContent className={classes.info}>
                {props.category && <Typography gutterBottom variant="h5" component="h5" className={classes.category}>
                    {props.category[0]}
                </Typography>}
                <Typography gutterBottom variant="h5" component="h5" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={classes.category}>
                    {props.authors}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5" className={classes.description}>
                    <p dangerouslySetInnerHTML={{__html: props.description}}/>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FullBookInformationCard;