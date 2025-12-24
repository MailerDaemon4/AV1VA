<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $email = $request->input('email');
        $password = $request->input('password');

        $request->validate([
            'email' => 'required | email',
            'password' => 'required',
        ]);

        $user = User::where('eamil' , $email)->first();

        if (!user || !hash::check($password , $password? $user->password:'')) {
            return response()->json([
                'message' => "Invalid email or password"
            ], 401);
            # code...
        }

        $user-> tokens()->delete();
        $user-> token = $user->createToken('auth_token')->plainTextToken;

        return response()->json( [
            'user' => $user,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
