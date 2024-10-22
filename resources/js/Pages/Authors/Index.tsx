// resources/js/Pages/Authors/Index.tsx

import React from "react";
import { Link } from "@inertiajs/react";

interface Author {
    id: number;
    name: string;
    bio?: string;
}

interface AuthorsProps {
    authors: Author[];
}

const AuthorsIndex: React.FC<AuthorsProps> = ({ authors }) => {
    return (
        <div>
            <h1>Authors</h1>
            <ul>
                {authors.map((author) => (
                    <li key={author.id}>
                        {author.name} - {author.bio}
                    </li>
                ))}
            </ul>
            <Link href="/authors/create">Create New Author</Link>
        </div>
    );
};

export default AuthorsIndex;
