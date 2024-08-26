<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name', 'Studio Khi') }}</title>
    @vite(['resources/main/css/app.css', 'resources/main/js/app.js'])
</head>
<body>
    <main>
        @yield('content')
    </main>
</body>
</html>
