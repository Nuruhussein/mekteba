// resources/js/Pages/Books/Index.tsx

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
}

interface BooksProps {
    books: Book[];
}

const BooksIndex: React.FC<BooksProps> = ({ books }) => {
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link href={`/books/${book.id}`}>
                            {book.title} by {book.author.name} -{" "}
                            {book.category.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/books/create">Create New Book</Link>
        </div>
    );
};

export default BooksIndex;
