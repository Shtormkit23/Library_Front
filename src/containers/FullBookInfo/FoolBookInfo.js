import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FullBookInformationCard from "../../components/FullBookInformationCard/FullBookInformationCard";
import {fetchBookById} from "../../store/actions/bookActions";
import Preloader from "../../components/UI/Preloader/Preloader";

const FullBookInfo = (props) => {
    const dispatch = useDispatch();
    const book = useSelector(state => state.books.book);
    const loading = useSelector(state => state.books.loading);
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(fetchBookById(id));
    }, [dispatch, id]);

    return (
        <>
            {
                loading &&
                <div className="preloader">
                    <Preloader/>
                </div>
            }
            <div>
                {book && !loading &&
                <FullBookInformationCard
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    image={book.volumeInfo}
                    category={book.volumeInfo.categories}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                />}
            </div>
        </>
    );
};

export default FullBookInfo;