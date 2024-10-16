<?php

// namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\Author;
use App\Models\Category;

class BookSeeder extends Seeder
{
    public function run()
    {
        $author1 = Author::first();
        $category1 = Category::first();

        Book::create([
            'title' => 'Sample Book 1',
            'author_id' => $author1->id,
            'category_id' => $category1->id,
            'description' => 'This is a description for Sample Book 1.',
            'link' => 'http://shamila.com/book1',
            'isbn' => '1234567890',
            'publication_date' => '2023-01-01',
            'cover_image' => 'http://example.com/cover1.jpg'
        ]);

        Book::create([
            'title' => 'Sample Book 2',
            'author_id' => $author1->id,
            'category_id' => $category1->id,
            'description' => 'This is a description for Sample Book 2.',
            'link' => 'http://shamila.com/book2',
            'isbn' => '0987654321',
            'publication_date' => '2023-02-01',
            'cover_image' => 'http://example.com/cover2.jpg'
        ]);
    }
}
