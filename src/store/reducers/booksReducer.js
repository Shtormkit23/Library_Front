import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_FAILURE,
    FETCH_MORE_BOOKS_SUCCESS,
    INCREASE_INDEX_SUCCESS,
    SAVE_SEARCH_OPTIONS,
} from "../actionTypes";

const initialState = {
    books: [],
    totalItems: null,
    book: null,
    error: null,
    loading: false,
    startIndex: 30,
    searchOptions: null
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {...state, loading: true};
        case FETCH_BOOKS_SUCCESS:
            return {...state, books: action.books.items, totalItems: action.books.totalItems, loading: false};
        case FETCH_MORE_BOOKS_SUCCESS:
            let books = [...state.books]
            action.books.map(book => {
                return books.push(book)
            })
            return {...state, books: books, loading: false};
        case SAVE_SEARCH_OPTIONS:
            return {...state, searchOptions: action.searchOptions};
        case INCREASE_INDEX_SUCCESS:
            return {...state, startIndex: state.startIndex += action.count, loading: false};
        case FETCH_BOOK_REQUEST:
            return {...state, loading: true};
        case FETCH_BOOK_SUCCESS:
            return {...state, book: action.book, loading: false};
        case FETCH_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default booksReducer;