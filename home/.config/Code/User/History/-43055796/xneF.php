<?php

namespace App\Http\Controllers;

use App\Models\Musician;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class MusicianController extends Controller
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

        try{
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'type' => 'required|string|max:255',
            ],[
                'name.required' => 'Musician name is required',
                'type.required' => 'Musician type is required',
            ],[
                'name' => 'Musician Name',
                'type' => 'Musician Type',
            ]);
            $musician = Musician::create($validated);
            return response()->json([
                'message' => 'Musician created successfully',
                'data' => $musician
            ],201);
        }
        catch(ValidationException $e){
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ],422);
        }
        catch(\Exception $e){
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Musician $musician)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Musician $musician)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Musician $musician)
    {
        //
    }
}
