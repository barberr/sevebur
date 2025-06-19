<template>
    <div class="container mx-auto">
        <div class="mt-[100px] mb-[40px] w-[90%] text-center">
            <h2 class="text-5xl/[1.2] font-semibold">
                <span class="text-blue"> Выполненные</span>
                <span class="text-black"> работы</span>
            </h2>
        </div>

        <!-- Mobile & Tablet (горизонтальный скролл) -->
        <div class="lg:hidden">
            <div
                ref="scrollContainer"
                class="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="flex-shrink-0 w-64 mr-4"
                    @click="openLightbox(index)"
                >
                    <div
                        class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            :src="image.thumbnail"
                            :alt="`Изображение ${index + 1}`"
                            class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                        <div
                            class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                        ></div>
                    </div>
                </div>
            </div>
        </div>

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
                    class="w-full h-[690px] object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <div
                    class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                ></div>
            </div>

            <!-- Блок "Показать все" (виден только на десктопе) -->
            <NuxtLink
                to="/gallery"
                class="hidden lg:flex flex-col items-center justify-center bg-white rounded-medium border-4 border-blue shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
                <div class="flex flex-col items-center space-y-4">
                    <div
                        class="w-20 h-20 bg-[url('/GroupGallery1.png')] bg-contain bg-no-repeat bg-center"
                    ></div>
                    <button
                        class="w-[100%] h-[70px] bg-blue rounded-large text-white text-xl font-semibold mt-8 mx-[30px]"
                    >
                        Посмотреть все работы
                    </button>
                </div>
            </NuxtLink>
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
        thumbnail:
            'https://via.placeholder.com/300x200/e53e3e/ffffff?text=Image+4',
        full: 'https://via.placeholder.com/1200x800/e53e3e/ffffff?text=Image+4',
    },
    {
        thumbnail:
            'https://via.placeholder.com/300x200/d69e2e/ffffff?text=Image+5',
        full: 'https://via.placeholder.com/1200x800/d69e2e/ffffff?text=Image+5',
    },
    {
        thumbnail:
            'https://via.placeholder.com/300x200/3182ce/ffffff?text=Image+6',
        full: 'https://via.placeholder.com/1200x800/3182ce/ffffff?text=Image+6',
    },
]);

// Количество отображаемых изображений (3 для десктопа)
const displayedCount = 3;

// Touch-скролл логика
const scrollContainer = ref(null);
const touchStartX = ref(0);
const touchScrollStart = ref(0);
const isDragging = ref(false);

const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX;
    touchScrollStart.value = scrollContainer.value.scrollLeft;
    isDragging.value = true;
};

const handleTouchMove = (e) => {
    if (!isDragging.value) return;
    const x = e.touches[0].clientX;
    const walk = (x - touchStartX.value) * 1.5; // Умножаем для более быстрого скролла
    scrollContainer.value.scrollLeft = touchScrollStart.value - walk;
};

const handleTouchEnd = () => {
    isDragging.value = false;
};

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

<style scoped>
/* Плавные анимации */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Скрываем стандартный scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Опционально: добавляем индикатор скролла */
.scroll-container {
    scroll-snap-type: x mandatory;
}

.scroll-item {
    scroll-snap-align: start;
}
</style>
