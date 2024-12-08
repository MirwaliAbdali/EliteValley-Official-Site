<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CodecampContact;
use Illuminate\Http\Request;

class CodecampContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'aboutself' => 'required|string',
            'cv' => 'required|mimes:pdf,pptx,docx,doc|max:4096',
        ]);

        if ($request->hasFile('cv')) {
            $file = $request->file('cv');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('cvs', $fileName, 'public'); 
        }

        $enroll = CodecampContact::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'aboutself' => $request->aboutself,
            'cv_path' => $filePath, 
        ]);

        // Mail::to('mirwaliabdali380@gmail.com')->send(new EnrollmentMailTwo($enroll,$filePath));

        return response()->json([
            'status' => 200,
            'message' => 'Enrollment submitted successfully!',
        ]);
    }
}