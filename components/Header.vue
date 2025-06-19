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
                            >8 800 888-08-08</span
                        >
                    </a>
                    <span
                        class="ml-10 text-base lg:text-xl font-normal text-grey"
                        >Без выходных с 9:00 до 21:00</span
                    >
                </div>
                <div
                    class="h-[20px] w-[40px] bg-[url('/Group54.png')] bg-contain bg-no-repeat md:hidden"
                ></div>
            </div>
        </div>
    </header>
</template>

<script setup>
// Логика компонента (если нужна)
</script>
