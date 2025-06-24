<template>
    <div>
        <div class="mt-[50px] lg:mt-[100px] w-full">
            <h2
                class="text-2xl md:text-3xl lg:text-5xl/[1] font-semibold text-center"
            >
                <span class="text-black">Предлагаем </span>
                <span class="text-blue"> 3 типа обустройства скважины</span>
            </h2>
        </div>

        <div
            class="container lg:2xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:h-[705px] mt-10 lg:space-x-4 gap-y-4"
        >
            <div
                class="lg:flex-1 flex flex-col md:w-[527px] bg-grey rounded-large"
            >
                <div
                    class="lg:h-[532px] flex flex-col bg-white items-center m-4 mb-0 rounded-large"
                >
                    <div
                        class="h-[168px] md:h-[273px] w-full bg-[url('/image358.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="text-black text-xl md:text-3xl font-semibold w-[88%] text-left pt-4"
                    >
                        С кессоном
                    </div>
                    <div
                        class="text-grey text-base md:text-xl w-[88%] text-left"
                    >
                        Пластиковый или стальной
                    </div>
                    <div
                        class="text-base md:text-xl/[1.2] font-normal text-black w-[88%] text-left mt-[28px]"
                    >
                        <div class="">
                            <ul class="flex flex-col space-y-3 list-none">
                                <li
                                    class="relative before:content-[''] before:absolute pl-7 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Круглогодичный вариант
                                </li>
                                <li
                                    class="relative before:content-[''] before:absolute pl-7 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Вода - и зимой и летом
                                </li>
                                <li
                                    class="w-full md:w-[65%] relative before:content-[''] before:absolute pl-7 pb-4 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Установка оборудования в кессоне на улице
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    @click="openModal"
                    class="h-[43px] md:h-[70px] bg-blue rounded-large text-white text-xl font-semibold m-4"
                >
                    Узнать стоимость
                </button>
            </div>
            <div
                class="lg:flex-1 flex flex-col md:w-[527px] bg-grey rounded-large"
            >
                <div
                    class="lg:h-[532px] flex flex-col bg-white items-center m-4 mb-0 rounded-large"
                >
                    <div
                        class="h-[168px] md:h-[273px] w-full bg-[url('/image356.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="text-black text-xl md:text-3xl font-semibold w-[88%] text-left pt-4"
                    >
                        Через адаптер
                    </div>
                    <!-- <div class="text-grey text-base w-[88%] text-left">
                    Пластиковый или стальной
                </div> -->
                    <div
                        class="text-base md:text-xl/[1.2] font-normal text-black w-[88%] text-left mt-[28px]"
                    >
                        <div class="">
                            <ul class="flex flex-col space-y-3 list-none">
                                <li
                                    class="relative before:content-[''] before:absolute pl-7 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Круглогодичный вариант
                                </li>
                                <li
                                    class="relative before:content-[''] before:absolute pl-7 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Вода - и зимой и летом
                                </li>
                                <li
                                    class="w-full md:w-[65%] relative before:content-[''] before:absolute pl-7 pb-4 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Установка оборудования в отапливаемом
                                    помещении
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    @click="openModal"
                    class="h-[43px] md:h-[70px] bg-blue rounded-large text-white text-xl font-semibold m-4"
                >
                    Узнать стоимость
                </button>
            </div>
            <div
                class="lg:flex-1 flex flex-col w-full md:w-[527px] bg-grey rounded-large"
            >
                <div
                    class="lg:h-[532px] flex flex-col bg-white items-center m-4 mb-0 rounded-large"
                >
                    <div
                        class="h-[168px] md:h-[273px] w-full bg-[url('/image355.png')] bg-cover rounded-large"
                    ></div>
                    <div
                        class="text-black text-xl md:text-3xl font-semibold w-[88%] text-left pt-4"
                    >
                        Монтаж на оголовок
                    </div>
                    <!-- <div class="text-grey text-base w-[88%] text-left">
                    Пластиковый или стальной
                </div> -->
                    <div
                        class="text-base md:text-xl/[1.2] font-normal text-black w-[88%] text-left mt-[28px]"
                    >
                        <div class="">
                            <ul class="flex flex-col space-y-3 list-none">
                                <li
                                    class="relative before:content-[''] before:absolute pl-7 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Летний и зимний вариант
                                </li>
                                <li
                                    class="relative before:content-[''] before:absolute pl-7 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Труба - по земле или в траншее
                                </li>
                                <li
                                    class="w-full md:w-[65%] relative before:content-[''] before:absolute pl-7 pb-4 before:left-0 before:top-1 before:h-3 before:w-3 before:bg-blue before:rounded-small"
                                >
                                    Кран на оголовке
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    @click="openModal"
                    class="h-[43px] md:h-[70px] bg-blue rounded-large text-white text-xl font-semibold m-4"
                >
                    Узнать стоимость
                </button>
            </div>
        </div>
        <!-- Модальное окно -->
        <div
            v-if="isModalOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div
                class="bg-white rounded-large shadow-lg p-6 w-full max-w-md mx-4 transform transition-all"
            >
                <!-- Форма или Сообщение -->
                <Transition name="fade" mode="out-in">
                    <div v-if="!submitted" :key="'form'">
                        <h2 class="text-xl font-bold mb-4 text-center">
                            Оставьте заявку
                        </h2>

                        <form @submit.prevent="submitForm">
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700 mb-1"
                                    >Имя</label
                                >
                                <input
                                    v-model="form.name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Ваше имя"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-large focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div class="mb-4">
                                <label
                                    for="phone"
                                    class="block text-sm font-medium text-gray-700 mb-1"
                                    >Телефон</label
                                >
                                <input
                                    v-maska
                                    data-maska="+7 (###) ###-##-##"
                                    v-model="form.phone"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-large focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <p class="text-xs text-gray-500 mb-6 text-center">
                                Нажимая на кнопку, вы даете согласие на
                                обработку персональных данных и соглашаетесь с
                                политикой конфиденциальности
                            </p>

                            <div class="flex justify-end gap-3">
                                <button
                                    @click="closeModal"
                                    type="button"
                                    class="px-4 py-2 text-sm bg-gray-200 rounded-large hover:bg-gray-300"
                                >
                                    Отмена
                                </button>
                                <button
                                    type="submit"
                                    class="px-4 py-2 text-sm bg-blue text-white rounded-large hover:bg-blue-600"
                                >
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Сообщение после отправки -->
                    <div v-else :key="'message'" class="text-center py-6">
                        <div class="text-green-600 text-xl font-semibold mb-4">
                            Спасибо! Мы вам перезвоним!
                        </div>
                        <button
                            @click="closeModal"
                            class="px-4 py-2 bg-blue text-white rounded-large hover:bg-blue-600"
                        >
                            Закрыть
                        </button>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// Состояние формы
const form = ref({
    name: '',
    phone: '',
});

// Состояние модального окна
const isModalOpen = ref(false);

// Статус отправки
const submitted = ref(false);

// Открытие попапа
const openModal = () => {
    isModalOpen.value = true;
};

// Закрытие попапа
const closeModal = () => {
    isModalOpen.value = false;
    submitted.value = false;
    form.value = {
        name: '',
        phone: '',
    };
};

// Логика отправки формы
const submitForm = async () => {
    try {
        const response = await $fetch('/api/callback', {
            method: 'POST',
            body: form.value,
        });
        console.log('Success:', response);
        submitted.value = true;
    } catch (error) {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке.');
    }

    submitted.value = true;

    // Автоматически закрываем через 5 секунд
    setTimeout(() => {
        closeModal();
    }, 5000);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
