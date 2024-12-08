<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomepageContact extends Model
{
    use HasFactory;

    protected $table = 'submissions_one';
    protected $fillable = [
        'name',
        'phone',
        'email',
        'idea'
    ];
}