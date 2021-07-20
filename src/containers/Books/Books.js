import React from "react";
import {Button, Grid, makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import BookCard from "../../components/BookCard/BookCard";
import {nanoid} from "nanoid";
import Preloader from "../../components/UI/Preloader/Preloader";
import {fetchMoreBooks} from "../../store/actions/bookActions";

const useStyles = makeStyles({
    totalItems: {
        fontSize: "20px",
    }
});

const Books = () => {
    const books = useSelector(state => state.books.books);
    const totalItems = useSelector(state => state.books.totalItems);
    const searchOptions = useSelector(state => state.books.searchOptions);
    const startIndex = useSelector(state => state.books.startIndex);
    const loading = useSelector(state => state.books.loading);
    const classes = useStyles();
    const dispatch = useDispatch();

    const searchMoreBooks = () => {
        dispatch(fetchMoreBooks(searchOptions.text, searchOptions.category, searchOptions.orderBy, startIndex));
    };

    return (
        <>
            {
                loading &&
                <div className="preloader">
                    <Preloader/>
                </div>
            }
            {!loading &&
            <Grid container direction="column" spacing={2}>
                <Grid item container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item className={classes.totalItems}>
                        {books.length !== 0 &&
                        <p>Found {totalItems} results:</p>}
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2}>
                    {books && books.length !== 0 && books !== 0 && books.map(book => {
                        return <BookCard
                            key={book.id + nanoid(9)}
                            id={book.id}
                            title={book.volumeInfo.title}
                            image={book.volumeInfo}
                            category={book.volumeInfo.categories}
                            authors={book.volumeInfo.authors}
                        />
                    })}
                </Grid>

                {books.length !== 0 && totalItems !== books.length &&
                <Button variant="contained" color="secondary" onClick={searchMoreBooks}>More</Button>
                }
            </Grid>
            }
        </>
    );
};

export default Books;