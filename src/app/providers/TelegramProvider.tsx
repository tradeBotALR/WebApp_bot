/**
 * TelegramProvider — инициализация Telegram WebApp API
 * Делает доступными методы Telegram во всём приложении
 */

import React, { useEffect, type ReactNode } from 'react';

interface TelegramProviderProps {
    children: ReactNode;
}

export const TelegramProvider: React.FC<TelegramProviderProps> = ({ children }) => {

    useEffect(() => {
        // Проверяем, доступен ли Telegram WebApp
        if (window.Telegram?.WebApp) {
            // Сообщаем Telegram, что приложение готово
            window.Telegram.WebApp.ready();
        }
    }, []);

    return <>{children}</>;
};