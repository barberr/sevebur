<template>
    <div>
        <NuxtPage />
    </div>
</template>
<script setup>
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://unpkg.com/photoswipe@5.4.0/dist/photoswipe.css',
        },
    ],
});
</script>
