<template>
    <div class="flex min-h-screen flex-col">
        <Header />
        <div class="container flex-1 flex flex-col pt-[100px]">
            <!-- Сетка миниатюр -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Первые 3 изображения -->
                <div
                    v-for="(image, index) in displayedImages"
                    :key="index"
                    class="relative overflow-hidden rounded-medium shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    @click="openLightbox(index)"
                >
                    <img
                        :src="image.thumbnail"
                        :alt="`Изображение ${index + 1}`"
                        class="w-full h-[390px] object-cover transform hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                    <div
                        class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                    ></div>
                </div>
            </div>

            <!-- Лайтбокс (модальное окно) -->
            <div
                v-if="lightboxVisible"
                class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                @click.self="closeLightbox"
            >
                <button
                    @click="closeLightbox"
                    class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
                >
                    &times;
                </button>

                <button
                    @click.stop="prevImage"
                    class="absolute left-4 text-white text-3xl hover:text-gray-300 md:left-10"
                >
                    &larr;
                </button>

                <div class="max-w-4xl w-full">
                    <img
                        :src="images[currentIndex].full"
                        :alt="`Изображение ${currentIndex + 1}`"
                        class="max-h-[80vh] w-full object-contain"
                    />
                    <p class="text-white text-center mt-4">
                        {{ currentIndex + 1 }} / {{ images.length }}
                    </p>
                </div>

                <button
                    @click.stop="nextImage"
                    class="absolute right-4 text-white text-3xl hover:text-gray-300 md:right-10"
                >
                    &rarr;
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
// Массив всех изображений
const images = ref([
    // ... (ваши изображения, как в предыдущем примере)
    // Добавьте больше изображений для демонстрации
    {
        thumbnail: '/image359.png',
        full: '/image359.png',
    },
    {
        thumbnail: '/image360.png',
        full: '/image360.png',
    },
    {
        thumbnail: '/image361.png',
        full: '/image361.png',
    },
    {
        thumbnail: '/image359.png',
        full: '/image359.png',
    },
    {
        thumbnail: '/image360.png',
        full: '/image360.png',
    },
    {
        thumbnail: '/image361.png',
        full: '/image361.png',
    },
]);

// Количество отображаемых изображений (3 для десктопа)
const displayedCount = 6;
// Вычисляемое свойство для отображаемых изображений
const displayedImages = computed(() => {
    return images.value.slice(0, displayedCount);
});
// Состояние лайтбокса
const lightboxVisible = ref(false);
const currentIndex = ref(0);

// Открыть лайтбокс
const openLightbox = (index) => {
    currentIndex.value = index;
    lightboxVisible.value = true;
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
};

// Закрыть лайтбокс
const closeLightbox = () => {
    lightboxVisible.value = false;
    document.body.style.overflow = '';
};

// Следующее изображение
const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Предыдущее изображение
const prevImage = () => {
    currentIndex.value =
        (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Навигация по клавиатуре
onMounted(() => {
    const handleKeyDown = (e) => {
        if (lightboxVisible.value) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));
});
</script>
