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

                    <form class="flex flex-col gap-4 w-[83%] pt-8 lg:p-8">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Введите ваше имя"
                            class="h-[40px] md:h-[70px] px-4 py-2 border border-gray-300 rounded-large focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Введите ваш номер"
                            class="h-[40px] md:h-[70px] px-4 py-2 border border-gray-300 rounded-large focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <button
                            type="submit"
                            class="h-[40px] md:h-[70px] bg-black rounded-large text-white text-xl"
                        >
                            Перезвоните мне
                        </button>
                    </form>
                    <div
                        class="text-ssm md:text-base lg:text-xl text-gray-light w-[88%] text-center py-6"
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
<script lang="ts"></script>
