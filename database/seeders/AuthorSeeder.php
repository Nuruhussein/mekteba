<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    public function run()
    {
        Author::create([
            'name' => 'Author One',
            'bio' => 'This is a bio of Author One.'
        ]);

        Author::create([
            'name' => 'Author Two',
            'bio' => 'This is a bio of Author Two.'
        ]);
    }
}
