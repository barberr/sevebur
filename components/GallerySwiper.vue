<template>
    <div class="container mx-auto">
        <div class="mt-[50px] lg:mt-[100px] w-[90%]">
            <h2
                class="text-2xl md:text-3xl lg:text-5xl/[1.2] font-semibold text-center"
            >
                <span class="text-blue"> Выполненные</span>
                <span class="text-black"> работы</span>
            </h2>
        </div>

        <div class="gallery-wrapper mt-[50px]">
            <!-- Карусель с миниатюрами -->
            <Swiper
                :slides-per-view="3"
                :space-between="10"
                class="thumbnail-swiper"
            >
                <SwiperSlide v-for="(image, index) in slides" :key="index">
                    <img
                        :src="image.thumbnail"
                        :alt="'Thumbnail ' + index"
                        @click="openPhotoSwipe(index)"
                        class="thumbnail-img"
                    />
                </SwiperSlide>
            </Swiper>

            <!-- Контейнер для PhotoSwipe -->
            <div
                id="pswp"
                class="pswp"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div class="pswp__bg"></div>
                <div class="pswp__scroll-wrap">
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>
                    <div class="pswp__ui pswp__ui--hidden">
                        <div class="pswp__top-bar">
                            <div class="pswp__counter"></div>
                            <button
                                class="pswp__button pswp__button--close"
                                title="Close (Esc)"
                            ></button>
                            <button
                                class="pswp__button pswp__button--zoom"
                                title="Zoom in/out"
                            ></button>
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                    <div class="pswp__preloader__cut">
                                        <div
                                            class="pswp__preloader__donut"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
                        >
                            <div class="pswp__share-tooltip"></div>
                        </div>
                        <button
                            class="pswp__button pswp__button--arrow--left"
                            title="Previous (Left arrow)"
                        ></button>
                        <button
                            class="pswp__button pswp__button--arrow--right"
                            title="Next (Right arrow)"
                        ></button>
                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { useMediaQuery } from '@vueuse/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Компонент пагинации нужно передать в массиве modules
const SwiperPagination = Pagination;

// Определяем медиа-запросы
const isDesktop = useMediaQuery('(min-width: 1024px)');
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
const isMobile = useMediaQuery('(max-width: 767px)');

// Вычисляем текущий тип устройства
const deviceType = computed(() => {
    if (isDesktop.value) return 'desktop';
    if (isTablet.value) return 'tablet';
    if (isMobile.value) return 'mobile';
    return 'unknown';
});

// Массив всех изображений
const slides = ref([
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
]);

let lightbox = null;

onMounted(() => {
    lightbox = new PhotoSwipeLightbox({
        gallery: '#pswp',
        children: 'a',
        pswpModule: PhotoSwipe,
    });
    lightbox.init();
});

function openPhotoSwipe(index) {
    const items = slides.value.map((slide) => ({
        src: slide.full,
        w: 1200, // ширина полноразмерного изображения (можно динамически подставить)
        h: 800, // высота
        msrc: slide.thumbnail, // превьюшка
    }));

    const pswp = new PhotoSwipe({
        dataSource: items,
        index: index,
        showHideAnimationType: 'zoom',
        closeOnVerticalDrag: true,
        pswpModule: PhotoSwipe,
    });

    pswp.init();
}
</script>

<style scoped>
.gallery-wrapper {
    max-width: 800px;
    /* margin: 0 auto; */
}

.thumbnail-swiper {
    margin-bottom: 20px;
}

.thumbnail-img {
    width: 100%;
    cursor: pointer;
    border-radius: 6px;
    transition: transform 0.2s ease;
}

.thumbnail-img:hover {
    transform: scale(1.05);
}
</style>

<!-- Стили для фона PhotoSwipe -->
<style>
.pswp__bg {
    background: rgba(0, 0, 0, 0.85);
}
</style>
