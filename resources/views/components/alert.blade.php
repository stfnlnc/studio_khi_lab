@php
    if(!isset($label)) {
        $label = null;
    }
    if($label === 'success') {
        $class = 'text-green-800 bg-green-100 border-green-500';
    } else if ($label === 'danger') {
        $class = 'text-red-800 bg-red-100 border-red-500';
    } else if ($label === 'warning') {
        $class = 'text-yellow-800 bg-yellow-100 border-yellow-500';
    } else if ($label === 'info') {
        $class = 'text-blue-800 bg-blue-100 border-blue-500';
    } else {
        $class = 'text-neutral-800 bg-neutral-100 border-neutral-500';
    }
@endphp

<p
    x-data="{ show: true }"
    x-show="show"
    x-transition
    x-init="setTimeout(() => show = false, 3000)"
    class="fixed top-5 left-5 text-xs font-semibold shadow-xl uppercase px-4 py-2 border rounded-md {{ $class }}"
>
    <i class="fa-solid fa-circle-info mr-2"></i>
    {{ $slot }}
</p>
