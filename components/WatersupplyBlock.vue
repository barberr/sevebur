<template>
    <div>
        <div class="mt-[50px] lg:mt-[100px] w-[90%]">
            <h2
                class="text-2xl md:text-3xl lg:text-5xl/[1.2] font-semibold text-center"
            >
                <span class="text-blue"> Комплексные услуги </span>
                <span class="text-black"> по водоснабжению</span>
            </h2>
        </div>
        <div
            class="container mx-auto flex flex-col lg:flex-row justify-center lg:h-[729px] mt-10 lg:space-x-4"
        >
            <div class="lg:w-1/3 bg-grey rounded-medium md:rounded-large">
                <div class="flex flex-col items-center mt-[40px]">
                    <div
                        class="text-black font-semibold text-xl md:text-3xl lg:text-4xl w-[88%] text-center"
                    >
                        Бурение
                    </div>
                    <div>
                        <ul
                            class="list-disc px-[50px] py-[30px] space-y-4 text-base md:text-xl font-medium"
                        >
                            <li>
                                Бурение скважин на известняк (артезианские) и на
                                песок;
                            </li>
                            <li>
                                Бурим скважины на воду малогабаритными
                                установками;
                            </li>
                            <li>
                                После подробной консультации с клиентом сразу
                                начинаем работы;
                            </li>
                            <li>
                                Компактная установка позволяет организовать весь
                                процесс в труднодоступных и узких местах;
                            </li>
                            <li>
                                Свой парк техники, перевозные кубы с водой,
                                компрессор;
                            </li>
                            <li>
                                Работаем аккуратно, чтобы не навредить
                                ландшафтному дизайну вашего участка.
                            </li>
                        </ul>
                        <button
                            @click="openModal"
                            class="w-[82%] md:w-[92%] lg:w-[90%] h-[50px] md:h-[70px] bg-blue rounded-large text-white text-base md:text-xl lg:text-3xl mb-4 font-semibold mx-[30px]"
                        >
                            Узнать цену
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="lg:w-2/3 h-[219px] md:h-[443px] lg:h-[729px] bg-[url('/image371.png')] mt-[10px] md:mt-[30px] lg:mt-0 bg-cover rounded-medium md:rounded-large"
            ></div>
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
