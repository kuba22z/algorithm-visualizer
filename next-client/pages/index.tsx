import * as React from "react";
import {Book, useGetBooksQuery} from "../generated/graphql";

export default function Home() {
    const {loading, error, data} = useGetBooksQuery();
    const err = () => {
        if (error) return <p>Error : {error.message}</p>;
        else if (loading) return <p>Loading...</p>;
        else if (data) return data.books.map((book: Book) => {
            return <p key={book.title}>
                {"book Title " + book.title + " author " + book.author}
            </p>
        })
    }
    return (
        <div>
            {err()}
                21321332
        </div>
    )
}
