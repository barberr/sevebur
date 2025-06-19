<template>
    <ClientOnly>
        <div>
            <div class="mt-[50px] lg:mt-[100px] w-full md:w-[90%]">
                <h2
                    class="text-2xl md:text-3xl lg:text-5xl/[1] font-semibold text-center md:text-left"
                >
                    <span class="text-black"
                        >Использование НПВХ труб позволяет гарантировать
                        вам</span
                    >
                    <span class="text-blue"> 50-летний срок </span>
                    <span class="text-black">службы</span>
                </h2>
            </div>
            <div
                class="container mx-auto pt-14"
                v-if="deviceType === 'desktop'"
            >
                <!-- Основной контейнер с сеткой -->
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <!-- Блок 1 -->
                    <div
                        class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                        ></div>
                        <div class="p-8">
                            <span class="text-grey text-xl font-normal">
                                Продолжительность срок эксплуатации трубы НПВХ
                                гарантированно <br />
                            </span>
                            <span class="text-black text-xl font-semibold">
                                прослужит вам более 50 лет
                            </span>
                        </div>
                    </div>

                    <!-- Блок 2 -->
                    <div
                        class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                        ></div>
                        <div class="p-8">
                            <span class="text-black text-xl font-semibold">
                                Высокая прочность, устойчивость к деформации,
                            </span>
                            <span class="text-grey text-xl font-normal">
                                а также ударным и статическим нагрузкам: по
                                прочности трубы НПВХ можно сравнить с
                                металлическими
                            </span>
                        </div>
                    </div>

                    <!-- Блок 3 -->
                    <div
                        class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                        ></div>
                        <div class="p-8">
                            <span class="text-black text-xl font-semibold">
                                Материал не подвержен коррозии:<br />
                            </span>
                            <span class="text-grey text-xl font-normal">
                                не пропускает блуждающих токов, препятствует
                                образованию водного камня
                            </span>
                        </div>
                    </div>

                    <!-- Блок 4 -->
                    <div
                        class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                        ></div>
                        <div class="p-8">
                            <span class="text-grey text-xl font-normal">
                                Качество труб НПВХ проверяют в специальных
                                лабараториях,
                            </span>
                            <span class="text-black text-xl font-semibold">
                                материал соответствует всем санитарным
                                требованиям
                            </span>
                        </div>
                    </div>

                    <!-- Блок 5 -->
                    <div
                        class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                        ></div>
                        <div class="p-8">
                            <span class="text-black text-xl font-semibold">
                                Трубы НПВХ обладают высокой гигиеничностью,
                            </span>
                            <span class="text-grey text-xl font-normal">
                                не выделяют вредных вещетв, препятствуют
                                размножению бактерий, благодаря чему вода из
                                скважины всегда чистая
                            </span>
                        </div>
                    </div>

                    <!-- Блок 6 -->
                    <div
                        class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                        ></div>
                        <div class="p-8">
                            <span class="text-grey text-xl font-normal">
                                Резьба обеспечивает герметичность соединения,
                            </span>
                            <span class="text-black text-xl font-semibold">
                                а также исключает возможность попадания в
                                систему верхних грунтовых вод
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-4" v-if="deviceType === 'tablet'">
                <Swiper
                    :slides-per-view="'auto'"
                    :space-between="20"
                    :modules="[SwiperPagination]"
                    :pagination="{ clickable: true }"
                >
                    <SwiperSlide class="half-slide">
                        <!-- Блок 1 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-grey text-xl font-normal">
                                    Продолжительность срок эксплуатации трубы
                                    НПВХ гарантированно <br />
                                </span>
                                <span class="text-black text-xl font-semibold">
                                    прослужит вам более 50 лет
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="half-slide">
                        <!-- Блок 2 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-black text-xl font-semibold">
                                    Высокая прочность, устойчивость к
                                    деформации,
                                </span>
                                <span class="text-grey text-xl font-normal">
                                    а также ударным и статическим нагрузкам: по
                                    прочности трубы НПВХ можно сравнить с
                                    металлическими
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="half-slide">
                        <!-- Блок 3 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-black text-xl font-semibold">
                                    Материал не подвержен коррозии:<br />
                                </span>
                                <span class="text-grey text-xl font-normal">
                                    не пропускает блуждающих токов, препятствует
                                    образованию водного камня
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide class="half-slide"
                        ><!-- Блок 4 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-grey text-xl font-normal">
                                    Качество труб НПВХ проверяют в специальных
                                    лабараториях,
                                </span>
                                <span class="text-black text-xl font-semibold">
                                    материал соответствует всем санитарным
                                    требованиям
                                </span>
                            </div>
                        </div></SwiperSlide
                    >
                    <SwiperSlide class="half-slide"
                        ><!-- Блок 5 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-black text-xl font-semibold">
                                    Трубы НПВХ обладают высокой гигиеничностью,
                                </span>
                                <span class="text-grey text-xl font-normal">
                                    не выделяют вредных вещетв, препятствуют
                                    размножению бактерий, благодаря чему вода из
                                    скважины всегда чистая
                                </span>
                            </div>
                        </div></SwiperSlide
                    >
                    <SwiperSlide class="half-slide"
                        ><!-- Блок 6 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-grey text-xl font-normal">
                                    Резьба обеспечивает герметичность
                                    соединения,
                                </span>
                                <span class="text-black text-xl font-semibold">
                                    а также исключает возможность попадания в
                                    систему верхних грунтовых вод
                                </span>
                            </div>
                        </div></SwiperSlide
                    >

                    <!-- Пагинация отображается автоматически -->
                </Swiper>
            </div>

            <div class="pt-4" v-if="deviceType === 'mobile'">
                <Swiper
                    :slides-per-view="'auto'"
                    :space-between="20"
                    :modules="[SwiperPagination]"
                    :pagination="{ clickable: true }"
                    class="h-[450px]"
                >
                    <SwiperSlide>
                        <!-- Блок 1 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-grey text-xl font-normal">
                                    Продолжительность срок эксплуатации трубы
                                    НПВХ гарантированно <br />
                                </span>
                                <span class="text-black text-xl font-semibold">
                                    прослужит вам более 50 лет
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- Блок 2 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-black text-xl font-semibold">
                                    Высокая прочность, устойчивость к
                                    деформации,
                                </span>
                                <span class="text-grey text-xl font-normal">
                                    а также ударным и статическим нагрузкам: по
                                    прочности трубы НПВХ можно сравнить с
                                    металлическими
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- Блок 3 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-black text-xl font-semibold">
                                    Материал не подвержен коррозии:<br />
                                </span>
                                <span class="text-grey text-xl font-normal">
                                    не пропускает блуждающих токов, препятствует
                                    образованию водного камня
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        ><!-- Блок 4 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-grey text-xl font-normal">
                                    Качество труб НПВХ проверяют в специальных
                                    лабараториях,
                                </span>
                                <span class="text-black text-xl font-semibold">
                                    материал соответствует всем санитарным
                                    требованиям
                                </span>
                            </div>
                        </div></SwiperSlide
                    >
                    <SwiperSlide
                        ><!-- Блок 5 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-black text-xl font-semibold">
                                    Трубы НПВХ обладают высокой гигиеничностью,
                                </span>
                                <span class="text-grey text-xl font-normal">
                                    не выделяют вредных вещетв, препятствуют
                                    размножению бактерий, благодаря чему вода из
                                    скважины всегда чистая
                                </span>
                            </div>
                        </div></SwiperSlide
                    >
                    <SwiperSlide
                        ><!-- Блок 6 -->
                        <div
                            class="flex flex-col border-4 rounded-large border-grey overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div
                                class="h-14 bg-[url('/Group.png')] bg-no-repeat bg-left-top flex items-center justify-center ms-8 mt-8"
                            ></div>
                            <div class="p-8">
                                <span class="text-grey text-xl font-normal">
                                    Резьба обеспечивает герметичность
                                    соединения,
                                </span>
                                <span class="text-black text-xl font-semibold">
                                    а также исключает возможность попадания в
                                    систему верхних грунтовых вод
                                </span>
                            </div>
                        </div></SwiperSlide
                    >

                    <!-- Пагинация отображается автоматически -->
                </Swiper>
            </div>
        </div>
    </ClientOnly>
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
<style scoped>
.half-slide {
    width: calc(50% + 100px); /* Ширина одного слайда */
    transform: scale(
        0.9
    ); /* Опционально: визуальное уменьшение для эффекта "выходящего" слайда */
}
</style>
