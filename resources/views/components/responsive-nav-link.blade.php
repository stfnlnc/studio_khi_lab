@props(['active'])

@php
$classes = ($active ?? false)
            ? 'block w-full ps-3 pe-4 py-2 border-l-4 border-teal-400 dark:border-teal-600 text-start text-base font-medium text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/50 focus:outline-none focus:text-teal-800 dark:focus:text-teal-200 focus:bg-teal-100 dark:focus:bg-teal-900 focus:border-teal-700 dark:focus:border-teal-300 transition duration-150 ease-in-out'
            : 'block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 focus:outline-none focus:text-neutral-800 dark:focus:text-neutral-200 focus:bg-neutral-50 dark:focus:bg-neutral-700 focus:border-neutral-300 dark:focus:border-neutral-600 transition duration-150 ease-in-out';
@endphp

<a {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</a>
