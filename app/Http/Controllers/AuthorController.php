<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();
        return Inertia::render('Authors/Index', [
            'authors' => $authors,
        ]);
    }

    public function create()
    {
        return Inertia::render('Authors/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'bio' => 'nullable|string',
        ]);

        Author::create($request->all());
        return redirect()->route('authors.index');
    }
}
