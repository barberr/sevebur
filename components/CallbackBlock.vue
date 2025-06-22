<template>
    <div class="container">
        <div class="mt-8 xl:w-[1288px]">
            <h1
                class="text-2xl md:text-4xl lg:text-6xl/[1.2] font-medium md:font-semibold"
            >
                <span class="text-black"
                    >Бурение и обустройство скважин для воды</span
                >
                <span class="text-blue">
                    от 3 500 руб. за метр с гарантией</span
                >
            </h1>
        </div>

        <div
            class="2xl mx-auto flex flex-col lg:flex-row justify-center lg:h-[515px] mt-6 lg:space-x-4"
        >
            <div class="flex-1 bg-blue rounded-large">
                <div class="flex flex-col items-center mt-[40px]">
                    <div
                        class="text-white text-xl md:text-2xl lg:text-3xl w-[95%] lg:w-[88%] text-center"
                    >
                        Оставьте заявку и мы рассчитаем стоимость скважины с
                        обустройством
                    </div>

                    <form
                        class="flex flex-col gap-4 w-[83%] pt-8 lg:p-8"
                        @submit.prevent="submitForm"
                    >
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Введите ваше имя"
                            v-model="callbackform.name"
                            class="h-[40px] md:h-[70px] px-4 py-2 border border-gray-300 rounded-large focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
                            required
                        />

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            v-maska
                            data-maska="+7 (###) ###-##-##"
                            placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ"
                            v-model="callbackform.phone"
                            class="h-[40px] md:h-[70px] px-4 py-2 border border-gray-300 rounded-large focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl"
                            required
                        />

                        <button
                            type="submit"
                            class="h-[40px] md:h-[70px] bg-black rounded-large text-white text-xl"
                        >
                            Перезвоните мне
                        </button>
                        <p v-if="submitted">Спасибо! Мы вам перезвоним.</p>
                    </form>
                    <div
                        v-if="!submitted"
                        class="text-ssm md:text-base lg:text-xl text-gray-light w-[88%] text-center py-6 lg:py-0 lg:pb-6"
                    >
                        Нажимая на кнопку, вы даете согласие на обработку
                        персональных данных и соглашаетесь с политикой
                        конфиденциальности
                    </div>
                </div>
            </div>
            <div
                class="flex-1 min-h-[235px] md:min-h-[515px] bg-[url('/image336.png')] bg-cover rounded-large mt-6 lg:mt-0"
            ></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const callbackform = ref({
    name: '',
    phone: '',
});
const submitted = ref(false);

async function submitForm() {
    try {
        const response = await $fetch('/api/callback', {
            method: 'POST',
            body: callbackform.value,
        });
        console.log('Success:', response);
        submitted.value = true;
    } catch (error) {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке.');
    }
}
</script>
