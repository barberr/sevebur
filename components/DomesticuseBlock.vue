<template>
    <div>
        <div class="mt-[50px] lg:mt-[100px] w-[90%]">
            <h2 class="text-2xl md:text-3xl lg:text-5xl/[1] font-semibold">
                <span class="text-black">Как итог, вы получаете </span>
                <span class="text-blue">
                    постоянный и неограниченный доступ</span
                >
                <span class="text-black">
                    к воде для бытового использования</span
                >
            </h2>
        </div>

        <!-- <div
            class="container mx-auto flex justify-center h-[705px] mt-10 space-x-4"
        >
            <div class="flex-1 flex flex-col relative">
                <div
                    class="h-[561px] w-full bg-[url('/image363.png')] bg-cover rounded-large"
                ></div>
                <div
                    class="absolute bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center-top"
                ></div>
                <div class="text-black text-3xl font-semibold text-center pt-4">
                    Душ и ванна
                </div>
            </div>

            <div class="flex-1 flex flex-col relative">
                <div
                    class="h-[561px] w-full bg-[url('/image367.png')] bg-cover rounded-large"
                ></div>
                <div
                    class="absolute bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center-top"
                ></div>
                <div class="text-black text-3xl font-semibold text-center pt-4">
                    Вода для полива и огорода
                </div>
            </div>

            <div class="flex-1 flex flex-col relative">
                <div
                    class="h-[561px] w-full bg-[url('/image368.png')] bg-cover rounded-large"
                ></div>
                <div
                    class="absolute bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center-top"
                ></div>
                <div class="text-black text-3xl font-semibold text-center pt-4">
                    Вода на кухне
                </div>
            </div>

            <div class="flex-1 flex flex-col relative">
                <div
                    class="h-[561px] w-full bg-[url('/image369.png')] bg-cover rounded-large"
                ></div>
                <div
                    class="absolute bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center-top"
                ></div>
                <div class="text-black text-3xl font-semibold text-center pt-4">
                    Стиральная машина и посудомойка
                </div>
            </div>
        </div> -->
        <div
            class="container mx-auto space-x-4 lg:h-[705px] mt-10"
            v-if="deviceType !== 'mobile'"
        >
            <!-- Используем grid с разным количеством столбцов -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full"
            >
                <!-- Карточка 1 -->
                <div class="flex flex-col relative md:h-[625px] lg:h-[720px]">
                    <div
                        class="md:h-[534px] lg:h-[561px] w-full bg-[url('/image363.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="absolute md:bottom-[60px] lg:bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center"
                    ></div>
                    <div
                        class="text-black md:text-2xl lg:text-3xl font-semibold text-center pt-4"
                    >
                        Душ и ванна
                    </div>
                </div>

                <!-- Карточка 2 -->
                <div class="flex flex-col relative md:h-[625px] lg:h-[720px]">
                    <div
                        class="md:h-[534px] lg:h-[561px] w-full bg-[url('/image367.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="absolute md:bottom-[60px] lg:bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center"
                    ></div>
                    <div
                        class="text-black md:text-2xl lg:text-3xl font-semibold text-center pt-4"
                    >
                        Вода для полива и огорода
                    </div>
                </div>

                <!-- Карточка 3 -->
                <div class="flex flex-col relative md:h-[625px] lg:h-[720px]">
                    <div
                        class="md:h-[534px] lg:h-[561px] w-full bg-[url('/image368.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="absolute md:bottom-[60px] lg:bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center"
                    ></div>
                    <div
                        class="text-black md:text-2xl lg:text-3xl font-semibold text-center pt-4"
                    >
                        Вода на кухне
                    </div>
                </div>

                <!-- Карточка 4 -->
                <div class="flex flex-col relative md:h-[625px] lg:h-[720px]">
                    <div
                        class="md:h-[534px] lg:h-[561px] w-full bg-[url('/image369.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="absolute md:bottom-[60px] lg:bottom-[125px] left-[150px] bg-[url('/Group503.png')] w-[75px] h-[75px] bg-no-repeat bg-center"
                    ></div>
                    <div
                        class="text-black md:text-2xl lg:text-3xl font-semibold text-center pt-4"
                    >
                        Стиральная машина и посудомойка
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-10" v-else>
            <Swiper
                :slides-per-view="'auto'"
                :space-between="20"
                :modules="[SwiperPagination]"
                :pagination="{ clickable: true }"
                class="h-[570px]"
            >
                <SwiperSlide>
                    <!-- Карточка 1 -->
                    <div class="flex flex-col relative h-[501px]">
                        <div
                            class="h-[448px] w-full bg-[url('/image363.png')] bg-cover rounded-large"
                        ></div>
                        <div
                            class="absolute bottom-[27px] left-[128px] bg-[url('/Group503.png')] w-[70px] h-[70px] bg-no-repeat bg-center"
                        ></div>
                        <div
                            class="text-black text-xl font-semibold text-center pt-4"
                        >
                            Душ и ванна
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- Карточка 2 -->
                    <div class="flex flex-col relative h-[501px]">
                        <div
                            class="h-[448px] w-full bg-[url('/image367.png')] bg-cover rounded-large"
                        ></div>
                        <div
                            class="absolute bottom-[27px] left-[128px] bg-[url('/Group503.png')] w-[70px] h-[70px] bg-no-repeat bg-center"
                        ></div>
                        <div
                            class="text-black text-xl font-semibold text-center pt-4"
                        >
                            Вода для полива и огорода
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- Карточка 3 -->
                    <div class="flex flex-col relative h-[501px]">
                        <div
                            class="h-[448px] w-full bg-[url('/image368.png')] bg-cover rounded-large"
                        ></div>
                        <div
                            class="absolute bottom-[27px] left-[128px] bg-[url('/Group503.png')] w-[70px] h-[70px] bg-no-repeat bg-center"
                        ></div>
                        <div
                            class="text-black text-xl font-semibold text-center pt-4"
                        >
                            Вода на кухне
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- Карточка 4 -->
                    <div class="flex flex-col relative h-[540px]">
                        <div
                            class="h-[448px] w-full bg-[url('/image369.png')] bg-cover rounded-large"
                        ></div>
                        <div
                            class="absolute bottom-[65px] left-[128px] bg-[url('/Group503.png')] w-[70px] h-[70px] bg-no-repeat bg-center"
                        ></div>
                        <div
                            class="text-black text-xl font-semibold text-center pt-4"
                        >
                            Стиральная машина и посудомойка
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { useMediaQuery } from '@vueuse/core';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Компонент пагинации нужно передать в массиве modules
const SwiperPagination = Pagination;
const modules = [Pagination];

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
</script>
