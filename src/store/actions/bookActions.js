import axios from "../../axiosApi";
import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_FAILURE, FETCH_MORE_BOOKS_SUCCESS, INCREASE_INDEX_SUCCESS, SAVE_SEARCH_OPTIONS,
} from "../actionTypes";
import {apiKey} from "../../constants";
import {push} from "connected-react-router";

const fetchBooksRequest = () => {
    return {type: FETCH_BOOKS_REQUEST};
};

const fetchBooksSuccess = (books) => {
    return {type: FETCH_BOOKS_SUCCESS, books};
};

export const increaseIndex = (count) => {
    return {type: INCREASE_INDEX_SUCCESS, count};
};

const fetchBookByIdRequest = () => {
    return {type: FETCH_BOOK_REQUEST};
};

const fetchBookSuccess = book => {
    return {type: FETCH_BOOK_SUCCESS, book};
};

const fetchMoreBookSuccess = books => {
    return {type: FETCH_MORE_BOOKS_SUCCESS, books};
};

const fetchFailure = error => {
    return {type: FETCH_FAILURE, error};
};

const saveSearchOptions = searchOptions => {
    return {type: SAVE_SEARCH_OPTIONS, searchOptions};
};

export const fetchBooks = (text, category, orderBy) => {
    return async dispatch => {
        dispatch(fetchBooksRequest());
        try {
            let query = 'q='

            if (text) {
                query += text
            }

            if (category !== 'all') {
                query += '+subject:' + category
            } else {
                query += '+subject:*'
            }

            await axios.get("volumes?" + query + "&maxResults=30&orderBy=" + orderBy + "&key=" + apiKey).then(response => {
                dispatch(fetchBooksSuccess(response.data));
                dispatch(saveSearchOptions({
                    text, category, orderBy
                }));
                dispatch(push(`/`));
            })

        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchMoreBooks = (text, category, orderBy, startIndex) => {
    return async dispatch => {
        try {
            let query = 'q='

            if (text) {
                query += text
            }

            if (category !== 'all') {
                query += '+subject:' + category
            } else {
                query += '+subject:*'
            }

            await axios.get("volumes?" + query + "&maxResults=30&startIndex="+startIndex+"&orderBy=" + orderBy + "&key=" + apiKey).then(response => {
                dispatch(fetchMoreBookSuccess(response.data.items));
                dispatch(increaseIndex(30));
                dispatch(push(`/`));
            })
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchBookById = (id) => {
    return async dispatch => {
        dispatch(fetchBookByIdRequest());
        try {
            await axios.get("volumes/" + id + "?key=" + apiKey).then(response => {
                dispatch(fetchBookSuccess(response.data));
            })
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
                console.log(e.response.data)
            } else {
                dispatch(fetchFailure({global: "No internet"}));
                console.log(e.response.data)
            }
        }
    };
};




