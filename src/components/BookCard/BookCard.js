import React from 'react';
import './BookCard.css';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import imageNotAvailable from "../../images/download.png"
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 300,
        marginLeft: 12,
        marginBottom: 15,
        paddingTop: 25
    },
    title: {
        textDecoration: 'none',
        flexGrow: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: "black"
    },
    category: {
        fontSize: 15,
        color: "grey",
        textDecoration: 'underline'
    },
    img: {
        margin: '0 auto',
        width: 250
    },
    link: {
        textDecoration: 'none'
    },
    info: {
        display: 'flex',
        flexDirection: 'column'
    }
});

const BookCard = (props) => {
    const classes = useStyles();

    let bookImage;
    if (props.image.imageLinks) {
        bookImage = props.image.imageLinks.smallThumbnail;
    } else {
        bookImage = imageNotAvailable;
    }

    return (
        <Card className={classes.root}>
            <Link to={{pathname: `/book/${props.id}`}} className={classes.link} >
                <CardActionArea id={props.id}>
                    <CardMedia
                        className={classes.img}
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
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
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default BookCard;
