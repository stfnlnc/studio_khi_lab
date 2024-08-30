@extends('base')

@section('vite')
    @vite(['resources/main/css/footer-lab.css', 'resources/main/js/footer-lab.js'])
@endsection

@section('title', 'Footer')

@section('content')
    <div class="nav-btn sm:block hidden"></div>
    <div class="nav flex sm:flex-row flex-col gap-2.5 relative overflow-hidden">
        <div class="nav-menu sm:hidden open">
            Menu
        </div>
        <a href="#" class="nav-item nav-item-active">
            Home
        </a>
        <a href="#" class="nav-item">
            Services
        </a>
        <a href="#" class="nav-item">
            Pricing
        </a>
        <a href="#" class="nav-item">
            About
        </a>
        <a href="#" class="nav-item">
            Contact
        </a>
    </div>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <section class="flex flex-col items-center justify-center relative">
                <div class="relative container flex flex-row items-center justify-center">
                    <h1 class="title absolute w-full">You like <br> our work ?</h1>
                    <div class="flex sm:flex-row flex-col sm:gap-6 gap-2 btn-container absolute">
                        <div class="btn btn-top">Our services</div>
                        <div class="btn btn-light btn-top">Our projects</div>
                    </div>
                </div>
                <div class="footer relative">
                    <img class="absolute cloud-1" src="{{ asset('/images/templates/footer/cloud-1.png') }}" alt="">
                    <img class="absolute cloud-2" src="{{ asset('/images/templates/footer/cloud-2.png') }}" alt="">
                    <img class="absolute cloud-3" src="{{ asset('/images/templates/footer/cloud-3.png') }}" alt="">
                    <div class="p-5 footer-container absolute w-full flex flex-row items-start justify-between">
                        <h1 class="h1-light text-left">Say <br> hello.</h1>
                        <div class="flex flex-row sm:gap-6 gap-2 footer-btn-container absolute">
                            <div class="btn">Book your call</div>
                            <div class="btn btn-light">Email us</div>
                        </div>
                        <div class="footer-item flex flex-row lg:gap-24 sm:gap-12 gap-8 sm:pl-20 pl-5 mr-20">
                            <div class="flex flex-col lg:gap-6 sm:gap-4 gap-2 hidden-mobile">
                                <a href="#">Home</a>
                                <a href="#">Services</a>
                                <a href="#">Pricing</a>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                            </div>
                            <div class="flex flex-col lg:gap-6 sm:gap-4 gap-2">
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                                <a href="#">Linkedin</a>
                                <a href="#">Behance</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

@endsection
