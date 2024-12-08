<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CodecampContact extends Model
{
    use HasFactory;
    protected $table = "submissions_two";

    protected $fillable = [
        'name',
        'email',
        'phone',
        'cv',
        'aboutself'
    ];
}