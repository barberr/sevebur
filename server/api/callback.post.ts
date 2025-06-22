export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Пустое тело запроса',
        });
    }
    const { name, phone } = body;

    // Здесь логика отправки уведомления
    console.log('Получен запрос на обратный звонок:', { name, phone });

    // Например, отправить письмо или в Telegram
    // sendEmail({ name, phone });
    // sendTelegramMessage({ name, phone });

    return { message: 'Заявка получена', success: true };
});
