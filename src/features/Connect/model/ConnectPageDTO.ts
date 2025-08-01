// Тип пользователя, получаемого из Telegram
export interface TelegramUserDTO {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo_url?: string;
}

// Тип данных, которые отправляются на бэкенд для подключения ключей
export interface ConnectKeysRequestDTO {
    telegramId: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo_url?: string;
    accessKey: string;
    secretKey: string;
}

// Ответ от бэкенда при подключении ключей
export interface ConnectKeysResponseDTO {
    success: boolean;
    message?: string;
}
