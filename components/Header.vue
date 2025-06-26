<template>
    <header class="container mx-auto">
        <div class="bg-grey shadow-xl rounded-small">
            <div class="flex lg:items-center justify-between p-4">
                <!-- Левая часть с лого и текстом -->
                <div class="flex items-center ml-4 lg:ml-8 space-x-4">
                    <!-- Логотип -->
                    <div
                        class="flex items-stretch lg:flex-row md:flex-col md:items-start gap-y-4 lg:space-x-20"
                    >
                        <img
                            src="/severbur.svg"
                            alt="Logo"
                            class="md:h-8 h-6 w-auto"
                        />
                        <span
                            class="hidden md:block text-base lg:text-xl text-grey max-w-80 lg:max-w-lg"
                        >
                            Бурение и обустройство скважин на воду в
                            Санкт-Петербурге и ЛО
                        </span>
                    </div>
                </div>

                <!-- Правая часть с телефоном -->
                <div
                    class="hidden md:flex flex-col items-start lg:items-center w-76"
                >
                    <a href="tel:+1234567890" class="px-4 lg:py-2">
                        <span
                            class="text-2xl lg:text-3xl text-blue font-extrabold uppercase"
                            >8 (960) 27-27-884</span
                        >
                    </a>
                    <span
                        class="ml-10 text-base lg:text-xl font-normal text-grey"
                        >Без выходных с 9:00 до 21:00</span
                    >
                </div>
                <div class="relative">
                    <div
                        class="h-[20px] w-[40px] bg-[url('/Group54.png')] bg-contain bg-no-repeat md:hidden"
                        @click="toggleMenu"
                    ></div>
                    <!-- Мобильное меню -->
                    <transition name="slide">
                        <nav
                            v-show="isMenuOpen"
                            class="fixed top-0 left-0 w-[70%] h-[170px] bg-grey shadow-xl rounded-small z-50 p-4 flex flex-col space-y-4 md:hidden"
                            style="top: 58px; left: 88px"
                        >
                            <a
                                href="#section1"
                                @click="handleLinkClick('section1')"
                                class="block py-2"
                                >Виды обустройства скважин</a
                            >
                            <a
                                href="#section2"
                                @click="handleLinkClick('section2')"
                                class="block py-2"
                                >Услуги по водоснабжению</a
                            >
                            <a
                                href="#section3"
                                @click="handleLinkClick('section3')"
                                class="block py-2"
                                >Фотографии работ</a
                            >
                        </nav>
                    </transition>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo({
            top: el.offsetTop,
            behavior: 'smooth',
        });
        history.pushState(null, '', `#${id}`);
    }
    isMenuOpen.value = false;
};

// Для мобильного меню
const handleLinkClick = (id) => {
    scrollTo(id);
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
