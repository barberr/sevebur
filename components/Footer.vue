<template>
    <div class="container mx-auto mt-[50px]">
        <div class="bg-grey shadow-xl rounded-small">
            <div
                class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row lg:items-center justify-between p-4"
            >
                <!-- Левая часть с лого и текстом -->
                <div class="lg:ml-8 space-x-4">
                    <!-- Логотип -->
                    <div
                        class="flex flex-col justify-start items-start md:items-stretch md:items-start gap-y-4 lg:space-x-20"
                    >
                        <img
                            src="/severbur.svg"
                            alt="Logo"
                            class="md:h-8 h-6 w-1/2"
                        />
                        <span
                            class="block text-base lg:text-xl text-grey max-w-80 lg:max-w-lg"
                        >
                            Бурение и обустройство скважин на воду в
                            Санкт-Петербурге и ЛО
                        </span>
                    </div>
                </div>

                <!-- Правая часть с телефоном -->
                <div class="flex flex-col items-start lg:items-center w-76">
                    <a href="tel:+1234567890" class="md:px-4 lg:py-2">
                        <span
                            class="text-2xl lg:text-3xl text-blue font-extrabold uppercase"
                            >8 800 888-08-08</span
                        >
                    </a>
                    <span
                        class="ml-0 md:ml-10 text-base lg:text-xl font-normal text-grey"
                        >Без выходных с 9:00 до 21:00</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Логика компонента (если нужна)
</script>
