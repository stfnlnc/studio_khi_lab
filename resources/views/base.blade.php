<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex">
    <title>
        @if(View::hasSection('title'))
            @yield('title') -
        @endif
        {{ config('app.name', 'Studio Khi') }}
    </title>
    @vite(['resources/main/css/app.css', 'resources/main/js/app.js'])
    @yield('vite')
</head>
<body>
        @yield('content')
</body>
</html>
