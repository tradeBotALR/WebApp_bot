import type {ConnectKeysRequestDTO, ConnectKeysResponseDTO} from './ConnectPageDTO';

// Мок-реализация функции запроса (эмулирует успех/ошибку)
export async function sendKeysToBackend(data: ConnectKeysRequestDTO): Promise<ConnectKeysResponseDTO> {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Пример имитации проверки: если оба ключа не пустые — успех, иначе ошибка
            if (data.accessKey.startsWith('mx') && data.secretKey.length > 16) {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: 'Неверный формат ключей!' });
            }
        }, 700); // эмулируем задержку запроса
    });
}
