import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

// Define the types for form data and errors
interface FormData {
    title: string;
    author_id: number;
    category_id: number;
    description: string;
    publication_date: string;
    cover_image?: string;
}

interface FormErrors {
    title?: string;
    author_id?: string;
    category_id?: string;
    description?: string;
    publication_date?: string;
    cover_image?: string;
}

interface Author {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
}

interface BooksCreateProps extends PageProps {
    authors: Author[];
    categories: Category[];
}

const Create = ({ auth, authors, categories }: BooksCreateProps) => {
    const { data, setData, errors, post } = useForm<FormData>({
        title: "",
        author_id: authors[0]?.id || 0,
        category_id: categories[0]?.id || 0,
        description: "",
        publication_date: "",
        cover_image: "",
    });

    // Handle form submission
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("books.store"));
    }

    return (
        <AuthenticatedLayout
            // user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Book
                </h2>
            }
        >
            <div className="container mx-auto max-w-7xl">
                <div>
                    <h1 className="mb-8 text-3xl font-bold mt-8">
                        <Link
                            href="/books"
                            className="text-blue-600 font-bold hover:text-blue-700"
                        >
                            Books
                        </Link>
                        <span className="font-medium text-blue-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createBookForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            {/* Title Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-gray-700"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                {errors.title && (
                                    <span className="text-red-600 text-sm">
                                        {errors.title}
                                    </span>
                                )}
                            </div>

                            {/* Author Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="author_id"
                                    className="block text-gray-700"
                                >
                                    Author
                                </label>
                                <select
                                    id="author_id"
                                    name="author_id"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    value={data.author_id}
                                    onChange={(e) =>
                                        setData(
                                            "author_id",
                                            Number(e.target.value)
                                        )
                                    }
                                >
                                    {authors.map((author) => (
                                        <option
                                            key={author.id}
                                            value={author.id}
                                        >
                                            {author.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.author_id && (
                                    <span className="text-red-600 text-sm">
                                        {errors.author_id}
                                    </span>
                                )}
                            </div>

                            {/* Category Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="category_id"
                                    className="block text-gray-700"
                                >
                                    Category
                                </label>
                                <select
                                    id="category_id"
                                    name="category_id"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    value={data.category_id}
                                    onChange={(e) =>
                                        setData(
                                            "category_id",
                                            Number(e.target.value)
                                        )
                                    }
                                >
                                    {categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.category_id && (
                                    <span className="text-red-600 text-sm">
                                        {errors.category_id}
                                    </span>
                                )}
                            </div>

                            {/* Description Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <span className="text-red-600 text-sm">
                                        {errors.description}
                                    </span>
                                )}
                            </div>

                            {/* Publication Date */}
                            <div className="mb-4">
                                <label
                                    htmlFor="publication_date"
                                    className="block text-gray-700"
                                >
                                    Publication Date
                                </label>
                                <input
                                    type="date"
                                    id="publication_date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    name="publication_date"
                                    value={data.publication_date}
                                    onChange={(e) =>
                                        setData(
                                            "publication_date",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.publication_date && (
                                    <span className="text-red-600 text-sm">
                                        {errors.publication_date}
                                    </span>
                                )}
                            </div>

                            {/* Cover Image */}
                            <div className="mb-4">
                                <label
                                    htmlFor="cover_image"
                                    className="block text-gray-700"
                                >
                                    Cover Image (URL)
                                </label>
                                <input
                                    type="url"
                                    id="cover_image"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    name="cover_image"
                                    value={data.cover_image || ""}
                                    onChange={(e) =>
                                        setData("cover_image", e.target.value)
                                    }
                                />
                                {errors.cover_image && (
                                    <span className="text-red-600 text-sm">
                                        {errors.cover_image}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="px-3 py-1.5 text-white bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
