@extends('base')

@section('vite')
    @vite(['resources/main/js/main.js'])
@endsection

@section('content')
    <header
        class="fixed top-0 left-0 w-full flex flex-row justify-between text-base z-30 overused px-5 py-2.5 text-dark mix-blend-difference invert">
        <div class="overflow-hidden">
            <div class="reveal">
                <a target="_blank" class="" href="https://studiokhi.com">Digital Exploration by Studio Khi</a>
            </div>
        </div>
        <div class="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="reveal">
                <div class="flex flex-row gap-2">
                    <a href="" class=" hover:opacity-100 transition-all duration-300">Home,</a>
                    <a href="" class="opacity-50 hover:opacity-100 transition-all duration-300">Index,</a>
                    <a href="" class="opacity-50 hover:opacity-100 transition-all duration-300">About</a>
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div class="reveal">
                <div class="border-b border-dark">
                    <a class="reveal" href="">Send us a message</a>
                </div>
            </div>
        </div>
    </header>
    <section id="preloader" class="fixed top-0 left-0 w-screen h-screen bg-dark transition-colors duration-[1800ms] z-0">
        <div class="flex items-center justify-center h-full pb-12">
            <img class="logo w-full" src="{{ asset('images/logo/22.svg') }}" alt="">
            @for($i = 1; $i < 21; $i++)
                <img class="hidden logo transition-all duration-1000 w-full" id="{{ $i }}"
                     src="{{ asset('images/logo/') . '/' . $i . '.svg' }}" alt="">
            @endfor
        </div>
    </section>
    <div id="scroll-down" class="overflow-hidden fixed bottom-2.5 left-1/2 -translate-x-1/2 mix-blend-difference invert z-20">
        <div
            class="flex flex-col items-center justify-center gap-2 py-6 overused text-dark reveal-down">
            <div>Scroll Down</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M10 17.5L16.25 11.25L15.3688 10.3688L10.625 15.1063V2.5H9.375V15.1063L4.63125 10.3688L3.75 11.25L10 17.5Z"
                    fill="#191919"/>
            </svg>
        </div>
    </div>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <section class="w-full h-screen flex flex-col items-center justify-center">

            </section>
            <section class="relative template w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                <img class="bg-amber-100 translate-x-96"
                     src="https://studiokhi.com/uploads/projects/featured/full/moon-opticien-lunetier-ea5121c24ef0b62bbbcea9f764e7fda6.png"
                     alt=""/>
            </section>
            <section class="template w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
                <img class="bg-amber-100 -translate-x-96"
                     src="https://studiokhi.com/uploads/projects/featured/full/moon-opticien-lunetier-ea5121c24ef0b62bbbcea9f764e7fda6.png"
                     alt=""/>
            </section>
            <section id="last-section" class="w-full h-screen flex flex-col items-center justify-center">

            </section>
            <section class="relative w-full h-screen flex flex-col items-center justify-center bg-transparent">

            </section>
        </div>
    </div>
    <footer class="fixed top-0 left-0 bg-dark w-full h-screen pt-48 px-5 -z-10">
        <div class="w-full flex flex-row items-start justify-between text-base text-grey">
            <div><span class="opacity-50">Developed by</span> <span class="underline">Stefan Lancelot</span></div>
            <div class="text-center">
                Digital exploration by <a class="underline" href="https://studiokhi.com">Studio Khi</a>. <br>
                A French studio that creates websites and designs <br>
                for bold brands and entrepreneurs who want to stand out on the web.
            </div>
            <div><span class="opacity-50">Designed by</span> <span class="underline">Cynthia Jego</span></div>
        </div>
        <div class="absolute w-full bottom-0 left-0 flex flex-row items-end justify-center">
                <img class="w-full" src="{{ asset('images/logo/') . '/' . rand(1, 20) . '.svg' }}" alt="">
        </div>
    </footer>

@endsection
