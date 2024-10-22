// resources/js/Pages/Books/Show.tsx

import React from "react";
import { Link } from "@inertiajs/react";
interface Book {
    id: number;
    title: string;
    author: {
        name: string;
    };
    category: {
        name: string;
    };
    description: string;
    publication_date: string;
}

interface BookShowProps {
    book: Book;
}

const BookShow: React.FC<BookShowProps> = ({ book }) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>Author: {book.author.name}</p>
            <p>Category: {book.category.name}</p>
            <p>
                Published on: {new Date(book.publication_date).toDateString()}
            </p>
            <Link href="/books">Back to Books</Link>
        </div>
    );
};

export default BookShow;
