<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index($bookId)
    {
        $reviews = Review::where('book_id', $bookId)->get();
        $book = Book::findOrFail($bookId);
        
        return Inertia::render('Reviews/Index', [
            'reviews' => $reviews,
            'book' => $book,
        ]);
    }

    public function store(Request $request, $bookId)
    {
        $request->validate([
            'comment' => 'required|string',
        ]);

        Review::create([
            'book_id' => $bookId,
            // 'user_id' => auth()->id(),
            'comment' => $request->comment,
        ]);

        return redirect()->route('reviews.index', $bookId);
    }
}
