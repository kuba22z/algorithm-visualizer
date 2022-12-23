import Typography from "@mui/material/Typography";
import * as React from "react";
import {gql, useQuery} from '@apollo/client';

export default function Home() {
    const GET_LOCATIONS = gql`
        query GetBook{
            books {
                title,author
            }
        }
    `;
    const {loading, error, data} = useQuery(GET_LOCATIONS);

    const err = () => {
        if (error) return <p>Error : {error.message}</p>;
        else if (loading) return <p>Loading...</p>;
        else return data?.books.map((book: { title: string, author: string }) => {
                return <p key={book.title}>
                    {"book Title" + book.title + " author " + book.author}
                </p>
            })
    }
    return (
        <div>
            {err()}
            <Typography>
                21321332
            </Typography>
        </div>
    )
}
