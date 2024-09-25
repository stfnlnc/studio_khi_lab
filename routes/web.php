<?php

use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'index'])->name('index');

Route::get('/dashboard', function () {
    return view('admin.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/index', function() {
    return view('main.templates.index.index');
})->name('index');
Route::get('/clouds', function() {
    return view('main.templates.clouds.index');
})->name('clouds');

require __DIR__.'/auth.php';
