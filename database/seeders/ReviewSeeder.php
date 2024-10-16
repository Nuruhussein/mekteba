<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Review;
use App\Models\Book;
use App\Models\User;

class ReviewSeeder extends Seeder
{
    public function run()
    {
        $book1 = Book::first();
        $user1 = User::first();

        Review::create([
            'book_id' => $book1->id,
            // 'user_id' => $user1->id,
            'shaikh'=>'salih alfewzan',
            'comment' => 'This is a review for Sample Book 1.'
        ]);

        Review::create([
            'book_id' => $book1->id,
            // 'user_id' => $user1->id,
               'shaikh'=>'ust',
            'comment' => 'This is another review for Sample Book 1.'
        ]);
    }
}
