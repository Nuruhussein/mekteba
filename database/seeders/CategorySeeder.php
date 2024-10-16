<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::create([
            'name' => 'Fiction',
        ]);

        Category::create([
            'name' => 'Non-fiction',
        ]);

        Category::create([
            'name' => 'Science Fiction',
        ]);
    }
}
