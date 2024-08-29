@extends('base')

@section('vite')
    @vite(['resources/main/css/index-lab.css', 'resources/main/js/index-lab.js'])
@endsection

@section('title', 'Index')

@section('content')
    @php
        $titles = [
            1 => '(01) Underwear SS23',
            2 => '(02) Urban Exploration',
            3 => '(03) Faces SS24',
            4 => '(04) Nina\'s journal',
            5 => '(05) Ellie Advertising',
            6 => '(06) Tableware',
            7 => '(07) Self',
            8 => '(08) Rosies SS24',
            9 => '(09) Faces SS22',
            10 => '(10) Cakes Season 4',
            11 => '(11) Rosies 2018',
            12 => '(12) Faces SS23',
            13 => '(13) YSL Presentation',
            14 => '(14) Lifewear',
            15 => '(15) Ellie 15',
        ]
    @endphp
    <section class="w-full h-full">
        <div class="fixed px-5 py-3 z-10 w-full flex flex-row justify-between text-base">
            <div class="pointer">
                <a href="#">Art Direction</a>,
                <a href="#">Photography</a>
            </div>

            <div class="hidden-mobile">
                <a class="underline underline-offset-8 pointer" href="mailto:hello@studiokhi.com">Send me a message</a>
            </div>
        </div>
        <div class="fixed z-50 py-3 left-1/2 flex flex-row gap-2 nav pointer hidden-mobile">
            <a href="#">Index,</a>
            <a class="opacity-25 hover:opacity-100" href="#">Services,</a>
            <a class="opacity-25 hover:opacity-100" href="#">Store,</a>
            <a class="opacity-25 hover:opacity-100" href="#">About</a>
        </div>
        <div class="gallery">
            <ul class="cards">
                <div class="mask-left"></div>
                <div class="mask-right"></div>
                @for($i = 1; $i <= 15; $i++)
                <li class="card card-{{ $i }}">
                    <div style="background-image: url({{ asset('/images/templates/index/') . '/image' . $i . '.png'}}); background-position: center; background-size: cover"></div>
                    <p class="mt-3 subtitle">{{ $titles[$i] }}</p>
                </li>
                @endfor
            </ul>
        </div>
        <div class="fixed bottom-0 left-0 w-full px-5 py-4 flex flex-row justify-between items-end">
            <h1 class="title">Index</h1>
            <div class="index">
                /15
            </div>
        </div>
    </section>
    <div class="cursor">
        scroll
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
            <path d="M2.83335 8.5H14.1667M14.1667 8.5L9.91669 4.25M14.1667 8.5L9.91669 12.75" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
@endsection
