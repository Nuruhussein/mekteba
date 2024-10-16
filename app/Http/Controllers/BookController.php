<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Author;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with(['author', 'category'])->get();
        return Inertia::render('Books/Index', [
            'books' => $books,
        ]);
    }

    public function show($id)
    {
        $book = Book::with(['author', 'category'])->findOrFail($id);
        return Inertia::render('Books/Show', [
            'book' => $book,
        ]);
    }

    public function create()
    {
        $authors = Author::all();
        $categories = Category::all();
        return Inertia::render('Books/Create', [
            'authors' => $authors,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|exists:authors,id',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required',
            'publication_date' => 'required|date',
            'cover_image' => 'nullable|url',
        ]);

        Book::create($request->all());
        return redirect()->route('books.index');
    }
}
