@extends('base')

@section('vite')
    @vite(['resources/main/js/main.js'])
@endsection

@section('content')

    <section id="preloader" class="fixed top-0 left-0 w-screen h-screen bg-dark transition-all duration-[1800ms]">
        <div class="flex items-center justify-center h-full pb-12">
            <img class="logo xl:w-3/4 w-full" src="{{ asset('images/logo/22.svg') }}" alt="">
            @for($i = 1; $i < 21; $i++)
                <img class="hidden logo transition-all duration-1000 xl:w-3/4 w-full" id="{{ $i }}" src="{{ asset('images/logo/') . '/' . $i . '.svg' }}" alt="">
            @endfor
        </div>
    </section>
@endsection
