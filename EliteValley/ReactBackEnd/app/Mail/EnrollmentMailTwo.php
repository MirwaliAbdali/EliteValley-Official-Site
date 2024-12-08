<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EnrollmentMailTwo extends Mailable
{
    use Queueable, SerializesModels;

    public $enrollData;
    public $filePath;

    /**
     * Create a new message instance.
     *
     * @param array $enrollData
     * @param string $filePath
     */
    public function __construct($enrollData, $filePath)
    {
        $this->enrollData = $enrollData;
        $this->filePath = $filePath;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.enrollment')
                    ->subject('New Enrollment Submission')
                    ->attach(storage_path('app/public/' . $this->filePath)) // Attach the file
                    ->with([
                        'name' => $this->enrollData['name'],
                        'email' => $this->enrollData['email'],
                        'phone' => $this->enrollData['phone'],
                        'aboutSelf' => $this->enrollData['aboutSelf'],
                    ]);
    }
}