import React, {useState} from 'react';
import {Button, FormControl, makeStyles, MenuItem, Select} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux";
import {fetchBooks} from "../../store/actions/bookActions";

const useStyles = makeStyles({
    buttons: {
        padding: "15px 15px",
        position: "absolute",
        marginLeft: "15px",
        backgroundColor: 'white',
        "&:hover": {
            color: "white"
        }
    },
    search: {
        width: '80%',
        marginBottom: '25px',
        backgroundColor: 'white',
        borderRadius: 6
    },
    buttons2: {
        padding: "15px 15px",
        position: "absolute",
        marginLeft: "130px",
        backgroundColor: 'white',
        "&:hover": {
            color: "white"
        }
    },
    formControl: {
        marginRight: 50,
        width: 250,
        backgroundColor: '#fff',
        "&:focus": {
            borderColor: "black",
            color: 'secondary'
        },
        borderRadius: 5,
        borderColor: 'none'
    },
    label: {
        backgroundColor: 'white'
    }
});

const BookSearchForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const categories = [
        "all",
        "art",
        "biography",
        "computers",
        "history",
        "medical",
        "poetry"
    ];

    const sortingOptions = [
        "relevance",
        "newest"
    ];

    const [searchOptions, setSearchOptions] = useState({
        text: '',
        category: 'all',
        sorting: 'relevance'
    });

    const searchBooksForQuestionsInTheText = () => {
        dispatch(fetchBooks(searchOptions.text, searchOptions.category, searchOptions.sorting));
    };

    const handleKeypress = e => {
        if (e.charCode === 13) {
            dispatch(fetchBooks(searchOptions.text, searchOptions.category, searchOptions.sorting));
        }
    };

    const changeSearchOptions = event => {
    const name = event.target.name;
    const value = event.target.value;
        setSearchOptions({
            ...searchOptions,
            [name]: value
        });
    };

    const clearSearchText = () => {
        setSearchOptions({
            ...searchOptions,
            text: ""
        });
    };
    return (
        <Grid className={classes.root}>
            <Grid item xs={12} className={classes.search}>
                <TextField
                    variant="outlined"
                    required={true}
                    fullWidth
                    name="text"
                    onChange={changeSearchOptions}
                    value={searchOptions.text}
                    type="text"
                    id="text"
                    onKeyPress={handleKeypress}
                />
                <Button
                    variant="outlined"
                    onClick={searchBooksForQuestionsInTheText}
                    className={classes.buttons}
                        type="button">
                    <SearchIcon/>
                    Поиск
                </Button>
                <Button
                    variant="outlined"
                        onClick={clearSearchText}
                    className={classes.buttons2}
                        type="button">
                    Очистить
                </Button>
            </Grid>
            <FormControl className={classes.formControl} variant="outlined">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    required
                    fullWidth
                    name="category"
                    value={searchOptions.category}
                    onKeyPress={handleKeypress}
                    onChange={changeSearchOptions}
                >
                    {categories.map(category => {
                        return <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    required
                    fullWidth
                    name="sorting"
                    value={searchOptions.sorting}
                    onKeyPress={handleKeypress}
                    onChange={changeSearchOptions}
                >
                    {sortingOptions.map(sorting => {
                        return <MenuItem key={sorting} value={sorting}>
                            {sorting}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </Grid>
    );
};

export default BookSearchForm;