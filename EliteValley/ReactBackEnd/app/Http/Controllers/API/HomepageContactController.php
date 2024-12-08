<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\HomepageContact;
use Illuminate\Http\Request;

class HomepageContactController extends Controller
{
    public function store(Request $request){
        
         HomepageContact::create(['name'=>$request->name, 'phone'=>$request->phone,'email'=>$request->email,'idea'=>$request->idea]);


        return response()->json([
            'status' => 200,
            'message' =>"Form Submited Successfully",
            
        ]);
    }
}